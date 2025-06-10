"use client"

import Link from 'next/link'
import React, { Fragment } from 'react'

const Footer = () => {

  let currentYear = new Date().getFullYear();

  return (

    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year"> {currentYear} </span>
            <Link href="#!" scroll={false} className="text-dark fw-medium">Rixzo</Link>. Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link href="https://spruko.com/" scroll={false} target='_blank' >
              <span className="fw-medium text-primary text-decoration-underline">Spruko</span>
            </Link>. All rights reserved </span>
        </div>
      </footer>
    </Fragment>

  )
}

export default Footer;