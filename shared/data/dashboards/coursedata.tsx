
interface CardData {
  title: string;
  text: string;
  percent: string;
  color: string;
  avatarIcon: string;
  avatarColor: string;
  icon: 'up' | 'down';
}
export const CardData: CardData[] = [
  {
    title: 'Total Earnings',
    text: '8.56k',
    percent: '0.25%',
    color: 'success',
    avatarIcon: 'ti-currency-dollar',
    avatarColor: 'primary',
    icon: 'up'
  },
  {
    title: 'Total Students',
    text: '1.56k',
    percent: '0.25%',
    color: 'success',
    avatarIcon: 'ti-school',
    avatarColor: 'secondary',
    icon: 'up'
  },
  {
    title: 'Total Instructors',
    text: '7.3k',
    percent: '0.25%',
    color: 'danger',
    avatarIcon: 'ti-user-circle',
    avatarColor: 'success',
    icon: 'down'
  },
  {
    title: 'Total Courses',
    text: '8.56k',
    percent: '0.25%',
    color: 'danger',
    avatarIcon: 'ti-book-2',
    avatarColor: 'info',
    icon: 'down'
  }
];

//***  Top Instructors -Start ***//
interface Instructors {
  id: number;
  name: string;
  degree: string;
  image: string;
  rating: string;
  coursesCount: number;
  bgColor: string;
  class: string;
}
export const Instructorss: Instructors[] = [
  {
    id: 1,
    name: "Emily Clark",
    degree: "Ph.D(Computer Science)",
    image: "../../assets/images/faces/1.jpg",
    rating: "4.8/5",
    coursesCount: 36,
    bgColor: "bg-primary",
    class: 'mb-3'
  },
  {
    id: 2,
    name: "Jane Smith",
    degree: "M.S(Artificial Intelligence)",
    image: "../../assets/images/faces/11.jpg",
    rating: "4.1/5",
    coursesCount: 45,
    bgColor: "bg-primary",
    class: 'mb-3'
  },
  {
    id: 3,
    name: "Trex Con",
    degree: "MBA (Data Analytics)",
    image: "../../assets/images/faces/8.jpg",
    rating: "4.0/5",
    coursesCount: 28,
    bgColor: "bg-success",
    class: 'mb-3'
  },
  {
    id: 4,
    name: "David Lee",
    degree: "Ph.D(Machine Learning)",
    image: "../../assets/images/faces/12.jpg",
    rating: "4.5/5",
    coursesCount: 25,
    bgColor: "bg-primary",
    class: 'mb-3'
  },
  {
    id: 5,
    name: "Mortal Yun",
    degree: "MBA (Data Analytics)",
    image: "../../assets/images/faces/5.jpg",
    rating: "4.5/5",
    coursesCount: 34,
    bgColor: "bg-warning",
    class: 'mb-3'
  },
  {
    id: 6,
    name: "Ion Hau",
    degree: "M.B.A(Data Science)",
    image: "../../assets/images/faces/15.jpg",
    rating: "3.8/5",
    coursesCount: 22,
    bgColor: "bg-danger",
    class: ''
  },
];
//***  Top Instructors -End ***//

//***  Earnings Report -Start ***//
export const EarningsSeries = [
  {
    name: "This Year",
    type: "line",
    data: [80, 60, 90, 50, 100, 70, 90, 60, 85, 50, 80, 50],
  },
  {
    name: "Last Year",
    type: "line",
    data: [70, 80, 60, 80, 60, 100, 60, 90, 60, 80, 70, 80],
  },
]
export const EarningsOptions = {
  chart: {
    height: 309,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 1,
      blur: 2,
      opacity: .1,
      color: '#000'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [4, 2],
    show: true,
    curve: ['smooth', 'smooth'],
    dashArray: [0, 5]
  },
  grid: {
    borderColor: '#f3f3f3',
    strokeDashArray: 2,
  },
  yaxis: {
    min: 38,
  },
  xaxis: {
    axisBorder: {
      color: 'rgba(119, 119, 142, 0.05)',
    },
  },
  legend: {
    show: false
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  markers: {
    size: 0
  },
  colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)"],
  plotOptions: {
    bar: {
      columnWidth: "50%",
      borderRadius: 2,
    }
  },
}
//***  Earnings Report -End ***//

