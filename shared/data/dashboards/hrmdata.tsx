
interface CardData {
  cardClass: string;
  avatarClass: string;
  icon: string;
  title: string;
  value: string | number;
  percent: string | number;
  arrowIcon: 'up' | 'down';
  arrowColor: string;
}
export const HrmCarddata: CardData[] = [
  {
    cardClass: 'primary',
    avatarClass: 'bg-primary',
    icon: 'ti-users',
    title: 'Total Employees',
    value: '22,124',
    percent: '1.8%',
    arrowIcon: 'up',
    arrowColor: 'success',
  },
  {
    cardClass: 'secondary',
    avatarClass: 'bg-secondary',
    icon: 'ti-user-x',
    title: 'Employees On Leave',
    value: '1,457',
    percent: '0.7%',
    arrowIcon: 'down',
    arrowColor: 'danger',
  },
  {
    cardClass: 'success',
    avatarClass: 'bg-success',
    icon: 'ti-heart-handshake',
    title: 'Total Clients',
    value: '6,983',
    percent: '1.3%',
    arrowIcon: 'up',
    arrowColor: 'success',
  },
  {
    cardClass: 'info',
    avatarClass: 'bg-info',
    icon: 'ti-id-badge-2',
    title: 'New Employee',
    value: '2,542',
    percent: '0.5%',
    arrowIcon: 'down',
    arrowColor: 'danger',
  },
];

//*** Performance By Category - Start ***//
export const PerformanceSeries = [{
  name: 'Designing',
  data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
}, {
  name: 'Development',
  data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
}, {
  name: 'Marketing',
  data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
}, {
  name: 'Testing',
  type: 'line',
  data: [45, 31, 24, 56, 13, 28, 55, 41, 67, 22, 15, 13]
}]
export const PerformanceOptions = {
  chart: {
    type: 'bar',
    height: 321,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.1,
    },
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3
  },
  yaxis: {
    max: 100
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  colors: ["var(--primary-color)", "var(--primary02)", "var(--primary05)", "rgba(var(--success-rgb), 1)"],
  legend: {
    show: true,
    position: 'top',
    markers: {
      size: 5,
      shape: "circle"
    }
  },
  markers: {
    size: 4,
    colors: ['rgba(var(--secondary-rgb), 1)'],
    strokeColors: '#ffffff',
    strokeWidth: 1,
    hover: {
      size: 5
    }
  },
  stroke: {
    curve: 'smooth',
    width: [0, 0, 0, 2.5],
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 0,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  fill: {
    opacity: 1
  }
}
//*** Performance By Category - End ***//

//*** Employee Performance - Start ***//
export const EmployeeSeries = [60, 80]
export const EmployeeSeries1 = [72, 28]
export const EmployeeSeries2 = [66, 34]
export const EmployeeSeries3 = [72, 28]
export const EmployeeSeries4 = [72, 28]

export const EmployeeOptions = ({ color }: any) => ({
  chart: {
    type: "donut",
    width: 38,
    height: 38,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "70%",
        background: "transparent",
        labels: {
          show: false,
        },
      },
    },
  },
  colors: color,
  tooltip: {
    enabled: false,
    fixed: {
      enabled: false,
    },
  },
});
export const EmployeeData = [
  {
    name: "Diana Aise",
    role: "C.E.O",
    score: 40,
    avatar: "../../assets/images/faces/2.jpg",
    chartOptions: EmployeeOptions({ color: ["var(--primary-color)", "var(--primary01)"] }),
    chartSeries: EmployeeSeries
  },
  {
    name: "Michael",
    role: "HR Manager",
    score: 72,
    avatar: "../../assets/images/faces/3.jpg",
    chartOptions: EmployeeOptions({ color: ["rgba(var(--secondary-rgb), 1)", "rgba(var(--secondary-rgb), 0.1)"] }),
    chartSeries: EmployeeSeries1
  },
  {
    name: "Sarah JEn",
    role: "MD(Marketing)",
    score: 66,
    avatar: "../../assets/images/faces/4.jpg",
    chartOptions: EmployeeOptions({ color: ["rgba(var(--success-rgb), 1)", "rgba(var(--success-rgb), 0.1)"] }),
    chartSeries: EmployeeSeries2
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    score: 72,
    avatar: "../../assets/images/faces/5.jpg",
    chartOptions: EmployeeOptions({ color: ["rgba(var(--info-rgb), 1)", "rgba(var(--info-rgb), 0.1)"] }),
    chartSeries: EmployeeSeries3
  },
  {
    name: "Emma Brown",
    role: "Sales Associate",
    score: 72,
    avatar: "../../assets/images/faces/6.jpg",
    chartOptions: EmployeeOptions({ color: ["rgba(var(--pink-rgb), 1)", "rgba(var(--pink-rgb), 0.1)"] }),
    chartSeries: EmployeeSeries4
  },
];

