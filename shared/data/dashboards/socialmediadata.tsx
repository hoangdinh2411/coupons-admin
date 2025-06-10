
//*** Audience Statistics - Start ***//

export const AudienceSeries = [
  {
    name: "Followers",
    data: [56, 44, 66, 55, 68, 90, 55, 68, 55, 66, 44, 56],
    type: 'area',
  },
  {
    name: "Total Views",
    data: [45, 50, 42, 59, 53, 74, 43, 43, 30, 55, 74, 49],
    type: 'area',
  }
];
export const AudienceOptions = {
  chart: {
    type: 'area',
    height: 348,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 7,
      left: 0,
      blur: 1,
      color: ["var(--primary-color)", 'rgba(var(--success-rgb), 1)'],
      opacity: 0.05,
    },
  },
  grid: {
    borderColor: 'rgba(167, 180, 201 ,0.2)',
    strokeDashArray: 3,
  },
  colors: ['var(--primary-color)', "rgba(var(--success-rgb), 1)"],
  stroke: {
    width: [3, 2],
    curve: ["smooth", "smooth"],
    dashArray: [0, 4],
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    labels: {
      colors: '#74767c',
    },
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0,
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          { offset: 0, color: "var(--primary01)", opacity: 0.2 },
          { offset: 50, color: "var(--primary01)", opacity: 0.2 },
          { offset: 100, color: 'var(--primary01)', opacity: 0.5 },
        ],
        [
          { offset: 0, color: "rgba(var(--success-rgb), .05)", opacity: 1 },
          { offset: 50, color: "rgba(var(--success-rgb), .05)", opacity: 1 },
          { offset: 100, color: 'rgba(var(--success-rgb), .05)', opacity: 0.5 },
        ],
      ],
    },
  },
  yaxis: {
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "";
      },
    },
    max: 90,
    min: 20,
  },
  xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: true,
      color: 'rgba(167, 180, 201 ,0.2)',
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(167, 180, 201 ,0.2)',
      width: 6,
    },
    labels: {
      rotate: -90,
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-label',
      },
    }
  }
};

//*** Audience Statistics - End ***//

//*** Profit Earned - Start ***//

export const ProfitSeries = [
  {
    type: 'bar',
    name: 'Profit',
    data: [20, 25, 30, 26, 32, 26, 26, 24, 29, 25, 33, 27],
  },
  {
    type: 'bar',
    name: 'Revenue',
    data: [37, 33, 38, 35, 31, 30, 37, 33, 42, 39, 34, 36],
  }
]
export const ProfitOptions = {
  chart: {
    type: 'bar',
    height: 258,
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  colors: ["var(--primary-color)", "var(--primary02)"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    offsetY: -5,
    markers: {
      size: 5,
      shape: "circle"
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 2,
    },
  },
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontFamily: 'poppins, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0);
      },

    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
    },
    axisTicks: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
    },
    labels: {
      rotate: -45,
    },
  },
  tooltip: {
    enabled: true,
  },
}

//*** Profit Earned - End ***//

//*** Top Locations - Start ***//

interface CountryData {
  id: number;
  name: string;
  flagImage: string;
  population: string;
  percentageChange: string;
  isPositive: boolean;
}
export const Locationsdata: CountryData[] = [
  {
    id: 1,
    name: 'United States',
    flagImage: '../../assets/images/flags/us_flag.jpg',
    population: '32.75M',
    percentageChange: '0.65%',
    isPositive: true,
  },
  {
    id: 2,
    name: 'Russia',
    flagImage: '../../assets/images/flags/russia_flag.jpg',
    population: '22.75M',
    percentageChange: '0.55%',
    isPositive: true,
  },
  {
    id: 3,
    name: 'Germany',
    flagImage: '../../assets/images/flags/germany_flag.jpg',
    population: '36.75M',
    percentageChange: '0.69%',
    isPositive: false,
  },
  {
    id: 4,
    name: 'Italy',
    flagImage: '../../assets/images/flags/italy_flag.jpg',
    population: '45.75M',
    percentageChange: '0.86%',
    isPositive: true,
  },
  {
    id: 5,
    name: 'Uae',
    flagImage: '../../assets/images/flags/uae_flag.jpg',
    population: '37.75M',
    percentageChange: '0.73%',
    isPositive: true,
  },
  {
    id: 6,
    name: 'Spain',
    flagImage: '../../assets/images/flags/spain_flag.jpg',
    population: '34.75M',
    percentageChange: '0.64%',
    isPositive: false,
  },
];

