//*** Total Earnings -Start ***//

export const EarningsSeries = [
  {
    type: "bar",
    name: "Income",
    data: [50, 35, 30, 70, 56, 84, 90, 56, 85, 95, 75, 86]
  },
  {
    type: "area",
    name: "Expenses",
    data: [32, 56, 28, 48, 30, 56, 56, 100, 40, 50, 68, 40]
  },
]
export const EarningsOptions = {
  chart: {
    type: "area",
    height: 280,
    animations: {
      speed: 500,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 8,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.1,
    },
  },
  colors: ["var(--primary-color)", "rgba(53, 189, 170, 1)"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 3,
  },
  markers: {
    size: 4,
    hover: {
      size: 6
    },
    discrete: [{
      fillColor: '#fff',
      strokeColor: 'var(--primary-color)',
      size: 3,
      shape: "circle"
    },
    ],
  },
  fill: {
    type: ['soild', 'gradient'],
    shade: "dark",
    shadeIntensity: 0.1,
    inverseColors: false,
    gradientToColors: ["var(--primary-color)", "rgb(255, 183, 72)"],
    opacityFrom: [1, 0.4],
    opacityTo: [1, 0.07],
    stops: [0, 90, 100]
  },
  stroke: {
    curve: ["smooth", "smooth"],
    width: [0, 2],
    dashArray: [0, 3],
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value: string) {
        return "$" + value;
      },
    },
    max: 110
  },
  plotOptions: {
    bar: {
      columnWidth: "18%",
      borderRadius: "3",
    },
  },
  legend: {
    show: true,
    position: "top",
    inverseOrder: true,
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0
    }
  },
}

//*** Total Earnings -End ***//

//*** Today's Acitivity List -Start ***//

interface Acitivity {
  id: number;
  title: string;
  avatarIcon: string;
  avatarColor: string;
  grade: string;
  startTime: string;
  endTime: string;
  studentCount: string;
  liClass: string;
}
export const Acitivitysdata: Acitivity[] = [
  {
    id: 1,
    title: 'Science Workshop',
    avatarIcon: 'ri-tools-fill',
    avatarColor: 'bg-teal-transparent',
    grade: '6th to 10th Standard',
    startTime: '09:00 AM',
    endTime: '11:00 AM',
    studentCount: '50 Students',
    liClass: 'mb-3'
  },
  {
    id: 2,
    title: 'Math Olympiad',
    avatarIcon: 'ri-infinity-fill',
    avatarColor: 'bg-purple-transparent',
    grade: '8th Standard',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    studentCount: '30 Students',
    liClass: 'mb-3'
  },
  {
    id: 3,
    title: 'Art Exhibition',
    avatarIcon: 'ri-image-fill',
    avatarColor: 'bg-orange-transparent',
    grade: '7th to 12th Standard',
    startTime: '01:00 PM',
    endTime: '03:00 PM',
    studentCount: '40 Students',
    liClass: 'mb-3'
  },
  {
    id: 4,
    title: 'Literature Debate',
    avatarIcon: 'ri-volume-up-fill',
    avatarColor: 'bg-info-transparent',
    grade: '9th Standard',
    startTime: '02:30 PM',
    endTime: '04:00 PM',
    studentCount: '20 Students',
    liClass: 'mb-3'
  },
  {
    id: 5,
    title: 'Sports Meet',
    avatarIcon: 'ri-run-fill',
    avatarColor: 'bg-secondary-transparent',
    grade: 'All Standards',
    startTime: '03:00 PM',
    endTime: '05:00 PM',
    studentCount: '100+ Students',
    liClass: 'mb-3'
  },
  {
    id: 6,
    title: 'History Quiz',
    avatarIcon: 'ri-question-fill',
    avatarColor: 'bg-primary-transparent',
    grade: '9th to 12th Standard',
    startTime: '12:30 PM',
    endTime: '01:30 PM',
    studentCount: '40 Students',
    liClass: 'mb-0'
  },
];

//*** Today's Acitivity List -End ***//

//*** Teachers List -Start ***//

