import { APP_ROUTE } from '@/constants/route';

const Dashboardicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#5f6368"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"></path>
    <path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"></path>
  </svg>
);

const NestedmenuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#5f6368"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3"></path>
    <path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"></path>
  </svg>
);
const StoreIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24"
    width="24"
    fill="#5f6368"
  >
    <path d="M20 6H4l-2 4v2h20v-2l-2-4zM4 18v2h5v-2h6v2h5v-2H4z" />
  </svg>
);

const CategoryIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24"
    width="24"
    fill="#5f6368"
  >
    <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v4h-8V3zm0 6h8v12h-8V9z" />
  </svg>
);

const CouponIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24"
    width="24"
    fill="#5f6368"
  >
    <path d="M21 5H3v14h18V5zm-2 12H5V7h14v10zM7 9h2v2H7zm0 4h2v2H7zm4-4h6v1h-6zm0 4h6v1h-6z" />
  </svg>
);

const PostIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24"
    width="24"
    fill="#5f6368"
  >
    <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
  </svg>
);

export const MENUITEMS: any = [
  {
    title: 'Dashboard',
    icon: Dashboardicon,
    active: false,
    type: 'link',
    dirchange: false,
    selected: true,
    path: APP_ROUTE.DASHBOARD,
  },
  {
    title: 'Store',
    icon: StoreIcon,
    type: 'sub',
    active: false,
    dirchange: false,
    // path: '/stores',
    children: [
      {
        title: 'List',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.STORES,
      },
      {
        title: 'Add New',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.ADD_STORE,
      },
    ],
  },
  {
    title: 'Coupons',
    icon: CouponIcon,
    type: 'sub',
    active: false,
    dirchange: false,
    path: APP_ROUTE.COUPONS,
    // path: '/coupons',
    children: [
      {
        title: 'List',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.COUPONS,
      },
      {
        title: 'Submit',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.SUBMIT_COUPON,
      },
      {
        title: 'Add new',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.ADD_COUPON,
      },
    ],
  },
  {
    title: 'Blogs',
    icon: PostIcon,
    type: 'sub',
    active: false,
    dirchange: false,
    path: APP_ROUTE.BLOG,
    children: [
      {
        title: 'List',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.BLOG,
      },
      {
        title: 'Create blog',
        type: 'link',
        active: false,
        dirchange: false,
        children: [],
        path: APP_ROUTE.CREATE_BLOG,
      },
    ],
  },
  {
    title: 'Category',
    icon: CategoryIcon,
    active: false,
    dirchange: false,
    type: 'link',
    path: '/categories',
  },
];
