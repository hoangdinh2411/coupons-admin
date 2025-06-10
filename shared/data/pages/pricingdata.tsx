
export const PricingPlans = [
  {
    planName: 'Basic Plan',
    description: 'Affordable and effective solution for small businesses.',
    price: "25",
    priceDetails: '/ Per Month',
    bgClass: 'bg-success success',
    buttonVariant: 'success',
    buttonClass: 'btn-success',
    offerBadge: '50% OFF',
    features: [
      { type: '1', name: ' Website Included', isAvailable: true },
      { type: '1 GB ', name: 'Cloud Storage', isAvailable: true },
      { type: '6 Months', name: ' Email Support', isAvailable: true },
      { type: '1', name: ' License', isAvailable: true },
      { name: 'Basic SEO Optimization', isAvailable: true },
      { name: 'Live Chat Support', isAvailable: false }
    ],
    showBadge: true,
  },
  {
    planName: 'Premium Plan',
    description: 'Perfect for businesses that require the best features.',
    price: "100",
    priceDetails: '/ Per Month',
    bgClass: 'bg-primary primary',
    buttonClass: 'btn-primary',
    buttonVariant: 'primary',
    features: [
      { type: 'Unlimited', name: ' Websites', isAvailable: true },
      { type: '10 GB', name: ' Cloud Storage', isAvailable: true },
      { type: '2 Years', name: ' Email Support', isAvailable: true },
      { type: '5', name: ' Licenses', isAvailable: true },
      { name: 'Comprehensive SEO Optimization', isAvailable: true },
      { name: '24/7 Premium Support', isAvailable: true }
    ]
  },
  {
    planName: 'Standard Plan',
    description: 'Great for growing businesses looking for more.',
    price: "50",
    priceDetails: '/ Per Month',
    bgClass: 'bg-secondary secondary',
    buttonClass: 'btn-warning',
    buttonVariant: 'secondary',
    features: [
      { type: '3', name: ' Websites Included', isAvailable: true },
      { type: '5 GB', name: ' Cloud Storage', isAvailable: true },
      { type: '1 Year', name: ' Email Support', isAvailable: true },
      { type: '2', name: ' Licenses', isAvailable: true },
      { name: 'Advanced SEO Optimization', isAvailable: true },
      { name: 'Priority Support', isAvailable: false }
    ]
  }
];

export const PricingPlanYears = [
  {
    planName: 'Basic Plan',
    description: 'Affordable and effective solution for small businesses.',
    price: "250",
    priceDetails: '/ Per Year',
    bgClass: 'bg-success success',
    buttonClass: 'btn-success',
    buttonVariant: 'success',
    offerBadge: '50% OFF',
    features: [
      { type: '1', name: ' Website Included', isAvailable: true },
      { type: '10 GB ', name: 'Cloud Storage', isAvailable: true },
      { type: '1 Year', name: ' Email Support', isAvailable: true },
      { type: '1', name: ' License', isAvailable: true },
      { name: 'Basic SEO Optimization', isAvailable: true },
      { name: 'Live Chat Support', isAvailable: false }
    ],
    showBadge: true
  },
  {
    planName: 'Premium Plan',
    description: 'Perfect for businesses that require the best features.',
    price: "1,000",
    priceDetails: '/ Per Year',
    bgClass: 'bg-primary primary',
    buttonClass: 'btn-primary',
    buttonVariant: 'primary',
    features: [
      { type: 'Unlimited ', name: ' Websites', isAvailable: true },
      { type: '100 GB', name: ' Cloud Storage', isAvailable: true },
      { type: '2 Years', name: ' Email Support', isAvailable: true },
      { type: '5', name: ' Licenses', isAvailable: true },
      { name: 'Comprehensive SEO Optimization', isAvailable: true },
      { name: '24/7 Premium Support', isAvailable: true }
    ]
  },
  {
    planName: 'Standard Plan',
    description: 'Great for growing businesses looking for more.',
    price: "500",
    priceDetails: '/ Per Year',
    bgClass: 'bg-secondary secondary',
    buttonClass: 'btn-warning',
    buttonVariant: 'warning',
    features: [
      { type: '3', name: ' Websites Included', isAvailable: true },
      { type: '50 GB', name: ' Cloud Storage', isAvailable: true },
      { type: '1 Year', name: ' Email Support', isAvailable: true },
      { type: '2', name: ' Licenses', isAvailable: true },
      { name: 'Advanced SEO Optimization', isAvailable: true },
      { name: 'Priority Support', isAvailable: false }
    ]
  }
];