interface Instructor {
  id: string;
  name: string;
  subject: string;
  avatar: string;
  degree: string;
  experience: string;
  color: string;
}
export const Teachersinstructors: Instructor[] = [
  {
    id: '#1',
    name: 'Alice Walker',
    subject: 'Geography',
    avatar: '../../assets/images/faces/16.jpg',
    degree: 'M.A. Geography',
    experience: '4 yrs',
    color: 'danger'
  },
  {
    id: '#2',
    name: 'John Smith',
    subject: 'Mathematics',
    avatar: '../../assets/images/faces/11.jpg',
    degree: 'M.Ed',
    experience: '2 yrs',
    color: 'success'
  },
  {
    id: '#3',
    name: 'Emily Adams',
    subject: 'Science',
    avatar: '../../assets/images/faces/2.jpg',
    degree: 'M.Sc',
    experience: '5 yrs',
    color: 'primary'
  },
  {
    id: '#4',
    name: 'Mark Johnson',
    subject: 'History',
    avatar: '../../assets/images/faces/13.jpg',
    degree: 'Ph.D.',
    experience: '8 yrs',
    color: 'warning'
  },
  {
    id: '#5',
    name: 'Sarah Lee',
    subject: 'English',
    avatar: '../../assets/images/faces/1.jpg',
    degree: 'B.A. English',
    experience: '3 yrs',
    color: 'info'
  },
  {
    id: '#6',
    name: 'David Brown',
    subject: 'Physics',
    avatar: '../../assets/images/faces/15.jpg',
    degree: 'B.P.Ed',
    experience: '6 yrs',
    color: 'pink'
  },
];

//*** Teachers List -End ***//

//*** Attendance -Start ***//

export const AttendanceSchoolSeries = [800, 300, 347]
export const AttendanceSchoolOptions = {
  labels: ["Present", "Absent", "On leave"],
  chart: {
    height: 225,
    type: 'donut',
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.01,
    },
  },
  dataLabels: {
    enabled: true,
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
        size: '63%',
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
  colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)", "rgba(var(--primary-rgb), .08)"],
}

//*** Attendance -End ***//

//*** Star Students -Start ***//

interface Student {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  percentage: string;
  score: number;
}
export const StarStudents: Student[] = [
  {
    id: '#1123',
    name: 'Sophia Davis',
    grade: 'X-A',
    avatar: '../../assets/images/faces/3.jpg',
    percentage: '92%',
    score: 9.2,
  },
  {
    id: '#1124',
    name: 'Liam Johnson',
    grade: 'X-A',
    avatar: '../../assets/images/faces/4.jpg',
    percentage: '89%',
    score: 8.9,
  },
  {
    id: '#1125',
    name: 'Emma Wilson',
    grade: 'IX-C',
    avatar: '../../assets/images/faces/5.jpg',
    percentage: '87%',
    score: 8.7,
  },
  {
    id: '#1126',
    name: 'Olivia Martinez',
    grade: 'X-B',
    avatar: '../../assets/images/faces/6.jpg',
    percentage: '95%',
    score: 9.5,
  },
  {
    id: '#1127',
    name: 'Mason Brown',
    grade: 'IX-A',
    avatar: '../../assets/images/faces/7.jpg',
    percentage: '90%',
    score: 9.0,
  },
];

//*** Star Students -End ***//

//*** Students Fee Details -Start ***//

interface StudentPayment {
  id: string;
  name: string;
  grade: string;
  totalAmount: number;
  status: 'Paid' | 'Pending';
  paidAmount: number;
  balanceAmount: number;
}
export const StudentsFee: StudentPayment[] = [
  {
    id: '#1234',
    name: 'Sophia Davis',
    grade: 'X-A',
    totalAmount: 1000,
    status: 'Paid',
    paidAmount: 800,
    balanceAmount: 200,
  },
  {
    id: '#1235',
    name: 'Liam Johnson',
    grade: 'X-A',
    totalAmount: 1000,
    status: 'Paid',
    paidAmount: 1000,
    balanceAmount: 0,
  },
  {
    id: '#1236',
    name: 'Emma Wilson',
    grade: 'IX-C',
    totalAmount: 150,
    status: 'Paid',
    paidAmount: 150,
    balanceAmount: 0,
  },
  {
    id: '#1237',
    name: 'Olivia Martinez',
    grade: 'X-B',
    totalAmount: 200,
    status: 'Pending',
    paidAmount: 150,
    balanceAmount: 50,
  },
  {
    id: '#1238',
    name: 'Mason Brown',
    grade: 'IX-A',
    totalAmount: 50,
    status: 'Paid',
    paidAmount: 50,
    balanceAmount: 0,
  },
];

