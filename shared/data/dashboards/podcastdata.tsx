
//***  Favourites list - Start ***//
interface Podcast {
  imageSrc: string;
  title: string;
  host: string;
  duration: string;
  likes: number;
  hearts: number;
  iconColor: string;
}
export const FavouritesList: Podcast[] = [
  {
    imageSrc: "../../assets/images/podcast/7.jpg",
    title: "Innovation Insights",
    host: "Emily Davis",
    duration: "32 Mins",
    likes: 342,
    hearts: 120,
    iconColor: "primary",
  },
  {
    imageSrc: "../../assets/images/podcast/6.jpg",
    title: "Marketing Mastery",
    host: "Lisa Reynolds",
    duration: "60 Mins",
    likes: 1032,
    hearts: 215,
    iconColor: "secondary",
  },
  {
    imageSrc: "../../assets/images/podcast/8.jpg",
    title: "The Startup Journey",
    host: "Michael Johnson",
    duration: "50 Mins",
    likes: 845,
    hearts: 98,
    iconColor: "success",
  },
  {
    imageSrc: "../../assets/images/podcast/9.jpg",
    title: "Design Disruptors",
    host: "Sarah Mitchell",
    duration: "40 Mins",
    likes: 1120,
    hearts: 180,
    iconColor: "info",
  },
  {
    imageSrc: "../../assets/images/podcast/12.jpg",
    title: "Sunset Lights",
    host: "Armaan Leo",
    duration: "35 Mins",
    likes: 879,
    hearts: 445,
    iconColor: "danger",
  },
  {
    imageSrc: "../../assets/images/podcast/7.jpg",
    title: "Endorphin Flow",
    host: "Live Lipi",
    duration: "86 Mins",
    likes: 1457,
    hearts: 10,
    iconColor: "primary",
  },
  {
    imageSrc: "../../assets/images/podcast/6.jpg",
    title: "Under the sky",
    host: "Bruno Math",
    duration: "63 Mins",
    likes: 603,
    hearts: 25,
    iconColor: "success",
  },
];

//***  Favourites list - End ***//

//***  Popular Artists - Start ***//
interface Artists {
  imageSrc: string;
  title: string;
  author: string;
  postsCount: number;
  borderColor: string;
  textColor: string;
  class: string;
}
export const Artistss: Artists[] = [
  {
    imageSrc: "../../assets/images/podcast/1.jpg",
    title: "Tech Trends",
    author: "Sarah Johnson",
    postsCount: 598,
    borderColor: "primary",
    textColor: "primary",
    class: 'mb-3 mb-xl-0'
  },
  {
    imageSrc: "../../assets/images/podcast/2.jpg",
    title: "History Rewind",
    author: "James Patterson",
    postsCount: 598,
    borderColor: "secondary",
    textColor: "secondary",
    class: 'mb-3 mb-xl-0'
  },
  {
    imageSrc: "../../assets/images/podcast/3.jpg",
    title: "Business Blow",
    author: "Sona Kivinth",
    postsCount: 598,
    borderColor: "success",
    textColor: "success",
    class: 'mb-3 mb-xl-0'
  },
  {
    imageSrc: "../../assets/images/podcast/4.jpg",
    title: "Creativity",
    author: "Afrith Davis",
    postsCount: 598,
    borderColor: "info",
    textColor: "info",
    class: ''
  }
];

//***  Popular Artists - End ***//

//***  Activity by Week - Start ***//
interface ActivitybyWeek {
  episodeNumber: number;
  day: string;
  title: string;
  progress: number;
  duration: number;
  avatarColor: string;
  avatarInitials: string;
  parentClass: string;
}
export const ActivitybyWeeks: ActivitybyWeek[] = [
  {
    day: "Mo",
    episodeNumber: 12,
    title: '"How to Grow Your Podcast"',
    progress: 50,
    duration: 24,
    avatarColor: "primary",
    avatarInitials: "Mo",
    parentClass: "mb-3"
  },
  {
    day: "Tu",
    episodeNumber: 13,
    title: '"Monetization Strategie"',
    progress: 75,
    duration: 36,
    avatarColor: "secondary",
    avatarInitials: "Tu",
    parentClass: "mb-3"
  },
  {
    day: "We",
    episodeNumber: 14,
    title: '"Growing Your"',
    progress: 60,
    duration: 30,
    avatarColor: "success",
    avatarInitials: "We",
    parentClass: "mb-3"
  },
  {
    day: "Th",
    episodeNumber: 15,
    title: '"How to Collaborate"',
    progress: 40,
    duration: 20,
    avatarColor: "info",
    avatarInitials: "Th",
    parentClass: "mb-3"
  },
  {
    day: "Fr",
    episodeNumber: 16,
    title: '"Podcast SEO"',
    progress: 80,
    duration: 40,
    avatarColor: "pink",
    avatarInitials: "Fr",
    parentClass: ""
  }
];

//***  Activity by Week - End ***//