export const Plans = [
  {
    planName: 'Standard',
    description: 'Access enhanced features for growing businesses.',
    price: "50",
    price1: '.00',
    priceDetails: '/ Per Month',
    features: [
      { name: ' Customer Support', type: '24/7', tooltip: 'Round-the-clock assistance for your business needs', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: ' Cloud Storage', type: '50GB', tooltip: 'Ample storage for all your project files', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Unlimited Projects', tooltip: 'Manage as many projects as needed', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Customizable Dashboard', tooltip: 'Tailor your dashboard to fit your workflow', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Free Monthly Updates', tooltip: '', badgeText: 'New', isNew: true, listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info', }
    ],
    bgClass: '',
    footerText: 'Get access to essential tools for scaling your business without breaking the bank.',
    footerClass: 'text-muted',
    buttonClass: 'btn-primary',
    svg: (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38" className="mb-3"> <path fill="rgba(var(--primary-rgb), 0.25)" fillRule="evenodd" d="M497.4 348.5c-7.7-10.3-23.8-7.6-35.6-2.4-30.7 13.4-56.7 35.9-87.1 49.8-45.3 20.8-97 21.2-146.9 21.3v-12.4c30.2-2.1 60.4-4.3 90.6-6.4 10.7-.8 21.9-1.7 31.2-7.3 9.2-5.6 15.6-17.4 11.5-27.3-5.5-13.2-23.6-14.1-37.9-13.5-35.6 1.7-71.4-.4-106.5-6.1-19-3.1-38-7.2-57.2-7.2-19.7 0-45.9 5.4-58 21.2v-4.5c0-19.7-16-35.7-35.7-35.7H47c-19.7 0-35.7 16-35.7 35.7v116.7c0 19.7 16 35.7 35.7 35.7h18.6c17.6 0 32.2-12.7 35.1-29.5 60.8-.1 121.5-.1 182.3-.2 20.1 0 40.5-.1 59.7-6.2 16-5.1 30.4-14.3 44.6-23.4 29.8-19.1 59.7-38.2 89.5-57.3 7.2-4.6 14.7-9.5 19.5-16.6 4.8-7.3 6.3-17.5 1.1-24.4z" clipRule="evenodd"></path> <path fill="rgba(var(--primary-rgb), 1)" fillRule="evenodd" d="m444.1 140.2-16.8-2c-4.3-.5-7.9-3.6-9-7.7-2.8-9.7-6.6-18.9-11.4-27.5-2.1-3.8-1.8-8.5.9-11.9l10.5-13.4c3.4-4.3 3-10.4-.9-14.3L396 42.2c-3.9-3.9-10-4.2-14.3-.9l-13.4 10.5c-3.4 2.7-8.1 3-11.9.9-10.6-5.9-22.2-10.4-34.4-13.1l-2.9-24.1c-.5-5.4-5.1-9.5-10.5-9.5h-30.1c-5.4 0-10 4.1-10.7 9.5l-2 16.8c-.5 4.3-3.6 7.9-7.7 9-9.7 2.8-18.9 6.6-27.5 11.4-3.8 2.1-8.5 1.8-11.9-.9l-13.4-10.5c-4.3-3.4-10.4-3-14.3.9l-21.3 21.2c-3.9 3.9-4.2 10-.9 14.3l10.5 13.4c2.7 3.4 3 8.1.9 11.9-4.8 8.6-8.7 17.8-11.4 27.5-1.2 4.2-4.7 7.2-9 7.7l-16.8 2c-5.4.7-9.5 5.2-9.5 10.7V181c0 5.4 4.1 10 9.5 10.7l16.8 2c4.3.5 7.9 3.6 9 7.7 2.8 9.7 6.6 18.9 11.4 27.5 2.1 3.8 1.8 8.5-.9 11.9L169 254.2c-3.4 4.3-3 10.4.9 14.3l21.3 21.3c3.9 3.9 10 4.2 14.3.9l13.3-10.5c3.4-2.7 8.1-3 11.9-.9 8.6 4.8 17.8 8.7 27.5 11.4 4.2 1.2 7.2 4.7 7.7 9l2 16.8c.7 5.4 5.2 9.5 10.7 9.5h30.1c5.4 0 10-4.1 10.7-9.5l2-16.8c.5-4.3 3.6-7.9 7.7-9 9.7-2.8 18.9-6.6 27.5-11.4 3.8-2.1 8.5-1.8 11.9.9l13.3 10.5c4.3 3.4 10.4 3 14.3-.9l21.3-21.3c3.9-3.9 4.2-10 .9-14.3l-10.5-13.4c-2.7-3.4-3-8.1-.9-11.9 4.8-8.6 8.7-17.8 11.4-27.5 1.2-4.2 4.7-7.2 9-7.7l16.8-2c5.4-.7 9.5-5.2 9.5-10.7v-30.1c-.1-5.4-4.1-10-9.5-10.7zM221.7 94.1c16.2-16.3 38-27 62.2-29.3v33.9c-29.9 4.2-53.6 27.8-58 57.6h-33.5c2.3-24.2 13-46 29.3-62.2zm62.2 173.1c-24.2-2.3-45.9-13.1-62.2-29.3-16.2-16.3-27-38-29.3-62.2h33.3c4.1 30.3 27.9 54.3 58.2 58.6v32.9zM252.8 166c0-22.5 18.2-40.7 40.7-40.7 22.5 0 40.7 18.2 40.7 40.7s-18.2 40.7-40.7 40.7c-22.4 0-40.7-18.2-40.7-40.7zm112.7 71.9c-16.3 16.2-38 27-62.2 29.3v-32.9c30.2-4.3 54.1-28.3 58.2-58.6h33.3c-2.3 24.2-13.1 45.9-29.3 62.2zm-4.2-81.6c-4.5-29.8-28.1-53.3-58-57.6V64.8c24.2 2.3 45.9 13.1 62.2 29.3 16.3 16.3 27 38 29.3 62.2h-33.5z" clipRule="evenodd"></path> </svg>
    </>
    )
  },
  {
    planName: 'Professional',
    description: 'Advanced features for professionals and growing teams.',
    price: "75",
    price1: '.00',
    planClass: 'text-fixed-white',
    planClass1: 'text-fixed-white op-7',
    priceDetails: '/ Per Month',
    features: [
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">Priority</strong> Customer Support
          </>
        ), tooltip: 'Get priority access to customer support for quicker assistance', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white'
      },
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">100GB</strong> Cloud Storage
          </>
        ), tooltip: 'Expanded storage for professional projects and media', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white'
      },
      { name: 'Advanced Analytics', tooltip: 'Get deeper insights with advanced analytics and reporting', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white' },
      { name: 'Custom Integrations', tooltip: 'Integrate with external apps and services with custom APIs', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white' },
      { name: 'Monthly Feature Updates', tooltip: '', badgeText: 'Updated', isNew: true, listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white' }
    ],
    bgClass: 'bg-primary',
    footerText: 'Unlock professional-grade tools and support, designed for teams and individuals.',
    buttonClass: 'btn-light',
    svg: (
      <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38" className="mb-3"> <path fill="rgba(255, 255, 255, .7)" d="M318.5 180.4c2.7-2 1.3-6.3-2-6.3h-41.2c-1.5 0-2.8-1-3.3-2.4l-12.7-39.1c-1-3.2-5.6-3.2-6.6 0L240 171.7c-.5 1.4-1.8 2.4-3.3 2.4h-41.2c-3.4 0-4.8 4.3-2 6.3l33.3 24.2c1.2.9 1.7 2.4 1.3 3.9l-12.7 39.1c-1 3.2 2.6 5.9 5.3 3.9l33.3-24.2c1.2-.9 2.9-.9 4.1 0l33.3 24.2c2.7 2 6.4-.7 5.3-3.9L284 208.5c-.5-1.4 0-3 1.3-3.9l33.2-24.2z"></path> <path fill="rgba(255, 255, 255, 1)" d="m438.5 180.1-31.9-18.5 22.5-29.3c4.4-5.7 1.7-12.7-5.4-14l-36.4-6.5 11.2-35.2c2.2-6.9-2.7-12.5-9.8-11.3l-36.4 6.3-1.6-36.9c-.3-7.2-6.8-10.8-13.1-7.2l-32 18.4-14.1-34.1c-2.8-6.7-10.1-7.8-14.8-2.3L253 37.7l-24.9-27.3c-4.9-5.3-12.2-3.9-14.7 2.9L200.7 48 168 30.9c-6.4-3.3-12.8.5-12.8 7.7l-.2 37-36.6-4.9c-7.2-1-11.8 4.9-9.4 11.6l12.5 34.7-36 8c-7 1.6-9.5 8.6-4.8 14.2l23.7 28.3-31.2 19.8c-6.1 3.9-5.9 11.3.3 15l31.9 18.5-22.5 29.3c-4.4 5.7-1.7 12.7 5.4 14l36.4 6.5-11.2 35.2c-2.2 6.9 2.7 12.5 9.8 11.3l36.4-6.3 1.6 36.9c.3 7.2 6.8 10.8 13.1 7.2l32-18.4 14.1 34.1c2.8 6.7 10.1 7.8 14.8 2.3l23.8-28.2L284 372c4.9 5.3 12.2 3.9 14.7-2.9l12.7-34.7 32.7 17.1c6.4 3.3 12.8-.5 12.8-7.7l.1-36.9 36.6 4.9c7.2 1 11.8-4.9 9.4-11.6l-12.5-34.7 36.1-7.9c7-1.6 9.5-8.6 4.8-14.2l-23.7-28.3 31.2-19.8c6-4.1 5.9-11.6-.4-15.2zM256 292.1c-55.8 0-101-45.2-101-101s45.2-101 101-101 101 45.2 101 101-45.2 101-101 101z"></path> <path fill="rgba(255, 255, 255, .7)" d="M380.3 336.6v7.2c0 11.6-5.8 22.1-15.3 27.8-9.6 5.8-21.5 6-31.8.6l-9.1-4.7-3.5 9.6c-1.8 5-4.7 9.3-8.4 12.8l44.5 113.7c1.3 3.2 5.8 3.3 7.1 0l18.9-47.2 45.9 21.9c3.1 1.5 6.5-1.6 5.2-4.9l-53.5-136.8zm-181.5 42.9-3.9-9.5-8.9 5.1c-10.1 5.8-22 6-31.8.6s-15.9-15.6-16.4-27.2l-.4-10.2-6.9 1.2-52.4 133.9c-1.3 3.2 2.1 6.3 5.2 4.9l45.9-21.9 18.9 47.2c1.3 3.2 5.9 3.2 7.1 0L201.6 385c-1-1.8-2-3.6-2.8-5.5z"></path> </svg>
      </>
    )
    
  },
  {
    planName: 'Business Plan',
    description: 'Comprehensive tools and resources for growth.',
    price: "150",
    price1: '.00',
    priceDetails: '/ Per Month',
    features: [
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">Dedicated</strong> Account Manager
          </>
        ), tooltip: 'Get personalized assistance from a dedicated account manager', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info'
      },
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">250GB</strong> Cloud Storage
          </>
        ), tooltip: 'High-capacity cloud storage for all your business needs', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info'
      },
      { name: 'Advanced Reporting & Analytics', tooltip: 'Access detailed reports and analytics for deeper business insights', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Team Collaboration Tools', tooltip: 'Enhance productivity with built-in collaboration features for teams', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Enterprise-Level Security', tooltip: 'Get advanced security features to protect your business', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' }
    ],
    bgClass: '',
    textColorClass: '',
    footerClass: 'text-muted',
    footerText: 'A complete solution designed for businesses looking for advanced tools and scalability.',
    buttonClass: 'btn-primary',
    ribbonText: '20% Off',
    ribbonClass: 'ribbon-success top-right',
    svg: (
      <>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38" className="mb-3"> <path fill="rgba(var(--primary-rgb), 1)" d="M209.6 339.2h67.8v139.9h-67.8zM302.8 279.9h67.8v199.2h-67.8z"></path> <path fill="rgba(var(--primary-rgb), 1)" d="m505 231.9-69.1-116.3c-2.7-4.6-9.4-4.6-12.1 0l-69.1 116.3c-2.8 4.7.6 10.6 6.1 10.6H396V479h67.8V242.6H499c5.4 0 8.8-6 6-10.7z"></path> <path fill="rgba(var(--primary-rgb), .25)" d="M9.5 254.3c3.4 5.5 8.5 9.8 13.5 14.1 18.5 15.6 37.1 31.1 55.6 46.7 2.9 48 5.8 96.1 8.7 144.1.3 4.5.6 9.2 2.7 13.3 2.1 4 6.5 7.2 11 6.5 4.3-.7 7.3-4.8 9-8.9 2.2-5.2 3.1-10.9 4-16.5 5.3-35.5 8.5-71.3 10.3-107.1 1.8 35.8 5 71.6 10.3 107.1.8 5.6 1.7 11.3 4 16.5 1.7 4.1 4.7 8.1 9 8.9 4.5.8 8.9-2.4 11-6.5 2.1-4 2.4-8.7 2.7-13.3 4.7-78.3 9.4-156.6 14.1-234.8 6.8 10.1 13.8 20.4 23.8 27.2 8.3 5.6 18.2 8.5 28 10.7 14.1 3.1 28.4 5.1 42.8 5.7 5.1.2 11.1 1.1 15.1-2.2 12.7-10.2-1-19.5-9.5-20.9-19-3.1-37.1-10.3-54.3-18.9-2.3-1.1-4.6-2.3-6.4-4.1-2.3-2.3-3.7-5.3-5.2-8.2-5.8-11.8-13.2-22.8-22-32.6-6.5-7.3-13.9-14-22.7-18.3-2.6-1.2-5.2-2.2-7.9-3-2.4-.7-4.9-1.3-7.4-1.8-.4.9-6 23.8-8.4 33.7-.6 2.6-3 4.4-5.7 4.4h-3.1l-2.9-20.7 2.2-11.2c.3-1.4-.3-2.9-1.4-3.9l-3.9-3.4c-2-1.7-5.1-1.7-7.1 0l-3.9 3.4c-1.2 1-1.7 2.5-1.4 3.9l2.2 11.2-2.9 20.7h-3.1c-2.7 0-5-1.8-5.7-4.4-2.2-9.1-7.1-29.1-8.2-33-1.5.3-3.1.6-4.6 1.1-2.7.8-5.4 1.8-7.9 3-3.7 1.8-7.2 4.1-10.5 6.7v.2c-8.8 6.2-17 13.8-23.7 20-13.4 12.3-25.4 25.9-37.3 39.5-1.8 2.1-3.7 4.2-4.8 6.7-2.9 5.9-1.5 12.9 1.9 18.4zm41.8-17c6.8-6.5 14.1-12.3 21.9-17.6v4.7c1 17.1 2.1 34.1 3.1 51.2-1.1-1.6-2.6-2.9-4.2-4.1-7-5.5-13.9-11-20.9-16.4-2.3-1.8-4.7-3.8-5.4-6.5-1-4.3 2.3-8.3 5.5-11.3z"></path> <ellipse cx="122.3" cy="107.6" fill="rgba(var(--primary-rgb), .25)" rx="34.8" ry="42.2"></ellipse> <path fill="rgba(var(--primary-rgb), .25)" fillRule="evenodd" d="M379.1 121.9c0-49.1-39.8-88.9-88.9-88.9s-88.9 39.8-88.9 88.9 39.8 88.9 88.9 88.9 88.9-39.8 88.9-88.9zm-38.2 44.7c-12.1 12-27.9 18.7-44.5 18.7-13.9 0-27.7-4.9-38.9-13.8-10.5-8.3-18.3-19.8-22-32.3h-8.1c-2.7 0-5.2-1.6-6.3-4.1l-.1-.3c-1-2.2-.8-4.6.5-6.6s3.5-3.2 5.8-3.2h5.8c-.1-1.1-.1-2.1-.1-3.1s0-2.1.1-3.1h-5.7c-2.7 0-5.2-1.6-6.3-4.1l-.1-.3c-1-2.2-.8-4.6.5-6.6s3.5-3.2 5.8-3.2h8.2c3.8-12.6 11.6-24.1 22.1-32.4 11.2-8.8 24.9-13.6 38.8-13.6 14.6 0 29 5.3 40.4 15 1.6 1.3 2.5 3.3 2.5 5.3v.1c0 2.7-1.5 5.1-4 6.3-2.5 1.1-5.3.8-7.4-1-8.9-7.5-20.1-11.6-31.5-11.6-20.3 0-38.8 13-46 31.8h63.2c2.7 0 5.2 1.6 6.3 4.1l.1.3c1 2.2.8 4.6-.5 6.6s-3.5 3.2-5.8 3.2h-66.5c-.1 1-.1 2.1-.1 3.1 0 .9 0 2 .1 3.1h75.5c2.7 0 5.2 1.6 6.3 4.1l.1.3c1 2.2.8 4.6-.5 6.6s-3.5 3.2-5.8 3.2h-72.5c7.1 18.9 25.6 31.8 46 31.8 13.7 0 25.3-4.8 34.7-14.2 1.6-1.6 3.9-2.4 6.2-2 2.2.4 4.2 1.9 5.1 4 1.2 2.7.6 5.9-1.4 7.9z" clipRule="evenodd"></path> </svg>
      </>
    )
  }
];