//*** Students Fee Details -End ***//

//*** Exam Results -Start ***//

interface Result {
  id: number;
  title: string;
  description: string;
  standard: string;
  progress: number;
  color: string;
  class: string;
}
export const SchoolCard: Result[] = [
  {
    id: 1,
    title: 'Half Yearly Exams',
    description: '6th to 10th Standard',
    standard: '6th to 10th Standard',
    progress: 78,
    color: 'bg-primary',
    class: 'mb-3'
  },
  {
    id: 2,
    title: 'Annual Exam Results',
    description: '10th Standard - Science Stream',
    standard: '10th Standard - Science Stream',
    progress: 90,
    color: 'bg-success',
    class: 'mb-3'
  },
  {
    id: 3,
    title: 'Mid-Term Exam Results',
    description: '9th Standard - Mathematics',
    standard: '9th Standard - Mathematics',
    progress: 85,
    color: 'bg-blue',
    class: 'mb-3'
  },
  {
    id: 4,
    title: 'Unit Test Results',
    description: '8th Standard - English',
    standard: '8th Standard - English',
    progress: 95,
    color: 'bg-orange',
    class: 'mb-0'
  },
];

//*** Exam Results -End ***//

export const schoolSeries = [
  {
    data: [10, 25, 28, 35, 28, 45, 35, 40, 50, 35, 55, 55, 65],
  },
]
export const schoolOptions = ({ color, offsetColor, offsetColor1, offsetColor2, gradient }: any) => ({
  chart: {
    height: 120,
    width: 180,
    type: 'area',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  yaxis: {
    min: 10
  },
  colors: [color],
  stroke: {
    width: [2],
  },
  fill: {
    opacity: 0.001,
    type: ['gradient'],
    gradient: {
      shade: 'light',
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: [gradient],
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: [offsetColor],
            opacity: 1
          },
          {
            offset: 75,
            color: [offsetColor1],
            opacity: 0.5
          },
          {
            offset: 100,
            color: [offsetColor2],
            opacity: 1
          }
        ],
      ]
    }
  }
})

export const SchoolCarddata = [
  {
    bgColor: 'primary',
    icon: 'school',
    title: 'Total Students',
    value: '69,325',
    percent: '+ 2.10%',
    percentColor: 'success',
    chartOptions: schoolOptions({ color: 'var(--primary-color)', gradient: "var(--primary01)", offsetColor: 'var(--primary09)', offsetColor1: 'var(--primary08)', offsetColor2: 'var(--primary02)' }),
    chartSeries: schoolSeries,
  },
  {
    bgColor: 'secondary',
    icon: 'user-circle',
    title: 'Total Teachers',
    value: '2,658',
    percent: '- 2.10%',
    percentColor: 'danger',
    chartOptions: schoolOptions({ color: 'rgba(var(--secondary-rgb), 1)', gradient: "rgba(var(--secondary-rgb), .1)", offsetColor: 'rgba(var(--secondary-rgb), .9)', offsetColor1: 'rgba(var(--secondary-rgb), .8)', offsetColor2: 'rgba(var(--secondary-rgb), .2)' }),
    chartSeries: schoolSeries,
  },
  {
    bgColor: 'success',
    icon: 'id',
    title: 'Total Staff',
    value: '3,266',
    percent: '- 2.10%',
    percentColor: 'danger',
    chartOptions: schoolOptions({ color: 'rgba(var(--success-rgb), 1)', gradient: "rgba(var(--success-rgb), .1)", offsetColor: 'rgba(var(--success-rgb), .9)', offsetColor1: 'rgba(var(--success-rgb), .8)', offsetColor2: 'rgba(var(--success-rgb), .2)' }),
    chartSeries: schoolSeries,
  },
  {
    bgColor: 'info',
    icon: 'moneybag',
    title: 'Total Revenue',
    value: '$88,357',
    percent: '+ 2.10%',
    percentColor: 'success',
    chartOptions: schoolOptions({ color: 'rgba(var(--info-rgb), 1)', gradient: "rgba(var(--info-rgb), .1)", offsetColor: 'rgba(var(--info-rgb), .9)', offsetColor1: 'rgba(var(--info-rgb), .8)', offsetColor2: 'rgba(var(--info-rgb), .2)' }),
    chartSeries: schoolSeries,
  }
];