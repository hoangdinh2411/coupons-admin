"use client"

import SpkAccordions from '@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions'
import SpkPriceCard from '@/shared/@spk-reusable-components/reusable-pages/spk-pricecard'
import SpkSwiperJs from '@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs'
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import { Accountsetiing, Privacydata } from '@/shared/data/pages/faqsdata'
import { Features, LandingCards, services, Services, Servicescard, TeamMembers } from '@/shared/data/pages/landingdata'
import { Plans, YearlyPricings } from '@/shared/data/pages/pricingdata'
import { Landingreview } from '@/shared/data/pages/reviewsdata'
import { data$, getState, setState } from '@/shared/layouts-components/services/switcherServices'
import LandingSwitcher from '@/shared/layouts-components/switcher/landing-switcher'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap'

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {

  let [variable, setVariable] = useState(getState());

  useEffect(() => {
    const subscription = data$.subscribe((e) => {
      setVariable(e);
    });

    return () => subscription.unsubscribe();
  }, []);

  //MenuClose Function
  const overlayElementRef: any = useRef(null);

  function menuClose() {
    if (window.innerWidth <= 992) {
      const newState = {
        toggled: "close"
      }
      setState(newState);
    }
    if (overlayElementRef.current) {
      overlayElementRef.current?.classList.remove("active");
    }
  }
  //ToggleNavigation Function

  const Datawidth = window.innerWidth
  function toggleNavigation() {
    if (Datawidth <= 992) {
      const currentToggled = variable
      const newState = {
        toggled: currentToggled === 'open' ? 'close' : 'open',
        dataNavLayout: "horizontal",
      };
      setState(newState);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', toggleNavigation);
    return () => {
      window.removeEventListener('resize', toggleNavigation);
    };
  }, []);

  useEffect(() => {

    const newState = {
      dataNavStyle: "menu-click",
      dataNavLayout: "horizontal",
      dataMenuStyles: "",
      dataVerticalStyle: "",
      dataWidth: "",
      dataHeaderStyles: '',

    }
    setState(newState);

    return () => {
      const newState = {
        dataNavStyle: "",
        dataVerticalStyle: "",
        dataNavLayout: `${localStorage.rixzoLayout == "horizontal" ? "horizontal" : "vertical"}`,
        dataMenuStyles: 'dark'
      }
      setState(newState)
    }

  }, [])

  useEffect(() => {
    window.addEventListener('resize', menuClose);
    return () => {
      window.removeEventListener('resize', menuClose);
    };
  }, []);

  //Handle Function
  useEffect(() => {
    function handleResize() {


      if (window.innerWidth <= 992) {
        const newState = {
          toggled: 'open',
          dataNavLayout: 'horizontal'
        }
        setState(newState)
      }
      else {
        const newState = {
          toggled: 'close',
          dataNavLayout: 'horizontal'
        }
        setState(newState)
        console.log(newState, "newState")
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const landingpages = () => {
      if (window.scrollY > 30 && documentSelector(".app-sidebar")) {
        let Scolls = document?.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.add("sticky-pin");
        });
      } else {
        let Scolls = document?.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.remove("sticky-pin");
        });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", landingpages);
    }
  });

  function handleClick1() {
    setExpande(false);
    setExpande1(false);
    setExpande2(false);
    const newState = {
      toggled: 'close',
      dataNavLayout: 'horizontal'
    }
    setState(newState)
  }

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }

  // State hooks for menu expansion
  const [expande, setExpande] = useState(false);
  const [expande1, setExpande1] = useState(false);
  const [expande2, setExpande2] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const documentSelector = (selector: string) => document.querySelector<HTMLElement>(selector);
  const documentSelectors = (selector: string) => document.querySelectorAll<HTMLElement>(selector);


  useEffect(() => {
    // Check localStorage for initial state
    if (localStorage.getItem('data-menu-styles') === 'light') {
      documentSelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }, []);

  const toggleExpand = () => {
    setExpande(!expande);
    // Ensure you're only setting light theme once
    if (localStorage.getItem('data-menu-styles') === 'light') {
      documentSelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  };

  const handleSubMenuToggle1 = () => setExpande1(!expande1);
  const handleSubMenuToggle2 = () => setExpande2(!expande2);

  //  switcher offcanvas

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const location = document.getElementById(target.substring(1))?.offsetTop;
    if (location !== undefined) {
      window.scrollTo({
        left: 0,
        top: location - 64,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    const pageLinks = documentSelectors(".side-menu__item");
    pageLinks.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    return () => {
      pageLinks.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const onScroll = () => {
    const sections = documentSelectors(".side-menu__item");
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      (documentSelector("body")?.scrollTop || 0);

    sections.forEach((elem) => {
      const value = elem.getAttribute("href") ?? "";
      const fragmentIndex = value.indexOf("#");
      const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

      if (fragment) {
        const refElement = document.getElementById(fragment);

        if (refElement) {
          const scrollTopMinus = scrollPos + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (

    <Fragment>

      {/* <!-- app-header --> */}
      <header className="app-header">

        {/* <!-- Start::main-header-container --> */}
        <div className="main-header-container container-fluid">

          {/* <!-- Start::header-content-left --> */}
          <div className="header-content-left">

            {/* <!-- Start::header-element --> */}
            <div className="header-element">
              <div className="horizontal-logo">
                <Link scroll={false} href="/dashboards/sales" className="header-logo">
                  <Image fill src="../assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                  <Image fill src="../assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
                </Link>
              </div>
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className="header-element">
              {/* <!-- Start::header-link --> */}
              <Link scroll={false} href="#!" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleNavigation()}>
                <span className="open-toggle">
                  <i className="ri-menu-3-line fs-20"></i>
                </span>
              </Link>
              {/* <!-- End::header-link --> */}
            </div>
            {/* <!-- End::header-element --> */}

          </div>
          {/* <!-- End::header-content-left --> */}

          {/* <!-- Start::header-content-right --> */}
          <div className="header-content-right">

            {/* <!-- Start::header-element --> */}
            <div className="header-element align-items-center">
              {/* <!-- Start::header-link|switcher-icon --> */}
              <div className="btn-list d-lg-none d-flex">
                <Link scroll={false} href="/authentication/sign-up/basic" className="btn btn-success-light">
                  Sign Up
                </Link>
                <SpkButton Buttonvariant='primary' onClickfunc={handleShow} Customclass="btn-icon switcher-icon d-flex align-items-center justify-content-center rounded-circle" data-bs-toggle="offcanvas"
                  data-bs-target="#switcher-canvas">
                  <i className="ri-settings-3-line"></i>
                </SpkButton>
                <LandingSwitcher show={show} handleClose={handleClose} />
              </div>
              {/* <!-- End::header-link|switcher-icon --> */}
            </div>
            {/* <!-- End::header-element --> */}

          </div>
          {/* <!-- End::header-content-right --> */}

        </div>
        {/* <!-- End::main-header-container --> */}

      </header>
      {/* <!-- /app-header --> */}
      <div id="responsive-overlay" ref={overlayElementRef} onClick={() => menuClose()}></div>
      <aside className="app-sidebar sticky" id="sidebar">

        <div className="container-xl">
          {/* <!-- Start::main-sidebar --> */}
          <div className="main-sidebar shadow-none">

            {/* <!-- Start::nav --> */}
            <nav className="main-menu-container nav nav-pills sub-open">
              <div className="landing-logo-container">
                <div className="horizontal-logo">
                  <Link scroll={false} href="/dashboards/sales" className="header-logo">
                    <Image fill src="../assets/images/brand-logos/desktop-logo.png" alt="logo"
                      className="desktop-logo" />
                    <Image fill src="../assets/images/brand-logos/desktop-white.png" alt="logo"
                      className="desktop-white" />
                  </Link>
                </div>
              </div>
              <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg></div>
              <ul className="main-menu ms-auto">
                {/* <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} className="side-menu__item" href="#home">
                    <span className="side-menu__label">Home</span>
                  </Link>
                </li>
                {/* <!-- End::slide --> */}
                {/* <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} href="#about" className="side-menu__item">
                    <span className="side-menu__label">About</span>
                  </Link>
                </li>
                {/* <!-- End::slide --> */}
                <li className={`slide has-sub ${expande ? 'open' : ''} `}>
                  <Link scroll={false} href="#!" className={`side-menu__item ${expande ? 'active' : ''} ${isActive ? 'active' : ''}`} onClick={toggleExpand} >
                    <span className="side-menu__label me-2">More</span>
                    <i className="fe fe-chevron-right side-menu__angle op-8"></i>
                  </Link>
                  <ul className={`slide-menu child1 ${expande ? 'active' : ''}`}
                    style={{ display: expande ? 'block' : 'none' }}
                  >
                    <li className="slide">
                      <Link scroll={false} href="#services" className="side-menu__item">Services</Link>
                    </li>
                    <li className="slide">
                      <Link scroll={false} href="#expectations" className="side-menu__item">Expectations</Link>
                    </li>
                    <li className="slide">
                      <Link scroll={false} href="#features" className="side-menu__item">Features</Link>
                    </li>
                    <li className={`slide has-sub ${expande1 ? 'open' : ''}`}>
                      <Link scroll={false} href="#!" className="side-menu__item" onClick={handleSubMenuToggle1} >Level-2
                        <i className="fe fe-chevron-right side-menu__angle"></i></Link>
                      <ul className={`slide-menu child2 ${expande1 ? 'active' : ''}`}
                        style={{ display: expande1 ? 'block' : 'none' }}>
                        <li className="slide">
                          <Link scroll={false} href="#!" className="side-menu__item">Level-2-1</Link>
                        </li>
                        <li className={`slide has-sub ${expande2 ? 'open' : ''}`}>
                          <Link scroll={false} href="#!" className="side-menu__item" onClick={handleSubMenuToggle2} >Level-2-2
                            <i className="fe fe-chevron-right side-menu__angle"></i></Link>
                          <ul className={`slide-menu child3 ${expande2 ? 'active' : ''}`}
                            style={{ display: expande2 ? 'block' : 'none' }}>
                            <li className="slide">
                              <Link scroll={false} href="#!"
                                className="side-menu__item">Level-2-2-1</Link>
                            </li>
                            <li className="slide has-sub">
                              <Link scroll={false} href="#"
                                className="side-menu__item">Level-2-2-2</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} href="#team" className="side-menu__item">
                    <span className="side-menu__label">Team</span>
                  </Link>
                </li>
                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} href="#pricing" className="side-menu__item">
                    <span className="side-menu__label">Pricing</span>
                  </Link>
                </li>
                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} href="#faqs" className="side-menu__item">
                    <span className="side-menu__label">FAQ's</span>
                  </Link>
                </li>
                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} href="#testimonials" className="side-menu__item">
                    <span className="side-menu__label">Testimonials</span>
                  </Link>
                </li>
                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                <li className="slide">
                  <Link scroll={false} href="#contact" className="side-menu__item">
                    <span className="side-menu__label">Contact Us</span>
                  </Link>
                </li>
                {/* <!-- End::slide --> */}

              </ul>
              <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                </path>
              </svg></div>
              <div className="d-lg-flex d-none">
                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                  <Link scroll={false} href="/authentication/sign-up/basic" className="btn btn-wave btn-success rounded-pill btn-w-md">
                    Sign Up
                  </Link>
                  <SpkButton Buttonvariant='primary' onClickfunc={handleShow} Customclass="btn-icon switcher-icon d-flex rounded-circle align-items-center justify-content-center" Buttontoggle="offcanvas"
                    Buttontarget="#switcher-canvas">
                    <i className="ri-settings-3-line"></i>
                  </SpkButton>
                </div>
              </div>
            </nav>
            {/* <!-- End::nav --> */}

          </div>
          {/* <!-- End::main-sidebar --> */}
        </div>

      </aside>
      <div className="main-content landing-main px-0" onClick={handleClick1}>

        {/* <!-- Start:: Section-1 --> */}
        <div className="landing-banner" id="home">
          <section className="section main-banner-section">
            <div className="container main-banner-container pb-lg-0">
              <Row className="pt-xl-3">
                <Col xxl={7} xl={7} lg={7} md={8}>
                  <div className="banner-content">
                    <p className="fs-14 fw-medium text-success mb-3">
                      <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Optimized and Accessible</span>
                    </p>
                    <h6 className="landing-banner-heading mb-3 text-fixed-white">Simplify Your Design with the <span className="fw-semibold text-warning">Rixzo</span> Template for Unique Needs.</h6>
                    <div className="fs-16 mb-5 text-fixed-white op-7">Discover an intuitive admin template crafted for efficiency, featuring a sleek and modern interface that streamlines management tasks and boosts productivity.</div>
                    <Link scroll={false} href="/dashboards/sales" className="m-1 btn btn-lg rounded-pill px-4 bg-success text-fixed-white">
                      View Demos
                      <i className="ri-eye-line ms-2 align-middle"></i>
                    </Link>
                    <Link scroll={false} href="/dashboards/sales" className="m-1 btn btn-lg rounded-pill px-4 btn-primary btn-wave waves-effect waves-light">
                      Learn More
                      <i className="ri-arrow-right-line ms-2 align-middle"></i>
                    </Link>
                  </div>
                </Col>
                <Col xxl={5} xl={5} lg={5} md={4} className=" my-auto">
                  <div className="text-end landing-main-image landing-heading-img">
                    <Image fill src="../assets/images/media/media-72.png" alt="" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
        {/* <!-- End:: Section-1 --> */}

        {/* <!-- Start:: Section-2 --> */}
        <section className="section" id="about">
          <div className="container position-relative">
            <div className="text-center">
              <p className="fs-14 fw-medium text-success mb-1">
                <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Overview</span>
              </p>
              <h4 className="fw-semibold mb-1 mt-3">Why Choose Us?</h4>
              <Row className="justify-content-center">
                <Col xl={7}>
                  <p className="text-muted fs-14 mb-5 fw-normal">Our mission is to empower you to reach your goals through innovative solutions and dedicated support.</p>
                </Col>
              </Row>
            </div>
            <Row>
              {LandingCards.map((card, index) => (
                <Col xl={3} key={index}>
                  <Card className={`custom-card landing-first-cards ${card.borderColorClass} ${card.borderOpacityClass} shadow-none`}>
                    <Card.Body>
                      <div className="mb-4">
                        <span className={`avatar avatar-lg ${card.iconColorClass} avatar-rounded border-3 border border-opacity-50 border-${card.borderColorClass}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className={card.iconClass} width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"></path>
                          </svg>
                        </span>
                      </div>
                      <h6 className="fw-semibold">{card.title}</h6>
                      <h6 className="fw-semibold">{card.subtitle}</h6>
                      <p className="text-muted">{card.description}</p>
                      <Link href="#!" scroll={false} className={`fw-semibold ${card.textColorClass}`}>
                        {card.linkText}
                        <i className="ti ti-arrow-narrow-right ms-1 fs-16 lh-1 align-middle d-inline-block rtl-icon-transform"></i>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-2 --> */}

        {/* <!-- Start:: Section-3 --> */}
        <section className="section bg-white overflow-hidden" id="expectations">
          <div className="container">
            <Row className="gx-5 mx-0 align-items-end">
              <Col xl={5} className="d-none d-xl-block">
                <div className="home-proving-image rounded-3 border border-primary border-opacity-25">
                  <Image fill src="../assets/images/media/media-80.png" alt="" className="img-fluid about-image" />
                </div>
                <div className="proving-pattern-1"></div>
              </Col>
              <Col xl={7} className="my-auto">
                <div className="heading-section text-start mb-4">
                  <p className="fs-14 fw-medium text-success mb-1">
                    <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>About Us</span>
                  </p>
                  <h4 className="mt-3 fw-semibold mb-2">Our Commitment to Excellence</h4>
                  <div className="heading-description fs-14">Welcome to rixzo, where our commitment transcends mere words; it forms the foundation of all our endeavors. We strive for excellence in every interaction, project, and outcome, ensuring they reflect our dedication to quality.</div>
                </div>
                <Row className="gy-4 mb-0">
                  {Features.map((feature) => (
                    <Col key={feature.id} xl={12}>
                      <div className="d-flex align-items-top">
                        <div className={`avatar avatar-lg bg-${feature.colorClass}-transparent avatar-rounded border-3 border border-opacity-50 border-${feature.colorClass} me-2 flex-shrink-0`}>
                          {feature.number}
                        </div>
                        <div>
                          <span className="fs-14">
                            <strong>{feature.title}:</strong> {feature.description}
                          </span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        {/* <!-- End:: Section-3 --> */}

        {/* <!-- Start:: Section-4 --> */}
        <section className="section section-bg" id="services">
          <div className="container my-4">
            <Row>
              <Col xl={8}>
                <Row>
                  <Col xl={4}>
                    {Services.map((service) => (
                      <Card key={service.id} className="custom-card">
                        <Card.Body>
                          <div className="mb-3">
                            <div className="d-flex gap-3 align-items-center">
                              <div className={`border border-2 border-${service.colorClass} border-opacity-10 bg-${service.colorClass}-transparent rounded-4`}>
                                <div className="p-1 bg-white rounded-circle border">
                                  <span className={`avatar avatar-md avatar-rounded bg-${service.colorClass}`}>
                                    {service.icon}
                                  </span>
                                </div>
                              </div>
                              <h5 className="fw-semibold mb-0">{service.title}</h5>
                            </div>
                          </div>
                          <p className="text-muted">{service.description}</p>
                          <Link href={service.link} scroll={false} className={`fw-semibold text-${service.colorClass}`}>
                            Read More
                            <i className="ti ti-arrow-narrow-right ms-1 fs-16 lh-1 align-middle d-inline-block rtl-icon-transform"></i>
                          </Link>
                        </Card.Body>
                      </Card>
                    ))}
                  </Col>
                  <Col xl={4}>
                    {Servicescard.map((service) => (
                      <Card key={service.id} className={`custom-card ${service.id === 1 ? "mt-xl-4" : ""}`}>
                        <Card.Body>
                          <div className="mb-3">
                            <div className="d-flex gap-3 align-items-center">
                              <div className={`border border-2 border-${service.colorClass} border-opacity-10 bg-${service.colorClass}-transparent rounded-4`}>
                                <div className="p-1 bg-white rounded-circle border">
                                  <span className={`avatar avatar-md avatar-rounded bg-${service.colorClass}`}>
                                    {service.icon}
                                  </span>
                                </div>
                              </div>
                              <h5 className="fw-semibold mb-0">{service.title}</h5>
                            </div>
                          </div>
                          <p className="text-muted">{service.description}</p>
                          <Link href={service.link} scroll={false} className={`fw-semibold text-${service.colorClass}`}>
                            Read More
                            <i className="ti ti-arrow-narrow-right ms-1 fs-16 lh-1 align-middle d-inline-block rtl-icon-transform"></i>
                          </Link>
                        </Card.Body>
                      </Card>
                    ))}
                  </Col>
                  <Col xl={4}>
                    {services.map((service, index) => (
                      <Card key={service.id} className={`custom-card ${index === 0 ? "mt-xl-5" : ""}`}>
                        <Card.Body>
                          <div className="mb-3">
                            <div className="d-flex gap-3 align-items-center">
                              <div className={`border border-2 border-${service.colorClass} border-opacity-10 bg-${service.colorClass}-transparent rounded-4`}>
                                <div className="p-1 bg-white rounded-circle border">
                                  <span className={`avatar avatar-md avatar-rounded bg-${service.colorClass}`}>
                                    {service.icon}
                                  </span>
                                </div>
                              </div>
                              <h5 className="fw-semibold mb-0">{service.title}</h5>
                            </div>
                          </div>
                          <p className="text-muted">{service.description}</p>
                          <Link href={service.link} scroll={false} className={`fw-semibold text-${service.colorClass}`}>
                            Read More
                            <i className="ti ti-arrow-narrow-right ms-1 fs-16 lh-1 align-middle d-inline-block rtl-icon-transform"></i>
                          </Link>
                        </Card.Body>
                      </Card>
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col xl={4} className='service-card'>
                <div className="heading-section text-end mb-4">
                  <p className="fs-14 fw-medium text-success mb-1">
                    <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Our Services</span>
                  </p>
                  <h4 className="mt-3 fw-semibold mb-2">Explore Our Premier Services</h4>
                  <div className="heading-description fs-14 mb-3">Welcome to rixzo, where our commitment goes beyond mere words; its the foundation of everything we do. We are dedicated.</div>
                  <Link href="#!" scroll={false} className="btn btn-wave btn-secondary rounded-pill">
                    Get started Now
                  </Link>
                </div>
                <Image fill src="../assets/images/media/media-79.png" alt="" className="img-fluid ps-5 d-none d-xl-block" />
              </Col>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-4 --> */}

        {/* <!-- Start:: Section-5 --> */}
        <section className="section landing-Features" id="features">
          <div className="container">
            <Row className="justify-content-center">
              <Col xl={8}>
                <div className="heading-section text-center mb-0">
                  <p className="fs-14 fw-medium text-success mb-1">
                    <span className="landing-section-heading landing-section-heading-dark text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Features</span>
                  </p>
                  <h4 className="text-fixed-white text-center mt-3 fw-medium">Key Features of Our Services</h4>
                  <div className="fs-14 text-fixed-white text-center op-8 mb-4">Discover the unique features that set us apart, designed to enhance your experience and deliver exceptional value.</div>
                </div>
              </Col>
              <div className="col-xl-10 my-auto">
                <div
                  className="d-flex align-items-center justify-content-center trusted-companies sub-card-companies flex-wrap mb-3 mb-xl-0 gap-4">
                  <div className="trust-img"><Image fill src="../assets/images/media/landing/web/1.png" alt="img" className="border-0 shadow-sm" /></div>
                  <div className="trust-img"><Image fill src="../assets/images/media/landing/web/2.png" alt="img" className="border-0 shadow-sm" /></div>
                  <div className="trust-img"><Image fill src="../assets/images/media/landing/web/4.png" alt="img" className="border-0 shadow-sm" /></div>
                  <div className="trust-img"><Image fill src="../assets/images/media/landing/web/5.png" alt="img" className="border-0 shadow-sm" /></div>
                  <div className="trust-img"><Image fill src="../assets/images/media/landing/web/3.png" alt="img" className="border-0 shadow-sm" /></div>
                </div>
              </div>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-5 --> */}

        {/* <!-- Start:: Section-6 --> */}
        <section className="section" id="team">
          <div className="container">
            <div className="text-center">
              <p className="fs-14 fw-medium text-success mb-1">
                <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Our Team</span>
              </p>
              <h4 className="fw-semibold mt-3 mb-2">Meet the Dedicated Individuals Behind Our Success</h4>
              <Row className="justify-content-center">
                <Col xl={7}>
                  <p className="text-muted fs-14 mb-5 fw-normal">Our team comprises talented professionals who are committed to excellence and passionate about driving results.</p>
                </Col>
              </Row>
            </div>
            <Row>
              {TeamMembers.map((member, index) => (
                <Col key={member.id} xl={3} lg={3} md={6} sm={6} className="col-12">
                  <Card className="custom-card team-member text-center">
                    <div className="team-shape1"></div>
                    <div className="team-shape2"></div>
                    <Card.Body className="py-4">
                      <div className="mb-3 lh-1 d-flex gap-2 justify-content-center">
                        <span className={`rounded-circle p-2 bg-${member.bgClass} bg-opacity-25 shadow-sm`}>
                          <Image fill src={member.image} className="card-img rounded-circle" alt={member.name}/>
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-2 fw-medium">{member.name}</h6>
                        <p className="mb-0 text-primary fw-semibold">{member.role}</p>
                        <hr className="bg-success border-success border-2 border-top" />
                        <p className="text-muted fs-12 pt-1 px-2">{member.description}</p>
                        <div className="d-flex justify-content-center">
                          <Link href={member.socialLinks.twitter} scroll={false} className="btn btn-icon rounded-circle btn-primary btn-wave btn-sm waves-effect waves-light">
                            <i className="ri-twitter-x-fill"></i>
                          </Link>
                          <Link href={member.socialLinks.facebook} scroll={false} className="btn btn-icon rounded-circle btn-secondary btn-wave btn-sm ms-2 waves-effect waves-light">
                            <i className="ri-facebook-fill"></i>
                          </Link>
                          <Link href={member.socialLinks.instagram} scroll={false} className="btn btn-icon rounded-circle btn-success btn-wave btn-sm ms-2 waves-effect waves-light">
                            <i className="ri-instagram-line"></i>
                          </Link>
                          <Link href={member.socialLinks.linkedin} scroll={false} className="btn btn-icon rounded-circle btn-info btn-wave btn-sm ms-2 waves-effect waves-light">
                            <i className="ri-linkedin-fill"></i>
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-6 --> */}

        {/* <!-- Start:: Section-7 --> */}
        <section className="section section-bg" id="pricing">
          <div className="container">
            <div className="text-center">
              <p className="fs-14 fw-medium text-success mb-1">
                <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Pricing</span>
              </p>
              <h4 className="fw-semibold mt-3 mb-2">Flexible Plans Tailored to Your Needs</h4>
              <Row className="justify-content-center">
                <Col xl={7}>
                  <p className="text-muted fs-14 mb-5 fw-normal">Choose from a range of adaptable plans designed to meet your evolving needs, giving you the freedom to scale your services effortlessly.</p>
                </Col>
              </Row>
            </div>
            <Row className="justify-content-center">
              <Col xl={12}>
                <Tab.Container defaultActiveKey="1">
                  <div className="text-center mb-5">
                    <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                      <Nav as="ul" className="nav-pills">
                        <Nav.Item as="li">
                          <Nav.Link as="button" eventKey="1" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly">Monthly</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link as="button" eventKey="2" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly">Annually </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="1" className="p-0 border-0" id="pills-monthly">
                      <Row className="justify-content-center">
                        {Plans.map((idx, index) => (
                          <div className="col-xl-4" key={index}>
                            <SpkPriceCard pricing={idx} />
                          </div>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2" className="p-0 border-0" id="pills-yearly">
                      <Row className="justify-content-center">
                        {YearlyPricings.map((idx, index) => (
                          <div className="col-xl-4" key={index}>
                            <SpkPriceCard pricing={idx} />
                          </div>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-7 --> */}

        {/* <!-- Start:: Section-8 --> */}
        <section className="section" id="faqs">
          <div className="container text-center">
            <p className="fs-14 fw-medium text-success mb-1">
              <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>FAQs</span>
            </p>
            <h4 className="fw-semibold mt-3 mb-2">Common Questions and Answers</h4>
            <Row className="justify-content-center">
              <Col xl={7}>
                <p className="text-muted fs-14 mb-5 fw-normal">Weve compiled a list of the most common questions to assist you in finding the information you need.</p>
              </Col>
            </Row>
            <Row className="text-start">
              <Col xl={12}>
                <Row className="gy-2">
                  <Col xl={6}>
                    <SpkAccordions items={Accountsetiing} defaultActiveKey={1} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-separate" />
                  </Col>
                  <Col xl={6}>
                    <SpkAccordions items={Privacydata} defaultActiveKey={3} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-separate" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-8 --> */}

        {/* <!-- Start:: Section-9 --> */}
        <section className="section landing-Features py-4" id="testimonials">
          <div className="container reviews-container">
            <Row className="justify-content-center pb-3">
              <Col xl={10}>
                <div className="text-center mb-0 mt-4 heading-section">
                  <p className="fs-14 fw-medium text-success mb-1">
                    <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Testimonials</span>
                  </p>
                  <h4 className="mt-3 text-fixed-white mb-1">Hear From Our Satisfied Customers</h4>
                  <div className="fs-14 text-fixed-white mb-5 op-8">Explore genuine reviews and testimonials to see how our products and services have made a positive impact.</div>
                </div>
              </Col>
              <Col xl={12}>
                <SpkSwiperJs slides={Landingreview} breakpoint={breakpoints} slidesPerView={2} spaceBetween={30} pagination={{ dynamicBullets: true, clickable: true }} className="swiper testimonialSwiper2" autoplay={true} />
              </Col>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-9 --> */}

        {/* <!-- Start:: Section-10 --> */}
        <section className="section" id="contact">
          <div className="container text-center">
            <p className="fs-14 fw-medium text-success mb-1">
              <span className="landing-section-heading text-success"><i className="ti ti-inner-shadow-top-right-filled text-secondary me-1 fs-10 d-inline-block"></i>Contact Us</span>
            </p>
            <h4 className="fw-semibold mt-3 mb-2">Have Questions? We're Here to Help!</h4>
            <Row className="justify-content-center">
              <Col xl={9}>
                <p className="text-muted fs-14 mb-5 fw-normal">Discover our extensive support resources! Get quick answers to your questions and find the solutions you need.</p>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col xl={9}>
                <Card className="custom-card contactus-form contactus-form-left overflow-hidden p-4">
                  <div className="text-start">
                    <Row className="pt-0 justify-content-center">
                      <Col xxl={6} xl={6} lg={12} md={12} sm={12}>
                        <Row className="gy-3 text-start">
                          <Col xl={12}>
                            <label className="form-label" htmlFor="contact-address-firstname">First Name :</label>
                            <input className="form-control rounded-pill bg-light" id="contact-address-firstname" placeholder="Enter Name" type="text" />
                          </Col>
                          <Col xl={12}>
                            <label className="form-label" htmlFor="contact-address-email">Email Id :</label>
                            <input className="form-control rounded-pill bg-light" id="contact-address-email" placeholder="Enter Email Id" type="email" />
                          </Col>
                          <Col xl={7}>
                            <label className="form-label" htmlFor="contact-mail-message">Message :</label>
                            <textarea className="form-control rounded-pill bg-light" id="contact-mail-message" rows={1} placeholder="Write Here.."></textarea>
                          </Col>
                          <Col xl={5} className="align-self-end">
                            <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-wave btn-w-lg waves-effect waves-light w-100 rounded-pill">Submit Message</SpkButton>
                          </Col>
                        </Row>
                      </Col>
                      <Col xxl={5} xl={6} className="d-none d-xl-block">
                        <Image fill src="../assets/images/media/media-78.png" alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <Card.Body className=" bg-primary mt-5 rounded-3 bg-opacity-25">
                    <Row className="justify-content-center gy-3 gy-xl-0">
                      <Col xl={4}>
                        <Card className="custom-card mb-0">
                          <Card.Body>
                            <span className="avatar avatar-lg bg-primary avatar-rounded">
                              <i className="ri-map-pin-fill fs-18 lh-1 align-middle"></i>
                            </span>
                            <p className="fw-semibold fs-14 mb-1 mt-3"><span className="text-muted fw-medium fs-12">Door.No:</span> 1352/A-12,</p>
                            <p className="fw-semibold fs-14 mb-0">Street, Hyderabad.</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xl={4}>
                        <Card className="custom-card mb-0">
                          <Card.Body>
                            <span className="avatar avatar-lg bg-info avatar-rounded">
                              <i className="ri-phone-fill fs-18 lh-1 align-middle"></i>
                            </span>
                            <p className="fw-semibold fs-14 mb-1 mt-3"><span className="text-muted fw-medium fs-12">Landline: </span>+122 1234 32422</p>
                            <p className="fw-semibold fs-14 mb-0"><span className="text-muted fw-medium fs-12">Mobile: </span>+014 1234 32422</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xl={4}>
                        <Card className="custom-card mb-0">
                          <Card.Body>
                            <span className="avatar avatar-lg bg-pink avatar-rounded">
                              <i className="ri-mail-fill fs-18 lh-1 align-middle"></i>
                            </span>
                            <p className="fw-semibold fs-14 mb-1 mt-3"><span className="text-muted fw-medium fs-12">Mail: </span>arhakhan@mail.com</p>
                            <p className="fw-semibold fs-14 mb-0"><span className="text-muted fw-medium fs-12">Mail: </span>official874@mail.com</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-10 --> */}

        {/* <!-- Start:: Section-11 --> */}
        <section className="section landing-footer text-fixed-white">
          <div className="container">
            <Row>
              <Col md={4} sm={6} className="col-12">
                <div className="px-4">
                  <p className="mb-2 fw-medium fs-14 text-secondary">Subscribe :</p>
                  <ul className="list-unstyled fw-normal landing-footer-list">
                    <li>
                      <div className="input-group p-1 border bg-white rounded-pill gap-2 mb-4">
                        <input type="text" className="form-control rounded-pill border-0 bg-transparent" placeholder="Subscribe to our news letter.." />
                        <div className="btn btn-success rounded-pill">Subscribe</div>
                      </div>
                      <p className="mb-2 fw-medium fs-14 text-secondary">Follow Us On :</p>
                      <div className="mb-0">
                        <div className="btn-list">
                          <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn btn-sm btn-icon footer-btn rounded-pill btn-wave waves-effect waves-light">
                            <i className="ri-facebook-line fw-bold lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn btn-sm btn-icon footer-btn rounded-pill btn-wave waves-effect waves-light">
                            <i className="ri-twitter-x-line fw-bold lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn btn-sm btn-icon footer-btn rounded-pill btn-wave waves-effect waves-light">
                            <i className="ri-instagram-line fw-bold lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn btn-sm btn-icon footer-btn rounded-pill btn-wave waves-effect waves-light">
                            <i className="ri-github-line fw-bold lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn btn-sm btn-icon footer-btn rounded-pill btn-wave waves-effect waves-light">
                            <i className="ri-youtube-line fw-bold lh-1 align-middle"></i>
                          </SpkButton>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2} sm={6} className="col-12">
                <div className="px-4">
                  <h6 className="fw-medium fs-14 text-secondary text-decoration-underline link-offset-3">PAGES</h6>
                  <ul className="list-unstyled op-8 fw-normal landing-footer-list">
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Email</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Profile</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Timeline</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Projects</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Contacts</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Portfolio</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2} sm={6} className="col-12">
                <div className="px-4">
                  <h6 className="fw-medium fs-14 text-secondary text-decoration-underline link-offset-3">INFO</h6>
                  <ul className="list-unstyled op-8 fw-normal landing-footer-list">
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Our Team</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Contact US</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">About</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Services</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Blog</Link>
                    </li>
                    <li>
                      <Link href="#!" scroll={false} className="text-fixed-white">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} sm={6} className="col-12 mb-md-0 mb-3">
                <div className="px-4">
                  <p className="fw-medium mb-3">
                    <Link href="/dashboards/sales" scroll={false}><Image fill src="../assets/images/brand-logos/desktop-white.png" alt="" className="landing-footer-logo" /></Link>
                  </p>
                  <p className="mb-2 op-6 fw-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et magnam,<br />
                    fuga est mollitia  eius, quo illum illo inventore optio aut quas omnis rem. Dolores
                    accusan.
                  </p>
                  <div className="d-flex gap-4 op-9 mt-4">
                    <Link href="#!" scroll={false} className="text-secondary fw-medium fs-14 text-decoration-underline link-offset-1">Contact Us</Link>
                    <span className="op-3">|</span>
                    <Link href="#!" scroll={false} className="text-success fw-medium fs-14 text-decoration-underline link-offset-1">Terms & Conditions</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        {/* <!-- End:: Section-11 --> */}

        <div className="text-center landing-main-footer py-3 text-muted">
          <span className="text-muted fs-15">
            Copyright ©
            <span id="year"> 2025 </span>
            <Link href="#!" scroll={false} className="text-primary fw-medium"><u> rixzo</u></Link>.
            Designed with
            <i className="fa fa-heart text-danger"></i> by
            <Link href="#!" scroll={false} className="text-primary fw-medium"><u> Spruko</u></Link>.
            All rights reserved.
          </span>
        </div>

      </div>
    </Fragment>
  )
}

export default Landing;