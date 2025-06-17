"use client";

import LandingSwitcher from "@/shared/layouts-components/switcher/landing-switcher";
import React, { Fragment } from "react";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
          {children}
    </Fragment>
  );
};

export default Layout;
