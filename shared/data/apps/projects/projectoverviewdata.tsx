interface TimelineEvent {
  id: number;
  avatar: string;
  avatarBg: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}
export const TimelineData: TimelineEvent[] = [
  {
    id: 1,
    avatar: 'R',
    avatarBg: 'bg-success',
    title: 'User Research Completed',
    date: '02,Sep 2024 - 10:15',
    description: 'Conducted surveys and interviews to gather insights on user needs and preferences.',
  },
  {
    id: 2,
    avatar: 'D',
    avatarBg: 'bg-info',
    title: 'Design Mockups Reviewed',
    date: '10,Sep 2024 - 14:30',
    description: 'Presented initial design concepts and received feedback from stakeholders.',
    link: '#!',
  },
  {
    id: 3,
    avatar: 'C',
    avatarBg: 'bg-warning',
    title: 'Content Audit Conducted',
    date: '15,Sep 2024 - 09:00',
    description: 'Reviewed existing content for relevance and accuracy, identifying areas for update.',
  },
  {
    id: 4,
    avatar: 'S',
    avatarBg: 'bg-danger',
    title: 'SEO Analysis Performed',
    date: '20,Sep 2024 - 11:45',
    description: 'Analyzed current SEO performance and identified key areas for improvement.',
  },
];

//All Shared Files

interface FileItem {
  id: number;
  avatarColor: string;
  avatarImg: string;
  fileName: string;
  fileSize: string;
  fileLink: string;
}
export const AllShared: FileItem[] = [
  {
    id: 1,
    avatarColor: 'bg-light',
    avatarImg: '../../../assets/images/media/file-manager/1.png',
    fileName: 'Project Proposal.pdf',
    fileSize: '1.2MB',
    fileLink: '#!',
  },
  {
    id: 2,
    avatarColor: 'bg-info',
    avatarImg: '../../../assets/images/media/file-manager/2.png',
    fileName: 'Functional Requirements.docx',
    fileSize: '850KB',
    fileLink: '#!',
  },
  {
    id: 3,
    avatarColor: 'bg-light',
    avatarImg: '../../../assets/images/media/file-manager/1.png',
    fileName: 'System Architecture.pdf',
    fileSize: '2.5MB',
    fileLink: '#!',
  },
  {
    id: 4,
    avatarColor: 'bg-primary',
    avatarImg: '../../../assets/images/media/file-manager/3.png',
    fileName: 'Meeting Minutes.zip',
    fileSize: '300KB',
    fileLink: '#!',
  },
];

//Project Messages

interface TimelineItem {
  id: number;
  avatarColor: string;
  avatarImg: string;
  title: string;
  timestamp: string;
  timeAgo: string;
  liClass: string;
  description: string;
}
export const ProjectMessages: TimelineItem[] = [
  {
    id: 1,
    avatarColor: 'bg-success',
    liClass: 'mb-3',
    avatarImg: '../../../assets/images/faces/1.jpg',
    title: 'User Research Findings Presented',
    timestamp: '02,Sep 2024 - 10:15 AM',
    timeAgo: '1 hr ago',
    description: 'Sarah Johnson shared insights from user surveys.',
  },
  {
    id: 2,
    avatarColor: 'bg-info',
    liClass: 'mb-3',
    avatarImg: '../../../assets/images/faces/14.jpg',
    title: 'Initial Design Concepts Approved',
    timestamp: '10,Sep 2024 - 03:30 PM',
    timeAgo: '4 hrs ago',
    description: 'David Smith approved the initial design mockups.',
  },
  {
    id: 3,
    avatarColor: 'bg-warning',
    liClass: 'mb-3',
    avatarImg: '../../../assets/images/faces/3.jpg',
    title: 'Content Review and Update',
    timestamp: '15,Sep 2024 - 09:00 AM',
    timeAgo: '6 hrs ago',
    description: 'Emily Davis completed the content audit and update.',
  },
  {
    id: 4,
    avatarColor: 'bg-danger',
    liClass: 'mb-3',
    avatarImg: '../../../assets/images/faces/16.jpg',
    title: 'SEO Strategy Recommendations',
    timestamp: '20,Sep 2024 - 11:45 AM',
    timeAgo: '8 hrs ago',
    description: 'Michael Brown provided recommendations for SEO.',
  },
  {
    id: 5,
    avatarColor: 'bg-secondary',
    liClass: 'mb-0',
    avatarImg: '../../../assets/images/faces/6.jpg',
    title: 'Accessibility Compliance Check',
    timestamp: '25,Sep 2024 - 01:00 PM',
    timeAgo: '12 hrs ago',
    description: 'Jessica Green initiated accessibility testing.',
  },
];

//Team

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
}
export const TeamData: TeamMember[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Project Manager',
    imageSrc: '../../../assets/images/faces/11.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Lead Developer',
    imageSrc: '../../../assets/images/faces/2.jpg',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'UI Designer',
    imageSrc: '../../../assets/images/faces/8.jpg',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'QA Tester',
    imageSrc: '../../../assets/images/faces/12.jpg',
  },
];