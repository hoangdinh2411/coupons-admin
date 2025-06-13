import SpkBreadcrumb from "@/shared/@spk-reusable-components/reusable-uiElements/spk-breadcrumb";
import React from "react";
import { BreadcrumbItem } from "react-bootstrap";

function Breadcrumb() {
  return (
    <SpkBreadcrumb Customclass="mb-3">
      <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="/categories">Category</BreadcrumbItem>
    </SpkBreadcrumb>
  );
}

export default Breadcrumb;