//***  Financial Summary -Start ***//
export const FinancialSeries = [{
  name: 'Income',
  data: [4, 8, 10, 15, 8, 15, 5]
},
{
  name: 'Expenses',
  data: [-4, -8, -10, -15, -8, -15, -5]
}
]
export const FinancialOptions = {
  chart: {
    type: 'bar',
    height: 340,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ['var(--primary-color)', 'rgba(var(--success-rgb), 1)'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '38%',
      borderRadius: 1,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    position: 'bottom',
    floating: false,
    markers: {
      size: 4,
      shape: "circle",
    },
  },
  grid: {
    show: true,
    borderColor: "rgba(119, 119, 142, 0.1)",
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false
      }
    },
    row: {
      colors: ["rgba(var(--light-rgb), 1)", "transparent"],
      opacity: 0.7
    },
  },
  xaxis: {
    tickAmount: 6,
    title: {
      text: 'Percent',
      style: {
        color: "#8c9097",
      }
    },
    labels: {
      formatter: function (val: number) {
        return Math.abs(Math.round(val)) + "%"
      },
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    axisBorder: {
      show: false,
    }
  },
  yaxis: {
    tickAmount: 5,
    stepSize: 1,
    labels: {
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
  }
}
//***  Financial Summary -End ***//

//***  New Visitors -Start ***//
export const VisitorsSeries = [{
  name: 'text',
  data: [5, 4, 3, 8, 5, 6, 8]
}]
export const VisitorsOptions = {
  chart: {
    type: 'bar',
    height: 25,
    width: 100,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
  },
  plotOptions: {
    bar: {
      columnWidth: "55%",
      borderRadiusApplication: "around",
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  // yaxis: {
  //   axisBorder: {
  //     show: false
  //   },
  // },
  colors: ['var(--primary-color)'],
}
//***  New Visitors -End ***//

//*** Monthly Payout Overview -Start ***//
export const MonthlySeries = [{
  name: 'Paid',
  data: [60, 50, 40, 45, 60, 50, 37, 39, 55, 52, 33, 30],
  type: 'area',
}, {
  name: 'UnPaid',
  data: [30, 40, 45, 50, 40, 45, 50, 46, 38, 35, 40, 43],
  type: "area",

}]
export const MonthlyOptions = {
  chart: {
    height: 318,
    toolbar: {
      show: false,
    },
    background: 'none',
    fill: "#fff",
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  colors: ["var(--primary03)", "rgba(var(--success-rgb), 0.6)"],
  background: 'transparent',
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    dashArray: [0, 5],
  },
  xaxis: {
    type: 'month',
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  legend: {
    show: true,
    position: 'top',
  },
  // xaxis: {
  //     show: false,
  //     axisBorder: {
  //         show: false,
  //         color: 'rgba(119, 119, 142, 0.05)',
  //         offsetX: 0,
  //         offsetY: 0,
  //     },
  //     axisTicks: {
  //         show: false,
  //         borderType: 'solid',
  //         color: 'rgba(119, 119, 142, 0.05)',
  //         width: 6,
  //         offsetX: 0,
  //         offsetY: 0
  //     },
  //     labels: {
  //         rotate: -90,
  //     }
  // },
  yaxis: {
    show: true,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}
//*** Monthly Payout Overview -End ***//

//*** New Students -Start ***//
interface NewStudents {
  id: number;
  name: string;
  email: string;
  coursesCount: number;
  avatar: string;
}
export const NewStudentss: NewStudents[] = [
  {
    id: 1,
    name: "Richard Dom",
    email: "richarddom1116@demo.com",
    coursesCount: 9,
    avatar: "../../assets/images/faces/13.jpg",
  },
  {
    id: 2,
    name: "Alex Johnson",
    email: "alexjohnson2024@demo.com",
    coursesCount: 5,
    avatar: "../../assets/images/faces/11.jpg",
  },
  {
    id: 3,
    name: "Emma Watson",
    email: "emmawatson2023@demo.com",
    coursesCount: 7,
    avatar: "../../assets/images/faces/14.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michaelbrown@demo.com",
    coursesCount: 12,
    avatar: "../../assets/images/faces/7.jpg",
  },
  {
    id: 5,
    name: "Sophia Lee",
    email: "sophialee789@demo.com",
    coursesCount: 3,
    avatar: "../../assets/images/faces/2.jpg",
  },
];
//*** New Students -End ***//

//*** Trendingcourses Courses -Start ***//
interface iconingCourse {
  id: number;
  name: string;
  category: string;
  classes: number;
  fee: number;
  image: string;
  class: string;
  color: string;
  feeText: string;
}
export const Trendingcourses: iconingCourse[] = [
  {
    id: 1,
    name: "UI/UX Designing",
    category: "Computer Science",
    classes: 45,
    fee: 25,
    image: "../../assets/images/media/media-1.jpg",
    class: 'mb-3',
    color: 'primary-transparent',
    feeText: 'Costs'
  },
  {
    id: 2,
    name: "3D Modeling with CAD Software",
    category: "CAD & Design",
    classes: 72,
    fee: 40,
    image: "../../assets/images/media/media-2.jpg",
    class: 'mb-3',
    color: 'warning-transparent',
    feeText: 'Courses fee'
  },
  {
    id: 3,
    name: "Advanced CAD for Architecture",
    category: "Architecture",
    classes: 54,
    fee: 55,
    image: "../../assets/images/media/media-3.jpg",
    class: 'mb-3',
    color: 'info-transparent',
    feeText: 'Courses fee'
  },
  {
    id: 4,
    name: "CAD for Mechanical Engineering",
    category: "Engineering",
    classes: 88,
    fee: 60,
    image: "../../assets/images/media/media-4.jpg",
    class: 'mb-3',
    color: 'success-transparent',
    feeText: 'Courses fee'
  },
  {
    id: 5,
    name: "Advanced Web Development",
    category: "Programming",
    classes: 50,
    fee: 50,
    image: "../../assets/images/media/media-2.jpg",
    class: '',
    color: 'warning-transparent',
    feeText: 'Price'
  },
];
//*** Trendingcourses Courses -End ***//

//*** All Courses -Start ***//
interface Course {
  id: number;
  name: string;
  category: string;
  categoryColor: string;
  participants: number;
  date: string;
  img: string;
  instructor: {
    name: string;
    avatar: string;
  };
  enrolled: number;
}
export const CoursesCard: Course[] = [
  {
    id: 1,
    name: "Introduction to 3D CAD Modeling",
    category: "CAD & Design",
    categoryColor: 'success',
    participants: 45,
    date: "15-06-2023",
    instructor: { name: "Alex J. Carter", avatar: "../../assets/images/faces/1.jpg" },
    enrolled: 30,
    img: '../../assets/images/media/media-1.jpg'
  },
  {
    id: 2,
    name: "Advanced CAD for Mechanical Engineering",
    category: "Engineering",
    categoryColor: 'primary',
    participants: 55,
    date: "10-07-2023",
    instructor: { name: "Maria L. Benson", avatar: "../../assets/images/faces/11.jpg" },
    enrolled: 40,
    img: '../../assets/images/media/media-2.jpg'
  },
  {
    id: 3,
    name: "Architectural Design with CAD",
    category: "Architecture",
    categoryColor: 'warning',
    participants: 40,
    date: "23-08-2023",
    instructor: { name: "John M. Roberts", avatar: "../../assets/images/faces/3.jpg" },
    enrolled: 60,
    img: '../../assets/images/media/media-3.jpg'
  },
  {
    id: 4,
    name: "Introduction to Civil Engineering CAD",
    category: "Civil Engineering",
    categoryColor: 'info',
    participants: 30,
    date: "12-09-2023",
    instructor: { name: "Emily P. Granger", avatar: "../../assets/images/faces/12.jpg" },
    enrolled: 50,
    img: '../../assets/images/media/media-4.jpg'
  },
  {
    id: 5,
    name: "Basics of Electrical Engineering with CAD",
    category: "Electrical Engineering",
    categoryColor: 'danger',
    participants: 35,
    date: "01-10-2023",
    instructor: { name: "Samuel L. Brooks", avatar: "../../assets/images/faces/5.jpg" },
    enrolled: 45,
    img: '../../assets/images/media/media-5.jpg'
  },
  {
    id: 6,
    name: "CAD for Product Design and Prototyping",
    category: "Product Design",
    categoryColor: 'purple',
    participants: 50,
    date: "18-11-2023",
    instructor: { name: "Olivia R. Simmons", avatar: "../../assets/images/faces/15.jpg" },
    enrolled: 55,
    img: '../../assets/images/media/media-1.jpg'
  },
];
//*** All Courses -End ***//
