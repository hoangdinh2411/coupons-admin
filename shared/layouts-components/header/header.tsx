'use client';

import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
  Modal,
} from 'react-bootstrap';

import Switcher from '../switcher/switcher';
import { getState, setState } from '../services/switcherServices';

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Image from 'next/image';
import AuthService from '@/app/actions/auth.service';
import UseAppStore from '@/store/useAppStore';
import { usePathname, useRouter } from 'next/navigation';
import { APP_ROUTE } from '@/constants/route';
import toast from 'react-hot-toast';
import Notification from './Notification';
import SearchBar from './SearchBar';
import { getAllStores } from '@/app/actions/store.service';
import { getCategories } from '@/app/actions/category.service';

const Header = () => {
  const {
    setProfile,
    toggleAppLoading,
    profile,
    categories,
    stores,
    setCategory,
    setStores,
  } = UseAppStore((state) => state);
  const router = useRouter();
  // Fullscreen Function

  const handleSignOut = async () => {
    toggleAppLoading(true);
    const res = await AuthService.signOut();
    if (res.success) {
      toast.success('See you again');
      setProfile(null);
      setStores([]);
      setCategory([]);
      router.push(APP_ROUTE.SIGN_IN);
    }
  };
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
    };
  }, []);

  useEffect(() => {
    const handleFetchProfile = async () => {
      const res = await AuthService.getProfile();
      console.log(res);
      if (res.success && res.data) {
        setProfile(res.data);
        const storeRes = await getAllStores();
        console.log('storeRes', storeRes.data);
        if (storeRes.success && storeRes.data) {
          setStores(storeRes.data.results);
        }
        const categoryRes = await getCategories();
        console.log('categoryRes', categoryRes.data);
        if (categoryRes.success && categoryRes.data) {
          setCategory(categoryRes.data.results);
        }
      } else {
        handleSignOut();
      }
    };
    if (!profile) {
      handleFetchProfile();
    }
  }, []);

  // MenuClose Function

  function menuClose() {
    const theme = getState();

    if (window.innerWidth <= 992) {
      const newState = {
        toggled: 'close',
      };
      setState(newState);
    }

    if (window.innerWidth >= 992) {
      const local_varaiable = theme;
      const newToggledValue = local_varaiable.toggled
        ? local_varaiable.toggled
        : '';

      setState({ toggled: newToggledValue });
    }
  }

  // Sidebar Toggle Function

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const Query = (selector: string) => document.querySelector(selector);

  const toggleSidebar = () => {
    const theme = getState();
    const sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === 'vertical') {
        const verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          case 'closed':
            // Toggle between open/close state for "closed" vertical style
            setState({
              dataNavStyle: '',
              toggled:
                theme.toggled === 'close-menu-close' ? '' : 'close-menu-close',
            });
            break;
          case 'overlay':
            // Handle icon-overlay state with window width check
            setState({
              dataNavStyle: '',
              toggled:
                theme.toggled === 'icon-overlay-close'
                  ? ''
                  : 'icon-overlay-close',
              iconOverlay: '',
            });

            if (
              theme.toggled !== 'icon-overlay-close' &&
              window.innerWidth >= 992
            ) {
              setState({
                toggled: 'icon-overlay-close',
                iconOverlay: '',
              });
            }
            break;
          case 'icontext':
            // Handle icon-text state
            setState({
              dataNavStyle: '',
              toggled:
                theme.toggled === 'icon-text-close' ? '' : 'icon-text-close',
            });
            break;
          case 'doublemenu':
            // Handle double menu state
            setState({ dataNavStyle: '' });
            if (theme.toggled === 'double-menu-open') {
              setState({ toggled: 'double-menu-close' });
            } else {
              // Toggle the active double menu item
              const sidemenu = Query('.side-menu__item.active');
              if (sidemenu) {
                setState({ toggled: 'double-menu-open' });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add(
                    'double-menu-active',
                  );
                } else {
                  setState({ toggled: 'double-menu-close' });
                }
              }
            }
            break;
          case 'detached':
            // Handle detached menu state
            setState({
              toggled:
                theme.toggled === 'detached-close' ? '' : 'detached-close',
              iconOverlay: '',
            });
            break;
          default:
            setState({ toggled: '' });
            break;
        }

        // Handle navStyle changes
        switch (navStyle) {
          case 'menu-click':
            setState({
              toggled:
                theme.toggled === 'menu-click-closed'
                  ? ''
                  : 'menu-click-closed',
            });
            break;
          case 'menu-hover':
            setState({
              toggled:
                theme.toggled === 'menu-hover-closed'
                  ? ''
                  : 'menu-hover-closed',
            });
            break;
          case 'icon-click':
            setState({
              toggled:
                theme.toggled === 'icon-click-closed'
                  ? ''
                  : 'icon-click-closed',
            });
            break;
          case 'icon-hover':
            setState({
              toggled:
                theme.toggled === 'icon-hover-closed'
                  ? ''
                  : 'icon-hover-closed',
            });
            break;
        }
      }
    } else {
      // For mobile view (screen width < 992px)
      if (theme.toggled === 'close') {
        setState({ toggled: 'open' });

        setTimeout(() => {
          if (theme.toggled === 'open') {
            const overlay = overlayRef.current;
            if (overlay) {
              overlay.classList.add('active');
              overlay.addEventListener('click', () => {
                const overlay = overlayRef.current;
                if (overlay) {
                  overlay.classList.remove('active');
                  menuClose();
                }
              });
            }
          }
          window.addEventListener('resize', () => {
            if (window.innerWidth >= 992) {
              const overlay = Query('#responsive-overlay');
              if (overlay) {
                overlay.classList.remove('active');
              }
            }
          });
        }, 100);
      } else {
        setState({ toggled: 'close' });
      }
    }
  };

  // Theme Toggle Function

  const toggleTheme = () => {
    const currentTheme = getState();
    const newState = {
      dataThemeMode: currentTheme.dataThemeMode === 'dark' ? 'light' : 'dark',
      dataHeaderStyles:
        currentTheme.dataThemeMode === 'dark' ? 'light' : 'dark',
      dataMenuStyles: currentTheme.dataThemeMode === 'dark' ? 'dark' : 'dark',
    };
    setState(newState);
    if (newState.dataThemeMode != 'dark') {
      const newState = {
        bodyBg: '',
        lightRgb: '',
        bodyBg2: '',
        inputBorder: '',
        formControlBg: '',
        gray: '',
      };
      setState(newState);
      localStorage.setItem('rixzolightTheme', 'light');
      localStorage.removeItem('rixzodarkTheme');
      localStorage.removeItem('rixzomenu');
      localStorage.removeItem('rixzoheader');
      localStorage.removeItem('bodyBg');
      localStorage.removeItem('bodyBg2');
      localStorage.removeItem('bgImg');
    } else {
      localStorage.setItem('rixzodarkTheme', 'dark');
      localStorage.removeItem('rixzolightTheme');
      localStorage.removeItem('rixzomenu');
      localStorage.removeItem('rixzoheader');
      localStorage.removeItem('bodyBg');
      localStorage.removeItem('bodyBg2');
      localStorage.removeItem('inputBorder');
      localStorage.removeItem('lightRgb');
      localStorage.removeItem('formControlBg');
      localStorage.removeItem('gray');
    }
  };

  //  Switcher Offcanvas

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Search Functionality

  function formatName() {
    if (!profile) return;
    if (profile?.first_name && profile.last_name) {
      return profile.first_name + profile.last_name;
    } else {
      return profile.email;
    }
  }

  //Responsive Search
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <Fragment>
      <header className="app-header sticky" id="header">
        {/* <!-- Start::main-header-container --> */}

        <div className="main-header-container container-fluid">
          {/* {variable.toggled === 'open' && (
            <div ref={overlayRef} id="responsive-overlay"></div>
          )} */}

          {/* <!-- Start::header-content-left --> */}

          <div className="header-content-left">
            {/* <!-- Start::header-element --> */}

            <div className="header-element">
              <div className="horizontal-logo">
                <Link scroll={false} href="/dashboard/" className="header-logo">
                  <Image
                    fill
                    src={`/assets/images/brand-logos/desktop-logo.png`}
                    alt="logo"
                    className="desktop-logo"
                  />
                  <Image
                    fill
                    src={`/assets/images/brand-logos/toggle-logo.png`}
                    alt="logo"
                    className="toggle-logo"
                  />
                  <Image
                    fill
                    src={`/assets/images/brand-logos/desktop-white.png`}
                    alt="logo"
                    className="desktop-white"
                  />
                  <Image
                    fill
                    src={`/assets/images/brand-logos/toggle-white.png`}
                    alt="logo"
                    className="toggle-white"
                  />
                </Link>
              </div>
            </div>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <div className="header-element mx-lg-0 mx-2">
              <span
                aria-label="Hide Sidebar"
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                onClick={toggleSidebar}
              >
                <span></span>
              </span>
            </div>

            <SearchBar />
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            {/* <!-- End::header-element --> */}
          </div>

          {/* <!-- End::header-content-left --> */}

          {/* <!-- Start::header-content-right --> */}

          <div className="header-content-right">
            {/* <!-- Start::header-element --> */}

            <div className="header-element d-lg-none d-flex">
              <Link
                scroll={false}
                href="#!"
                className="header-link"
                onClick={handleShow1}
                data-bs-toggle="modal"
                data-bs-target="#responsive-searchModal"
              >
                {/* <!-- Start::header-link-icon --> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-link-icon"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>

                {/* <!-- End::header-link-icon --> */}
              </Link>
            </div>

            <li className="header-element header-theme-mode">
              {/* <!-- Start::header-link|layout-setting --> */}

              <Link
                scroll={false}
                href="#!"
                className="header-link layout-setting"
                onClick={toggleTheme}
              >
                <span className="light-layout">
                  {/* <!-- Start::header-link-icon --> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#5f6368"
                  >
                    <rect fill="none" height="24" width="24" />
                    <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
                  </svg>

                  {/* <!-- End::header-link-icon --> */}
                </span>
                <span className="dark-layout">
                  {/* <!-- Start::header-link-icon --> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
                  </svg>

                  {/* <!-- End::header-link-icon --> */}
                </span>
              </Link>

              {/* <!-- End::header-link|layout-setting --> */}
            </li>
            <Notification />
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <div className="header-element header-fullscreen">
              {/* <!-- Start::header-link --> */}

              <Link
                href="#!"
                className="header-link"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="full-screen-close header-link-icon"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="full-screen-open header-link-icon"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
                  </svg>
                )}
              </Link>

              {/* <!-- End::header-link --> */}
            </div>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <Dropdown className="header-element dropdown" align={'end'}>
              {/* <!-- Start::header-link|dropdown-toggle --> */}

              <DropdownToggle
                variant=""
                className="header-link"
                id="mainHeaderProfile"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="avatar avatar-sm avatar-rounded">
                  <Image
                    height={28}
                    width={28}
                    src={`/assets/images/faces/14.jpg`}
                    alt="img"
                    className="img-fluid"
                  />
                </span>
              </DropdownToggle>

              {/* <!-- End::header-link|dropdown-toggle --> */}

              <DropdownMenu
                className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                aria-labelledby="mainHeaderProfile"
              >
                <Link
                  href="#!"
                  className="p-3 bg-light bg-opacity-75 border-bottom d-block"
                >
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div>
                      <p className="mb-0 fw-semibold lh-1">{formatName()}</p>
                      <span className="fs-11 text-muted">{profile?.email}</span>
                    </div>
                    <span className="badge bg-pink align-self-end mb-1">
                      {profile?.role.toUpperCase()}
                    </span>
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="dropdown-item d-flex align-items-center border-bottom-0"
                >
                  <i className="ti ti-user-circle fs-18 me-2 text-gray fw-normal"></i>
                  My Profile
                </Link>
                <SpkButton
                  onClickfunc={handleSignOut}
                  Customclass="dropdown-item d-flex align-items-center border-bottom-0"
                >
                  <i className="ti ti-logout fs-18 me-2 text-gray fw-normal"></i>
                  Sign Out
                </SpkButton>
              </DropdownMenu>
            </Dropdown>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <li className="header-element">
              {/* <!-- Start::header-link|switcher-icon --> */}

              <Link
                href="#!"
                scroll={false}
                className="header-link switcher-icon"
                data-bs-toggle="offcanvas"
                onClick={handleShow}
                data-bs-target="#switcher-canvas"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-link-icon"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                </svg>
              </Link>
              <Switcher show={show} handleClose={handleClose} />

              {/* <!-- End::header-link|switcher-icon --> */}
            </li>

            {/* <!-- End::header-element --> */}
          </div>
        </div>
      </header>
      <Modal
        show={show1}
        onHide={handleClose1}
        className="fade"
        id="header-responsive-search"
        tabIndex={-1}
        aria-labelledby="header-responsive-search"
      >
        <div className="modal-content">
          <Modal.Body>
            <div className="input-group">
              <Form.Control
                type="text"
                className="border-end-0"
                placeholder="Search Anything ..."
                aria-label="Search Anything ..."
                aria-describedby="button-addon2"
              />
              <SpkButton
                Buttonvariant="primary"
                Buttontype="button"
                Id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </SpkButton>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Header;