export const YearlyPricings = [
  {
    planName: 'Standard Plan',
    description: 'Essential features for small teams and individuals.',
    price: "265",
    price1: '.66',
    priceDetails: '/ Per Year',
    features: [
      { name: ' Customer Support', type: '24/7', tooltip: 'Round-the-clock assistance for your business needs', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: ' Cloud Storage', type: '40GB', tooltip: 'Ample storage for all your project files', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Unlimited Projects', tooltip: 'Manage as many projects as needed', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Customizable Dashboard', tooltip: 'Tailor your dashboard to fit your workflow', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Free Monthly Updates', tooltip: '', badgeText: 'New', isNew: true, listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info', }
    ],
    bgClass: '',
    footerText: 'Get access to essential tools for scaling your business without breaking the bank.',
    footerClass: 'text-muted',
    buttonClass: 'btn-primary',
    svg: (
      <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38" className="mb-3"> <path fill="rgba(var(--primary-rgb), 0.25)" fillRule="evenodd" d="M497.4 348.5c-7.7-10.3-23.8-7.6-35.6-2.4-30.7 13.4-56.7 35.9-87.1 49.8-45.3 20.8-97 21.2-146.9 21.3v-12.4c30.2-2.1 60.4-4.3 90.6-6.4 10.7-.8 21.9-1.7 31.2-7.3 9.2-5.6 15.6-17.4 11.5-27.3-5.5-13.2-23.6-14.1-37.9-13.5-35.6 1.7-71.4-.4-106.5-6.1-19-3.1-38-7.2-57.2-7.2-19.7 0-45.9 5.4-58 21.2v-4.5c0-19.7-16-35.7-35.7-35.7H47c-19.7 0-35.7 16-35.7 35.7v116.7c0 19.7 16 35.7 35.7 35.7h18.6c17.6 0 32.2-12.7 35.1-29.5 60.8-.1 121.5-.1 182.3-.2 20.1 0 40.5-.1 59.7-6.2 16-5.1 30.4-14.3 44.6-23.4 29.8-19.1 59.7-38.2 89.5-57.3 7.2-4.6 14.7-9.5 19.5-16.6 4.8-7.3 6.3-17.5 1.1-24.4z" clipRule="evenodd"></path> <path fill="rgba(var(--primary-rgb), 1)" fillRule="evenodd" d="m444.1 140.2-16.8-2c-4.3-.5-7.9-3.6-9-7.7-2.8-9.7-6.6-18.9-11.4-27.5-2.1-3.8-1.8-8.5.9-11.9l10.5-13.4c3.4-4.3 3-10.4-.9-14.3L396 42.2c-3.9-3.9-10-4.2-14.3-.9l-13.4 10.5c-3.4 2.7-8.1 3-11.9.9-10.6-5.9-22.2-10.4-34.4-13.1l-2.9-24.1c-.5-5.4-5.1-9.5-10.5-9.5h-30.1c-5.4 0-10 4.1-10.7 9.5l-2 16.8c-.5 4.3-3.6 7.9-7.7 9-9.7 2.8-18.9 6.6-27.5 11.4-3.8 2.1-8.5 1.8-11.9-.9l-13.4-10.5c-4.3-3.4-10.4-3-14.3.9l-21.3 21.2c-3.9 3.9-4.2 10-.9 14.3l10.5 13.4c2.7 3.4 3 8.1.9 11.9-4.8 8.6-8.7 17.8-11.4 27.5-1.2 4.2-4.7 7.2-9 7.7l-16.8 2c-5.4.7-9.5 5.2-9.5 10.7V181c0 5.4 4.1 10 9.5 10.7l16.8 2c4.3.5 7.9 3.6 9 7.7 2.8 9.7 6.6 18.9 11.4 27.5 2.1 3.8 1.8 8.5-.9 11.9L169 254.2c-3.4 4.3-3 10.4.9 14.3l21.3 21.3c3.9 3.9 10 4.2 14.3.9l13.3-10.5c3.4-2.7 8.1-3 11.9-.9 8.6 4.8 17.8 8.7 27.5 11.4 4.2 1.2 7.2 4.7 7.7 9l2 16.8c.7 5.4 5.2 9.5 10.7 9.5h30.1c5.4 0 10-4.1 10.7-9.5l2-16.8c.5-4.3 3.6-7.9 7.7-9 9.7-2.8 18.9-6.6 27.5-11.4 3.8-2.1 8.5-1.8 11.9.9l13.3 10.5c4.3 3.4 10.4 3 14.3-.9l21.3-21.3c3.9-3.9 4.2-10 .9-14.3l-10.5-13.4c-2.7-3.4-3-8.1-.9-11.9 4.8-8.6 8.7-17.8 11.4-27.5 1.2-4.2 4.7-7.2 9-7.7l16.8-2c5.4-.7 9.5-5.2 9.5-10.7v-30.1c-.1-5.4-4.1-10-9.5-10.7zM221.7 94.1c16.2-16.3 38-27 62.2-29.3v33.9c-29.9 4.2-53.6 27.8-58 57.6h-33.5c2.3-24.2 13-46 29.3-62.2zm62.2 173.1c-24.2-2.3-45.9-13.1-62.2-29.3-16.2-16.3-27-38-29.3-62.2h33.3c4.1 30.3 27.9 54.3 58.2 58.6v32.9zM252.8 166c0-22.5 18.2-40.7 40.7-40.7 22.5 0 40.7 18.2 40.7 40.7s-18.2 40.7-40.7 40.7c-22.4 0-40.7-18.2-40.7-40.7zm112.7 71.9c-16.3 16.2-38 27-62.2 29.3v-32.9c30.2-4.3 54.1-28.3 58.2-58.6h33.3c-2.3 24.2-13.1 45.9-29.3 62.2zm-4.2-81.6c-4.5-29.8-28.1-53.3-58-57.6V64.8c24.2 2.3 45.9 13.1 62.2 29.3 16.3 16.3 27 38 29.3 62.2h-33.5z" clipRule="evenodd"></path> </svg>
      </>
    )
  },
  {
    planName: 'Professional',
    description: 'Advanced features for professionals and growing teams.',
    price: "275",
    price1: '.00',
    planClass: 'text-fixed-white',
    planClass1: 'text-fixed-white op-7',
    priceDetails: '/ Per Year',
    features: [
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">Priority</strong> Customer Support
          </>
        ), tooltip: 'Get priority access to customer support for quicker assistance', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white'
      },
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">100GB</strong> Cloud Storage
          </>
        ), tooltip: 'Expanded storage for professional projects and media', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white'
      },
      { name: 'Advanced Analytics', tooltip: 'Get deeper insights with advanced analytics and reporting', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white' },
      { name: 'Custom Integrations', tooltip: 'Integrate with external apps and services with custom APIs', listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white' },
      { name: 'Monthly Feature Updates', tooltip: '', badgeText: 'Updated', isNew: true, listClass: 'bg-white-transparent text-fixed-white border-white border-opacity-10', iconClass: 'text-fixed-white op-7', iconClass1: 'text-fixed-white' }
    ],
    bgClass: 'bg-primary',
    footerText: 'Unlock professional-grade tools and support, designed for teams and individuals.',
    buttonClass: 'btn-light',
    svg: (
      <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38" className="mb-3"> <path fill="rgba(255, 255, 255, .7)" d="M318.5 180.4c2.7-2 1.3-6.3-2-6.3h-41.2c-1.5 0-2.8-1-3.3-2.4l-12.7-39.1c-1-3.2-5.6-3.2-6.6 0L240 171.7c-.5 1.4-1.8 2.4-3.3 2.4h-41.2c-3.4 0-4.8 4.3-2 6.3l33.3 24.2c1.2.9 1.7 2.4 1.3 3.9l-12.7 39.1c-1 3.2 2.6 5.9 5.3 3.9l33.3-24.2c1.2-.9 2.9-.9 4.1 0l33.3 24.2c2.7 2 6.4-.7 5.3-3.9L284 208.5c-.5-1.4 0-3 1.3-3.9l33.2-24.2z"></path> <path fill="rgba(255, 255, 255, 1)" d="m438.5 180.1-31.9-18.5 22.5-29.3c4.4-5.7 1.7-12.7-5.4-14l-36.4-6.5 11.2-35.2c2.2-6.9-2.7-12.5-9.8-11.3l-36.4 6.3-1.6-36.9c-.3-7.2-6.8-10.8-13.1-7.2l-32 18.4-14.1-34.1c-2.8-6.7-10.1-7.8-14.8-2.3L253 37.7l-24.9-27.3c-4.9-5.3-12.2-3.9-14.7 2.9L200.7 48 168 30.9c-6.4-3.3-12.8.5-12.8 7.7l-.2 37-36.6-4.9c-7.2-1-11.8 4.9-9.4 11.6l12.5 34.7-36 8c-7 1.6-9.5 8.6-4.8 14.2l23.7 28.3-31.2 19.8c-6.1 3.9-5.9 11.3.3 15l31.9 18.5-22.5 29.3c-4.4 5.7-1.7 12.7 5.4 14l36.4 6.5-11.2 35.2c-2.2 6.9 2.7 12.5 9.8 11.3l36.4-6.3 1.6 36.9c.3 7.2 6.8 10.8 13.1 7.2l32-18.4 14.1 34.1c2.8 6.7 10.1 7.8 14.8 2.3l23.8-28.2L284 372c4.9 5.3 12.2 3.9 14.7-2.9l12.7-34.7 32.7 17.1c6.4 3.3 12.8-.5 12.8-7.7l.1-36.9 36.6 4.9c7.2 1 11.8-4.9 9.4-11.6l-12.5-34.7 36.1-7.9c7-1.6 9.5-8.6 4.8-14.2l-23.7-28.3 31.2-19.8c6-4.1 5.9-11.6-.4-15.2zM256 292.1c-55.8 0-101-45.2-101-101s45.2-101 101-101 101 45.2 101 101-45.2 101-101 101z"></path> <path fill="rgba(255, 255, 255, .7)" d="M380.3 336.6v7.2c0 11.6-5.8 22.1-15.3 27.8-9.6 5.8-21.5 6-31.8.6l-9.1-4.7-3.5 9.6c-1.8 5-4.7 9.3-8.4 12.8l44.5 113.7c1.3 3.2 5.8 3.3 7.1 0l18.9-47.2 45.9 21.9c3.1 1.5 6.5-1.6 5.2-4.9l-53.5-136.8zm-181.5 42.9-3.9-9.5-8.9 5.1c-10.1 5.8-22 6-31.8.6s-15.9-15.6-16.4-27.2l-.4-10.2-6.9 1.2-52.4 133.9c-1.3 3.2 2.1 6.3 5.2 4.9l45.9-21.9 18.9 47.2c1.3 3.2 5.9 3.2 7.1 0L201.6 385c-1-1.8-2-3.6-2.8-5.5z"></path> </svg>
      </>
    )
  },
  {
    planName: 'Business Plan',
    description: 'Comprehensive tools and resources for growth.',
    price: "250",
    price1: '.89',
    priceDetails: '/ Per Year',
    features: [
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">Dedicated</strong> Account Manager
          </>
        ), tooltip: 'Get personalized assistance from a dedicated account manager', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info'
      },
      {
        name: (
          <>
            <strong className="me-1 d-inline-block">250GB</strong> Cloud Storage
          </>
        ), tooltip: 'High-capacity cloud storage for all your business needs', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info'
      },
      { name: 'Advanced Reporting & Analytics', tooltip: 'Access detailed reports and analytics for deeper business insights', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Team Collaboration Tools', tooltip: 'Enhance productivity with built-in collaboration features for teams', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' },
      { name: 'Enterprise-Level Security', tooltip: 'Get advanced security features to protect your business', listClass: 'bg-light', iconClass: 'text-success', iconClass1: 'text-info' }
    ],
    bgClass: '',
    textColorClass: '',
    footerClass: 'text-muted',
    footerText: 'A complete solution designed for businesses looking for advanced tools and scalability.',
    buttonClass: 'btn-primary',
    ribbonText: '20% Off',
    ribbonClass: 'ribbon-success top-right',
    svg: (
      <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38" className="mb-3"> <path fill="rgba(var(--primary-rgb), 1)" d="M209.6 339.2h67.8v139.9h-67.8zM302.8 279.9h67.8v199.2h-67.8z"></path> <path fill="rgba(var(--primary-rgb), 1)" d="m505 231.9-69.1-116.3c-2.7-4.6-9.4-4.6-12.1 0l-69.1 116.3c-2.8 4.7.6 10.6 6.1 10.6H396V479h67.8V242.6H499c5.4 0 8.8-6 6-10.7z"></path> <path fill="rgba(var(--primary-rgb), .25)" d="M9.5 254.3c3.4 5.5 8.5 9.8 13.5 14.1 18.5 15.6 37.1 31.1 55.6 46.7 2.9 48 5.8 96.1 8.7 144.1.3 4.5.6 9.2 2.7 13.3 2.1 4 6.5 7.2 11 6.5 4.3-.7 7.3-4.8 9-8.9 2.2-5.2 3.1-10.9 4-16.5 5.3-35.5 8.5-71.3 10.3-107.1 1.8 35.8 5 71.6 10.3 107.1.8 5.6 1.7 11.3 4 16.5 1.7 4.1 4.7 8.1 9 8.9 4.5.8 8.9-2.4 11-6.5 2.1-4 2.4-8.7 2.7-13.3 4.7-78.3 9.4-156.6 14.1-234.8 6.8 10.1 13.8 20.4 23.8 27.2 8.3 5.6 18.2 8.5 28 10.7 14.1 3.1 28.4 5.1 42.8 5.7 5.1.2 11.1 1.1 15.1-2.2 12.7-10.2-1-19.5-9.5-20.9-19-3.1-37.1-10.3-54.3-18.9-2.3-1.1-4.6-2.3-6.4-4.1-2.3-2.3-3.7-5.3-5.2-8.2-5.8-11.8-13.2-22.8-22-32.6-6.5-7.3-13.9-14-22.7-18.3-2.6-1.2-5.2-2.2-7.9-3-2.4-.7-4.9-1.3-7.4-1.8-.4.9-6 23.8-8.4 33.7-.6 2.6-3 4.4-5.7 4.4h-3.1l-2.9-20.7 2.2-11.2c.3-1.4-.3-2.9-1.4-3.9l-3.9-3.4c-2-1.7-5.1-1.7-7.1 0l-3.9 3.4c-1.2 1-1.7 2.5-1.4 3.9l2.2 11.2-2.9 20.7h-3.1c-2.7 0-5-1.8-5.7-4.4-2.2-9.1-7.1-29.1-8.2-33-1.5.3-3.1.6-4.6 1.1-2.7.8-5.4 1.8-7.9 3-3.7 1.8-7.2 4.1-10.5 6.7v.2c-8.8 6.2-17 13.8-23.7 20-13.4 12.3-25.4 25.9-37.3 39.5-1.8 2.1-3.7 4.2-4.8 6.7-2.9 5.9-1.5 12.9 1.9 18.4zm41.8-17c6.8-6.5 14.1-12.3 21.9-17.6v4.7c1 17.1 2.1 34.1 3.1 51.2-1.1-1.6-2.6-2.9-4.2-4.1-7-5.5-13.9-11-20.9-16.4-2.3-1.8-4.7-3.8-5.4-6.5-1-4.3 2.3-8.3 5.5-11.3z"></path> <ellipse cx="122.3" cy="107.6" fill="rgba(var(--primary-rgb), .25)" rx="34.8" ry="42.2"></ellipse> <path fill="rgba(var(--primary-rgb), .25)" fillRule="evenodd" d="M379.1 121.9c0-49.1-39.8-88.9-88.9-88.9s-88.9 39.8-88.9 88.9 39.8 88.9 88.9 88.9 88.9-39.8 88.9-88.9zm-38.2 44.7c-12.1 12-27.9 18.7-44.5 18.7-13.9 0-27.7-4.9-38.9-13.8-10.5-8.3-18.3-19.8-22-32.3h-8.1c-2.7 0-5.2-1.6-6.3-4.1l-.1-.3c-1-2.2-.8-4.6.5-6.6s3.5-3.2 5.8-3.2h5.8c-.1-1.1-.1-2.1-.1-3.1s0-2.1.1-3.1h-5.7c-2.7 0-5.2-1.6-6.3-4.1l-.1-.3c-1-2.2-.8-4.6.5-6.6s3.5-3.2 5.8-3.2h8.2c3.8-12.6 11.6-24.1 22.1-32.4 11.2-8.8 24.9-13.6 38.8-13.6 14.6 0 29 5.3 40.4 15 1.6 1.3 2.5 3.3 2.5 5.3v.1c0 2.7-1.5 5.1-4 6.3-2.5 1.1-5.3.8-7.4-1-8.9-7.5-20.1-11.6-31.5-11.6-20.3 0-38.8 13-46 31.8h63.2c2.7 0 5.2 1.6 6.3 4.1l.1.3c1 2.2.8 4.6-.5 6.6s-3.5 3.2-5.8 3.2h-66.5c-.1 1-.1 2.1-.1 3.1 0 .9 0 2 .1 3.1h75.5c2.7 0 5.2 1.6 6.3 4.1l.1.3c1 2.2.8 4.6-.5 6.6s-3.5 3.2-5.8 3.2h-72.5c7.1 18.9 25.6 31.8 46 31.8 13.7 0 25.3-4.8 34.7-14.2 1.6-1.6 3.9-2.4 6.2-2 2.2.4 4.2 1.9 5.1 4 1.2 2.7.6 5.9-1.4 7.9z" clipRule="evenodd"></path> </svg>
      </>
    )
  }
]