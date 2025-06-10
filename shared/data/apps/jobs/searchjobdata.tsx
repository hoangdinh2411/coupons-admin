
interface Job {
  imgSrc: string;
  title: string;
  company: string;
  location: string;
  infoTag: string;
  secondaryTag: string;
  successTag: string;
  salary: string;
}
export const Searchjobdata: Job[] = [
  {
    imgSrc: "../../../assets/images/company-logos/10.png",
    title: "Marketing Manager",
    company: "Global Brands Inc.",
    location: "New York, NY",
    infoTag: "Contract",
    secondaryTag: "On-Site",
    successTag: "Managerial",
    salary: "$90k - $120k",
  },
  {
    imgSrc: "../../../assets/images/company-logos/9.png",
    title: "Backend Developer",
    company: "Tech Innovations Ltd.",
    location: "Seattle, WA",
    infoTag: "Full-Time",
    secondaryTag: "Remote",
    successTag: "Mid-Level",
    salary: "$80k - $110k",
  },
  {
    imgSrc: "../../../assets/images/company-logos/8.png",
    title: "UI/UX Designer",
    company: "Design Lab Co.",
    location: "Austin, TX",
    infoTag: "Part-Time",
    secondaryTag: "Hybrid",
    successTag: "Junior-Level",
    salary: "$45k - $60k",
  },
  {
    imgSrc: "../../../assets/images/company-logos/7.png",
    title: "Senior Graphic Designer",
    company: "Creative Minds Inc.",
    location: "San Francisco, CA",
    infoTag: "Full-Time",
    secondaryTag: "On-Site",
    successTag: "Senior-Level",
    salary: "$70k - $100k",
  },
  {
    imgSrc: "../../../assets/images/company-logos/8.png",
    title: "UI/UX Designer",
    company: "Design Lab Co.",
    location: "Austin, TX",
    infoTag: "Part-Time",
    secondaryTag: "Hybrid",
    successTag: "Junior-Level",
    salary: "$45k - $60k",
  },
  {
    imgSrc: "../../../assets/images/company-logos/4.png",
    title: "Web UI Designer",
    company: "Info. Techz Company",
    location: "Los Angeles, CA",
    infoTag: "Freelancer",
    secondaryTag: "Remote",
    successTag: "Intermediate",
    salary: "$50k - $80k",
  },
  {
    title: "Software Engineer",
    company: "Innovate Tech Solutions",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    infoTag: "Full-Time",
    secondaryTag: "On-Site",
    successTag: "Senior-Level",
    imgSrc: "../../../assets/images/company-logos/1.png"
  },
  {
    title: "Marketing Manager",
    company: "Global Brands Inc.",
    location: "New York, NY",
    salary: "$90k - $120k",
    imgSrc: "../../../assets/images/company-logos/10.png",
    infoTag: "Contract",
    secondaryTag: "On-Site",
    successTag: "Managerial",
  },
  {
    title: "Senior Graphic Designer",
    company: "Creative Minds Inc.",
    location: "San Francisco, CA",
    salary: "$70k - $100k",
    imgSrc: "../../../assets/images/company-logos/7.png",
    infoTag: "Full-Time",
    secondaryTag: "On-Site",
    successTag: "Senior-Level",
  },
  {
    title: "Marketing Specialist",
    company: "Creative Solutions Co.",
    location: "San Francisco, CA",
    salary: "$90k - $120k",
    imgSrc: "../../../assets/images/company-logos/2.png",
    infoTag: "Full-Time",
    secondaryTag: "On-Site",
    successTag: "Senior-Level",
  },
  {
    title: " Sales Executive",
    company: "Sales Corp Ltd",
    location: "Boston, MA",
    salary: "$60k - $80k",
    imgSrc: "../../../assets/images/company-logos/3.png",
    infoTag: "Part-Time",
    secondaryTag: "On-Site",
    successTag: "Entry-Level",
  },
  {
    title: "Product Manager",
    company: "Innovative Tech LLC",
    location: "Seattle, WA",
    salary: "$100k - $140k",
    imgSrc: "../../../assets/images/company-logos/5.png",
    infoTag: "Remote",
    secondaryTag: "Full-Time",
    successTag: "Manager",
  },
];

interface SelectType {
  value: string;
  label: string;
}
export const Categorydata: SelectType[] = [
  { value: 'Development', label: 'Development' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'IT Software', label: 'IT Software' }
];

export const Experiencedata: SelectType[] = [
  { value: '0 - 1 Years', label: '0 - 1 Years' },
  { value: '1 - 3 Years', label: '1 - 3 Years' },
  { value: '3 - 5 Years', label: '3 - 5 Years' }
];

export const Prioritydata: SelectType[] = [
  { value: 'Normal', label: 'Normal' },
  { value: 'Urgent', label: 'Urgent' }
];

export const Vacanciesdata: SelectType[] = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '40', label: '40' }
];

export const Salarydata: SelectType[] = [
  { value: '0 - $1,00,000 / Year', label: '0 - $1,00,000 / Year' },
  { value: '$1,00,000 - $3,00,000 / Year', label: '$1,00,000 - $3,00,000 / Year' },
  { value: '$3,00,000 - $5,00,000 / Year', label: '$3,00,000 - $5,00,000 / Year' }
];

export const Skilldata: SelectType[] = [
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'React', label: 'React' }
];

export const Languagesdata: SelectType[] = [
  { value: 'English', label: 'English' },
  { value: 'French', label: 'French' },
  { value: 'Arabic', label: 'Arabic' },
  { value: 'Hindi', label: 'Hindi' }
];

export const Qualificationdata: SelectType[] = [
  { value: 'Graduate', label: 'Graduate' },
  { value: 'Diploma', label: 'Diploma' },
  { value: 'MBA', label: 'MBA' },
  { value: 'MCA', label: 'MCA' }
];

export const Jobtypedata: SelectType[] = [
  { value: 'Contract', label: 'Contract' },
  { value: 'Freelance', label: 'Freelance' },
  { value: 'Full Time', label: 'Full Time' },
  { value: 'Internship', label: 'Internship' },
  { value: 'Part Time', label: 'Part Time' }
];
