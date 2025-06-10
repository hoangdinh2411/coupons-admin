import { JSX } from "react";


interface Event {
    date: string;
    time: string;
    avatarImage: string;
    title: string;
    description: string;
    badgeText: string;
    iconColor: string;
    iconBg: string;
    svgPath: string;
}
export const notifications: Event[] = [
    {
        date: "Friday",
        time: "02:31",
        avatarImage: "../../assets/images/faces/1.jpg",
        title: "Event: Launch Party",
        description: "Join us for a night of celebration as we unveil our latest product/service. There will be music, food, and exciting surprises!",
        badgeText: "April 15, 2024",
        iconColor: "primary",
        iconBg: "bg-primary-transparent",
        svgPath: "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#000000' viewBox='0 0 256 256'><path d='M81.77,55c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,88,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,88,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C70.37,74.81,73.38,65.43,81.77,55Zm31.06,27.89c2.88,9.43,11.79,12.45,12.79,12.76A8.11,8.11,0,0,0,128,96a8,8,0,0,0,2.5-15.6s-2-.76-2.39-2.25c-.55-2,.77-6.48,6.12-13.14,8.39-10.44,11.4-19.82,8.94-27.89-2.88-9.43-11.78-12.45-12.79-12.76A8.11,8.11,0,0,0,128,24a8,8,0,0,0-2.54,15.59s2,.77,2.43,2.26c.55,2-.77,6.48-6.12,13.14C113.38,65.43,110.37,74.81,112.83,82.88Zm40,0c2.88,9.43,11.79,12.45,12.79,12.76A8.11,8.11,0,0,0,168,96a8,8,0,0,0,2.5-15.6s-2-.76-2.39-2.25c-.55-2,.77-6.48,6.12-13.14,8.39-10.44,11.4-19.82,8.94-27.89-2.88-9.43-11.78-12.45-12.79-12.76A8.11,8.11,0,0,0,168,24a8,8,0,0,0-2.54,15.59s2,.77,2.43,2.26c.55,2-.77,6.48-6.12,13.14C153.38,65.43,150.37,74.81,152.83,82.88ZM224,112H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V216a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,120,8,8,0,0,0,224,112Z'></path></svg>"
    },
    {
        date: "Monday",
        time: "08:47",
        avatarImage: "../../assets/images/faces/15.jpg",
        title: "Milestone: Company Establishment",
        description: "Our journey began on this day when we officially established [Your Company Name]. Cheers to the years of growth and success!",
        badgeText: "January 1, 2020",
        iconColor: "secondary",
        iconBg: "bg-secondary-transparent",
        svgPath: "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#000000' viewBox='0 0 256 256'><path d='M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM80,72H96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm64,88H88V160h48Zm8-80H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-40H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm72,120H184V96h32Z'></path></svg>"
    },
    {
        date: "Yesterday",
        time: "18:43",
        avatarImage: "../../assets/images/faces/2.jpg",
        title: "Achievement: 10,000 Followers",
        description: "We've hit a milestone! Thanks to each and every one of our followers for being part of our community. Here's to the next 10,000!",
        badgeText: "June 1, 2022",
        iconColor: "success",
        iconBg: "bg-success-transparent",
        svgPath: "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#000000' viewBox='0 0 256 256'><path d='M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z'></path></svg>"
    },
    {
        date: "Today",
        time: "03:18",
        avatarImage: "../../assets/images/faces/8.jpg",
        title: "Product Launch: Innovation X",
        description: "Introducing Innovation X, our latest creation that will revolutionize the industry! Get ready to experience the future of technology.",
        badgeText: "December 10, 2024",
        iconColor: "info",
        iconBg: "bg-info-transparent",
        svgPath: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26ZM65.14,161.13l19.2-52.79,63.32,63.32-52.8,19.2ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"></path></svg>'
    },
    {
        date: "Today",
        time: "04:11",
        avatarImage: "../../assets/images/faces/6.jpg",
        title: "Community Engagement: Charity Event",
        description: "Proud to give back to the community! Our team organized a charity event to support [Charity Name]. Together, we can make a difference.",
        badgeText: "December 12, 2022",
        iconColor: "pink",
        iconBg: "bg-pink-transparent",
        svgPath: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,64V56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm82.56,103.07a143.52,143.52,0,0,1-24.77,16.51,4,4,0,0,1-3.58,0,143.52,143.52,0,0,1-24.77-16.51C84.56,153,76,138.51,76,124a28,28,0,0,1,52-14.41A28,28,0,0,1,180,124C180,138.51,171.44,153,154.56,167.07ZM184,64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z"></path></svg>'
    },
    {
        date: "Today",
        time: "12:24",
        avatarImage: "../../assets/images/faces/13.jpg",
        title: "Team Building Retreat",
        description: "Our team took a break to recharge and bond. We came back stronger and more motivated than ever to bring you top-notch products/services!",
        badgeText: "November 5-7, 2021",
        iconColor: "warning",
        iconBg: "bg-warning-transparent",
        svgPath: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path></svg>'
    },
    {
        date: "Today",
        time: "02:52",
        avatarImage: "../../assets/images/faces/11.jpg",
        title: "Industry Conference: Blue Ribbon Conference",
        description: "Our team attended Blue Ribbon Conference, gaining valuable insights and networking with industry leaders. Exciting times ahead!",
        badgeText: "March 5-8, 2022",
        iconColor: "danger",
        iconBg: "bg-danger-transparent",
        svgPath: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM104,144a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm24,96a8,8,0,1,1,8-8A8,8,0,0,1,128,240Zm8-96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM40,64V48H216V64H40Z"></path></svg>'
    },
];