//*** Top Locations - End ***//

//*** Recent Posts - Start ***//

interface PostData {
  id: number;
  time: string;
  date: string;
  description: string;
  mediaUrl: string;
  mediaAlt: string;
}
export const PostList: PostData[] = [
  {
    id: 1,
    time: '09:15PM',
    date: '15th Oct, 2024',
    description: 'Lorem iprusm juaisq jiporem',
    mediaUrl: '../../assets/images/media/media-1.jpg',
    mediaAlt: 'Media 1',
  },
  {
    id: 2,
    time: '11:30AM',
    date: '16th Oct, 2024',
    description: 'New update: The latest trends emerged.',
    mediaUrl: '../../assets/images/media/media-2.jpg',
    mediaAlt: 'New Media',
  },
  {
    id: 3,
    time: '02:45PM',
    date: '17th Oct, 2024',
    description: 'New update: Social media marketing goes.',
    mediaUrl: '../../assets/images/media/media-3.jpg',
    mediaAlt: 'Live Q&A Announcement',
  },
];

//*** Recent Posts - End ***//

//*** Traffic Sources - Start ***//

interface SocialMedia {
  id: number;
  platform: string;
  icon: string;
  followers: string;
  growth: string;
  percentageChange: string;
  status: string;
  bgColor: string;
  changeDirection: 'up' | 'down';
}
export const TrafficSources: SocialMedia[] = [
  {
    id: 1,
    platform: 'Facebook',
    icon: 'ri-facebook-line',
    followers: '25,145 Followers',
    growth: '56%',
    percentageChange: '2.4%',
    changeDirection: 'up',
    status: 'active',
    bgColor: 'primary',
  },
  {
    id: 2,
    platform: 'Instagram',
    icon: 'ri-instagram-line',
    followers: '19,762 Followers',
    growth: '35%',
    percentageChange: '1.1%',
    changeDirection: 'down',
    status: '',
    bgColor: 'purple',
  },
  {
    id: 3,
    platform: 'Twitter',
    icon: 'ri-twitter-x-line',
    followers: '12,384 Followers',
    growth: '20%',
    percentageChange: '0.5%',
    changeDirection: 'up',
    status: '',
    bgColor: 'orange',
  },
  {
    id: 4,
    platform: 'LinkedIn',
    icon: 'ri-linkedin-box-line',
    followers: '8,745 Followers',
    growth: '15%',
    percentageChange: '3.2%',
    changeDirection: 'up',
    status: '',
    bgColor: 'info',
  },
];

export const TrafficSeries = [1754, 1234]
export const TrafficOptions = {
  labels: ["This Month", "Last Month"],
  chart: {
    height: 209,
    type: 'donut',
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
        size: '80%',
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
            label: 'Facebook',
            fontSize: '20px',
            fontWeight: 600,
            color: '#495057',
          }

        }
      }
    }
  },
  colors: ["var(--primary-color)", "var(--primary01)"],
}

//*** Traffic Sources - End ***//

//*** Suggestions - Start ***//

interface User {
  id: number;
  name: string;
  profileImage: string;
  mutualFriends: number;
  following: boolean;
}
export const Suggestionsdata: User[] = [
  {
    id: 1,
    name: 'Jane Doe',
    profileImage: '../../assets/images/faces/3.jpg',
    mutualFriends: 5,
    following: true,
  },
  {
    id: 2,
    name: 'Aarav Sharma',
    profileImage: '../../assets/images/faces/14.jpg',
    mutualFriends: 8,
    following: false,
  },
  {
    id: 3,
    name: 'Priya Patel',
    profileImage: '../../assets/images/faces/5.jpg',
    mutualFriends: 2,
    following: true,
  },
  {
    id: 4,
    name: 'Shourya Kumar',
    profileImage: '../../assets/images/faces/12.jpg',
    mutualFriends: 7,
    following: false,
  },
];

//*** Suggestions - End ***//

//*** Requests - Start ***//