//*** Employee Performance - End ***//

//*** Acquisitions - Start ***//
interface Acquisitions {
  icon: string;
  color: string;
  title: string;
  count: number;
  badgeColor: string;
}
export const Acquisitionsdata: Acquisitions[] = [
  {
    icon: "fa-regular fa-folder-open",
    color: "text-primary",
    title: "Total Applications",
    count: 1982,
    badgeColor: "bg-primary-transparent",
  },
  {
    icon: "fa-regular fa-check-circle",
    color: "text-success",
    title: "Short Listed",
    count: 214,
    badgeColor: "bg-success-transparent",
  },
  {
    icon: "fa-regular fa-clock",
    color: "text-secondary",
    title: "On-Hold",
    count: 262,
    badgeColor: "bg-secondary-transparent",
  },
  {
    icon: "fa-regular fa-times-circle",
    color: "text-info",
    title: "Rejected",
    count: 395,
    badgeColor: "bg-warning-transparent",
  },
  {
    icon: "fas fa-ban",
    color: "text-pink",
    title: "Blocked",
    count: 79,
    badgeColor: "bg-pink-transparent",
  }
];
//*** Acquisitions - End ***//

//*** Hiring Sources - Start ***//
export const HiringSeries = [1754, 544, 682, 263]
export const HiringOptions = {
  labels: ["Jobs Boards", "Referrals", "Media", "Campus"],
  chart: {
    height: 176,
    type: 'donut',
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.1,
    },
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
        size: '70%',
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
  colors: ["var(--primary-color)", "rgba(var(--secondary-rgb), 0.9)", "rgba(var(--success-rgb), 0.85)", "rgba(var(--info-rgb), 0.7)"],
}

//*** Hiring Sources - End ***//

//*** Recent Job Applications - Start ***//

interface RecentJobApplications {
  name: string;
  image: string;
  position: string;
  status: string;
  date: string;
  color: string;
}
export const RecentJobApplicationsdata: RecentJobApplications[] = [
  {
    name: 'John Doe',
    image: '../../assets/images/faces/2.jpg',
    position: 'Engineer',
    status: 'Short Listed',
    date: '20 Oct, 2024',
    color: "primary"
  },
  {
    name: 'Jane Smith',
    image: '../../assets/images/faces/12.jpg',
    position: 'React Developer',
    status: 'On-Hold',
    date: '19 Oct, 2024',
    color: "warning"
  },
  {
    name: 'Joshna Kite',
    image: '../../assets/images/faces/1.jpg',
    position: 'UX Designer',
    status: 'Accepted',
    date: '18 Oct, 2024',
    color: "success"
  },
  {
    name: 'Emily Brown',
    image: '../../assets/images/faces/2.jpg',
    position: 'Data Analyst',
    status: 'Rejected',
    date: '17 Oct, 2024',
    color: "danger"
  },
  {
    name: 'David Lee',
    image: '../../assets/images/faces/15.jpg',
    position: 'Marketing Head',
    status: 'Under Review',
    date: '16 Oct, 2024',
    color: "pink"
  },
];

//*** Recent Job Applications - End ***//

//*** Upcoming Interviews - Start ***//

