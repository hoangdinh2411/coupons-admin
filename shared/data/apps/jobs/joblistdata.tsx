interface Job {
  id: number;
  title: string;
  location: string;
  company: string;
  category: string;
  applicants: number;
  status: 'Open' | 'Closed' | 'Pending';
  postDate: string;
  interviewCount: number;
  jobType: 'Full Time' | 'Part Time' | 'Contract' | 'Freelance';
  closeDate: string;
  companyLogo: string;
  bgLogo: string;
  checked: boolean;
}
export const JobListdata: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    location: 'Los Angeles, CA',
    company: 'Tech Innovations Inc.',
    category: 'Engineering',
    applicants: 30,
    status: 'Open',
    postDate: '2024-09-10',
    interviewCount: 8,
    jobType: 'Full Time',
    bgLogo: 'info',
    closeDate: 'Nov 25 2024',
    companyLogo: '../../../assets/images/company-logos/8.png',
    checked: true
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'San Francisco, CA',
    company: 'NextGen Solutions',
    category: 'IT',
    applicants: 45,
    status: 'Closed',
    bgLogo: 'secondary',
    postDate: '2024-08-20',
    interviewCount: 6,
    jobType: 'Part Time',
    closeDate: 'Oct 30 2024',
    companyLogo: '../../../assets/images/company-logos/9.png',
    checked: false
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    location: 'Austin, TX',
    company: 'Innovate Solutions',
    category: 'Software',
    applicants: 50,
    status: 'Open',
    bgLogo: 'success',
    postDate: '2024-09-05',
    interviewCount: 10,
    jobType: 'Contract',
    closeDate: 'Dec 20 2024',
    companyLogo: '../../../assets/images/company-logos/10.png',
    checked: false
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    location: 'New York, NY',
    company: 'Creative Minds',
    category: 'Design',
    applicants: 25,
    status: 'Closed',
    bgLogo: 'primary',
    postDate: '2024-07-15',
    interviewCount: 4,
    jobType: 'Freelance',
    closeDate: 'Nov 05 2024',
    companyLogo: '../../../assets/images/company-logos/6.png',
    checked: true
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    location: 'Seattle, WA',
    company: 'Tech Savvy',
    category: 'Operations',
    applicants: 60,
    status: 'Open',
    bgLogo: 'warning',
    postDate: '2024-09-12',
    interviewCount: 7,
    jobType: 'Full Time',
    closeDate: 'Dec 01 2024',
    companyLogo: '../../../assets/images/company-logos/1.png',
    checked: false
  },
  {
    id: 6,
    title: 'Data Scientist',
    location: 'Boston, MA',
    company: 'DataPro Analytics',
    category: 'Analytics',
    applicants: 33,
    status: 'Open',
    bgLogo: 'pink',
    postDate: '2024-09-10',
    interviewCount: 8,
    jobType: 'Full Time',
    closeDate: 'Nov 30 2024',
    companyLogo: '../../../assets/images/company-logos/3.png',
    checked: true
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    location: 'Denver, CO',
    company: 'AppFusion Technologies',
    category: 'Mobile Development',
    applicants: 28,
    status: 'Pending',
    bgLogo: 'primary',
    postDate: '2024-09-15',
    interviewCount: 3,
    jobType: 'Part Time',
    closeDate: 'Dec 15 2024',
    companyLogo: '../../../assets/images/company-logos/4.png',
    checked: false
  },
];