interface Requests {
  id: number;
  name: string;
  profileImage: string;
  timeAgo: string;
}
export const Requestsdata: Requests[] = [
  {
    id: 1,
    name: 'Socrates Itumay',
    profileImage: '../../assets/images/faces/2.jpg',
    timeAgo: '1 minute ago',
  },
  {
    id: 2,
    name: 'Aarav Sharma',
    profileImage: '../../assets/images/faces/3.jpg',
    timeAgo: '2 minutes ago',
  },
  {
    id: 3,
    name: 'Priya Patel',
    profileImage: '../../assets/images/faces/4.jpg',
    timeAgo: '5 minutes ago',
  },
  {
    id: 4,
    name: 'Dharsh Kumar',
    profileImage: '../../assets/images/faces/5.jpg',
    timeAgo: '10 minutes ago',
  },
  {
    id: 5,
    name: 'Neha Singh',
    profileImage: '../../assets/images/faces/6.jpg',
    timeAgo: '15 minutes ago',
  },
  {
    id: 6,
    name: 'Maya Deshmukh',
    profileImage: '../../assets/images/faces/7.jpg',
    timeAgo: '20 minutes ago',
  },
  {
    id: 7,
    name: 'Ishaan Rao',
    profileImage: '../../assets/images/faces/8.jpg',
    timeAgo: '30 minutes ago',
  },
];

//*** Requests - End ***//

//*** Social Media Performance - Start ***//

interface SocialMediaData {
  dateRange: string;
  platform: string;
  posts: number;
  impressions: string;
  reach: string;
  clicks: string;
  engagementRate: string;
  growth: string;
  growthBadge: 'success' | 'danger';
  growthPercentage: string;
  icon: string;
  color: string;
}
export const SocialMediaPerformance: SocialMediaData[] = [
  {
    dateRange: 'October 1-7, 2024',
    platform: 'Facebook',
    posts: 10,
    impressions: "15,000",
    reach: "45,000",
    clicks: "2,500",
    engagementRate: '5%',
    growth: '+200',
    growthBadge: 'success',
    growthPercentage: '2.4%',
    icon: 'ri-facebook-line',
    color: 'primary',
  },
  {
    dateRange: 'October 11-12, 2024',
    platform: 'Instagram',
    posts: 8,
    impressions: "20,000",
    reach: "50,000",
    clicks: "3,000",
    engagementRate: '6%',
    growth: '+300',
    growthBadge: 'danger',
    growthPercentage: '-2.4%',
    icon: 'ri-instagram-line',
    color: 'secondary',
  },
  {
    dateRange: 'October 15-17, 2024',
    platform: 'Twitter',
    posts: 12,
    impressions: "10,000",
    reach: "35,000",
    clicks: "1,800",
    engagementRate: '4.5%',
    growth: '+150',
    growthBadge: 'success',
    growthPercentage: '0.5%',
    icon: 'ri-twitter-x-line',
    color: 'success',
  },
  {
    dateRange: 'October 13-21, 2024',
    platform: 'LinkedIn',
    posts: 6,
    impressions: "5,000",
    reach: "12,000",
    clicks: "500",
    engagementRate: '3%',
    growth: '+100',
    growthBadge: 'success',
    growthPercentage: '2.4%',
    icon: 'ri-linkedin-line',
    color: 'info',
  },
  {
    dateRange: 'October 21-23, 2024',
    platform: 'YouTube',
    posts: 5,
    impressions: "12,000",
    reach: "40,000",
    clicks: "1,500",
    engagementRate: '7%',
    growth: '+250',
    growthBadge: 'success',
    growthPercentage: '1.2%',
    icon: 'ri-youtube-line',
    color: 'danger',
  },
];

//*** Social Media Performance - End ***//

interface SocialMediaCard {
  title: string;
  icon: string;
  value: string;
  percent: string;
  arrowIcon: 'up' | 'down';
  arrowColor: string;
  bgColor: string;
}
export const socialMediaCard: SocialMediaCard[] = [
  {
    title: 'Instagram',
    icon: 'instagram-line',
    value: '39.48M',
    percent: '0.25%',
    arrowIcon: 'up',
    arrowColor: 'success',
    bgColor: 'pink',
  },
  {
    title: 'Facebook',
    icon: 'facebook-line',
    value: '32.55M',
    percent: '0.2%',
    arrowIcon: 'down',
    arrowColor: 'danger',
    bgColor: 'primary',
  },
  {
    title: 'Messenger',
    icon: 'messenger-line',
    value: '23.06M',
    percent: '0.6%',
    arrowIcon: 'down',
    arrowColor: 'danger',
    bgColor: 'secondary',
  },
  {
    title: 'YouTube',
    icon: 'youtube-line',
    value: '14.245M',
    percent: '1.15%',
    arrowIcon: 'down',
    arrowColor: 'danger',
    bgColor: 'success',
  },
];