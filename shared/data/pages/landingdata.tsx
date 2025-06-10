import { JSX } from "react";

interface CardData {
    title: string;
    subtitle: string;
    description: string;
    linkText: string;
    iconColorClass: string;
    iconClass: string;
    borderColorClass: string;
    borderOpacityClass: string;
    textColorClass: string;
  }
  
export const LandingCards: CardData[] = [
    {
      title: 'Design and',
      subtitle: 'Customization',
      description: 'We provide tailored designs to meet your business needs.',
      linkText: 'Read More',
      iconColorClass: 'bg-primary-transparent',
      iconClass: 'svg-primary',
      borderColorClass: 'primary',
      borderOpacityClass: 'border-opacity-25',
      textColorClass: 'text-primary',
    },
    {
      title: '24/7',
      subtitle: 'Support',
      description: 'Our support team is available round the clock for your assistance.',
      linkText: 'Read More',
      iconColorClass: 'bg-secondary-transparent',
      iconClass: 'svg-secondary',
      borderColorClass: 'secondary',
      borderOpacityClass: 'border-opacity-25',
      textColorClass: 'text-secondary',
    },
    {
      title: 'Innovative',
      subtitle: 'Solutions',
      description: 'We offer cutting-edge solutions to ensure business growth.',
      linkText: 'Read More',
      iconColorClass: 'bg-success-transparent',
      iconClass: 'svg-success',
      borderColorClass: 'success',
      borderOpacityClass: 'border-opacity-25',
      textColorClass: 'text-success',
    },
    {
      title: 'Reliable',
      subtitle: 'Performance',
      description: 'Our services guarantee stable and high-performance results.',
      linkText: 'Read More',
      iconColorClass: 'bg-info-transparent',
      iconClass: 'svg-info',
      borderColorClass: 'info',
      borderOpacityClass: 'border-opacity-25',
      textColorClass: 'text-info',
    },
  ];

interface Feature {
    id: number;
    title: string;
    description: string;
    colorClass: string;
    number: string;
}

export const Features: Feature[] = [
    {
        id: 1,
        title: "Extensive Industry Experience",
        description: "With over 4 years in the industry, we have honed our skills and built a reputation for delivering quality and reliability.",
        colorClass: "primary",
        number: "01."
    },
    {
        id: 2,
        title: "Dedicated Professionals",
        description: "Our team comprises skilled professionals committed to providing exceptional service and innovative solutions.",
        colorClass: "secondary",
        number: "02."
    },
    {
        id: 3,
        title: "Customized Solutions",
        description: "We believe in a personalized approach, tailoring our services to fit the unique requirements and preferences of each client.",
        colorClass: "success",
        number: "03."
    },
    {
        id: 4,
        title: "Comprehensive Support",
        description: "Our support team is available 24/7, ensuring that help is always just a call away, no matter the time or day.",
        colorClass: "info",
        number: "04."
    }
];

interface Service {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    colorClass: string;
    link: string;
}

export const Services: Service[] = [
    {
        id: 1,
        title: "Web Development",
        description: "We specialize in creating custom websites tailored to your business needs, ensuring.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M12 17v4m3.2-16.1l-.9-.4m.9 2.6l-.9.4m2.6-4.3l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9m2.6-4.3l-.9.4m.9 2.6l-.9-.4M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8" />
                    <circle cx="18" cy="6" r="3" />
                </g>
            </svg>
        ),
        colorClass: "primary",
        link: "#!",
    },
    {
        id: 2,
        title: "SEO Optimization",
        description: "Boost your website's visibility on search engines with our expert SEO strategies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-info" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="m8 11l2 2l4-4" />
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21l-4.3-4.3" />
                </g>
            </svg>
        ),
        colorClass: "info",
        link: "#!",
    },
];

export const Servicescard: Service[] = [
    {
        id: 1,
        title: "Cloud Hosting",
        description: "Get scalable cloud hosting solutions for high performance and availability.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <circle cx="12" cy="17" r="3" />
                    <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2m-4.3 2.2l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4" />
                </g>
            </svg>
        ),
        colorClass: "secondary",
        link: "#!",
    },
    {
        id: 2,
        title: "App Development",
        description: "Developing high-performance mobile applications for Android and iOS platforms.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                </g>
            </svg>
        ),
        colorClass: "success",
        link: "#!",
    },
];

export const services: Service[] = [
    {
        id: 1,
        title: "E-commerce Development",
        description: "Launch a robust online store with our e-commerce development services.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </g>
            </svg>
        ),
        colorClass: "teal",
        link: "#!",
    },
    {
        id: 2,
        title: "Digital Marketing",
        description: "Boost your brand presence with targeted digital marketing strategies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 12a9 9 0 0 1 8 8m-8-4a5 5 0 0 1 4 4m-4 0h.01" />
            </svg>
        ),
        colorClass: "pink",
        link: "#!",
    },
];

interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
    bgClass: string;
    socialLinks: {
        twitter: string;
        facebook: string;
        instagram: string;
        linkedin: string;
    };
}

export const TeamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Xavier Holt",
        role: "CHIEF FINANCIAL OFFICER",
        description: "Xavier brings over 20 years of financial expertise to the company, ensuring our financial stability and growth.",
        image: "../assets/images/faces/8.jpg",
        bgClass: "success",
        socialLinks: {
            twitter: "#!",
            facebook: "#!",
            instagram: "#!",
            linkedin: "#!",
        },
    },
    {
        id: 2,
        name: "Mateo Cruz",
        role: "HEAD OF PRODUCT DEVELOPMENT",
        description: "Mateo oversees the entire product development lifecycle, ensuring that our solutions meet market.",
        image: "../assets/images/faces/10.jpg",
        bgClass: "info",
        socialLinks: {
            twitter: "#!",
            facebook: "#!",
            instagram: "#!",
            linkedin: "#!",
        },
    },
    {
        id: 3,
        name: "Ariana Wolfe",
        role: "CHIEF OPERATIONS OFFICER",
        description: "Ariana has over a decade of experience in operational excellence and business strategies, ensuring smooth operations.",
        image: "../assets/images/faces/5.jpg",
        bgClass: "secondary",
        socialLinks: {
            twitter: "#!",
            facebook: "#!",
            instagram: "#!",
            linkedin: "#!",
        },
    },
    {
        id: 4,
        name: "Selena Rivera",
        role: "MARKETING DIRECTOR",
        description: "Selena is an expert in digital marketing strategies and brand building, helping our company reach a global audience.",
        image: "../assets/images/faces/7.jpg",
        bgClass: "primary",
        socialLinks: {
            twitter: "#!",
            facebook: "#!",
            instagram: "#!",
            linkedin: "#!",
        },
    },
];
