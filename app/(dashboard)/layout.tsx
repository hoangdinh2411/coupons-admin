import React, { Fragment } from 'react';
import { Metadata } from 'next';
import Loader from '@/shared/layouts-components/loader/loader';
import Header from '@/shared/layouts-components/header/header';
import Sidebar from '@/shared/layouts-components/sidebar/sidebar';
import Footer from '@/shared/layouts-components/footer/footer';
import Backtotop from '@/shared/layouts-components/backtotop/backtotop';

export const metadata: Metadata = {
  title: 'Couponly',
  description: 'Affiliate & Submitting Discounts Coupons',
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
