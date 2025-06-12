"use client"

import React, { Fragment, useEffect, useState } from 'react'
import { MENUITEMS } from './nav'
import { catchError, map, of } from 'rxjs';
import Link from 'next/link';
import Menuloop from './menuloop';
import SimpleBar from 'simplebar-react';
import { data$, getState, setState } from '../services/switcherServices';
import { usePathname } from 'next/navigation';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { basePath } from '@/next.config';
import Image from 'next/image';

const Sidebar = () => {

  let [variable, setVariable] = useState(getState());

  useEffect(() => {
    const subscription = data$.subscribe((e) => {
      setVariable(e);
    });
    return () => subscription.unsubscribe();
  }, []);

  const local_varaiable = variable;

  const [openMenu, setOpenMenu] = useState(MENUITEMS)

  useEffect(() => {
    const observal = of(MENUITEMS);
    const subscription = observal.pipe(
      map(res => res),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    ).subscribe({
      next: (result: any) => {
        setOpenMenu(result)
      }
    })
    return () => subscription.unsubscribe()
  }, [openMenu]);

  // Hover Function

  function Onhover() {
    const theme = getState();
    if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay != 'open') {
      const newState = {
        "iconOverlay": "open"
      }
      setState(newState)
      console.log(newState)
    }
  }

  function Outhover() {
    const theme = getState();
    if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay == 'open') {
      const newState = {
        "iconOverlay": ""
      }
      setState(newState)
      console.log(newState)
    }
  }

  const slideArrow = (selector: any) => document.querySelector(selector)
  const slideArrows = (selector: any) => document.querySelectorAll(selector)

  // MenuClose Function

  function menuClose() {
    const theme = getState();
    if (window.innerWidth <= 992) {
      const newState = {
        toggled: "close"
      }
      setState(newState)

    }
    const overlayElement = slideArrow("#responsive-overlay") as HTMLElement | null;
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
    if (theme.dataNavLayout == "horizontal" || theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click") {
      closeMenu();
    }
  }

  // CloseMenu Function

  function closeMenu() {
    const closeMenudata = (items: any) => {
      items?.forEach((item: any) => {
        item.active = false;
        closeMenudata(item.children);
      });
    };
    closeMenudata(MENUITEMS);
    setOpenMenu((arr: any) => [...arr]);
  }

  // MwnuResize Function

  useEffect(() => {

    const resizeEventListeners = [
      { event: 'resize', handler: menuResizeFn },
      { event: 'resize', handler: checkHoriMenu }
    ];
    resizeEventListeners.forEach(({ event, handler }) => {
      window.addEventListener(event, handler);
    });
    const mainContent = slideArrow(".main-content");
    if (window.innerWidth <= 992) {
      if (mainContent) {
        const newState = {
          toggled: "close"
        }
        setState(newState)

      }
      else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
        closeMenu();
      }
    }
    mainContent!.addEventListener('click', menuClose);
    return () => {
      resizeEventListeners.forEach(({ event, handler }) => {
        window.removeEventListener(event, handler);
      });
      if (mainContent) {
        mainContent.removeEventListener('click', menuClose);
      }
    };
  }, []);

  const WindowPreSize = typeof window !== 'undefined' ? [window.innerWidth] : [];

  function menuResizeFn() {

    if (typeof window === 'undefined') {
      return;
    }

    WindowPreSize.push(window.innerWidth);
    if (WindowPreSize.length > 2) { WindowPreSize.shift() }

    const theme = getState();
    const currentWidth = WindowPreSize[WindowPreSize.length - 1];
    const prevWidth = WindowPreSize[WindowPreSize.length - 2];


    if (WindowPreSize.length > 1) {
      if (currentWidth < 992 && prevWidth >= 992) {
        const newState = {
          toggled: "close"
        }
        setState(newState)
      }
      if (currentWidth >= 992 && prevWidth < 992) {
        const newState = {
          toggled: theme.dataVerticalStyle === "doublemenu" ? "double-menu-open" : ""
        }
        setState(newState)
      }
    }
  }

  // Switcher Arrow Function

  function switcherArrowFn(): void {
    function slideClick(): void {
      const slide = slideArrows(".slide");
      const slideMenu = slideArrows(".slide-menu");

      slide.forEach((element) => {
        if (element.classList.contains("is-expanded")) {
          element.classList.remove("is-expanded");
        }
      });

      slideMenu.forEach((element) => {
        if (element.classList.contains("open")) {
          element.classList.remove("open");
          element.style.display = "none";
        }
      });
    }
    slideClick();
  }

  // Horizontal Menu Function

  const checkHoriMenu = () => {
    const menuNav = slideArrow(".main-menu") as HTMLElement;
    const mainContainer1 = slideArrow(".main-sidebar") as HTMLElement;

    const marginLeftValue = Math.ceil(
      Number(getComputedStyle(menuNav).marginLeft.split("px")[0])
    );
    const marginRightValue = Math.ceil(
      Number(getComputedStyle(menuNav).marginRight.split("px")[0])
    );
    const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
    } else {
      menuNav.style.marginLeft = "0px";
      menuNav.style.marginRight = "0px";
      menuNav.style.marginInlineStart = "0px";
    }

    if (!(slideArrow("html")?.getAttribute("dir") === "rtl")) {
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (Math.abs(check) < Math.abs(marginLeftValue)) {
          menuNav.style.marginLeft = -check + "px";
        }
      }

    } else {
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (Math.abs(check) < Math.abs(marginRightValue)) {
          menuNav.style.marginRight = -check + "px";
        }
      }

    }

  };

  // Slides Function

  function slideRight(): void {
    const menuNav = slideArrow(".main-menu");
    const mainContainer1 = slideArrow(".main-sidebar");

    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(getComputedStyle(menuNav).marginInlineStart.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      const local_varaiable = getState()
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dir === "rtl")) {
          if (Math.abs(check) > Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
              const slideRightButton = slideArrow("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }
            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width)) + "px";

            const slideRightButton = slideArrow("#slide-right");
            if (slideRightButton) {
              slideRightButton.classList.remove("hidden");
            }
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
              const slideRightButton = slideArrow("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }
            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width)) + "px";

            const slideLeftButton = slideArrow("#slide-left");
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }
      const element = slideArrow(".main-menu > .slide.open");
      const element1 = slideArrow(".main-menu > .slide.open > ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    }

    switcherArrowFn();
    checkHoriMenu();
  }

  function slideLeft(): void {
    const menuNav = slideArrow(".main-menu");
    const mainContainer1 = slideArrow(".main-sidebar");

    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(getComputedStyle(menuNav).marginInlineStart.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) <= Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineStart = "0px";
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineStart = "0";

            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
              const slideRightButton = slideArrow("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }
            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";

            const slideLeftButton = slideArrow("#slide-left");
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }
      const element = slideArrow(".main-menu > .slide.open");
      const element1 = slideArrow(".main-menu > .slide.open > ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    }
    switcherArrowFn();
  }

  // Handle Menu Functions

  const location: any = usePathname();

  function handleToMenu(event: any, targetObject: any, MenuItems = openMenu, state?: any, level = 0) {
    const theme = variable;
    let element = event.target;
    if ((theme.dataNavStyle != "icon-hover" && theme.dataNavStyle != "menu-hover") || (window.innerWidth < 992) || (theme.dataNavLayout != "horizontal") && (theme.toggled != "icon-hover-closed" && theme.toggled != "menu-hover-closed")) {

      for (const item of MenuItems) {
        if (item === targetObject) {
          if (theme.dataVerticalStyle == 'doublemenu' && item.active && item.children) {
            console.log(item.active = !item.active)
            return;
          }
          item.active = !item.active;

          if (item.active) {
            closeOtherMenus(MenuItems, item);
          } else {
            if (theme.dataVerticalStyle == 'doublemenu') {
              const newState = {
                toggled: 'double-menu-close'
              }
              setState(newState)
            }
          }
          setAncestorsActive(MenuItems, item);

        }
        else if (!item.active) {
          if (theme.dataVerticalStyle != 'doublemenu') {
            item.active = false;
          }
        }
        if (item.children && item.children.length > 0) {
          handleToMenu(event, targetObject, item.children, level++);
        }
      }
      if (targetObject?.children && targetObject.active) {
        if (theme.dataVerticalStyle == 'doublemenu' && theme.toggled != 'double-menu-open') {
          const newState = {
            toggled: "double-menu-open"
          }
          setState(newState)
        }
      }
      if (element && theme.dataNavLayout == 'horizontal' && (theme.dataNavStyle == 'menu-click' || theme.dataNavStyle == 'icon-click')) {
        const listItem = element.closest("li");
        if (listItem) {
          const siblingUL = listItem.querySelector("ul");
          let outterUlWidth = 0;
          let listItemUL = listItem.closest('ul:not(.main-menu)');
          while (listItemUL) {
            listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
            if (listItemUL) {
              outterUlWidth += listItemUL.clientWidth;
            }
          }
          if (siblingUL) {
            let siblingULRect = listItem.getBoundingClientRect();
            if (theme.dir == 'rtl') {
              if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            } else {
              if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            }
          }
        }
      }
    }
    setOpenMenu((arr: any) => [...arr]);
  }

  function closeOtherMenus(MenuItems: any, targetObject: any) {
    for (const item of MenuItems) {
      if (item !== targetObject) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          closeOtherMenus(item.children, targetObject);
        }
      }
    }
  }

  function setAncestorsActive(MenuItems: any, targetObject: any) {
    const theme = variable;
    const parent = findParent(MenuItems, targetObject);
    if (parent) {
      parent.active = true;
      if (parent.active) {
        const newState = {
          toggled: "double-menu-open"
        }
        setState(newState)
      }

      setAncestorsActive(MenuItems, parent);
    }

    function findParent(MenuItems: any, targetObject: any) {
      for (const item of MenuItems) {
        if (item.children && item.children.includes(targetObject)) {
          return item;
        }
        if (item.children && item.children.length > 0) {
          const parent: any = findParent(MenuItems = item.children, targetObject);
          if (parent) {
            return parent;
          }
        }
      }
      return null;
    }
  }

  let level = 0
  let hasParentLevel = 0
  let hasParent = false
  const handleClick = (event: any) => {
    event.preventDefault();
  };


  function setSubmenu(event: any, targetObject: any, MenuItems = openMenu) {
    const theme = getState();
    if ((window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") && (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")) {
      if (!event?.ctrlKey) {
        for (const item of MenuItems) {
          if (item === targetObject) {
            item.active = true;
            item.selected = true;
            setMenuAncestorsActive(item);
          } else if (!item.active && !item.selected) {
            item.active = false; // Set active to false for items not matching the target
            item.selected = false; // Set active to false for items not matching the target
          } else {
            removeActiveOtherMenus(item);
          }
          if (item.children && item.children.length > 0) {
            setSubmenu(event, targetObject, item.children);
          }
        }
      }
    }
    setOpenMenu((arr: any) => [...arr]);
  }
  function getParentObject(obj: any, childObject: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
          return obj; // Return the parent object
        }
        if (typeof obj[key] === 'object') {
          const parentObject: any = getParentObject(obj[key], childObject);
          if (parentObject !== null) {
            return parentObject;
          }
        }
      }
    }
    return null; // Object not found
  }

  function setMenuAncestorsActive(targetObject: any) {
    const parent = getParentObject(openMenu, targetObject);
    const theme = variable;
    if (parent) {
      if (hasParentLevel > 2) {
        hasParent = true;
      }
      parent.active = true;
      parent.selected = true;
      hasParentLevel += 1;
      setMenuAncestorsActive(parent);
    }
  }

  function removeActiveOtherMenus(item: any) {
    if (item) {
      if (Array.isArray(item)) {
        for (const val of item) {
          val.active = false;
          val.selected = false;
        }
      }
      item.active = false;
      item.selected = false;

      if (item.children && item.children.length > 0) {
        removeActiveOtherMenus(item.children);
      }
    }
    else {

    }
  }

  function setMenuUsingUrl(currentPath: any) {
    hasParent = false;
    hasParentLevel = 1;
    const setSubmenuRecursively = (items: any) => {

      items?.forEach((item: any) => {
        if (item.path == '') { }
        else if (item.path === currentPath) {
          setSubmenu(null, item);
        }
        setSubmenuRecursively(item.children);
      });
    };
    setSubmenuRecursively(openMenu);
  }

  const [previousUrl, setPreviousUrl] = useState("/");

  const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
  };

  useEffect(() => {

    const targetElement = getDocumentElement();
    const observer = new MutationObserver(handleAttributeChange);
    const config = { attributes: true };
    observer.observe(targetElement, config);
    let currentPath = location.endsWith("/") ? location.slice(0, -1) : location;
    if (currentPath !== previousUrl) {
      setMenuUsingUrl(currentPath);
      setPreviousUrl(currentPath);

    }
  }, [location]);

  function HoverToggleInnerMenuFn(event: any, item: any) {
    const theme = getState();
    let element = event.target;
    if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
      const listItem = element.closest("li");
      if (listItem) {
        // Find the first sibling <ul> element
        const siblingUL = listItem.querySelector("ul");
        let outterUlWidth = 0;
        let listItemUL = listItem.closest("ul:not(.main-menu)");
        while (listItemUL) {
          listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
          if (listItemUL) {
            outterUlWidth += listItemUL.clientWidth;
          }
        }
        if (siblingUL) {
          // You've found the sibling <ul> element
          let siblingULRect = listItem.getBoundingClientRect();
          if (theme.dir == "rtl") {
            if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          } else {
            if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          }
        }
      }
    }
  }

  function handleAttributeChange(mutationsList: any) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
        const newValue = mutation.target.getAttribute('data-nav-layout');
        if (newValue == 'vertical') {
          let currentPath = location.endsWith('/') ? location.slice(0, -1).replace(basePath, '') : location.replace(basePath, '');
          currentPath = !currentPath ? '/dashboard/ecommerce' : currentPath;
          setMenuUsingUrl(currentPath);
        } else {
          closeMenu();
        }
      }
    }
  }

