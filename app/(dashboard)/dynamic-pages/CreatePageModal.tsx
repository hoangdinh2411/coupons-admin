'use client';

import React, { useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box } from '@mui/material';
import { Modal, Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import CustomRichTextEditor from '@/shared/layouts-components/richtext-editor';

interface DynamicPagesModalPropsType {
  open: boolean;
  onClose: () => void;
}

export const schema = z.object({
  ...seoDataSchema.shape,
  name: z.string().min(1, 'Page name is required').trim(),
  description: z.string().min(1, 'Description sis required').trim(),
  about: z.string().min(1, 'Description sis required').trim(),
  image: z.object({
    file_name: z.string().trim(),
    url: z.string().trim(),
    public_id: z.string().trim(),
  }),
});

export const defaultValues = {
  ...seoDefaultValues,
  name: '',
  description: '',
  about: '',
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
};
export type DynamicPageFormData = z.infer<typeof schema>;

export default function DynamicPagesModal({
  open,
  onClose,
}: DynamicPagesModalPropsType) {
  const method = useForm<DynamicPageFormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = method;
  const {
    getFaqsValues,
    faqList,
    handleAddFaq,
    handleRemoveAccordion,
    onCreateAccordion,
    setFaqList,
  } = useFaqs();
  const { getContent, rteRef, clearAll } = useRickTextEditor();

  const { setPages, pages } = UseAppStore((state) => state);
  useEffect(() => {
    if (!open) {
      reset(defaultValues);
      clearAll();
      setFaqList([]);
    }
  }, [open]);
  const handleChangeContent = (value: string) => {
    setValue('description', value);
  };
  const onSubmit = async (data: DynamicPageFormData) => {
    const description = await getContent();
    const payload = {
      ...data,
      description,
      meta_data: {
        ...data.meta_data,
        keywords: getKeyWordsArray(data.meta_data.keywords),
      },
      faqs: getFaqsValues(),
    };

    // toast.promise(DynamicPages(payload), {
    //   loading: 'Creating...!',
    //   success: (res) => {
    //     if (res.success && res.data) {
    //       setPages([...pages, res.data]);
    //       reset(defaultValues);
    //       setFaqList([]);
    //       clearAll();
    //       refreshCacheClient({
    //         paths: [],
    //         tags: ['pages-data', 'menu-data'],
    //       });
    //       return 'Created success';
    //     } else {
    //       throw res.message;
    //     }
    //   },
    //   error: (err) => err,
    // });
  };

  if (!open) return null;
  return (
    <Modal
      centered
      show={open}
      onHide={() => {
        onClose();
      }}
      fullscreen
      keyboard={false}
      className="modal fade"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h6">Create Page</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <FormProvider {...method}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Page Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Page name"
                {...register('name')}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Box>

            {/* Description */}
            <Box className="mb-3">
              <Form.Label className="text-default fw-bold">
                Description
              </Form.Label>
              <CustomRichTextEditor
                imageFolder="pages"
                ref={rteRef}
                onBlur={handleChangeContent}
                error={Boolean(errors.description)}
                helpText={errors.description?.message}
              />
            </Box>
            <Box mb={2}>
              <Form.Label className="fw-bold text-default">Image</Form.Label>
              <Box
                display="flex"
                alignItems="flex-start"
                flexDirection={'column'}
              >
                <Box position="relative" flex={1} width={'100%'}>
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <UploadFile
                        folder="pages"
                        newFile={field.value}
                        onUploadFile={(data: ImageType[]) =>
                          field.onChange(data[0])
                        }
                        id="create-Page"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>
            <Faqs
              onAdd={onCreateAccordion}
              values={faqList}
              onChange={handleAddFaq}
              onRemove={handleRemoveAccordion}
            />
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
            <SeoForm />
            <Box display="flex" justifyContent="end" mt={4} gap={1}>
              <SpkButton Buttonvariant="primary" Buttontype="submit">
                Create
              </SpkButton>
            </Box>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}
