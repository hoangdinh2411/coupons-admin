

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
export const JobData: Job[] = [
  {
    imgSrc: "../../../assets/images/company-logos/4.png",
    title: "Web UI Designer",
    company: "Info. Techz Company",
    location: "Los Angeles, CA",
    infoTag: "Freelancer",
    secondaryTag: "Remote",
    successTag: "Intermediate",
    salary: "$50k - $80k"
  },
  {
    imgSrc: "../../../assets/images/company-logos/7.png",
    title: "Senior Graphic Designer",
    company: "Creative Minds Inc.",
    location: "San Francisco, CA",
    infoTag: "Full-Time",
    secondaryTag: "On-Site",
    successTag: "Senior Level",
    salary: "$70k - $100k"
  },
  {
    imgSrc: "../../../assets/images/company-logos/8.png",
    title: "UI/UX Designer",
    company: "Design Lab Co.",
    location: "Austin, TX",
    infoTag: "Part-Time",
    secondaryTag: "Hybrid",
    successTag: "Junior Level",
    salary: "$45k - $60k"
  },
  {
    imgSrc: "../../../assets/images/company-logos/9.png",
    title: "Backend Developer",
    company: "Tech Innovations Ltd.",
    location: "Seattle, WA",
    infoTag: "Full-Time",
    secondaryTag: "Remote",
    successTag: "Mid-Level",
    salary: "$80k - $110k"
  },
  {
    imgSrc: "../../../assets/images/company-logos/10.png",
    title: "Marketing Manager",
    company: "Global Brands Inc.",
    location: "New York, NY",
    infoTag: "Contract",
    secondaryTag: "On-Site",
    successTag: "Managerial",
    salary: "$90k - $120k"
  }
];
