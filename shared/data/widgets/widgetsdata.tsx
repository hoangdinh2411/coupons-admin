//*** BudgetCard-Start ***//

export const Budgetseries = [{
  name: 'Value',
  data: [14, 38, 26, 44, 20, 65, 35, 40, 14]
}]

export const Budgetoptions = ({ color }: any) => ({
  chart: {
    type: 'line',
    height: 60,
    width: 120,
    sparkline: {
      enabled: true
    },
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
    width: 2,
    dashArray: 0,
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
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
  colors: [color],
})

export const Budgetsdata = [
  {
    title: 'Total Sales',
    value: '$39,457',
    subtitle: 'from last month',
    change: '+ 0.45%',
    changeClass: 'text-success',
    icon: 'ri-money-dollar-circle-line',
    iconBackgroundClass: 'avatar avatar-sm bg-pink-transparent avatar-rounded',
    chartBackgroundClass: 'd-flex gap-2 align-items-center flex-wrap bg-pink-transparent',
    chartId: 'widget-chart-1',
    chartOptions: Budgetoptions({ color: 'rgba(var(--pink-rgb))' }),
    chartSeries: Budgetseries,
    type: 'line'
  },
  {
    title: 'Total Revenue',
    value: '$39,457',
    subtitle: 'from last month',
    change: '+ 0.45%',
    changeClass: 'text-success',
    icon: 'ri-money-dollar-circle-line',
    iconBackgroundClass: 'avatar avatar-sm bg-primary-transparent avatar-rounded',
    chartBackgroundClass: 'd-flex gap-2 align-items-center flex-wrap bg-primary-transparent',
    chartId: 'widget-chart-2',
    chartOptions: Budgetoptions({ color: 'rgba(var(--primary-rgb))' }),
    chartSeries: Budgetseries,
    type: 'line'
  },
  {
    title: 'Total Profit',
    value: '$39,457',
    subtitle: 'from last month',
    change: '+ 0.45%',
    changeClass: 'text-success',
    icon: 'ri-money-dollar-circle-line',
    iconBackgroundClass: 'avatar avatar-sm bg-secondary-transparent avatar-rounded',
    chartBackgroundClass: 'd-flex gap-2 align-items-center flex-wrap bg-secondary-transparent',
    chartId: 'widget-chart-3',
    chartOptions: Budgetoptions({ color: 'rgba(var(--secondary-rgb))' }),
    chartSeries: Budgetseries,
    type: 'line'
  },
  {
    title: 'Total Income',
    value: '$39,457',
    subtitle: 'from last month',
    change: '- 0.3%',
    changeClass: 'text-danger',
    icon: 'ri-money-dollar-circle-line',
    iconBackgroundClass: 'avatar avatar-sm bg-success-transparent avatar-rounded',
    chartBackgroundClass: 'd-flex gap-2 align-items-center flex-wrap bg-success-transparent',
    chartId: 'widget-chart-4',
    chartOptions: Budgetoptions({ color: 'rgba(var(--success-rgb))' }),
    chartSeries: Budgetseries,
    type: 'line'
  },
];

//*** BudgetCard-End ***//

//*** Audience Statistics - Start ***//

export const Audienceseries = [{
  name: "Profit",
  data: [56, 44, 66, 55, 68, 90, 55, 68, 55, 66, 44, 56],
  type: 'area',
},
{
  name: "Sales",
  data: [45, 50, 42, 59, 53, 74, 43, 43, 30, 55, 74, 49],
  type: 'area',
},
{
  name: "Revenue",
  data: [53, 40, 63, 50, 65, 80, 50, 65, 50, 63, 45, 50],
  type: 'bar',
}]

export const Audienceoptions = {
  chart: {
    type: 'area',
    height: 355,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ["var(--primary-color)", 'rgba(var(--success-rgb), 1)'],
      opacity: 0.05,
    },
  },
  grid: {
    borderColor: 'rgba(167, 180, 201 ,0.2)',
    strokeDashArray: 3
  },
  colors: ["rgba(var(--secondary-rgb), 1)", "rgba(var(--success-rgb), 1)", "var(--primary-color)"],
  stroke: {
    width: [3, 2, 0],
    curve: ["smooth", "smooth", "smooth"],
    dashArray: [4, 0, 0],
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
      strokeWidth: 0
    }
  },
  fill: {
    type: ["gradient", "gradient", "soild"],
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: "rgba(var(--secondary-rgb), .3)",
            opacity: 0.2
          },
          {
            offset: 50,
            color: "rgba(var(--secondary-rgb), .3)",
            opacity: 0.2
          },
          {
            offset: 100,
            color: 'rgba(var(--secondary-rgb), .3)',
            opacity: 0.5
          }
        ],
        [
          {
            offset: 0,
            color: "rgba(var(--success-rgb), .1)",
            opacity: 1
          },
          {
            offset: 50,
            color: "rgba(var(--success-rgb), .1)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(var(--success-rgb), .1)',
            opacity: 0.5
          }
        ],
      ],
    },
  },
  yaxis: {
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "";
      }
    },
    min: 0
  },
  plotOptions: {
    bar: {
      columnWidth: "18%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
      borderRadius: 5,
    }
  },
  xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
    axisBorder: {
      show: true,
      color: 'rgba(167, 180, 201 ,0.2)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(167, 180, 201 ,0.2)',
      width: 6,
      offsetX: 0,
      offsetY: 0
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
}

