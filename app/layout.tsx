"use client"

import { store } from '@/shared/redux/store'
import React, { Fragment, useState } from 'react'
import "./globals.scss";
import { Provider } from 'react-redux'
import { Initialload } from '@/shared/layouts-components/contextapi';
const RootLayout = ({ children, }: any) => {

    const [pageloading, setpageloading] = useState(false)

    return (
        <Fragment>
            <Provider store={store}>
                <Initialload.Provider value={{ pageloading, setpageloading }}>
                    {children}
                </Initialload.Provider>
            </Provider>
        </Fragment>
    )
}

export default RootLayout