interface Milestone {
    year: string;
    date: string;
    title: string;
    description: string;
    avatarImage: string;
    circleColor: string;
    stepNumber: number;
    cardClass: string;
    cardBodyClass: string;
    content: string;
}
export const timelineData1: Milestone[] = [
    {
        year: "2003",
        date: "October 6, 2024",
        title: "Planning",
        description: "Research and competitor analysis.",
        avatarImage: "../../assets/images/faces/11.jpg",
        circleColor: "primary",
        stepNumber: 1,
        cardClass: "border-primary",
        cardBodyClass: "bg-primary-transparent",
        content: "And here's some amazing content. It's very engaging. Right?"
    },
    {
        year: "2004",
        date: "September 12, 2024",
        title: "Design",
        description: "Frontend and backend components.",
        avatarImage: "../../assets/images/faces/1.jpg",
        circleColor: "secondary",
        stepNumber: 2,
        cardClass: "border-secondary",
        cardBodyClass: "bg-secondary-transparent",
        content: "And here's some amazing content. It's very engaging. Right?"
    },
    {
        year: "2005",
        date: "July 20, 2024",
        title: "Testing",
        description: "Conducted comprehensive testing.",
        avatarImage: "../../assets/images/faces/12.jpg",
        circleColor: "success",
        stepNumber: 3,
        cardClass: "border-success",
        cardBodyClass: "bg-success-transparent",
        content: "And here's some amazing content. It's very engaging. Right?"
    },
    {
        year: "2010",
        date: "May 18, 2024",
        title: "Deployment",
        description: "Conducted final checks.",
        avatarImage: "../../assets/images/faces/3.jpg",
        circleColor: "info",
        stepNumber: 4,
        cardClass: "border-info",
        cardBodyClass: "bg-info-transparent",
        content: "And here's some amazing content. It's very engaging. Right?"
    },
    {
        year: "2020",
        date: "April 5, 2024",
        title: "Post-Launch",
        description: "Provided ongoing support.",
        avatarImage: "../../assets/images/faces/14.jpg",
        circleColor: "warning",
        stepNumber: 5,
        cardClass: "border-warning",
        cardBodyClass: "bg-warning-transparent",
        content: "And here's some amazing content. It's very engaging. Right?"
    }
];

interface Action {
    label: string;
    link: string;
}

interface User {
    name: string;
    avatar: string;
}

interface Media {
    fileName?: string;
    size?: string;
    link: string;
}

