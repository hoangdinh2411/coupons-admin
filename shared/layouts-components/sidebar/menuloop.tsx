'use client';

import Link from 'next/link';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { data$, getState } from '../services/switcherServices';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

const Menuloop = ({ MenuItems, level, handleToMenu }: any) => {
  const handleClick = (event: any) => {
    event.preventDefault();
  };
  const pathname = usePathname();

  let [variable, setVariable] = useState(getState());

  useEffect(() => {
    const subscription = data$.subscribe((e) => {
      setVariable(e);
    });
    return () => subscription.unsubscribe();
  }, []);

  const local_varaiable = variable;

  return (
    <Fragment>
      <Link
        href="#!"
        scroll={false}
        className={`side-menu__item  ${MenuItems?.selected ? 'active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          handleToMenu(event, MenuItems, undefined, true);
        }}
      >
        {/* onMouseEnter={(event) => HoverToggleInnerMenuFn(event, MenuItems)} */}
        <i className="ri-arrow-right-s-line side-menu__angle"></i>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="button-tooltip" className="double-menu-tooltip">
              {MenuItems.title}
            </Tooltip>
          }
        >
          <div
            className={`${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'd-none'}`}
          >
            {MenuItems.icon}
          </div>
        </OverlayTrigger>
        {local_varaiable?.dataVerticalStyle != 'doublemenu'
          ? MenuItems.icon
          : ''}
        <span className={`${level == 1 ? 'side-menu__label' : ''}`}>
          {' '}
          {MenuItems.title}{' '}
          {MenuItems.badgetxt ? (
            <span className={MenuItems.class}> {MenuItems.badgetxt} </span>
          ) : (
            ''
          )}
        </span>
      </Link>
      <ul
        className={`slide-menu child${level}  ${MenuItems.active ? 'double-menu-active' : ''} ${MenuItems?.dirchange ? 'force-left' : ''} `}
        style={MenuItems.active ? { display: 'block' } : { display: 'none' }}
      >
        {level <= 1 ? (
          <li className="slide side-menu__label1">
            <Link href="#!" scroll={false}>
              {MenuItems.title}{' '}
            </Link>
          </li>
        ) : (
          ''
        )}
        {MenuItems.children.map((firstlevel: any, index: any) => (
          <li
            className={`${firstlevel.menutitle ? 'slide__category' : ''} ${firstlevel?.type == 'empty' ? 'slide' : ''} ${firstlevel?.type == 'link' ? 'slide' : ''} ${firstlevel?.type == 'sub' ? 'slide has-sub' : ''} ${firstlevel?.active ? 'open' : ''} ${firstlevel?.selected ? 'active' : ''}`}
            key={index}
          >
            {firstlevel.type === 'link' ? (
              <Link
                href={firstlevel.path}
                className={`side-menu__item ${firstlevel.selected ? 'active' : ''}`}
              >
                {firstlevel.icon}
                <span className="">
                  {' '}
                  {firstlevel.title}{' '}
                  {firstlevel.badgetxt ? (
                    <span className={firstlevel.class}>
                      {' '}
                      {firstlevel.badgetxt}
                    </span>
                  ) : (
                    ''
                  )}
                </span>
              </Link>
            ) : (
              ''
            )}
            {firstlevel.type === 'empty' ? (
              <Link
                href="#!"
                className={`side-menu__item`}
                onClick={handleClick}
              >
                {firstlevel.title} {firstlevel.icon}
              </Link>
            ) : (
              ''
            )}
            {firstlevel.type === 'sub' && (
              <Menuloop
                MenuItems={firstlevel}
                handleToMenu={handleToMenu}
                level={level + 1}
              />
            )}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Menuloop;
