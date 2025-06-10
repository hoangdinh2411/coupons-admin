
interface StatCard {
  title: string;
  value: string;
  icon: string;
  badgeColor: string;
  percentageChange: string;
  changeDirection: string;
  percentageText: string;
  iconColor: string;
}
export const statsData: StatCard[] = [
  {
    title: "Total Job Listings",
    value: "12,432",
    icon: "ti-briefcase",
    badgeColor: "primary",
    percentageChange: "+0.8%",
    changeDirection: "ri-arrow-left-down-line",
    percentageText: "Compare this month",
    iconColor: 'success'
  },
  {
    title: "Total Applications",
    value: "15,678",
    icon: "ti-news",
    badgeColor: "secondary",
    percentageChange: "-1.2%",
    changeDirection: "ri-arrow-left-down-line",
    percentageText: "Compare this month",
    iconColor: 'danger'
  },
  {
    title: "Total Recruited",
    value: "9,245",
    icon: "ti-user-check",
    badgeColor: "success",
    percentageChange: "+5.3%",
    changeDirection: "ri-arrow-left-down-line",
    percentageText: "Compare this month",
    iconColor: 'success'
  },
  {
    title: "Candidates Interviewed",
    value: "7,856",
    icon: "ti-align-box-right-top",
    badgeColor: "info",
    percentageChange: "-2.4%",
    changeDirection: "ri-arrow-left-down-line",
    percentageText: "Compare this month",
    iconColor: 'danger'
  }
];

//*** Gender Analysis -Start ***//
export const GenderSeries = [1657, 1645]
export const GenderOptions = {
  labels: ["Female", "Male"],
  chart: {
    height: 248,
    type: 'donut'
  },
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: "#fff",
    width: 0,
    dashArray: 0,
  },
  plotOptions: {

    pie: {
      expandOnClick: false,
      donut: {
        size: '75%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            offsetY: -4
          },
          value: {
            show: true,
            fontSize: '18px',
            color: undefined,
            offsetY: 8,
            formatter: function (val: string) {
              return val + "%"
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            fontSize: '22px',
            fontWeight: 600,
            color: '#495057',
          }

        }
      }
    }
  },
  colors: ["var(--primary-color)", "rgb(53, 189, 170)"],
}
//*** Gender Analysis -End ***//

//*** Recruitment Stats -Start ***//
export const RecruitmentSeries = [{
  name: 'Interviews',
  type: 'column',
  data: [200, 170, 250, 240, 220, 280, 170, 155, 130, 242, 160, 80],
}, {
  name: 'Rejected',
  type: 'area',
  data: [150, 110, 300, 170, 190, 230, 120, 120, 270, 200, 200, 150],
}]
export const RecruitmentOptions = {
  chart: {
    type: 'area',
    height: 315,
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: ['smooth', 'smooth'],
    dashArray: [0, 3],
    width: [0, 1],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      borderRadius: 6,
    }
  },

  colors: ["var(--primary-color)", "rgb(255, 183, 72)"],
  fill: {
    type: ["solid", "gradient"],
    gradient: {
      shade: "dark",
      shadeIntensity: 0.1,
      inverseColors: false,
      gradientToColors: ["var(--primary-color)", "rgb(255, 183, 72)"],
      opacityFrom: [1, 0.4],
      opacityTo: [1, 0.07],
      stops: [0, 90, 100]
    }
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 3,
  },
}
//*** Recruitment Stats -End ***//

//***  Recent Jobs  -Start ***//
interface JobListing {
  id: number;
  title: string;
  postedTime: string;
  badge: string;
  applicationsCount: number;
  badgeColor: string;
  iconColor: string;
}
export const JobListings: JobListing[] = [
  {
    id: 1,
    title: 'Data Scientist',
    postedTime: 'Today, 2 hours ago',
    badge: 'Experienced',
    applicationsCount: 22,
    badgeColor: 'bg-info-transparent',
    iconColor: 'bg-primary-transparent',
  },
  {
    id: 2,
    title: 'Product Manager',
    postedTime: 'Today, 3 hours ago',
    badge: 'Mid-Level',
    applicationsCount: 15,
    badgeColor: 'bg-warning-transparent',
    iconColor: 'bg-secondary-transparent',
  },
  {
    id: 3,
    title: 'Software Engineer',
    postedTime: 'Today, 4 hours ago',
    badge: 'Fresher',
    applicationsCount: 30,
    badgeColor: 'bg-success-transparent',
    iconColor: 'bg-success-transparent',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    postedTime: 'Today, 5 hours ago',
    badge: 'Experienced',
    applicationsCount: 10,
    badgeColor: 'bg-primary-transparent',
    iconColor: 'bg-info-transparent',
  },
  {
    id: 5,
    title: 'Product Manager',
    postedTime: 'Today, 3 hours ago',
    badge: 'Mid-Level',
    applicationsCount: 15,
    badgeColor: 'bg-warning-transparent',
    iconColor: 'bg-pink-transparent',
  },
];
//***  Recent Jobs  -End ***//

