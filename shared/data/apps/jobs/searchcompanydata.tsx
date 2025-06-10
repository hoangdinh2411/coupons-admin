
export const Developerdata = [
    { value: 'Frontend Developer', label: 'Frontend Developer' },
    { value: 'Backend Developer', label: 'Backend Developer' },
    { value: 'Full Stack Developer', label: 'Full Stack Developer' },
    { value: 'Cloud Engineer', label: 'Cloud Engineer' },
    { value: 'DevOps Specialist', label: 'DevOps Specialist' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'IT Support', label: 'IT Support' },
];

interface Company {
    imgSrc: string;
    title: string;
    job: string;
    location: string;
    vacancies: number;
    salary: string;
    type: string;
    badges: any;
}
export const Companiesdata: Company[] = [
    {
        imgSrc: "../../../assets/images/company-logos/2.png",
        title: "InnovateTech Solutions",
        job: "Front-End Developer",
        location: "New York, NY",
        vacancies: 30,
        salary: "$90,000 - $120,000",
        type: "Full Time",
        badges: (
            <>
            <span className="badge rounded-pill bg-primary fs-11">Remote</span>
            <span className="badge rounded-pill bg-warning fs-11">Senior Level</span>
            <span className="badge rounded-pill bg-info fs-11">Software</span></>
        )
    },
    {
        imgSrc: "../../../assets/images/company-logos/3.png",
        title: "Quantum Dynamics",
        job: "UX/UI Designer",
        location: "San Francisco, CA",
        vacancies: 12,
        salary: "$70,000 - $90,000",
        type: "Full Time",
        badges: (
            <>
            <span className="badge rounded-pill bg-warning fs-11">Hybrid</span>
            <span className="badge rounded-pill bg-success fs-11">Junior Level</span>
            <span className="badge rounded-pill bg-primary fs-11">Design</span>
        </>
        )
    },
    {
        imgSrc: "../../../assets/images/company-logos/4.png",
        title: "Stellar Innovations",
        job: "Data Scientist",
        location: "Boston, MA",
        vacancies: 8,
        salary: "$110,000 - $140,000",
        type: "Full Time",
        badges: (
            <>
            <span className="badge rounded-pill bg-info fs-11">Remote</span>
            <span className="badge rounded-pill bg-danger fs-11">Lead Level</span>
            <span className="badge rounded-pill bg-secondary fs-11">Analytics</span>
        </>
        )
    },
    {
        imgSrc: "../../../assets/images/company-logos/5.png",
        title: "Apex Systems",
        job: "Backend Developer",
        location: "Seattle, WA",
        vacancies: 20,
        salary: "$85,000 - $105,000",
        type: "Full Time",
        badges: (
            <>
            <span className="badge rounded-pill bg-secondary fs-11">On-Site</span>
            <span className="badge rounded-pill bg-info fs-11">Entry Level</span>
            <span className="badge rounded-pill bg-warning fs-11">Engineering</span>
        </>
        )
    },
    {
        imgSrc: "../../../assets/images/company-logos/6.png",
        title: "NextGen Solutions",
        job: "DevOps Engineer",
        location: "Austin, TX",
        vacancies: 15,
        salary: "$95,000 - $125,000",
        type: "Full Time",
        badges: (
            <>
            <span className="badge rounded-pill bg-info fs-11">Remote</span>
            <span className="badge rounded-pill bg-primary fs-11">Mid Level</span>
            <span className="badge rounded-pill bg-success fs-11">Operations</span>
        </>
        )
    }
];