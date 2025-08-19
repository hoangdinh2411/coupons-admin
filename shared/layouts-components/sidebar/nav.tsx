import { APP_ROUTE } from '@/constants/route';
import { ROLES } from '@/types/enum';

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
const Pageicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#5f6368"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
      opacity=".3"
    ></path>
    <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
  </svg>
);

const BlogIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-journal-richtext side-menu__icon"
    viewBox="0 0 16 16"
  >
    <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
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
    <path d="M21 5H3v14h18V5zm-2 12H5V7h14v10zM7 9h2v2H7zm0 4h2v2H7zm4-4h6v1h-6zm0 4h6v1h-6z" />
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
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-code-square side-menu__icon"
    viewBox="0 0 16 16"
  >
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
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
    roles: [ROLES.ADMIN, ROLES.PARTNER],
  },
  {
    title: 'Category',
    icon: CategoryIcon,
    active: false,
    dirchange: false,
    type: 'link',
    path: APP_ROUTE.CATEGORY,
    roles: [ROLES.ADMIN],
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
        path: APP_ROUTE.STORES,
      },
      {
        title: 'Add New',
        type: 'link',
        active: false,
        dirchange: false,
        path: APP_ROUTE.ADD_STORE,
      },
    ],
    roles: [ROLES.ADMIN],
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
        path: APP_ROUTE.COUPONS,
      },
      {
        title: 'Submit',
        type: 'link',
        active: false,
        dirchange: false,
        path: APP_ROUTE.SUBMIT_COUPON,
      },
      {
        title: 'Add new',
        type: 'link',
        active: false,
        dirchange: false,
        path: APP_ROUTE.ADD_COUPON,
      },
    ],
    roles: [ROLES.ADMIN],
  },

  {
    title: 'Blogs',
    icon: BlogIcon,
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
        path: APP_ROUTE.BLOG,
      },
      {
        title: 'Create blog',
        type: 'link',
        active: false,
        dirchange: false,
        path: APP_ROUTE.CREATE_BLOG,
      },
      {
        title: 'Topic',
        active: false,
        dirchange: false,
        type: 'link',
        path: APP_ROUTE.TOPIC,
      },
    ],
    roles: [ROLES.ADMIN, ROLES.PARTNER],
  },
  {
    title: 'Dynamic Pages',
    icon: Pageicon,
    type: 'sub',
    active: false,
    dirchange: false,
    path: APP_ROUTE.DYNAMIC_PAGES,
    children: [
      {
        title: 'List',
        type: 'link',
        active: false,
        dirchange: false,
        path: APP_ROUTE.DYNAMIC_PAGES,
      },
      {
        title: 'Create page',
        type: 'link',
        active: false,
        dirchange: false,
        path: APP_ROUTE.CREATE_DYNAMIC_PAGE,
      },
    ],
    roles: [ROLES.ADMIN, ROLES.PARTNER],
  },
];
