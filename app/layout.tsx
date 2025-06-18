import React from 'react';
import './globals.scss';
import StoreProvider from '@/shared/redux/store';
import ToastProvider from '@/context/ToastProvider';
import InitialLoadProvider from '@/context/InitialLoadProvider';
import { Metadata } from 'next';
import Switcher from '@/shared/layouts-components/switcher/switcher';
import Loader from '@/shared/layouts-components/loader/loader';
import Header from '@/shared/layouts-components/header/header';
import Sidebar from '@/shared/layouts-components/sidebar/sidebar';
import Footer from '@/shared/layouts-components/footer/footer';
import Backtotop from '@/shared/layouts-components/backtotop/backtotop';

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
        <title>Rixzo NextJs App-Router Typescript React Bootstrap Admin & Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="admin dashboard template, bootstrap dashboard, bootstrap next js, next js, next js typescript, next js with react, nextjs admin, nextjs app router, nextjs dashboard template, nextjs firebase, nextjs framework, nextjs react bootstrap, nextjs with bootstrap, react next js, typescript with react"
        />
      </head>
      <body>
        <StoreProvider>
          <InitialLoadProvider>
            <Switcher />
            <Loader />
            <div className="page">
              <Header />
              <Sidebar />
              <div className="main-content app-content">
                <div className="container-fluid px-10 ">{children}</div>
              </div>
              <Footer />
            </div>
            <Backtotop />
            <ToastProvider />
          </InitialLoadProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
