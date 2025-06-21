'use client';
import React, { useContext, useEffect, useState } from 'react';
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { getState } from '@/shared/layouts-components/services/switcherServices';
import useAppStore from '@/store/useAppStore';
import { LinearProgress } from '@mui/material';
import { createContext } from 'react';
import { usePathname } from 'next/navigation';
const Initialload = createContext<any>(null);

const InitialLoadProvider = ({ children }: { children: React.ReactNode }) => {
  const [localVariable, setLocalVariable] = useState(getState());
  const [pageloading, setpageloading] = useState(false);
  const { appLoading, toggleAppLoading } = useAppStore((state) => state);
  const pathname = usePathname();
  const customstyles: any = {
    ...(localVariable.colorPrimaryRgb !== '' && {
      '--primary-rgb': localVariable.colorPrimaryRgb,
    }),
    ...(localVariable.bodyBg !== '' && {
      '--body-bg-rgb': localVariable.bodyBg,
    }),
    ...(localVariable.bodyBg2 !== '' && {
      '--body-bg-rgb2': localVariable.bodyBg2,
    }),
    ...(localVariable.lightRgb !== '' && {
      '--light-rgb': localVariable.lightRgb,
    }),
    ...(localVariable.formControlBg !== '' && {
      '--form-control-bg': localVariable.formControlBg,
    }),
    ...(localVariable.gray !== '' && { '--gray-3': localVariable.gray }),
    ...(localVariable.inputBorder !== '' && {
      '--input-border': localVariable.inputBorder,
    }),
  };
  useEffect(() => {}, []);
  const theme: any = useContext(Initialload);

  useEffect(() => {
    if (appLoading) {
      toggleAppLoading(false);
    }
  }, [pathname]);
  useEffect(() => {
    const htmlEl = document.documentElement;

    if (!htmlEl) return;

    htmlEl.lang = localVariable.lang || '';
    htmlEl.dir = localVariable.dir || '';
    htmlEl.style = customstyles;
    // htmlEl.style = customstyles;
    const attributes = {
      'data-theme-mode': localVariable.dataThemeMode,
      'data-header-styles': localVariable.dataHeaderStyles,
      'data-vertical-style': localVariable.dataVerticalStyle,
      'data-nav-layout': localVariable.dataNavLayout,
      'data-menu-styles': localVariable.dataMenuStyles,
      'data-toggled': localVariable.toggled,
      'data-nav-style': localVariable.dataNavStyle,
      'hor-style': localVariable.horStyle,
      'data-page-style': localVariable.dataPageStyle,
      'data-width': localVariable.dataWidth,
      'data-menu-position': localVariable.dataMenuPosition,
      'data-header-position': localVariable.dataHeaderPosition,
      'data-icon-overlay': localVariable.iconOverlay,
      'data-bg-img': localVariable.bgImg,
      'icon-text': localVariable.iconText,
    };

    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined) {
        htmlEl.setAttribute(key, value);
      } else {
        htmlEl.removeAttribute(key); // clean up if undefined
      }
    });

    // Set inline style if needed
    if (localVariable.customstyles) {
      Object.assign(htmlEl.style, localVariable.customstyles);
    }

    if (localVariable.body && typeof localVariable.body === 'string') {
      const body = document.body;
      if (body) {
        body.classList?.add(localVariable.body || '');
      }
      // Optional: Cleanup when component unmounts or value changes
      return () => {
        body.classList.remove(localVariable.body);
      };
    }
  }, [localVariable]);
  return (
    <Initialload.Provider value={{ pageloading, setpageloading }}>
      {appLoading && <LinearProgress />}
      {children}
    </Initialload.Provider>
  );
};

export default InitialLoadProvider;