//***  Trending Job Applicants  -Start ***//
interface Trending {
  id: number;
  name: string;
  role: string;
  avatar: string;
  experience: string;
  badge: string;
  badgeColor: string;
  years: string;
  roleName: string;
}
export const Trendingdata: Trending[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Software Engineer',
    avatar: '../../assets/images/faces/15.jpg',
    experience: '05',
    badge: 'Full Stack Developer',
    badgeColor: 'bg-success-transparent',
    years: '3-5 years',
    roleName: 'Mid-Level'
  },
  {
    id: 2,
    name: 'James Smith',
    role: 'Data Analyst',
    avatar: '../../assets/images/faces/8.jpg',
    experience: '03',
    badge: 'Data Science',
    badgeColor: 'bg-info-transparent',
    years: '5+ years',
    roleName: 'Senior'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    avatar: '../../assets/images/faces/13.jpg',
    experience: '04',
    badge: 'Product Design',
    badgeColor: 'bg-primary-transparent',
    years: 'less than 2 years',
    roleName: 'Entry-Level'
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Frontend Developer',
    avatar: '../../assets/images/faces/16.jpg',
    experience: '02',
    badge: 'Web Development',
    badgeColor: 'bg-secondary-transparent',
    years: '1-3 years',
    roleName: 'Junior'
  },
];
//***  Trending Job Applicants  -End ***//

//***   Registers By Country  -Start ***//
interface Registers {
  id: number;
  name: string;
  flag: string;
  users: string;
  percentageChange: number;
  badgeColor: string;
  badgeText: string;
  usersInfo: string;
}
export const RegistersData: Registers[] = [
  {
    id: 1,
    name: 'U.S.A',
    flag: '../../assets/images/flags/us_flag.jpg',
    users: "687",
    percentageChange: 25,
    badgeColor: 'text-success',
    badgeText: '25%',
    usersInfo: '25 Users',
  },
  {
    id: 2,
    name: 'Canada',
    flag: '../../assets/images/flags/canada_flag.jpg',
    users: "550",
    percentageChange: -20,
    badgeColor: 'text-danger',
    badgeText: '20%',
    usersInfo: '30 Users',
  },
  {
    id: 3,
    name: 'Germany',
    flag: '../../assets/images/flags/germany_flag.jpg',
    users: "590",
    percentageChange: 18,
    badgeColor: 'text-success',
    badgeText: '18%',
    usersInfo: '22 Users',
  },
  {
    id: 4,
    name: 'France',
    flag: '../../assets/images/flags/french_flag.jpg',
    users: "1,200",
    percentageChange: -30,
    badgeColor: 'text-danger',
    badgeText: '30%',
    usersInfo: '100 Users',
  },
  {
    id: 5,
    name: 'U.A.E',
    flag: '../../assets/images/flags/uae_flag.jpg',
    users: "800",
    percentageChange: -12,
    badgeColor: 'text-danger',
    badgeText: '12%',
    usersInfo: '50 Users',
  },
];
//***   Registers By Country  -End ***//

//***   New Applicants Overview  -Start ***//

