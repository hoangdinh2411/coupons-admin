"use client";

import { store } from "@/shared/redux/store";
import React, { Fragment, useState } from "react";
import "./globals.scss";
import { Provider } from "react-redux";
import { Initialload } from "@/shared/layouts-components/contextapi";
import useAppStore from "@/store/useAppStore";
import { LinearProgress } from "@mui/material";
import { ToastProvider } from "@/context/ToastProvider";
const RootLayout = ({ children }: any) => {
  const [pageloading, setpageloading] = useState(false);
  const { appLoading } = useAppStore.getState();
  return (
    <Fragment>
      <Provider store={store}>
        <Initialload.Provider value={{ pageloading, setpageloading }}>
          {appLoading && <LinearProgress />}
          {children}
        </Initialload.Provider>
      </Provider>
    </Fragment>
  );
};

export default RootLayout;
