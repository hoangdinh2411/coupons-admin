import React from 'react';
import './globals.scss';
import ToastProvider from '@/context/ToastProvider';
import InitialLoadProvider from '@/context/InitialLoadProvider';
import { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata: Metadata = {
  title: 'Couponly',
  description: 'Affiliate & Submitting Discounts Coupons',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Coupon Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="admin dashboard template, bootstrap dashboard, bootstrap next js, next js, next js typescript, next js with react, nextjs admin, nextjs app router, nextjs dashboard template, nextjs firebase, nextjs framework, nextjs react bootstrap, nextjs with bootstrap, react next js, typescript with react"
        />
      </head>
      <body suppressHydrationWarning suppressContentEditableWarning>
        <AppRouterCacheProvider>
          <InitialLoadProvider>
            {children}
            <ToastProvider />
          </InitialLoadProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
