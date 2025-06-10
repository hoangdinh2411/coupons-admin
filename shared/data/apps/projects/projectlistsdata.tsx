interface Project {
  imgSrc: string;
  title: string;
  badgeColor: string;
  subTitle: string;
  avatars: string[];
  people: number;
  startDate: string;
  endDate: string;
  percent: string;
  level: string;
  levelColor: string;
  avatarText: string;
}
export const ProjectData: Project[] = [
  {
    imgSrc: "../../../assets/images/company-logos/1.png",
    title: "Project Alpha Pages Redesigning",
    badgeColor: "success",
    subTitle: "Redesigning",
    avatars: [
      "../../../assets/images/faces/1.jpg",
      "../../../assets/images/faces/2.jpg",
      "../../../assets/images/faces/3.jpg"
    ],
    people: 5,
    startDate: "01 Sep, 2024",
    endDate: "30 Sep, 2024",
    percent: "70%",
    level: "Medium",
    levelColor: "warning",
    avatarText: '+2'
  },
  {
    imgSrc: "../../../assets/images/company-logos/2.png",
    title: "New Website Launch: Enhanced User Experience",
    badgeColor: "info",
    subTitle: "Development",
    avatars: [
      "../../../assets/images/faces/4.jpg",
      "../../../assets/images/faces/5.jpg",
      "../../../assets/images/faces/6.jpg"
    ],
    people: 4,
    startDate: "05 Sep, 2024",
    endDate: "25 Sep, 2024",
    percent: "60%",
    level: "Low",
    levelColor: "success",
    avatarText: '+1'
  },
  {
    imgSrc: "../../../assets/images/company-logos/3.png",
    title: "Mobile App New Feature Updating",
    badgeColor: "danger",
    subTitle: "Updating",
    avatars: [
      "../../../assets/images/faces/7.jpg",
      "../../../assets/images/faces/8.jpg",
      "../../../assets/images/faces/9.jpg"
    ],
    people: 6,
    startDate: "10 Sep, 2024",
    endDate: "20 Oct, 2024",
    percent: "50%",
    level: "High",
    levelColor: "danger",
    avatarText: '+3'
  },
  {
    imgSrc: "../../../assets/images/company-logos/4.png",
    title: "E-Commerce Platform Overhaul",
    badgeColor: "success",
    subTitle: "Overhaul",
    avatars: ["../../../assets/images/faces/10.jpg", "../../../assets/images/faces/11.jpg", "../../../assets/images/faces/12.jpg"],
    startDate: "15 Sep, 2024",
    endDate: "30 Oct, 2024",
    percent: "80%",
    level: "Normal",
    people: 5,
    levelColor: "info",
    avatarText: '+2'

  },
  {
    imgSrc: "../../../assets/images/company-logos/5.png",
    title: "AI Integration for CR Management",
    badgeColor: "info",
    subTitle: "Integration",
    avatars: ["../../../assets/images/faces/13.jpg", "../../../assets/images/faces/14.jpg", "../../../assets/images/faces/15.jpg"],
    startDate: "20 Sep, 2024",
    endDate: "15 Oct, 2024",
    percent: "65%",
    level: "High",
    people: 4,
    levelColor: "danger",
    avatarText: '+1'
  },
  {
    imgSrc: "../../../assets/images/company-logos/6.png",
    title: "Customer Portal Enhancement",
    badgeColor: "success",
    subTitle: "Enhancing",
    avatars: ["../../../assets/images/faces/16.jpg", "../../../assets/images/faces/15.jpg", "../../../assets/images/faces/1.jpg"],
    startDate: "01 Oct, 2024",
    endDate: "30 Nov, 2024",
    percent: "70%",
    level: "Low",
    people: 6,
    levelColor: "success",
    avatarText: '+2'
  },
  {
    imgSrc: "../../../assets/images/company-logos/7.png",
    title: "Website Redesign and Revitalization",
    badgeColor: "warning",
    subTitle: "Redesign",
    avatars: ["../../../assets/images/faces/3.jpg", "../../../assets/images/faces/16.jpg", "../../../assets/images/faces/11.jpg"],
    startDate: "10 Oct, 2024",
    endDate: "15 Nov, 2024",
    percent: "60%",
    level: "Medium",
    people: 4,
    levelColor: "warning",
    avatarText: '+1'
  },
];

export const Projectselectdata = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Date Added', label: 'Date Added' },
  { value: 'Type', label: 'Type' },
  { value: 'A - Z', label: 'A - Z' },
]