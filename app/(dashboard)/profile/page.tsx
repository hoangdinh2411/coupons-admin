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
import UseAppStore, { StateAppStoredType } from '@/store/useAppStore';
import { updateUser } from '@/services/user.service';
import toast from 'react-hot-toast';

const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
});

type ProfileType = z.infer<typeof schema>;

function ProfileTemplate() {
  const { profile, setProfile } = UseAppStore((state) => state);

  const {
    register,
    handleSubmit,
    reset,
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
    console.log(profile);
    if (profile) {
      reset({
        first_name: profile.first_name ?? '',
        last_name: profile.last_name ?? '',
      });
    }
  }, [profile, reset]);

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
                justifyContent="center"
                alignItems={'center'}
                width={{ xs: '100%', md: '30%' }}
              >
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                  alt="User Avatar"
                  style={{
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #eee',
                  }}
                />
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
