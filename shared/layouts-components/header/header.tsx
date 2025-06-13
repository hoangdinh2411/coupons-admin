"use client";

import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import Switcher from "../switcher/switcher";
import { getState, setState } from "../services/switcherServices";
import { MENUITEMS } from "../sidebar/nav";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import { basePath } from "@/next.config";
import { removeCart } from "@/shared/redux/action";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";

const Header = () => {
  let [variable, setVariable] = useState(getState());

  // Fullscreen Function

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
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  // MenuClose Function

  function menuClose() {
    const theme = getState();

    if (window.innerWidth <= 992) {
      const newState = {
        toggled: "close",
      };
      setState(newState);
    }

    if (window.innerWidth >= 992) {
      const local_varaiable = theme;
      const newToggledValue = local_varaiable.toggled
        ? local_varaiable.toggled
        : "";

      setState({ toggled: newToggledValue });
    }
  }

  // Sidebar Toggle Function

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const Query = (selector: any) => document.querySelector(selector);

  const toggleSidebar = () => {
    const theme = getState();
    const sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        const verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          case "closed":
            // Toggle between open/close state for "closed" vertical style
            setState({
              dataNavStyle: "",
              toggled:
                theme.toggled === "close-menu-close" ? "" : "close-menu-close",
            });
            break;
          case "overlay":
            // Handle icon-overlay state with window width check
            setState({
              dataNavStyle: "",
              toggled:
                theme.toggled === "icon-overlay-close"
                  ? ""
                  : "icon-overlay-close",
              iconOverlay: "",
            });

            if (
              theme.toggled !== "icon-overlay-close" &&
              window.innerWidth >= 992
            ) {
              setState({
                toggled: "icon-overlay-close",
                iconOverlay: "",
              });
            }
            break;
          case "icontext":
            // Handle icon-text state
            setState({
              dataNavStyle: "",
              toggled:
                theme.toggled === "icon-text-close" ? "" : "icon-text-close",
            });
            break;
          case "doublemenu":
            // Handle double menu state
            setState({ dataNavStyle: "" });
            if (theme.toggled === "double-menu-open") {
              setState({ toggled: "double-menu-close" });
            } else {
              // Toggle the active double menu item
              const sidemenu = Query(".side-menu__item.active");
              if (sidemenu) {
                setState({ toggled: "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add(
                    "double-menu-active"
                  );
                } else {
                  setState({ toggled: "double-menu-close" });
                }
              }
            }
            break;
          case "detached":
            // Handle detached menu state
            setState({
              toggled:
                theme.toggled === "detached-close" ? "" : "detached-close",
              iconOverlay: "",
            });
            break;
          default:
            setState({ toggled: "" });
            break;
        }

        // Handle navStyle changes
        switch (navStyle) {
          case "menu-click":
            setState({
              toggled:
                theme.toggled === "menu-click-closed"
                  ? ""
                  : "menu-click-closed",
            });
            break;
          case "menu-hover":
            setState({
              toggled:
                theme.toggled === "menu-hover-closed"
                  ? ""
                  : "menu-hover-closed",
            });
            break;
          case "icon-click":
            setState({
              toggled:
                theme.toggled === "icon-click-closed"
                  ? ""
                  : "icon-click-closed",
            });
            break;
          case "icon-hover":
            setState({
              toggled:
                theme.toggled === "icon-hover-closed"
                  ? ""
                  : "icon-hover-closed",
            });
            break;
        }
      }
    } else {
      // For mobile view (screen width < 992px)
      if (theme.toggled === "close") {
        setState({ toggled: "open" });

        setTimeout(() => {
          if (theme.toggled === "open") {
            const overlay = overlayRef.current;
            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = overlayRef.current;
                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }
          window.addEventListener("resize", () => {
            if (window.innerWidth >= 992) {
              const overlay = Query("#responsive-overlay");
              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        setState({ toggled: "close" });
      }
    }
  };

  // Theme Toggle Function

  const toggleTheme = () => {
    const currentTheme = getState();
    const newState = {
      dataThemeMode: currentTheme.dataThemeMode === "dark" ? "light" : "dark",
      dataHeaderStyles:
        currentTheme.dataThemeMode === "dark" ? "light" : "dark",
      dataMenuStyles: currentTheme.dataThemeMode === "dark" ? "dark" : "dark",
    };
    setState(newState);
    if (newState.dataThemeMode != "dark") {
      const newState = {
        bodyBg: "",
        lightRgb: "",
        bodyBg2: "",
        inputBorder: "",
        formControlBg: "",
        gray: "",
      };
      setState(newState);
      localStorage.setItem("rixzolightTheme", "light");
      localStorage.removeItem("rixzodarkTheme");
      localStorage.removeItem("rixzomenu");
      localStorage.removeItem("rixzoheader");
      localStorage.removeItem("bodyBg");
      localStorage.removeItem("bodyBg2");
      localStorage.removeItem("bgImg");
    } else {
      localStorage.setItem("rixzodarkTheme", "dark");
      localStorage.removeItem("rixzolightTheme");
      localStorage.removeItem("rixzomenu");
      localStorage.removeItem("rixzoheader");
      localStorage.removeItem("bodyBg");
      localStorage.removeItem("bodyBg2");
      localStorage.removeItem("inputBorder");
      localStorage.removeItem("lightRgb");
      localStorage.removeItem("formControlBg");
      localStorage.removeItem("gray");
    }
  };

  //  Switcher Offcanvas

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Cart function
  const cartProduct = [
    {
      id: 1,
      image: "/assets/images/media/media-92.jpg",
      name: "EliteChair Pro",
      category: "Furniture",
      qty: " 01",
      price: "1299.00",
    },
    {
      id: 2,
      image: "/assets/images/media/media-95.jpg",
      name: "Sunglasses",
      category: "Accessories",
      qty: "01",
      price: "249.99",
    },
    {
      id: 3,
      image: "/assets/images/media/media-93.jpg",
      name: "StellarPhone X",
      category: "Smartphones",
      qty: "01",
      price: "1199.08",
    },
    {
      id: 4,
      image: "/assets/images/media/media-96.jpg",
      name: "PowerBeats Pro",
      category: "Audio Accessories",
      qty: "01",
      price: "249.95",
    },
  ];

  const maxDisplayItems = 5;

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.items);
  const [localCart, setLocalCart] = useState(cartProduct);
  const [remainingCount2, setRemainingCount2] = useState(0);

  const card = [...localCart, ...cart];

  useEffect(() => {
    setRemainingCount2(card.length);
    setCartItemCount(localCart.length);
  }, [cart, localCart]);

  const handleDelete = (id: number, event: any) => {
    event.stopPropagation();
    // Remove item from local cart
    const updatedLocalCart = localCart.filter((item) => item.id !== id);
    setLocalCart(updatedLocalCart);
    // Update cart item count
    setCartItemCount(updatedLocalCart.length);
    // Remove item from redux cart
    dispatch(removeCart(id));
  };
  const [cartItems, setCartItems] = useState([...cartProduct]);
  const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

  useEffect(() => {
    setCartItemCount(localCart.length);
  }, [localCart]);

  //  Notifications

  const notificationNotes = [
    {
      id: 1,
      image: "/assets/images/faces/1.jpg",
      name: "Sonia Agarwal",
      notificationType: "Approval",
      description: "for the Insurance",
      time: "7 mins ago",
      status: "text-success",
      textcolor: "success",
    },
    {
      id: 2,
      image: "/assets/images/faces/12.jpg",
      name: "Rajesh Kumar",
      notificationType: "Urgent Request",
      description: "for project",
      time: "3 hours ago",
      status: "text-warning",
      textcolor: "warning",
    },
    {
      id: 3,
      image: "/assets/images/faces/3.jpg",
      name: "Ayesha Malik",
      notificationType: "Task Completed",
      description: "for redesign",
      time: "2 hours ago",
      status: "text-info",
      textcolor: "info",
    },
    {
      id: 4,
      image: "/assets/images/faces/14.jpg",
      name: "Mohan Desai",
      notificationType: "New Message",
      description: "about client meeting",
      time: "15 mins ago",
      status: "text-danger",
      textcolor: "danger",
    },
    {
      id: 5,
      image: "/assets/images/faces/5.jpg",
      name: "Priya Sharma",
      notificationType: "Meeting Reminder",
      description: "scheduled for 3:00 PM",
      time: "30 mins ago",
      status: "text-warning",
      textcolor: "warning",
    },
  ];

  const [note, setNote] = useState(notificationNotes);

  const handleNoteRemove = (id: any, e: React.MouseEvent) => {
    e.stopPropagation();
    const deleteNoti = note.filter((item) => item.id !== id);
    setNote(deleteNoti);
  };

  const appData = [
    {
      name: "Figma",
      image: "figma.png",
      bgColorClass: "pink",
      borderColorClass: "pink",
    },
    {
      name: "PowerPoint",
      image: "microsoft-powerpoint.png",
      bgColorClass: "success",
      borderColorClass: "success",
    },
    {
      name: "MS Word",
      image: "microsoft-word.png",
      bgColorClass: "primary",
      borderColorClass: "primary",
    },
    {
      name: "Calendar",
      image: "calender.png",
      bgColorClass: "info",
      borderColorClass: "info",
    },
    {
      name: "Sketch",
      image: "sketch.png",
      bgColorClass: "secondary",
      borderColorClass: "secondary",
    },
    {
      name: "Google",
      image: "google.png",
      bgColorClass: "danger",
      borderColorClass: "danger",
    },
  ];

  //Search Functionality

  const searchRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent) => {
    const searchInput = searchRef.current;
    const container = containerRef.current;

    if (
      searchInput &&
      container &&
      !searchInput.contains(event.target as Node) &&
      !container.contains(event.target as Node)
    ) {
      container.classList.remove("searchdrop");
    } else if (
      searchInput &&
      container &&
      (searchInput === event.target ||
        searchInput.contains(event.target as Node))
    ) {
      container.classList.add("searchdrop");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const searchResultRef = useRef<HTMLDivElement | null>(null);
  const [showa, setShowa] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);

  useEffect(() => {
    const clickHandler = (event: any) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
      ) {
        searchResultRef.current.classList.add("d-none");
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  const myfunction = (inputvalue: string) => {
    if (searchResultRef.current) {
      searchResultRef.current.classList.remove("d-none");
    }

    const i: any = [];
    const allElement2: any = [];
    MENUITEMS.forEach((mainLevel: any) => {
      if (mainLevel.children) {
        setShowa(true);
        mainLevel.children.forEach((subLevel: any) => {
          i.push(subLevel);
          if (subLevel.children) {
            subLevel.children.forEach((subLevel1: any) => {
              i.push(subLevel1);
              if (subLevel1.children) {
                subLevel1.children.forEach((subLevel2: any) => {
                  i.push(subLevel2);
                });
              }
            });
          }
        });
      }
    });
    for (const allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (
          allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())
        ) {
          setShow2(true);
          if (
            allElement.path &&
            !allElement2.some((el: any) => el.title === allElement.title)
          ) {
            allElement2.push(allElement);
          }
        }
      }
    }

    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);
  };

  //Responsive Search
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <Fragment>
      <header className="app-header sticky" id="header">
        {/* <!-- Start::main-header-container --> */}

        <div className="main-header-container container-fluid">
          {variable.toggled === "open" && (
            <div ref={overlayRef} id="responsive-overlay"></div>
          )}

          {/* <!-- Start::header-content-left --> */}

          <div className="header-content-left">
            {/* <!-- Start::header-element --> */}

            <div className="header-element">
              <div className="horizontal-logo">
                <Link scroll={false} href="/dashboard/" className="header-logo">
                  <Image
                    fill
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/brand-logos/desktop-logo.png`}
                    alt="logo"
                    className="desktop-logo"
                  />
                  <Image
                    fill
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/brand-logos/toggle-logo.png`}
                    alt="logo"
                    className="toggle-logo"
                  />
                  <Image
                    fill
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/brand-logos/desktop-white.png`}
                    alt="logo"
                    className="desktop-white"
                  />
                  <Image
                    fill
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/brand-logos/toggle-white.png`}
                    alt="logo"
                    className="toggle-white"
                  />
                </Link>
              </div>
            </div>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <div className="header-element mx-lg-0 mx-2">
              <Link
                scroll={false}
                aria-label="Hide Sidebar"
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                href="#!"
                onClick={toggleSidebar}
              >
                <span></span>
              </Link>
            </div>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <div
              ref={containerRef}
              className="header-element header-search d-lg-block d-none my-auto auto-complete-search"
            >
              {/* <!-- Start::header-link --> */}

              <input
                type="text"
                className="header-search-bar form-control rounded-pill"
                onClick={() => {}}
                ref={searchRef}
                defaultValue={InputValue}
                onChange={(ele) => {
                  myfunction(ele.target.value);
                  setInputValue(ele.target.value);
                }}
                id="header-search"
                placeholder="Search for Results..."
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
              <a
                href="javascript:void(0);"
                className="header-search-icon border-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </a>
              {showa ? (
                <div
                  className="card search-result position-absolute z-index-9 search-fix  border mt-1"
                  ref={searchResultRef}
                >
                  <div className="card-header">
                    <div className="card-title mb-0 text-break">
                      Search result of {InputValue}
                    </div>
                  </div>
                  <div className="card-body overflow-auto">
                    <ListGroup className="m-2">
                      {show2 ? (
                        NavData.map((e: any) => (
                          <ListGroup.Item key={Math.random()} className="">
                            <Link
                              href={`${e.path}/`}
                              className="search-result-item"
                              onClick={() => {
                                setShowa(false), setInputValue("");
                              }}
                            >
                              {e.title}
                            </Link>
                          </ListGroup.Item>
                        ))
                      ) : (
                        <b className={`${searchcolor} `}>{searchval}</b>
                      )}
                    </ListGroup>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* <!-- End::header-link --> */}
            </div>

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

            {/* <!-- End::header-element --> */}

            <Dropdown className="header-element country-selector">
              {/* <!-- Start::header-link|dropdown-toggle --> */}

              <DropdownToggle
                variant=""
                className="header-link dropdown-toggle"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
              >
                <span className="avatar avatar-xs avatar-rounded">
                  <Image
                    width={20}
                    height={20}
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/flags/us_flag.jpg`}
                    alt="img"
                  />
                </span>
              </DropdownToggle>

              {/* <!-- End::header-link|dropdown-toggle --> */}

              <DropdownMenu
                className="main-header-dropdown dropdown-menu"
                data-popper-placement="none"
                align="end"
              >
                <li>
                  <Link
                    scroll={false}
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="#!"
                  >
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                        <Image
                          width={20}
                          height={20}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/flags/us_flag.jpg`}
                          alt="img"
                        />
                      </span>
                      English
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="#!"
                  >
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                        <Image
                          width={20}
                          height={20}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/flags/spain_flag.jpg`}
                          alt="img"
                        />
                      </span>
                      Spanish
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="#!"
                  >
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                        <Image
                          width={20}
                          height={20}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/flags/french_flag.jpg`}
                          alt="img"
                        />
                      </span>
                      French
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="#!"
                  >
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                        <Image
                          width={20}
                          height={20}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/flags/uae_flag.jpg`}
                          alt="img"
                        />
                      </span>
                      German
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="#!"
                  >
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                        <Image
                          width={20}
                          height={20}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/flags/italy_flag.jpg`}
                          alt="img"
                        />
                      </span>
                      Italian
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="#!"
                  >
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                        <Image
                          width={20}
                          height={20}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/flags/russia_flag.jpg`}
                          alt="img"
                        />
                      </span>
                      Russian
                    </div>
                  </Link>
                </li>
              </DropdownMenu>
            </Dropdown>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

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

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <Dropdown
              className="header-element cart-dropdown"
              align={"end"}
              autoClose="outside"
            >
              {/* <!-- Start::header-link|dropdown-toggle --> */}

              <DropdownToggle
                href="#!"
                className="header-link"
                variant=""
                as="a"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-link-icon"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <SpkBadge
                  variant="primary"
                  Customclass="rounded-pill header-icon-badge"
                  Id="cart-icon-badge"
                >
                  {card.length}
                </SpkBadge>
              </DropdownToggle>

              {/* <!-- End::header-link|dropdown-toggle --> */}

              {/* <!-- Start::main-header-dropdown --> */}

              <DropdownMenu
                className="main-header-dropdown dropdown-menu dropdown-menu-end"
                data-popper-placement="none"
              >
                <div className="p-3 bg-light bg-opacity-75">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-semibold">Cart Items</p>
                    <SpkBadge
                      variant="pink"
                      Customclass="ms-1 fs-12"
                      Id="cart-data"
                    >
                      {" "}
                      {card.length} Items
                    </SpkBadge>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <SimpleBar
                  className="list-unstyled mb-0"
                  id="header-cart-items-scroll"
                >
                  {card.slice(0, maxDisplayItems).map((item, index) => (
                    <Dropdown.Item as="li" key={index}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="lh-1">
                          <span className="avatar avatar-lg bg-light">
                            <Image
                              width={48}
                              height={48}
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }${item.image}`}
                              alt="img"
                            />
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="fw-medium">
                            <Link scroll={false} href="#!">
                              {item.name}
                            </Link>
                          </div>
                          <span className="text-muted fs-12 fw-normal">
                            {item.category}
                          </span>
                          <div className="fs-11 fw-medium text-default">
                            <span className="text-muted">Qty:</span> {item.qty}
                          </div>
                        </div>
                        <div className="text-end">
                          <Link
                            scroll={false}
                            href="#!"
                            className="header-cart-remove float-end dropdown-item-close"
                            onClick={(event) => handleDelete(item.id, event)}
                          >
                            <i className="ti ti-trash"></i>
                          </Link>
                          <div className="fw-semibold fs-14 text-default">
                            ${item.price}
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </SimpleBar>

                <div
                  className={`p-3 empty-header-item border-top ${
                    card.length === 0 && "d-none"
                  }`}
                >
                  <div className="d-grid">
                    <Link scroll={false} href="#!" className="btn btn-primary">
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
                {card.length === 0 && (
                  <div className="p-5 empty-item">
                    <div className="text-center">
                      <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                        <i className="ri-shopping-cart-2-line fs-2"></i>
                      </span>
                      <h6 className="fw-semibold mb-1 mt-3">
                        Your Cart is Empty
                      </h6>
                      <span className="mb-3 fw-normal fs-13 d-block">
                        Add some items to make me happy{" "}
                      </span>
                      <Link
                        scroll={false}
                        href="#!"
                        className="btn btn-primary btn-wave btn-sm m-1"
                        data-abc="true"
                      >
                        continue shopping{" "}
                        <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                )}
              </DropdownMenu>

              {/* <!-- End::main-header-dropdown --> */}
            </Dropdown>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <Dropdown
              className="header-element notifications-dropdown d-xl-inline-flex dropdown"
              align={"end"}
              autoClose="outside"
            >
              {/* <!-- Start::header-link|dropdown-toggle --> */}

              <DropdownToggle
                href="#!"
                variant=""
                className="header-link dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                id="messageDropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-link-icon"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                </svg>
                <span className="header-icon-pulse bg-secondary rounded pulse pulse-secondary"></span>
              </DropdownToggle>

              {/* <!-- End::header-link|dropdown-toggle --> */}

              {/* <!-- Start::main-header-dropdown --> */}

              <DropdownMenu
                className="main-header-dropdown dropdown-menu-end"
                data-popper-placement="none"
              >
                <div className="p-3 bg-light bg-opacity-75">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-semibold">Notifications</p>
                    <span className="badge bg-pink" id="notifiation-data">
                      {note.length} Unread
                    </span>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <SimpleBar
                  className="list-unstyled mb-0"
                  id="header-notification-scroll"
                >
                  {note.map((item: any, index: any) => (
                    <DropdownItem as="li" className="dropdown-item" key={index}>
                      <div className="d-flex align-items-start">
                        <div className="pe-2">
                          <span className="avatar avatar-md offline bg-primary-transparent avatar-rounded">
                            <Image
                              fill
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }${item.image}`}
                              alt="img"
                            />
                          </span>
                        </div>
                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-0 fw-medium">
                              <Link href="#!" scroll={false}>
                                {item.name}
                              </Link>
                            </p>
                            <div className="fw-normal header-notification-text text-muted">
                              <span
                                className={`fw-medium fs-12 text-${item.textcolor}`}
                              >
                                {item.notificationType}
                              </span>{" "}
                              {item.description}
                            </div>
                            <span className="text-muted header-notification-text fs-11">
                              {item.time}
                            </span>
                          </div>
                          <div>
                            <Link
                              scroll={false}
                              href="#!"
                              className="text-muted me-1 dropdown-item-close1"
                              onClick={(e) => handleNoteRemove(item.id, e)}
                            >
                              <i className="ti ti-trash fs-16"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                  ))}
                </SimpleBar>
                <div
                  className={`p-3 empty-header-item1 border-top ${
                    note.length === 0 && "d-none"
                  } `}
                >
                  <div className="d-grid">
                    <Link scroll={false} href="#!" className="btn btn-primary">
                      View All
                    </Link>
                  </div>
                </div>
                {note.length === 0 && (
                  <div className="p-5 empty-item1">
                    <div className="text-center">
                      <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                        <i className="ri-notification-off-line fs-2"></i>
                      </span>
                      <h6 className="fw-semibold mt-3">No New Notifications</h6>
                    </div>
                  </div>
                )}
              </DropdownMenu>

              {/* <!-- End::main-header-dropdown --> */}
            </Dropdown>

            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}

            <Dropdown
              className="header-element header-shortcuts-dropdown"
              align={"end"}
            >
              {/* <!-- Start::header-link|dropdown-toggle --> */}

              <DropdownToggle
                variant=""
                className="header-link"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                id="notificationDropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-link-icon"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#5f6368"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <g>
                        <path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </DropdownToggle>

              {/* <!-- End::header-link|dropdown-toggle --> */}

              {/* <!-- Start::main-header-dropdown --> */}

              <DropdownMenu
                className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end"
                aria-labelledby="notificationDropdown"
              >
                <div className="p-3 bg-light bg-opacity-75">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-semibold">Related Apps</p>
                    <span className="badge bg-pink">6 Apps</span>
                  </div>
                </div>
                <div className="dropdown-divider mb-0"></div>
                <div
                  className="main-header-shortcuts p-3"
                  id="header-shortcut-scroll"
                >
                  <Row className="g-2">
                    {appData.map((app, index) => (
                      <Col className="col-4" key={index}>
                        <Link scroll={false} href="#!" className="related-apps">
                          <div
                            className={`text-center p-3 related-app ${app.bgColorClass} bg-${app.bgColorClass}-transparent border border-${app.borderColorClass} border-opacity-10`}
                          >
                            <span
                              className={`avatar avatar-md avatar-rounded bg-${app.bgColorClass} bg-opacity-10 border border-${app.borderColorClass} border-opacity-10 p-2 mb-2`}
                            >
                              <Image
                                fill
                                src={`${
                                  process.env.NODE_ENV === "production"
                                    ? basePath
                                    : ""
                                }/assets/images/apps/${app.image}`}
                                alt={app.name}
                              />
                            </span>
                            <span className="d-block fs-12">{app.name}</span>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="p-3 border-top">
                  <div className="d-grid">
                    <Link scroll={false} href="#!" className="btn btn-primary">
                      View All
                    </Link>
                  </div>
                </div>
              </DropdownMenu>

              {/* <!-- End::main-header-dropdown --> */}
            </Dropdown>

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

            <Dropdown className="header-element dropdown" align={"end"}>
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
                    src={`${
                      process.env.NODE_ENV === "production" ? basePath : ""
                    }/assets/images/faces/14.jpg`}
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
                      <p className="mb-0 fw-semibold lh-1">Ashwin Seth</p>
                      <span className="fs-11 text-muted">
                        ashwinseth@mail.com
                      </span>
                    </div>
                    <span className="badge bg-pink align-self-end mb-1">
                      Pro
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
                <Link
                  href="#!"
                  className="dropdown-item d-flex align-items-center border-bottom-0"
                >
                  <i className="ti ti-inbox fs-18 me-2 text-gray fw-normal"></i>
                  Mail Inbox<span className="badge bg-success ms-auto">06</span>
                </Link>
                <Link
                  href="#!"
                  className="dropdown-item d-flex align-items-center border-bottom-0"
                >
                  <i className="ti ti-adjustments-horizontal fs-18 me-2 text-gray fw-normal"></i>
                  Account Settings{" "}
                </Link>
                <Link
                  href="#!"
                  className="dropdown-item d-flex align-items-center border-bottom-0"
                >
                  <i className="ti ti-logout fs-18 me-2 text-gray fw-normal"></i>
                  Sign Out
                </Link>
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
