interface TimelineEntry {
  date: string;
  time: string;
  name: string;
  action: string;
  description: string;
  media?: string[];
  backgroundColor: string;
  username: string;
  posts?: string;
};
export const TimelineData: TimelineEntry[] = [
  {
    date: '15 August 2024',
    time: '09:45, Thursday',
    name: 'Aman Gupta',
    action: 'Commented on',
    description:
      "Aman appreciated Sonia's recent article on entrepreneurship and innovation in India. He added insights about how Indian startups are shaping the global market.",
    backgroundColor: 'secondary',
    username: 'Sonia Mehta',
    posts: "'s Post"
  },
  {
    date: '10 November 2024',
    time: '14:20, Sunday',
    name: 'Raj Malhotra',
    action: 'Tagged Ananya Singh in a Photo.',
    description:
      'Raj shared memories with friends and family, adding Ananya to his cherished collection of moments.',
    media: [
      '../../assets/images/media/media-2.jpg',
      '../../assets/images/media/media-8.jpg',
    ],
    backgroundColor: 'info',
    username: '',
  },
  {
    date: '12 September 2024',
    time: '18:30, Friday',
    name: 'Riya Sharma',
    action: 'Shared a Post by Rajesh Iyer',
    description:
      "Riya shared Rajesh's recent update about his tech company's latest innovations. She congratulated Rajesh on his achievements in AI and automation.",
    backgroundColor: 'danger',
    username: 'Rajesh Iyer',
  },
  {
    date: '26 October 2024',
    time: '11:15, Saturday',
    name: 'Anil Kapoor',
    action: 'Liked a Post by Priya Verma',
    description:
      "Anil showed his appreciation for Priya's post about sustainable farming practices in rural India, further promoting her environmental message.",
    backgroundColor: 'success',
    username: 'Priya Verma',
  },
  {
    date: '5 December 2024',
    time: '17:45, Thursday',
    name: 'Pooja Verma',
    action: 'Shared Photos from her recent trip to Manali',
    description:
      'Pooja captured the stunning beauty of the snow-capped mountains in Manali and shared these breathtaking pictures with her friends.',
    media: [
      '../../assets/images/media/media-13.jpg',
      '../../assets/images/media/media-14.jpg',
      '../../assets/images/media/media-9.jpg',
    ],
    backgroundColor: 'warning',
    username: '',
  },
];

interface TimelineStep {
  name: string;
  date: string;
  image: string;
  stepTitle: string;
  description: string;
  bgColor: string;
  linkText: string;
  linkHref: string;
};
export const Timeline03: TimelineStep[] = [
  {
    name: "Aman Sharma",
    date: "January 12, 2024",
    image: "../../assets/images/faces/12.jpg",
    stepTitle: "Concept Discussion",
    description: "Brainstormed ideas for the new product.",
    bgColor: "bg-info",
    linkText: "Read More",
    linkHref: "#!",
  },
  {
    name: "Neha Singh",
    date: "March 15, 2024",
    image: "../../assets/images/faces/13.jpg",
    stepTitle: "Prototype Development",
    description: "Created the first version of product.",
    bgColor: "bg-success",
    linkText: "Read More",
    linkHref: "#!",
  },
  {
    name: "Vikram Desai",
    date: "April 10, 2024",
    image: "../../assets/images/faces/14.jpg",
    stepTitle: "Team Collaboration",
    description: "Conducted team meetings.",
    bgColor: "bg-primary",
    linkText: "Read More",
    linkHref: "#!",
  },
  {
    name: "Priya Nair",
    date: "May 5, 2024",
    image: "../../assets/images/faces/15.jpg",
    stepTitle: "Marketing Strategy",
    description: "Outlined the marketing plan.",
    bgColor: "bg-secondary",
    linkText: "Read More",
    linkHref: "#!",
  },
  {
    name: "Shruti Patel",
    date: "October 6, 2024",
    image: "../../assets/images/faces/2.jpg",
    stepTitle: "Final Product Launch",
    description: "Launched the final version.",
    bgColor: "bg-danger",
    linkText: "Read More",
    linkHref: "#!",
  },
];