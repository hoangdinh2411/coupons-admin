
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";

export const Options = [
  { value: 'Sort By', label: 'Sort By' },
  { value: 'Newest', label: 'Newest' },
  { value: 'Date Added', label: 'Date Added' },
  { value: 'Type', label: 'Type' },
  { value: 'A - Z', label: 'A - Z' },
];

interface CardData {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  priorityColor: string;
  priority: string;
  completed: string;
  imgSrc: string;
  name: string;
  role: string;
  user: string;
  attachment: string;
  message: string;
  badges: any;
}
export const Kanbancarddata = [
  {
    badge: '#SPRU115',
    badgeColor: 'primary',
    title: 'Create Wireframes.',
    description: 'Outline the project goals, objectives, and requirements.',
    priorityColor: 'success',
    priority: 'Low',
    completed: '30% Completed',
    imgSrc: '../../../assets/images/faces/4.jpg',
    name: 'Jessica',
    role: 'Team Lead',
    user: "03",
    attachment: "08",
    message: "04",
    badges: (
      <SpkBadge variant="secondary-transparent">Authentication</SpkBadge>
    )
  },
  {
    badge: '#SPRU117',
    badgeColor: 'primary',
    title: 'Optimize Query Performance',
    description: 'Improve the efficiency and speed of DB queries.',
    priorityColor: 'danger',
    priority: 'High',
    completed: '10% Completed',
    imgSrc: '../../../assets/images/faces/11.jpg',
    name: 'Smith Ki',
    role: 'Project Manager',
    user: "03",
    attachment: "23",
    message: "12",
    badges: (
      <SpkBadge variant="success-transparent">Marketing</SpkBadge>
    )
  },
];

export const Kanbancarddata1: CardData[] = [
  {
    badge: '#SPRU124',
    badgeColor: 'primary',
    title: 'Update User Access Permissions',
    description: 'Revise and manage user access levels to ensure',
    priorityColor: 'warning',
    priority: 'Medium',
    completed: '40% Completed',
    imgSrc: '../../../assets/images/faces/15.jpg',
    name: 'Daniel D',
    role: 'Team Head',
    user: "03",
    attachment: "10",
    message: "18",
    badges: (
      <>
            <SpkBadge variant="danger-transparent me-1">Ui Design</SpkBadge>,
            <SpkBadge variant="success-transparent">Development</SpkBadge>
      </>
    )
  },
  {
    badge: '#SPRU247',
    badgeColor: 'primary',
    title: 'Ensure Dashboard Security',
    description: ' Protect the dashboard from unauthorized access to safeguard.',
    priorityColor: 'success',
    priority: 'Low',
    completed: '15% Completed',
    imgSrc: '../../../assets/images/faces/6.jpg',
    name: 'Sonia Nerwal',
    role: 'Team Lead',
    user: "03",
    attachment: "05",
    message: "02",
    badges: (
      <SpkBadge variant="success-transparent">Design</SpkBadge>
    )
  },
];

export const Kanbancarddata2: CardData[] = [
  {
    badge: '#SPRU345',
    badgeColor: 'primary',
    title: 'Analyze Dashboard Performance',
    description: 'Evaluate the efficiency and effectiveness of the dashboard.',
    priorityColor: 'warning',
    priority: 'Medium',
    completed: '22% Completed',
    imgSrc: '../../../assets/images/faces/12.jpg',
    name: 'Monish',
    role: 'Project Lead',
    user: "03",
    attachment: "09",
    message: "35",
    badges: (
      <SpkBadge variant="success-transparent">Review</SpkBadge>
    )
  }
];

