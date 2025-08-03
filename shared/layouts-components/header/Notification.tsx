'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';
type Props = {};
const notificationNotes = [
  {
    id: 1,
    image: '/assets/images/faces/1.jpg',
    name: 'Sonia Agarwal',
    notificationType: 'Approval',
    description: 'for the Insurance',
    time: '7 mins ago',
    status: 'text-success',
    textcolor: 'success',
  },
  {
    id: 2,
    image: '/assets/images/faces/12.jpg',
    name: 'Rajesh Kumar',
    notificationType: 'Urgent Request',
    description: 'for project',
    time: '3 hours ago',
    status: 'text-warning',
    textcolor: 'warning',
  },
  {
    id: 3,
    image: '/assets/images/faces/3.jpg',
    name: 'Ayesha Malik',
    notificationType: 'Task Completed',
    description: 'for redesign',
    time: '2 hours ago',
    status: 'text-info',
    textcolor: 'info',
  },
  {
    id: 4,
    image: '/assets/images/faces/14.jpg',
    name: 'Mohan Desai',
    notificationType: 'New Message',
    description: 'about client meeting',
    time: '15 mins ago',
    status: 'text-danger',
    textcolor: 'danger',
  },
  {
    id: 5,
    image: '/assets/images/faces/5.jpg',
    name: 'Priya Sharma',
    notificationType: 'Meeting Reminder',
    description: 'scheduled for 3:00 PM',
    time: '30 mins ago',
    status: 'text-warning',
    textcolor: 'warning',
  },
];
export default function Notification({}: Props) {
  return (
    <Dropdown
      className="header-element notifications-dropdown d-xl-inline-flex dropdown"
      align={'end'}
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
              {notificationNotes.length} Unread
            </span>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <ul>
          {notificationNotes.map((item, index) => (
            <DropdownItem as="li" className="dropdown-item" key={index}>
              <div className="d-flex align-items-start">
                <div className="pe-2">
                  <span className="avatar avatar-md offline bg-primary-transparent avatar-rounded">
                    <Image fill src={item.image} alt="img" />
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
                      </span>{' '}
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
                    >
                      <i className="ti ti-trash fs-16"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </DropdownItem>
          ))}
        </ul>
        <div
          className={`p-3 empty-header-item1 border-top ${notificationNotes.length === 0 && 'd-none'} `}
        >
          <div className="d-grid">
            <Link scroll={false} href="#!" className="btn btn-primary">
              View All
            </Link>
          </div>
        </div>
        {notificationNotes.length === 0 && (
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
  );
}