//***  Most Popular - Start ***//
interface PopularPodcast {
  imageSrc: string;
  title: string;
  author: string;
  likes: number;
  avatarColor: string;
}
export const Popularpodcasts: PopularPodcast[] = [
  {
    imageSrc: "../../assets/images/podcast/7.jpg",
    title: "Tech Trends",
    author: "Sarah Johnson",
    likes: 1234,
    avatarColor: "primary",
  },
  {
    imageSrc: "../../assets/images/podcast/8.jpg",
    title: "Mindful",
    author: "Emma Thompson",
    likes: 4567,
    avatarColor: "secondary",
  },
  {
    imageSrc: "../../assets/images/podcast/9.jpg",
    title: "Startup Stories",
    author: "David Clark",
    likes: 3230,
    avatarColor: "success",
  },
  {
    imageSrc: "../../assets/images/podcast/6.jpg",
    title: "History Rewind",
    author: "James Patterson",
    likes: 12098,
    avatarColor: "info",
  },
  {
    imageSrc: "../../assets/images/podcast/7.jpg",
    title: "Future Vision",
    author: "Dr. Stone",
    likes: 15432,
    avatarColor: "pink",
  },
  {
    imageSrc: "../../assets/images/podcast/12.jpg",
    title: "Tech Sound",
    author: "Mark Davis",
    likes: 9876,
    avatarColor: "primary",
  },
];

//***  Most Popular - End ***//

//***  Recently Played - Start ***//
interface PlayedPodcast {
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  duration: string;
  liked: boolean;
}
export const RecentlyPlayed: PlayedPodcast[] = [
  {
    imageSrc: "../../assets/images/podcast/6.jpg",
    title: "Exploring Space",
    author: "Dr. Neil Armstrong",
    rating: 4.5,
    duration: "60 Mins",
    liked: false,
  },
  {
    imageSrc: "../../assets/images/podcast/7.jpg",
    title: "Digital Nomads",
    author: "Alex Green",
    rating: 4.5,
    duration: "50 Mins",
    liked: true,
  },
  {
    imageSrc: "../../assets/images/podcast/8.jpg",
    title: "Music & Culture",
    author: "Olivia Harris",
    rating: 4.5,
    duration: "45 Mins",
    liked: false,
  },
  {
    imageSrc: "../../assets/images/podcast/9.jpg",
    title: "Culinary Creations",
    author: "Chef Rachel Green",
    rating: 4.5,
    duration: "40 Mins",
    liked: true,
  },
];

//***  Recently Played - End ***//

//***  Categories - Start ***//
interface Category {
  icon: string;
  title: string;
  count: number;
  bgColor: string;
  iconColor: string;
}
export const Categories: Category[] = [
  {
    icon: 'ri-macbook-line',
    title: 'Art & Creativity',
    count: 185,
    bgColor: 'bg-primary',
    iconColor: 'bg-primary',
  },
  {
    icon: 'ri-briefcase-2-line',
    title: 'Business',
    count: 236,
    bgColor: 'bg-secondary',
    iconColor: 'bg-secondary',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Health',
    count: 236,
    bgColor: 'bg-success',
    iconColor: 'bg-success',
  },
  {
    icon: 'ri-football-line',
    title: 'Sports',
    count: 236,
    bgColor: 'bg-info',
    iconColor: 'bg-info',
  },
  {
    icon: 'ri-briefcase-2-line',
    title: 'Business',
    count: 236,
    bgColor: 'bg-warning',
    iconColor: 'bg-warning',
  },
  {
    icon: 'ri-flask-line',
    title: 'Science',
    count: 236,
    bgColor: 'bg-teal',
    iconColor: 'bg-teal',
  },
  {
    icon: 'ri-book-line',
    title: 'Education',
    count: 236,
    bgColor: 'bg-pink',
    iconColor: 'bg-pink',
  },
];

//***  Categories - End ***//

//***   Play List - Start ***//
interface PlayList {
  imageSrc: string;
  title: string;
  author: string;
  duration: string;
  category: string;
  episodeTitle: string;
  rating: number;
  added: boolean;
}
export const PlayListdata: PlayList[] = [
  {
    imageSrc: '../../assets/images/podcast/7.jpg',
    title: 'Tech Talk Today',
    author: 'John Carter',
    duration: '200s',
    category: 'Technology',
    episodeTitle: '#32: AI Innovations and Future Trends',
    rating: 4.8,
    added: true,
  },
  {
    imageSrc: '../../assets/images/podcast/8.jpg',
    title: 'Mindful Moments',
    author: 'Sophia Lee',
    duration: '180s',
    category: 'Wellness',
    episodeTitle: '#45: Meditative Practices for Busy Minds',
    rating: 4.7,
    added: true,
  },
  {
    imageSrc: '../../assets/images/podcast/9.jpg',
    title: 'History Unfolded',
    author: 'Michael Thompson',
    duration: '220s',
    category: 'History',
    episodeTitle: '#66: The Fall of the Roman Empire',
    rating: 4.9,
    added: true,
  },
  {
    imageSrc: '../../assets/images/podcast/10.jpg',
    title: 'The Startup Journey',
    author: 'David Nguyen',
    duration: '170s',
    category: 'Business',
    episodeTitle: '#63: Building a Brand from Scratch',
    rating: 4.6,
    added: true,
  },
];

//***   Play List - End ***//