export const Kanbancarddata3: CardData[] = [
  {
    badge: '#SPRU553',
    badgeColor: 'primary',
    title: 'Test Dashboard Usability',
    description: 'Assess the ease of use, accessibility, and overall user experience.',
    priorityColor: 'danger',
    priority: 'High',
    completed: '100% Completed',
    imgSrc: '../../../assets/images/faces/7.jpg',
    name: 'Arora',
    role: 'Team Manager',
    user: "03",
    attachment: "09",
    message: "35",
    badges: (
      <SpkBadge variant="success-transparent">Review</SpkBadge>
    )
  },
  {
    badge: '#SPRU665',
    badgeColor: 'primary',
    title: 'Update Security Certifications',
    description: 'Ensure that all security certifications are current and meet.',
    priorityColor: 'success',
    priority: 'Low',
    completed: '100% Completed',
    imgSrc: '../../../assets/images/faces/13.jpg',
    name: 'Arora',
    role: 'Team Manager',
    user: "03",
    attachment: "22",
    message: "12",
    badges: (
      <SpkBadge variant="success-transparent">Development</SpkBadge>
    )
  },
  {
    badge: '#SPRU205',
    badgeColor: 'primary',
    title: 'Test Integration Stability',
    description: 'Ensure that integrated components or systems work together.',
    priorityColor: 'danger',
    priority: 'High',
    completed: '100% Completed',
    imgSrc: '../../../assets/images/faces/14.jpg',
    name: 'Iswar',
    role: 'Project Manager',
    user: "03",
    attachment: "11",
    message: "12",
    badges: (
      <SpkBadge variant="success-transparent">Discussion</SpkBadge>
    )
  },
];

interface NavItem {
  title: string;
  icon: string;
  badge?: number;
  href: string;
}
export const NavItemsdata: NavItem[] = [
  {
    title: 'Board Tasks',
    icon: 'ri-dashboard-fill fs-16 text-primary',
    badge: 78,
    href: '#!',
  },
  {
    title: 'Pending Tasks',
    icon: 'ri-history-fill fs-16',
    href: '#!',
  },
  {
    title: 'Overdue',
    icon: 'ri-error-warning-line fs-15 lh-1',
    href: '#!',
  },
  {
    title: 'Upcoming Tasks',
    icon: 'ri-checkbox-circle-line fs-15 lh-1',
    href: '#!',
  },
  {
    title: 'Timeline',
    icon: 'ri-timeline-view fs-15 lh-1',
    href: '#!',
  },
  {
    title: 'Activity',
    icon: 'ri-equalizer-2-line fs-15 lh-1',
    href: '#!',
  },
  {
    title: 'Priority Tasks',
    icon: 'ri-hourglass-line fs-15 lh-1',
    href: '#!',
  },
];

interface Avatar {
  imgSrc: string;
  isOnline: boolean;
}
export const Avatarsdata: Avatar[] = [
  { imgSrc: "../../../assets/images/faces/2.jpg", isOnline: false },
  { imgSrc: "../../../assets/images/faces/11.jpg", isOnline: false },
  { imgSrc: "../../../assets/images/faces/8.jpg", isOnline: true },
  { imgSrc: "../../../assets/images/faces/12.jpg", isOnline: false },
  { imgSrc: "../../../assets/images/faces/1.jpg", isOnline: false },
  { imgSrc: "../../../assets/images/faces/15.jpg", isOnline: true },
  { imgSrc: "../../../assets/images/faces/4.jpg", isOnline: false },
  { imgSrc: "../../../assets/images/faces/6.jpg", isOnline: true },
];

interface Badge {
  label: string;
  color: string;
}
export const Badgesdata: Badge[] = [
  { label: 'Development', color: 'success' },
  { label: 'Marketing', color: 'secondary' },
  { label: 'UX Design', color: 'primary' },
  { label: 'UX Design', color: 'info' },
  { label: 'Design', color: 'purple' },
  { label: 'UI', color: 'warning' },
  { label: 'Development', color: 'danger' },
  { label: 'UX Design', color: 'primary' },
  { label: 'React', color: 'pink' },
  { label: 'Front End', color: 'info' },
];