
interface SelectType {
  value: string;
  label: string;
}
export const Data: SelectType[] = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Software Dveloper', label: 'Software Dveloper' },
  { value: 'Web Developer', label: 'Web Developer' },
  { value: 'Software Architect', label: 'Software Architect' },
  { value: 'IT Hardware', label: 'IT Hardware' },
  { value: 'Network Engineer', label: 'Network Engineer' },
  { value: 'React Developer', label: 'React Developer' },
];

export const Data2: SelectType[] = [
  { value: 'Fresher', label: 'Fresher' },
  { value: '1 Year Exp', label: '1 Year Exp' },
  { value: '2 Year Exp', label: '2 Year Exp' },
  { value: '3 Year Exp', label: '3 Year Exp' },
  { value: '4 Year Exp', label: '4 Year Exp' },
  { value: '5+ Year Exp', label: '5+ Year Exp' },
];

interface Candidate {
  imgSrc: string;
  title: string;
  job: string;
  location: string;
  qualification: string;
  salary: string;
  languages: string;
  experience: string;
  type: string;
  badges: any;
}
export const SearchCandidatedata: Candidate[] = [
  {
    imgSrc: "../../../assets/images/faces/2.jpg",
    title: "Michael",
    job: "Front-End Developer",
    location: "New York, NY",
    qualification: "Master's in Data Science",
    salary: "$90,000 - $120,000",
    languages: "Hindi, English",
    experience: "4 yrs",
    type: "Full Time",
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">Remote</span>
      <span className="badge rounded-pill bg-warning fs-11">Senior Level</span>
      <span className="badge rounded-pill bg-info fs-11">Software</span></>
    )
  },
  {
    imgSrc: "../../../assets/images/faces/3.jpg",
    title: "Sarah Williams",
    job: "UI/UX Designer",
    location: "San Francisco, CA",
    qualification: "Degree in Design",
    salary: "$80,000 - $100,000",
    languages: "English, Spanish",
    experience: "3 years",
    type: "Contract",
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">Remote</span>
      <span className="badge rounded-pill bg-warning fs-11">Mid Level</span>
      <span className="badge rounded-pill bg-info fs-11">Design</span></>
    )
  },
  {
    imgSrc: "../../../assets/images/faces/4.jpg",
    title: "John Doe",
    job: "Backend Developer",
    location: "Austin, TX",
    qualification: "Master's in Computer Science",
    salary: "$100,000 - $120,000",
    languages: "English, German",
    experience: "5 years",
    type: "Full-Time",
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">On-Site</span>
      <span className="badge rounded-pill bg-warning fs-11">Senior Level</span>
      <span className="badge rounded-pill bg-info fs-11">Programming</span></>
    )
  },
  {
    title: 'Emily Johnson',
    job: 'Marketing Specialist',
    location: 'Chicago, IL',
    qualification: "Bachelor's in Marketing",
    salary: '$60,000 - $70,000',
    type: 'Full-Time',
    languages: 'English, French',
    experience: '1 year',
    imgSrc: '../../../assets/images/faces/5.jpg',
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">Remote</span>
      <span className="badge rounded-pill bg-warning fs-11">Entry Level</span>
      <span className="badge rounded-pill bg-info fs-11">Marketing</span></>
    )
  },
  {
    title: 'Alex Martinez',
    job: 'Data Scientist',
    location: 'Seattle, WA',
    qualification: "Master's in Data Science",
    salary: '$110,000 - $130,000',
    type: 'Full-Time',
    languages: 'English, Portuguese',
    experience: '4 years',
    imgSrc: '../../../assets/images/faces/6.jpg',
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">Hybrid</span>
      <span className="badge rounded-pill bg-warning fs-11">Mid Level</span>
      <span className="badge rounded-pill bg-info fs-11">Data Analysis</span></>
    )
  },
  {
    title: 'Olivia Brown',
    job: 'Project Manager',
    location: 'Boston, MA',
    qualification: 'MBA in Management',
    salary: '$120,000 - $150,000',
    type: 'Full-Time',
    languages: 'English, Italian',
    experience: '6 years',
    imgSrc: '../../../assets/images/faces/7.jpg',
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">On-Site</span>
      <span className="badge rounded-pill bg-warning fs-11">Senior Level</span>
      <span className="badge rounded-pill bg-info fs-11">Management</span></>
    )
  },
  {
    title: 'Emily Clark',
    job: 'Marketing Specialist',
    location: 'Austin, TX',
    qualification: "Bachelor's in Marketing",
    salary: '$70,000 - $85,000',
    type: 'Part-Time',
    languages: 'English, French',
    experience: '2 years',
    imgSrc: '../../../assets/images/faces/8.jpg',
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">Hybrid</span>
      <span className="badge rounded-pill bg-warning fs-11">Junior Level</span>
      <span className="badge rounded-pill bg-info fs-11">Marketing</span></>
    )
  },
];