//*** Audience Statistics - End ***//

//*** Team Members - Start ***//

interface TeamMemebers {
  name: string;
  role: string;
  image: string;
  avatarClass: string;
  buttonClass: string;
}

export const Teamdata: TeamMemebers[] = [
  {
    name: 'John Doe',
    role: 'Frontend Developer',
    image: '../assets/images/faces/3.jpg',
    avatarClass: 'success',
    buttonClass: 'info',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    image: '../assets/images/faces/4.jpg',
    avatarClass: 'warning',
    buttonClass: 'primary',
  },
  {
    name: 'Alex Johnson',
    role: 'Backend Developer',
    image: '../assets/images/faces/5.jpg',
    avatarClass: 'danger',
    buttonClass: 'secondary',
  },
];

//*** Team Members - End ***//

//*** Customers - Start ***//

interface Customers {
  value: string;
  label: string;
  avatarClass: string;
  iconClass: string;
  chartIconClass: string;
  badgeClass: string;
  badgeText: string;
  badgeIcon: string;
}

export const Customerdata: Customers[] = [
  {
    value: '48,457',
    label: 'Active Customers',
    avatarClass: 'avatar avatar-lg flex-shrink-0 bg-primary-transparent avatar-rounded',
    iconClass: 'ri-user-fill fs-18',
    chartIconClass: 'ri-bar-chart-2-line text-primary',
    badgeClass: 'badge bg-danger rounded-pill ms-auto',
    badgeText: '0.25%',
    badgeIcon: 'ti ti-arrow-down',
  },
  {
    value: '68,789',
    label: 'New Customers',
    avatarClass: 'avatar avatar-lg flex-shrink-0 bg-secondary-transparent avatar-rounded',
    iconClass: 'ri-user-fill fs-18',
    chartIconClass: 'ri-bar-chart-2-line text-secondary',
    badgeClass: 'badge bg-success rounded-pill ms-auto',
    badgeText: '0.25%',
    badgeIcon: 'ti ti-arrow-up',
  },
];

//*** Customers - End ***//

//*** Profit - Start ***//

export const Profitseries = [{
  name: "Profit",
  data: [20, 38, 38, 72, 55, 63, 43],
  type: "column",
}]

export const Profitoptions = {
  chart: {
    height: 200,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "35%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
      borderRadius: 5,
      colors: {
        ranges: [{
          from: 0,
          to: 65,
          color: 'var(--primary03)'
        }, {
          from: 70,
          to: 100,
          color: 'var(--primary-color)'
        }]
      },
    }
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
  },
  stroke: {
    curve: "smooth",
    width: ["0"],
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  colors: ["var(--primary-color)"],
  xaxis: {
    type: "month",
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "sun"
    ],
    axisBorder: {
      show: true,
      color: "rgba(119, 119, 142, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(119, 119, 142, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
}

//*** Profit - End ***//

//*** Revenue - Start ***//

const Revenueseries = [{
  name: 'Value',
  data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8]
}]

const Revenueoptions = ({ color }: any) => ({
  chart: {
    type: 'area',
    height: 75,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    show: true,
    width: [2],
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    dashArray: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      type: "horizontal",
      colorStops: [
        [
          {
            offset: 0,
            color: [color],
            opacity: 0.03
          },
          {
            offset: 90,
            color: [color],
            opacity: 0.03
          }
        ]
      ]
    }
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadiusApplication: "around",
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: [color],
})

