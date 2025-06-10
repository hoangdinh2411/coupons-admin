
//*** CRM-Cards -Start ***//
export const CRMSeries = [{
  name: 'Value',
  data: [14, 58, 20, 94, 25, 55, 35, 55]
}]
export const CRMOptions = ({ color }: any) => ({
  chart: {
    type: 'line',
    height: 30,
    width: 140,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: 'var(--primary-color)',
      opacity: 0.5
    }
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  yaxis: {
    min: 0,
    show: false
  },
  xaxis: {
    show: false,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    }
  },
  // yaxis: {
  //     axisBorder: {
  //         show: false
  //     },
  // },
  colors: [color],
})

interface CardData {
  percentage: string;
  arrowIcon: 'up' | 'down';
  chartId: string;
  color: string;
  icon: string;
  price: string;
  revenue: string;
  type: string;
  chartOptions: any;
  chartSeries: any;
  textColor: string;
}
export const CRMCards: CardData[] = [
  {
    percentage: '1.23%',
    arrowIcon: 'up',
    chartId: 'crmchart01',
    color: 'primary',
    icon: 'bar-chart-box-line',
    price: '$12,432',
    revenue: 'Total Revenue',
    type: "line",
    textColor: "success",
    chartOptions: CRMOptions({ color: 'var(--primary-color)' }),
    chartSeries: CRMSeries,
  },
  {
    percentage: '0.3%',
    arrowIcon: 'down',
    chartId: 'crmchart02',
    color: 'secondary',
    icon: 'user-add-line',
    price: '5.87K',
    revenue: 'Active Users',
    type: "line",
    textColor: "danger",
    chartOptions: CRMOptions({ color: '#ffb748' }),
    chartSeries: CRMSeries,
  },
  {
    percentage: '5.3%',
    arrowIcon: 'up',
    chartId: 'crmchart03',
    color: 'success',
    icon: 'shake-hands-line',
    price: '8,654',
    revenue: 'Total Deals',
    type: "line",
    textColor: "success",
    chartOptions: CRMOptions({ color: '#35bdaa' }),
    chartSeries: CRMSeries,
  },
  {
    percentage: '1.2%',
    arrowIcon: 'down',
    chartId: 'crmchart04',
    color: 'info',
    icon: 'hourglass-line',
    price: '3.6%',
    revenue: 'Conversion Ratio',
    type: "line",
    textColor: "danger",
    chartOptions: CRMOptions({ color: '#2e8ef7' }),
    chartSeries: CRMSeries,
  }
]
//*** CRM-Cards -End ***//

