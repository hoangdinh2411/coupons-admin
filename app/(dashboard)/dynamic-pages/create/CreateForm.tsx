'use client';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { StorePayload } from '@/types/store.type';
import UseAppStore from '@/store/useAppStore';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';
import dynamic from 'next/dynamic';
import UploadMultiFiles from '@/shared/layouts-components/uploadFile/UploadMultiFile';

const CustomRichTextEditor = dynamic(
  () => import('../../../../shared/layouts-components/richtext-editor'),
  {
    ssr: false,
  },
);

export const schema = z.object({
  ...seoDataSchema.shape,
  type: z.string().min(1, 'Page type is required').trim(),
  content: z.string().min(1, 'Content is required').trim(),
  thumbnail: z.object({
    file_name: z.string().trim(),
    url: z.string().trim(),
    public_id: z.string().trim(),
  }),
  images: z.array(
    z.object({
      file_name: z.string().trim(),
      url: z.string().trim(),
      public_id: z.string().trim(),
    }),
  ),
  about: z.string().trim(),
});

export const defaultValues: StoreFormData = {
  ...seoDefaultValues,
  type: '',
  content: '',
  thumbnail: {
    file_name: '',
    url: '',
    public_id: '',
  },
  images: [],
  about: '',
};

export type StoreFormData = z.infer<typeof schema>;

export default function CreateForm() {
  const method = useForm<StoreFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = method;

  const { pages, setPages } = UseAppStore((state) => state);
  const { getContent, rteRef, clearAll } = useRickTextEditor();

  const {
    getFaqsValues,
    faqList,
    handleAddFaq,
    handleRemoveAccordion,
    onCreateAccordion,
    setFaqList,
  } = useFaqs();

  const handleChangeContent = (value: string) => {
    setValue('content', value);
  };

  const onSubmit = async (data: StoreFormData) => {
    const content = await getContent();
    const payload: StorePayload = {
      ...data,
      content,
      metadata: {
        ...data.metadata,
        keywords: getKeyWordsArray(data.metadata?.keywords),
      },
      faqs: getFaqsValues(),
    };
    // toast.promise(createStore(payload), {
    //   loading: 'Pending...!',
    //   success: (res) => {
    //     if (res.success && res.data) {
    //       setStores([...stores, res.data]);
    //       reset(defaultValues);
    //       clearAll();
    //       setFaqList([])
    //       refreshCacheClient({
    //         paths: [],
    //         tags: ['categories-data', 'menu-data','stores-data']
    //       })
    //       return 'Created success';
    //     }

    //     throw res.message;
    //   },
    //   error: (err) => err || 'Something wrong',
    // });
  };

  return (
    <FormProvider {...method}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Page Type */}
        <Box className="mb-3">
          <Form.Label className="fw-bold text-default">Page type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter page type"
            {...register('type')}
          />
          {errors.type && (
            <small className="text-danger">{errors.type.message}</small>
          )}
        </Box>

        {/* Content */}
        <Box className="mb-3">
          <Form.Label className="text-default fw-bold">Content</Form.Label>
          <CustomRichTextEditor
            imageFolder="pages"
            ref={rteRef}
            onBlur={handleChangeContent}
            error={Boolean(errors.content)}
            helpText={errors.content?.message}
          />
        </Box>

        {/* Thumbnail Upload */}
        <Box mb={2}>
          <Form.Label className="fw-bold text-default">Thumbnail</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'}>
            <Box position="relative" flex={1} width={'100%'}>
              <Controller
                control={control}
                name="thumbnail"
                render={({ field }) => (
                  <UploadFile
                    folder="pages"
                    newFile={field.value}
                    onUploadFile={(data: ImageType[]) =>
                      field.onChange(data[0])
                    }
                    id="create-page-thumbnail"
                  />
                )}
              />
            </Box>
          </Box>
          {errors.thumbnail && (
            <small className="text-danger">{errors.thumbnail.message}</small>
          )}
        </Box>

        {/* Images Upload */}
        <Box mb={2}>
          <Form.Label className="fw-bold text-default">Images</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'}>
            <Box position="relative" flex={1} width={'100%'}>
              <Controller
                control={control}
                name="images"
                render={({ field }) => (
                  <UploadMultiFiles
                    folder="pages"
                    files={field.value || []}
                    onUploadFile={field.onChange}
                    id="create-page-images"
                    maxFiles={10}
                    label="Choose images..."
                  />
                )}
              />
            </Box>
          </Box>
          {errors.images && (
            <small className="text-danger">{errors.images.message}</small>
          )}
        </Box>

        {/* FAQs */}
        <Faqs
          onAdd={onCreateAccordion}
          values={faqList}
          onChange={handleAddFaq}
          onRemove={handleRemoveAccordion}
        />

        {/* About */}
        <Box className="mb-3">
          <Form.Label className="fw-bold text-default">About</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter about"
            {...register('about')}
          />
          {errors.about && (
            <small className="text-danger">{errors.about.message}</small>
          )}
        </Box>

        {/* SEO Form */}
        <SeoForm />

        {/* Submit */}
        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Create Page
          </SpkButton>
        </Box>
      </Form>
    </FormProvider>
  );
}
