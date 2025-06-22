import SpkBreadcrumb from "@/shared/@spk-reusable-components/reusable-uiElements/spk-breadcrumb";
import React from "react";
import { BreadcrumbItem } from "react-bootstrap";

function Breadcrumb() {
  return (
    <SpkBreadcrumb Customclass="">
      <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="/profile">Profile</BreadcrumbItem>
    </SpkBreadcrumb>
  );
}

export default Breadcrumb;