console.log("💲💲💲 ~ Sidebar ~ openMenu:", openMenu)
  return (
    <Fragment>
      <div id="responsive-overlay" onClick={menuClose}></div>

      {/* <!-- Start::app-sidebar --> */}

      <aside className="app-sidebar sticky" id="sidebar" onMouseOver={Onhover} onMouseLeave={Outhover} >

        {/* <!-- Start::main-sidebar-header --> */}

        <div className="main-sidebar-header">
          <Link scroll={false} href="/dashboards/sales/" className="header-logo">
            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className="desktop-white" />
            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-white.png`} alt="logo" className="toggle-white" />
          </Link>
        </div>
        {/* <!-- End::main-sidebar-header --> */}

        {/* <!-- Start::main-sidebar --> */}

        <SimpleBar className="main-sidebar" id="sidebar-scroll">

          {/* <!-- Start::nav --> */}
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div className="slide-left" id="slide-left" onClick={slideLeft} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
            </div>
            <ul className="main-menu">

              {/* <!-- Start::slide --> */}

              {openMenu.map((list: any, index: any) => (
                <Fragment key={index}>
                  <li className={` ${list.menutitle ? "slide__category" : ""} ${list.type === 'link' ? 'slide' : ''} ${list.type === 'sub' ? 'slide has-sub' : ''} ${list.active ? 'open' : ''}  ${list?.selected ? 'active' : ''}  `}>
                    {list.menutitle ?
                      <span className='category-name'>{list.menutitle}</span>
                      :
                      ""}
                    {list.type === "link" ?
                      <Link href={list.path} className={`side-menu__item  ${list.selected ? 'active' : ''}`}>
                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip" className='double-menu-tooltip'>{list.title}</Tooltip>}>
                          <div className={`${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'd-none'}`}>{list.icon}</div>
                        </OverlayTrigger>
                        {local_varaiable.dataVerticalStyle != "doublemenu" ? list.icon : ""}
                        <span className="side-menu__label">{list.title} {list.badgetxt ? (<span className={list.class}> {list.badgetxt}</span>
                        ) : (
                          ""
                        )}
                        </span>
                      </Link>
                      : ""}
                    {list.type === "empty" ?
                      <Link href="#!" className='side-menu__item' onClick={handleClick}>{list.icon}<span className=""> {list.title} {list.badgetxt ? (
                        <span className={list.class}>{list.badgetxt} </span>
                      ) : (
                        ""
                      )}
                      </span>
                      </Link>
                      : ""}
                    {list.children && <Menuloop MenuItems={list} level={level + 1} handleToMenu={handleToMenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} />}
                  </li>
                </Fragment>
              ))}

              {/* <!-- End::slide --> */}

            </ul>
            <div className="slide-right" id="slide-right" onClick={slideRight} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </nav>

          {/* <!-- End::nav --> */}

        </SimpleBar>

        {/* <!-- End::main-sidebar --> */}

      </aside>

      {/* <!-- End::app-sidebar --> */}

    </Fragment>
  )
}

export default Sidebar