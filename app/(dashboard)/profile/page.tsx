'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, Form } from 'react-bootstrap';
import { Box } from '@mui/material';

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Seo from '@/shared/layouts-components/seo/seo';
import Breadcrumb from './Breadcrumb';
import UseAppStore from '@/store/useAppStore';
import { updateUser } from '@/services/user.service';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { validateFile } from '@/helper/file';
import { uploadFile } from '@/services/file.service';

const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  description: z.string(),
  linkedin: z.string(),
  youtube: z.string(),
  facebook: z.string(),
  instagram: z.string(),
});


type ProfileType = z.infer<typeof schema>;

function ProfileTemplate() {
  const { profile, setProfile } = UseAppStore((state) => state);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ProfileType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ProfileType) => {
    toast.promise(updateUser(data), {
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          setProfile({
            ...profile,
            ...res.data,
          });
          return 'Updated success';
        }
        throw res.message;
      },
      error: (err) => err || 'Something wrong',
    });
  };

  //TODO: GET PROFILE
  useEffect(() => {
    if (profile) {
      reset({
        first_name: profile.first_name ?? '',
        last_name: profile.last_name ?? '',
        description: profile.description ?? '',
        linkedin: profile.linkedin ?? '',
        youtube: profile.youtube ?? '',
        instagram: profile.instagram ?? '',
        facebook: profile.facebook ?? '',
      });
    }
  }, [profile, reset]);

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && e.target.files;
    if (files) {
      let isValid;
      isValid = validateFile(files[0]);
      if (isValid) {
        const formData = new FormData();
        for (let index = 0; index < files.length; index++) {
          formData.append('files', files[index]);
        }
        formData.append('folder', 'users');
        let new_image = {
          public_id: '',
          file_name: '',
          url: ''
        }
        const fileRes = await uploadFile(formData)
        if (!fileRes.success && fileRes.message) {
          toast.error(fileRes.message)
        }
        if (!fileRes.data) {
          toast.error('Missing data on response')
        }
        if (fileRes.data) {
          const values = getValues()
          const res = await updateUser({
            ...values,
            avatar: fileRes.data[0]
          })
          if (res.success && res.data) {
            setProfile(res.data)
            toast.success('Uploaded avatar')
          } else {
            toast.error(res.message ?? 'cannot upload avatar')
          }
        }

      }
      // try {
      //   const encodedFile = await encodeFileToBase64(file);
      //   if (error) {
      //     setError('');
      //   }
      //   const data = {
      //     filename: file.name,
      //     type: file.type,
      //     data: encodedFile,
      //   };
      //   onUploadFile({
      //     ...data,
      //     data: decodeBase64(data),
      //   });
      //   e.target.value = '';
      // } catch (error) {
      //   if (typeof error === 'string') {
      //     setError(error as string);
      //   }
      //   console.log(error);
      // }
    }
    e.target.value = ''
  };
  return (
    <Fragment>
      <Seo title="Pages-Profile" />
      <Box>
        <Card className="p-4 shadow-sm rounded-3">
          <Card.Title className="fs-6 mb-3">
            <Box justifyContent={'space-between'} display={'flex'}>
              <h6 className="mb-0">Personal Info</h6>
              <Breadcrumb />
            </Box>
          </Card.Title>

          <Card.Body>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              gap={4}
            >
              <Box
                flexShrink={0}
                display="flex"
                flexDirection={'column'}
                justifyContent="flex-start"
                alignItems={'center'}
                width={{ xs: '100%', md: '30%' }}
              >
                <Image
                  src={profile?.avatar?.url ?? '/assets/images/logo/logo-icon-green.png'}
                  alt="User Avatar"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'contain',
                    border: '2px solid #eee',
                  }}
                />

                <label htmlFor='avatar' className='p-2 mt-2 bg-primary text-white' style={{
                  borderRadius: '4px'
                }}>
                  Upload avatar
                  <input id="avatar" type='file' hidden multiple={false}
                    onChange={handleSelectFile}
                    accept="image/*" />
                </label>
              </Box>
              <Box flex={1}>
                <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      defaultValue={profile?.email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      isInvalid={!!errors.first_name}
                      {...register('first_name')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.first_name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      isInvalid={!!errors.last_name}
                      {...register('last_name')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.last_name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description"
                      isInvalid={!!errors.description}
                      {...register('description')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter facebook"
                      isInvalid={!!errors.facebook}
                      {...register('facebook')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.facebook?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter instagram"
                      isInvalid={!!errors.instagram}
                      {...register('instagram')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.instagram?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Youtube</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter youtube"
                      isInvalid={!!errors.youtube}
                      {...register('youtube')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.youtube?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter linkedin"
                      isInvalid={!!errors.linkedin}
                      {...register('linkedin')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.linkedin?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <SpkButton Customclass="mt-3">Update Profile</SpkButton>
                </Form>
              </Box>
            </Box>
          </Card.Body>
        </Card>
      </Box>
    </Fragment>
  );
}

export default ProfileTemplate;
