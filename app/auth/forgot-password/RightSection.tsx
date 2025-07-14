import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function RightSection() {
  return (
    <Box className="col-xl-6 border rounded border-secondary border-opacity-10">
    <Box className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
      <Image
        fill
        src="/assets/images/authentication/5.png"
        alt="Reset Password"
        className="img-fluid m-auto mb-3 flex-fill mt-4"
      />
      <Box className="flex-fill text-center">
        <h6 className="mb-2">Reset Password</h6>
        <p className="mb-0 text-muted fw-normal fs-12">
          Set a strong password to keep your account secure!
        </p>
      </Box>
      <Link href="/dashboards/sales">
        <Image
          fill
          alt="logo"
          className="toggle-logo mb-4 pb-2"
          src="/assets/images/brand-logos/toggle-logo.png"
        />
      </Link>
    </Box>
  </Box>
  );
}

export default RightSection;
