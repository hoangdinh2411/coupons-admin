'use client';

import React, { useEffect, memo } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Form, CloseButton } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { CategoryFormData, schema } from './CreateCategoryModal';
import { Box, Paper } from '@mui/material';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import { CategoryData } from '@/types/category.type';
import UseAppStore from '@/store/useAppStore';
import toast from 'react-hot-toast';
import { updateCategory } from '@/services/category.service';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import CustomRichTextEditor from '@/shared/layouts-components/richtext-editor';

interface UpdateCategoryModalProps {
  item: CategoryData | null;
  open: boolean;
  onClose: () => void;
}

function UpdateCategoryModal({
  item,
  open,
  onClose,
}: UpdateCategoryModalProps) {
  const { getFaqsValues, faqList, handleAddFaq, handleRemoveAccordion, onCreateAccordion, setFaqList } = useFaqs()
  const { setCategory, categories } = UseAppStore((state) => state);
  const method = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
  });
  const { getContent, rteRef, setContent } = useRickTextEditor();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = method;

  useEffect(() => {
    if (item) {
      console.log(item.faqs)

      reset({
        ...item,
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),
        },
      });
      setContent(item.description)
      setFaqList(item.faqs ? item.faqs.map(({ question, answer }, index) => ({
        id: index,
        question,
        answer
      })) : [])
    }
  }, [item]);
  const onSubmit = async (data: CategoryFormData) => {
    if (item) {
      const description = await getContent();
      const payload = {
        ...data,
        description,
        meta_data: {
          ...data.meta_data,
          keywords: getKeyWordsArray(data.meta_data?.keywords),
        },
        faqs: getFaqsValues()
      };
      toast.promise(updateCategory(item?.id, payload), {
        loading: 'Updating...!',
        success: (res) => {
          if (res.success && res.data) {
            setCategory(
              categories.map((cat) =>
                cat.id === item?.id ? { ...cat, ...res.data } : cat,
              ),
            );
            return 'Updated success';
          }
          throw res.message;
        },
        error: (err) => err || 'Something wrong',
      });
    }
  };
  const handleChangeContent = (value: string) => {
    setValue('description', value);
  };
  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      fullscreen
      aria-labelledby="update-category-modal"
      aria-describedby="modal-to-update-category"
    >
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title as="h6">Update Category</Modal.Title>
        <CloseButton onClick={onClose} aria-label="close" />
      </Modal.Header>
      <Modal.Body className='px-4'>
        <FormProvider {...method}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Category Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                {...register('name')}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Box>
            <Box className="mb-3">
              <Form.Label className="text-default fw-bold">Description</Form.Label>
              <CustomRichTextEditor
                imageFolder="stores"
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
                        folder="categories"
                        newFile={field.value}
                        onUploadFile={(data: ImageType[]) =>
                          field.onChange(data[0])
                        }
                        id="update-category"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>
            <Faqs onAdd={onCreateAccordion} values={faqList} onChange={handleAddFaq} onRemove={handleRemoveAccordion} />

            <SeoForm />
            <Box display="flex" justifyContent="end" mt={4} gap={1}>
              <SpkButton Buttonvariant="primary" Buttontype="submit">
                Update
              </SpkButton>
              <SpkButton
                Buttonvariant="primary-light"
                Buttontype="button"
                onClickfunc={onClose}
              >
                Cancel
              </SpkButton>
            </Box>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}

export default memo(UpdateCategoryModal);