interface Event1 {
    step?: number;
    time?: string;
    date?: string;
    description?: string;
    details?: string;
    user?: User;
    actions?: Action[];
    color?: string;
    iconColor?: string;
    icon?: JSX.Element;
    backdropBlur?: boolean;
    right?: boolean;
    media?: Media[];
}
export const SteptimelineData: Event1[] = [
    {
        step: 1,
        time: '12:37PM',
        date: '2024-03-10',
        description: 'Melissa Blue liked your post travel excites.',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam.',
        user: {
            name: 'Wide Warner',
            avatar: '../../assets/images/faces/1.jpg',
        },
        actions: [
            { label: 'Action', link: 'javascript:void(0);' },
            { label: 'Another action', link: 'javascript:void(0);' },
            { label: 'Something else here', link: 'javascript:void(0);' },
        ],
        right: true,
        backdropBlur: false,
    },
    {
        step: 2,
        time: '10:15AM',
        date: '2024-10-05',
        description: 'You Commented on Peter Engola post #Mother Nature.',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam.',
        user: {
            name: 'Alicia Mike',
            avatar: '../../assets/images/faces/2.jpg',
        },
        actions: [
            { label: 'Action', link: 'javascript:void(0);' },
            { label: 'Another action', link: 'javascript:void(0);' },
            { label: 'Something else here', link: 'javascript:void(0);' },
        ],
        right: false,
        backdropBlur: false,
    },
    {
        color: 'bg-secondary',
        iconColor: 'bg-secondary',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M216,83.31V208a8,8,0,0,1-8,8H176V152a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v64H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z" opacity="0.2"></path>
                <path d="M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>
            </svg>
        ),
        backdropBlur: true,
    },
    {
        step: 3,
        time: '17:25PM',
        date: '2024-09-21',
        description: 'Alicia Keys shared a document with you.',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam.',
        media: [
            { fileName: '3.png', size: '432.87KB', link: 'javascript:void(0);' },
        ],
        user: {
            name: 'Mukesh Karna',
            avatar: '../../assets/images/faces/3.jpg',
        },
        actions: [
            { label: 'Action', link: 'javascript:void(0);' },
            { label: 'Another action', link: 'javascript:void(0);' },
            { label: 'Something else here', link: 'javascript:void(0);' },
        ],
        right: true,
        backdropBlur: false,
    },
    {
        step: 4,
        time: '11:55AM',
        date: '2024-02-05',
        description: 'Admin and other team accepted your work request',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam.',
        user: {
            name: 'Dwayne Bero',
            avatar: '../../assets/images/faces/6.jpg',
        },
        actions: [
            { label: 'Action', link: 'javascript:void(0);' },
            { label: 'Another action', link: 'javascript:void(0);' },
            { label: 'Something else here', link: 'javascript:void(0);' },
        ],
        right: false
        ,
        backdropBlur: false,
    },
    {
        color: 'bg-success',
        iconColor: 'bg-success',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M224,56v82.06l-23.72-23.72a8,8,0,0,0-11.31,0L163.31,140,113.66,90.34a8,8,0,0,0-11.32,0L64,128.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path>
                <path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,56H216v62.75l-10.07-10.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L72,109.37ZM184,200H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V132l36-36,49.66,49.66a8,8,0,0,0,11.31,0L194.63,120,216,141.38V168ZM160,84a12,12,0,1,1,12,12A12,12,0,0,1,160,84Z"></path>
            </svg>
        ),
        backdropBlur: true,
    },
    {
        step: 5,
        time: '07:45AM',
        date: '2024-11-12',
        description: 'Melissa Blue liked your post travel excites.',
        details: 'you are already feeling the tense atmosphere of the video playing in the background',
        media: [
            { fileName: 'media-59.jpg', link: 'javascript:void(0);' },
            { fileName: 'media-60.jpg', link: 'javascript:void(0);' },
            { fileName: 'media-61.jpg', link: 'javascript:void(0);' },
        ],
        user: {
            name: 'Alister Chuk',
            avatar: '../../assets/images/faces/7.jpg',
        },
        actions: [
            { label: 'Action', link: 'javascript:void(0);' },
            { label: 'Another action', link: 'javascript:void(0);' },
            { label: 'Something else here', link: 'javascript:void(0);' },
        ],
        right: true,
        backdropBlur: false,
    },
    {
        step: 6,
        time: '15:56PM',
        date: '2024-04-15',
        description: 'Social network accounts are at risk check your Login Details',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam.',
        user: {
            name: 'Monika Karan',
            avatar: '../../assets/images/faces/8.jpg',
        },
        actions: [
            { label: 'Action', link: 'javascript:void(0);' },
            { label: 'Another action', link: 'javascript:void(0);' },
            { label: 'Something else here', link: 'javascript:void(0);' },
        ],
        right: false,
        backdropBlur: false,
    },
];
