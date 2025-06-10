
interface ProfileCard {
  id: number;
  imgSrc: string;
  title: string;
  job: string;
  location: string;
  salary: string;
  type: string;
  badges: any;
}
export const ProfileData: ProfileCard[] = [
  {
    id: 1,
    imgSrc: '../../../assets/images/faces/3.jpg',
    title: 'Sarah Williams',
    job: 'UI/UX Designer',
    location: 'San Francisco, CA',
    salary: '$80,000 - $100,000',
    type: 'Contract',
    badges: (
      <>
      <span className="badge rounded-pill bg-primary fs-11">Remote</span>
      <span className="badge rounded-pill bg-warning fs-11">Mid Level</span>
      <span className="badge rounded-pill bg-info fs-11">Design</span>
    </>
    )
  },
  {
    id: 2,
    imgSrc: '../../../assets/images/faces/4.jpg',
    title: 'Web Developer',
    job: 'Web Developer',
    location: 'Austin, TX',
    salary: '$90,000 - $120,000',
    type: 'Full-Time',
    badges:(
      <>
      <span className="badge rounded-pill bg-primary fs-11">On-Site</span>
      <span className="badge rounded-pill bg-success fs-11">Senior Level</span>
      <span className="badge rounded-pill bg-info fs-11">Web Development</span>
    </>
    )
  },
  {
    id: 3,
    imgSrc: '../../../assets/images/faces/5.jpg',
    title: 'Emma Davis',
    job: 'Front-End Developer',
    location: 'Seattle, WA',
    salary: '$95,000 - $115,000',
    type: 'Full-Time',
    badges:(
      <>
      <span className="badge rounded-pill bg-warning fs-11">Hybrid</span>
      <span className="badge rounded-pill bg-success fs-11">Mid Level</span>
      <span className="badge rounded-pill bg-primary fs-11">Frond End</span>
    </>
    )
  },
  {
    id: 4,
    imgSrc: '../../../assets/images/faces/6.jpg',
    title: 'David Thompson',
    job: 'Back-End Developer',
    location: 'Boston, MA',
    salary: '$110,000 - $140,000',
    type: 'Full-Time',
    badges: (
      <>
      <span className="badge rounded-pill bg-info fs-11">Remote</span>
      <span className="badge rounded-pill bg-danger fs-11">Lead</span>
      <span className="badge rounded-pill bg-warning fs-11">Back-End</span>
    </>
    )
  },
  {
    id: 5,
    imgSrc: '../../../assets/images/faces/7.jpg',
    title: 'Ava Johnson',
    job: 'Full-Stack Developer',
    location: 'Austin, TX',
    salary: '$120,000 - $140,000',
    type: 'Contract',
    badges:(
      <>
      <span className="badge rounded-pill bg-primary fs-11">Remote</span>
      <span className="badge rounded-pill bg-danger fs-11">Senior Level</span>
      <span className="badge rounded-pill bg-success fs-11">Full-Stack</span>
    </>
    )
  },
  {
    id: 6,
    imgSrc: '../../../assets/images/faces/8.jpg',
    title: 'Noah Martinez',
    job: 'Software Engineer',
    location: 'San Diego, CA',
    salary: '$85,000 - $105,000',
    type: 'Full-Time',
    badges: (
      <>
      <span className="badge rounded-pill bg-warning fs-11">Hybrid</span>
      <span className="badge rounded-pill bg-success fs-11">Junior Level</span>
      <span className="badge rounded-pill bg-warning fs-11">Engineering</span>
    </>
    )
  }
];