//*** Revenue Statistics -Start ***//
export const RevenueStaticSeries = [
  {
    name: "This Year",
    data: [25, 40, 32, 59, 32, 45, 30, 55, 65, 45, 35, 45],
  },
  {
    name: "Last Year",
    data: [-8, -30, -25, -32, -45, -30, -20, -35, -28, -43, -30, -40],
  }
]
export const RevenueStaticOptions = {
  chart: {
    type: "bar",
    height: 300,
    toolbar: {
      show: false
    },
    stacked: true,
  },
  colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)",],
  fill: {
    type: ['gradient', 'gradient'],
    gradient: {
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary09)",
            opacity: 1
          },
          {
            offset: 75,
            color: "var(--primary08)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary09)',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: 'rgba(var(--success-rgb), 0.9)',
            opacity: 1
          },
          {
            offset: 75,
            color: 'rgba(var(--success-rgb), 0.8)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(var(--success-rgb), 0.9)',
            opacity: 1
          }
        ],
      ]
    }
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      columnWidth: '26%',
    },
  },
  legend: {
    show: true,
    position: "top",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0,
    },
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'round',
  },
  grid: {
    borderColor: "#edeef1",
    strokeDashArray: 2,
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: "rgba(70, 216, 227, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(70, 216, 227, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "";
      },
    },
  },
  xaxis: {
    type: "month",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    axisBorder: {
      show: false,
      color: "rgba(70, 216, 227, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: "solid",
      color: "rgba(70, 216, 227, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
}
//*** Revenue Statistics -End ***//

//*** Profit Report -Start ***//
export const ProfitSeries = [1624, 1267, 1153]
export const ProfitOptions = {
  labels: ["Profit", "Revenue", "Expenses"],
  chart: {
    height: 150,
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
  fill: {
    type: 'solid',
  },
  plotOptions: {

    pie: {
      expandOnClick: false,
      donut: {
        size: '85%',
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
  colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)", "rgba(var(--secondary-rgb), 1)"],

}
//*** Profit Report -End ***//

//*** Website Traffic -Start ***//
export const WebsitetrafficeSeries = [{
  name: 'Total Visits',
  data: [15000]
}, {
  name: 'Unique Visitors',
  data: [8000]
}, {
  name: 'Bounce Rate',
  data: [4000]
}]
export const WebsitetrafficeOptions = {
  chart: {
    type: 'bar',
    height: 340,
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ['Traffic Metrics'],
    labels: {
      show: true
    }
  },
  yaxis: {
    title: {
      text: 'Number of Visitors'
    },
    min: 0,
    max: 16000,
    labels: {
      show: false
    }
  },
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '78%',
      endingShape: 'rounded',
      borderRadius: 0
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    floating: false,
    markers: {
      size: 6,
      shape: "circle",
    },
  },
  fill: {
    opacity: 0.9,
  },
  colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)", "rgba(var(--secondary-rgb), 1)"],
}
//*** Website Traffic -End ***//

//*** Recent Deals Status -Start ***//
interface Deals {
  id: string;
  companyLogo: string;
  companyName: string;
  revenue: string;
  status: 'Closed' | 'In Progress' | 'Lost' | 'Pending';
  date: string;
  employeeImage: string;
  employeeName: string;
}
export const Dealsdata: Deals[] = [
  {
    id: '#001234',
    companyLogo: '../../assets/images/company-logos/1.png',
    companyName: 'Acme Corp.',
    revenue: '$50,000',
    status: 'Closed',
    date: 'Oct 18, 2024',
    employeeImage: '../../assets/images/faces/13.jpg',
    employeeName: 'John Doe'
  },
  {
    id: '#001235',
    companyLogo: '../../assets/images/company-logos/2.png',
    companyName: 'Susenz Ltd.',
    revenue: '$75,000',
    status: 'In Progress',
    date: 'Oct 16, 2024',
    employeeImage: '../../assets/images/faces/2.jpg',
    employeeName: 'Jane Smith'
  },
  {
    id: '#001236',
    companyLogo: '../../assets/images/company-logos/3.png',
    companyName: 'BrightTech',
    revenue: '$120,000',
    status: 'Lost',
    date: 'Oct 12, 2024',
    employeeImage: '../../assets/images/faces/11.jpg',
    employeeName: 'Peter Johnson'
  },
  {
    id: '#001237',
    companyLogo: '../../assets/images/company-logos/5.png',
    companyName: 'Future Innovations',
    revenue: '$65,000',
    status: 'Pending',
    date: 'Oct 10, 2024',
    employeeImage: '../../assets/images/faces/3.jpg',
    employeeName: 'Emily Davis'
  },
  {
    id: '#001238',
    companyLogo: '../../assets/images/company-logos/6.png',
    companyName: 'Global Ventures',
    revenue: '$90,000',
    status: 'Closed',
    date: 'Oct 08, 2024',
    employeeImage: '../../assets/images/faces/13.jpg',
    employeeName: 'Mark Lee'
  }
];
//*** Recent Deals Status -End ***//

//*** Upcoming Meetings -Start ***//
interface EventData {
  date: string;
  month: string;
  title: string;
  description: string;
  time: string;
  cardClass?: string;
}
export const Upcomingdata: EventData[] = [
  {
    date: '23',
    month: 'Oct',
    title: 'Meeting with XYZ Ltd.',
    description: 'Discuss the upcoming partnership',
    time: '9:30 AM',
    cardClass: 'mb-3'
  },
  {
    date: '24',
    month: 'Oct',
    title: 'Demo with BrightTech',
    description: 'Latest product features and more',
    time: '11:30 AM',
    cardClass: 'mb-3'
  },
  {
    date: '25',
    month: 'Oct',
    title: 'Meeting with Acme Corp',
    description: 'Latest product features and more',
    time: '2:00 PM',
    cardClass: 'mb-3'
  },
  {
    date: '25',
    month: 'Oct',
    title: 'Meeting with Acme Corp',
    description: 'Latest product features and more',
    time: '2:00 PM',
    cardClass: 'mb-3'
  },
  {
    date: '26',
    month: 'Oct',
    title: 'Meeting with Acme Corp',
    description: 'Latest product features and more',
    time: '3:00 PM',
    cardClass: 'mb-3'
  },
  {
    date: '27',
    month: 'Oct',
    title: 'Strategy Meeting with Team Alpha',
    description: 'Discuss team strategies for the upcoming quarter',
    time: '5:30 PM',
  },
];
//*** Upcoming Meetings -End ***//

//*** Recent Activity -Start ***//

interface Activity {
  id: number;
  icon: string;
  color: string;
  title: string;
  description: string;
  user: string;
  timeAgo: string;
}
export const Activitycarddata: Activity[] = [
  {
    id: 1,
    icon: 'ti-user',
    color: 'bg-primary',
    title: 'New user registered',
    description: 'A new customer has signed up for an account.',
    user: 'John Doe',
    timeAgo: '10 mins ago',
  },
  {
    id: 2,
    icon: 'ti-file-invoice',
    color: 'bg-secondary',
    title: 'Invoice #INV-00124 created',
    description: 'An invoice has been generated an order.',
    user: '',
    timeAgo: '30 mins ago',
  },
  {
    id: 3,
    icon: 'ti-message',
    color: 'bg-success',
    title: 'New support ticket',
    description: 'A customer has submitted a new request.',
    user: 'Jane Smith',
    timeAgo: '1 hour ago',
  },
  {
    id: 4,
    icon: 'ti-shopping-cart',
    color: 'bg-info',
    title: 'Order #ORD-00256 canceled',
    description: 'An order has been canceled by the customer.',
    user: '',
    timeAgo: '2 hours ago',
  },
  {
    id: 5,
    icon: 'ti-check',
    color: 'bg-pink',
    title: 'Task completed',
    description: 'Task has been successfully completed.',
    user: 'Sarah Lee',
    timeAgo: '3 hours ago',
  },
];
//*** Recent Activity -End ***//

//*** Closed Deals -Start ***//

interface Deal {
  id: number;
  company: string;
  initials: string;
  amount: string;
  liclass: string;
  date: string;
}
export const ClosedDeals: Deal[] = [
  { id: 1, company: 'Acme Corp.', initials: 'AC', liclass: 'mb-3 pb-1', amount: '$50,000', date: '12th Oct, 2024' },
  { id: 2, company: 'XYZ Ltd', initials: 'XY', liclass: 'mb-3 pb-1', amount: '$75,000', date: '12th Oct, 2024' },
  { id: 3, company: 'BrightTech', initials: 'BR', liclass: 'mb-3 pb-1', amount: '$120,000', date: '25th Oct, 2024' },
  { id: 4, company: 'Digital Innovations', initials: 'DI', liclass: 'mb-3 pb-1', amount: '$120,000', date: '20th Oct, 2024' },
  { id: 5, company: 'NextGen Solutions', initials: 'NE', liclass: 'mb-3 pb-1', amount: '$65,000', date: '19th Oct, 2024' },
  { id: 6, company: 'Future Innovations', initials: 'FU', liclass: '', amount: '$65,000', date: '30th Oct, 2024' },
];

//*** Closed Deals -End ***//