interface Revenue {
  id: string;
  color: string;
  title: string;
  value: string;
  percentage: string;
  chartOptions: any;
  chartSeries: any;
  type: string;
  iconColor: string;
  icon: string;
}
export const Revenuedata: Revenue[] = [
  { id: 'widget-chart-5', color: 'secondary', title: 'Total Revenue', value: '$12,432', percentage: '0.25%', chartOptions: Revenueoptions({ color: 'rgba(var(--secondary-rgb), 1)' }), chartSeries: Revenueseries, type: 'area', iconColor: 'success', icon: 'up' },
  { id: 'widget-chart-6', color: 'success', title: 'Total Sales', value: '$23,789', percentage: '0.25%', chartOptions: Revenueoptions({ color: 'rgba(var(--success-rgb), 1)' }), chartSeries: Revenueseries, type: 'area', iconColor: 'danger', icon: 'down' },
]

//*** Revenue - End ***//

//*** Transaction - Start ***//

interface Transaction {
  type: 'Receive' | 'Send';
  coinName: string;
  divClass: string;
  coinSymbol: string;
  amount: number;
  percentage: number;
  isPositiveChange: boolean;
}

export const Transactionsdata: Transaction[] = [
  {
    type: 'Receive',
    coinName: 'Litecoin',
    divClass: 'mb-3',
    coinSymbol: 'LTC',
    amount: 5248.00,
    percentage: 2.3,
    isPositiveChange: true,
  },
  {
    type: 'Send',
    coinName: 'Bitcoin',
    divClass: 'mb-3',
    coinSymbol: 'BTC',
    amount: 12850.00,
    percentage: -1.5,
    isPositiveChange: false,
  },
  {
    type: 'Receive',
    coinName: 'Ethereum',
    divClass: 'mb-0',
    coinSymbol: 'ETH',
    amount: 3120.50,
    percentage: 0.8,
    isPositiveChange: true,
  },
];

//*** Transaction - End ***//

//*** RestOrder - Start ***//

interface Order {
  color: string;
  status: string;
  progressColor: string
}

export const RestOrderdata: Order[] = [
  {
    color: 'success',
    status: 'Preparing',
    progressColor: 'secondary',
  },
  {
    color: 'pink',
    status: 'Preparing',
    progressColor: 'success'
  },
  {
    color: 'orange',
    status: 'Ready',
    progressColor: 'info'
  },
];

//*** RestOrder - End ***//

//*** Income - Start ***//

interface Income {
  title: string;
  amount: string;
  percentage: string;
  iconClass: string;
  bgClass: string;
  borderClass: string;
  textColor: string;
}

export const Incomedata: Income[] = [
  {
    title: 'Income',
    amount: '$3.2K',
    percentage: '1.2%',
    iconClass: 'ti ti-currency-dollar',
    bgClass: 'bg-primary',
    borderClass: 'border-primary',
    textColor: 'text-success',
  },
  {
    title: 'Expenses',
    amount: '$2.2K',
    percentage: '0.3%',
    iconClass: 'ti ti-moneybag',
    bgClass: 'bg-success',
    borderClass: 'border-success',
    textColor: 'text-danger',
  },
]

//*** Income - End ***//

//*** Visitors By Country - Start ***//

export const Visitorseries = [
  {
    name: "Hot Leads",
    data: [80, 50, 30, 40, 100, 20],
  },
  {
    name: "Warm Leads",
    data: [20, 30, 40, 80, 20, 80],
  },
  {
    name: "Cold Leads",
    data: [15, 60, 50, 20, 30, 40],
  }
]

export const Visitoroptions = {
  chart: {
    height: 165,
    type: "radar",
    toolbar: {
      show: false,
    },
  },
  colors: ["var(--primary01)", "rgba(53, 189, 170, 0.1)", "rgba(255, 183, 72, 0.1)"],
  stroke: {
    width: 2,
    colors: ["var(--primary-color)", "rgb(53, 189, 170)", "rgb(255, 183, 72)"],
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  legend: {
    show: false,
    offsetX: 0,
    offsetY: 0,
    fontSize: "12px",
    markers: {
      width: 6,
      height: 6,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 5,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    axisBorder: { show: false },
  },
  yaxis: {
    axisBorder: { show: false },
  },
  grid: {
    padding: {
      bottom: -25
    }
  },
}

//*** Visitors By Country - End ***//


