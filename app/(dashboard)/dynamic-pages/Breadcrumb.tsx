import { APP_ROUTE } from '@/constants/route';
import SpkBreadcrumb from '@/shared/@spk-reusable-components/reusable-uiElements/spk-breadcrumb';
import React from 'react';
import { BreadcrumbItem } from 'react-bootstrap';

function Breadcrumb() {
  return (
    <SpkBreadcrumb Customclass="mb-3">
      <BreadcrumbItem href={APP_ROUTE.DASHBOARD}>Dashboard</BreadcrumbItem>
      <BreadcrumbItem href={APP_ROUTE.DYNAMIC_PAGES}> Dynamic Pages</BreadcrumbItem>
    </SpkBreadcrumb >
  );
}

export default Breadcrumb;