interface Applicants {
  id: string;
  name: string;
  image: string;
  department: string;
  departmentBgColor: string;
  role: string;
  email: string;
  location: string;
  employmentType: string;
  contractEndDate: string;
  color: string;
}
export const ApplicantsData: Applicants[] = [
  {
    id: "01",
    name: 'Kiran Sharma',
    image: '../../assets/images/faces/5.jpg',
    department: 'Development',
    role: 'Senior Developer',
    email: 'kiransharma@example.com',
    location: 'Canada',
    employmentType: 'Part Time',
    contractEndDate: '15 Nov 2024',
    color: 'warning',
    departmentBgColor: 'primary',
  },
  {
    id: "02",
    name: 'Priya Singh',
    image: '../../assets/images/faces/6.jpg',
    department: 'Marketing',
    role: 'Marketing Manager',
    email: 'priyasingh@example.com',
    location: 'Australia',
    employmentType: 'Full Time',
    contractEndDate: '30 Dec 2024',
    color: 'success',
    departmentBgColor: 'warning',
  },
  {
    id: "03",
    name: 'Ravi Kumar',
    image: '../../assets/images/faces/7.jpg',
    department: 'Design',
    role: 'Graphic Designer',
    email: 'ravikumar@example.com',
    location: 'India',
    employmentType: 'Intern',
    contractEndDate: '31 Dec 2024',
    color: 'danger',
    departmentBgColor: 'success',
  },
  {
    id: "04",
    name: 'Mohammed Ali',
    image: '../../assets/images/faces/9.jpg',
    department: 'HR, Manager',
    role: 'HR Specialist',
    email: 'mohammedali@example.com',
    location: 'UAE',
    employmentType: 'Contract',
    contractEndDate: '05 Nov 2024',
    color: 'warning',
    departmentBgColor: 'danger',
  },
];
//***   New Applicants Overview  -End ***//

//***   Top Firms  -Start ***//
interface Firms {
  id: number;
  name: string;
  logo: string;
  employees: number;
  yearFounded: number;
  bgColorClass: string; // for dynamic background color classes
}
export const FirmsData: Firms[] = [
  {
    id: 1,
    name: 'Synergy Group',
    logo: '../../assets/images/company-logos/9.png',
    employees: 400,
    yearFounded: 2024,
    bgColorClass: 'bg-primary',
  },
  {
    id: 2,
    name: 'Tech Solutions Inc.',
    logo: '../../assets/images/company-logos/4.png',
    employees: 648,
    yearFounded: 1999,
    bgColorClass: 'bg-info',
  },
  {
    id: 3,
    name: 'Innovatech Ltd.',
    logo: '../../assets/images/company-logos/5.png',
    employees: 150,
    yearFounded: 2020,
    bgColorClass: 'bg-secondary',
  },
  {
    id: 4,
    name: 'Global Tech Corp.',
    logo: '../../assets/images/company-logos/7.png',
    employees: 500,
    yearFounded: 2022,
    bgColorClass: 'bg-success',
  },
  {
    id: 5,
    name: 'Future Innovations LLC',
    logo: '../../assets/images/company-logos/8.png',
    employees: 250,
    yearFounded: 2024,
    bgColorClass: 'bg-primary',
  },
  {
    id: 6,
    name: 'NextGen Systems',
    logo: '../../assets/images/company-logos/6.png',
    employees: 75,
    yearFounded: 2024,
    bgColorClass: 'bg-danger',
  },
];
//***   Top Firms  -End ***//



interface CandidateData {
  iconClass: string;
  label: string;
  count: number;
  percentage: number;
  trend: 'up' | 'down';
  bgClass: string;
  textColor: string;
}

export const CandidateData: CandidateData[] = [
  {
    iconClass: 'ti ti-gender-female',
    label: 'Female Candidates',
    count: 1645,
    percentage: 0.23,
    trend: 'up',
    bgClass: 'bg-primary-transparent',
    textColor: 'text-success',
  },
  {
    iconClass: 'ti ti-gender-male',
    label: 'Male Candidates',
    count: 1657,
    percentage: 0.11,
    trend: 'down',
    bgClass: 'bg-success-transparent',
    textColor: 'text-danger',
  },
];

interface ProgressData {
  id: number;
  title: string;
  percentage: number;
  trend: 'increase' | 'decrease';
  change: string;
  bgClass: string;
  listClass:string
}

export const ProgressData: ProgressData[] = [
  { id: 1, title: 'New Job Opportunities', percentage: 89, trend: 'increase', change: '+5%', bgClass: 'bg-primary',listClass:"mb-3" },
  { id: 2, title: 'Skill Gaps', percentage: 60, trend: 'decrease', change: '-2%', bgClass: 'bg-secondary',listClass:"mb-3" },
  { id: 3, title: 'Employee Retention', percentage: 60, trend: 'increase', change: '+30%', bgClass: 'bg-success',listClass:"mb-3" },
  { id: 4, title: 'Cultural Integration', percentage: 50, trend: 'increase', change: '+13%', bgClass: 'bg-info',listClass:"mb-3" },
  { id: 5, title: 'Market Positioning', percentage: 40, trend: 'decrease', change: '-16%', bgClass: 'bg-pink',listClass:"" },
];