interface UpcomingInterviews {
  name: string;
  image: string;
  position: string;
  badgeClass: string;
  time: string;
  date: string;
}
export const UpcomingInterviewsdata: UpcomingInterviews[] = [
  {
    name: 'John Doe',
    image: '../../assets/images/faces/2.jpg',
    position: 'Software Engineer',
    badgeClass: 'bg-success-transparent',
    time: '10:30 PM',
    date: '30 Oct, 2024',
  },
  {
    name: 'Jane Smith',
    image: '../../assets/images/faces/12.jpg',
    position: 'Marketing Manager',
    badgeClass: 'bg-secondary-transparent',
    time: '10:30 PM',
    date: '02 Nov, 2024',
  },
  {
    name: 'Michael Johnson',
    image: '../../assets/images/faces/3.jpg',
    position: 'UX Designer',
    badgeClass: 'bg-success-transparent',
    time: '10:30 PM',
    date: '08 Nov, 2024',
  },
  {
    name: 'Emily Brown',
    image: '../../assets/images/faces/13.jpg',
    position: 'Data Analyst',
    badgeClass: 'bg-danger-transparent',
    time: '10:30 PM',
    date: '10 Nov, 2024',
  },
  {
    name: 'David Lee',
    image: '../../assets/images/faces/1.jpg',
    position: 'Sales Associate',
    badgeClass: 'bg-info-transparent',
    time: '10:30 PM',
    date: '11 Nov, 2024',
  },
];

//*** Upcoming Interviews - End ***//

//*** Bills Summary - Start ***//

interface Bills {
  id: string;
  name: string;
  email: string;
  position: string;
  amount: string;
  status: string;
  date: string;
  paymentMethod: string;
  avatar: string;
  color: string;
  paymentColor: string;
  positionColor: string;
  paymentCard: string;
}
export const Billsdata: Bills[] = [
  {
    id: '#B001',
    name: 'Rena Mark',
    email: 'renamark123@demo',
    position: 'Marketing',
    amount: '$1,200',
    status: 'Paid',
    date: '2024-10-15',
    paymentMethod: 'Credit Card',
    avatar: '../../assets/images/faces/1.jpg',
    color: 'success',
    paymentColor: 'pink',
    positionColor: 'primary',
    paymentCard: 'bank-card-line'
  },
  {
    id: '#B002',
    name: 'Suri Jen',
    email: 'surijen@demo',
    position: 'Finance',
    amount: '$2,500',
    status: 'Pending',
    date: '2024-10-05',
    paymentMethod: 'Bank Transfer',
    avatar: '../../assets/images/faces/12.jpg',
    color: 'warning',
    paymentColor: 'success',
    positionColor: 'success',
    paymentCard: 'bank-line'
  },
  {
    id: '#B003',
    name: 'SriKavya',
    email: 'sriKavya@demo',
    position: 'HR',
    amount: '$750',
    status: 'Overdue',
    date: '2024-10-25',
    paymentMethod: 'Cash',
    avatar: '../../assets/images/faces/5.jpg',
    color: 'danger',
    paymentColor: 'info',
    positionColor: 'warning',
    paymentCard: 'cash-line'
  },
  {
    id: '#B002',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@demo.com',
    position: 'Finance',
    amount: '$3,200',
    status: 'Paid',
    date: '2024-09-25',
    paymentMethod: 'Net Banking',
    avatar: '../../assets/images/faces/12.jpg',
    color: 'success',
    paymentColor: 'success',
    positionColor: 'success',
    paymentCard: 'bank-line'
  },
  {
    id: '#B003',
    name: 'Ananya Gupta',
    email: 'ananya.gupta@demo.com',
    position: 'HR',
    amount: '$1,500',
    status: 'Pending',
    date: '2024-09-30',
    paymentMethod: 'Cash',
    avatar: '../../assets/images/faces/5.jpg',
    color: 'warning',
    paymentColor: 'info',
    positionColor: 'warning',
    paymentCard: 'cash-line'
  },
];

//*** Bills Summary - End ***//


interface Hiring {
  iconClass: string;
  label: string;
  count: number;
  bgClass: string;
}

export const Hiringdata: Hiring[] = [
  { iconClass: 'ri-dashboard-fill', label: 'Job Boards', count: 1754, bgClass: 'bg-primary-transparent' },
  { iconClass: 'ri-exchange-funds-line', label: 'Referrals', count: 544, bgClass: 'bg-secondary-transparent' },
  { iconClass: 'ri-record-circle-line', label: 'Media', count: 682, bgClass: 'bg-success-transparent' },
  { iconClass: 'ri-building-2-line', label: 'Campus', count: 263, bgClass: 'bg-info-transparent' },
];
