"use client"

import React, { Fragment, useContext, useEffect, useState } from 'react'
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { data$, getState } from '@/shared/layouts-components/services/switcherServices';
import { Initialload } from '@/shared/layouts-components/contextapi';

const Layout = ({ children }: any) => {

    const [localVariable, setLocalVariable] = useState(getState());

    const customstyles: any = {
        ...(localVariable.colorPrimaryRgb !== '' && { '--primary-rgb': localVariable.colorPrimaryRgb }),
        ...(localVariable.bodyBg !== '' && { '--body-bg-rgb': localVariable.bodyBg }),
        ...(localVariable.bodyBg2 !== '' && { '--body-bg-rgb2': localVariable.bodyBg2 }),
        ...(localVariable.lightRgb !== '' && { '--light-rgb': localVariable.lightRgb }),
        ...(localVariable.formControlBg !== '' && { '--form-control-bg': localVariable.formControlBg }),
        ...(localVariable.gray !== '' && { '--gray-3': localVariable.gray }),
        ...(localVariable.inputBorder !== '' && { '--input-border': localVariable.inputBorder }),
    };

     const theme: any = useContext(Initialload);
     
    useEffect(() => {

        if (typeof window !== 'undefined' && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }

        const subscription = data$.subscribe((e) => {
            setLocalVariable(e);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <Fragment>
            <html
                lang={localVariable.lang || undefined}
                dir={localVariable.dir || undefined}
                data-theme-mode={localVariable.dataThemeMode || undefined}
                data-header-styles={localVariable.dataHeaderStyles || undefined}
                data-vertical-style={localVariable.dataVerticalStyle || undefined}
                data-nav-layout={localVariable.dataNavLayout || undefined}
                data-menu-styles={localVariable.dataMenuStyles || undefined}
                data-toggled={localVariable.toggled || undefined}
                data-nav-style={localVariable.dataNavStyle || undefined}
                hor-style={localVariable.horStyle || undefined}
                data-page-style={localVariable.dataPageStyle || undefined}
                data-width={localVariable.dataWidth || undefined}
                data-menu-position={localVariable.dataMenuPosition || undefined}
                data-header-position={localVariable.dataHeaderPosition || undefined}
                data-icon-overlay={localVariable.iconOverlay || undefined}
                data-bg-img={localVariable.bgImg || undefined}
                icon-text={localVariable.iconText || undefined}
                style={customstyles}
            >
                <head>
                    <title>Rixzo NextJs App-Router Typescript React Bootstrap Admin & Dashboard Template</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="keywords" content="admin dashboard template, bootstrap dashboard, bootstrap next js, next js, next js typescript, next js with react, nextjs admin, nextjs app router, nextjs dashboard template, nextjs firebase, nextjs framework, nextjs react bootstrap, nextjs with bootstrap, react next js, typescript with react"/>
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}
                </head>
                <body className={`${localVariable.body ? localVariable.body : ''}`}>
                {theme.pageloading && children}
                </body>
            </html>
        </Fragment>
    );
}

export default Layout;
