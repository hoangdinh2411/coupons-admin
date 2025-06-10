
//*** StockCards -Start ***//

import SpkStockscard from "@/shared/@spk-reusable-components/reusable-dashboards/spk-stockscard";

interface StockData {
  title: string;
  subTitle: string;
  value: string;
  arrowColor: string;
  arrowIcon: string;
  percent: string;
  avatarColor: string;
  avatarIcon: string;
  marketCap: string;
  capIcon: string;
  capColor: string;
  color: string;
  percentage: string;
  icon: string;
  price: string;
}
const StockData: StockData[] = [
  {
    title: "Bitcoin",
    subTitle: "(BTC)",
    value: " $15,248",
    arrowColor: "success",
    arrowIcon: "up",
    percent: "0.14%",
    avatarColor: "warning",
    avatarIcon: "bi-currency-bitcoin",
    marketCap: "$58,25.00B",
    capIcon: "arrow-down-s-fill",
    capColor: "danger",
    color: "success",
    percentage: "1.8%",
    icon: "up",
    price: "$58,25.00B",
  },
  {
    title: "Tesla",
    subTitle: "(TSLA)",
    value: " $250.15",
    arrowColor: "danger",
    arrowIcon: "down",
    percent: "1.25%",
    avatarColor: "primary",
    avatarIcon: "bi-battery-charging",
    marketCap: "$800.00B",
    capIcon: "arrow-up-s-fill",
    capColor: "success",
    color: "danger",
    percentage: "2.1%",
    icon: "down",
    price: "$800.00B",
  },
  {
    title: "Apple",
    subTitle: "(AAPL)",
    value: " $175.00",
    arrowColor: "success",
    arrowIcon: "up",
    percent: "0.75%",
    avatarColor: "success",
    avatarIcon: "bi-apple",
    marketCap: "$2.8500T",
    capIcon: "arrow-up-s-fill",
    capColor: "success",
    color: "success",
    percentage: "3.0%",
    icon: "up",
    price: "$2.8500T",
  },
  {
    title: "NVIDIA",
    subTitle: "(NVDA)",
    value: " $500.00",
    arrowColor: "success",
    arrowIcon: "up",
    percent: "2.10%",
    avatarColor: "info",
    avatarIcon: "bi-graph-up",
    marketCap: "$3.520T",
    capIcon: "arrow-up-s-fill",
    capColor: "success",
    color: "success",
    percentage: "4.5%",
    icon: "up",
    price: "$3.520T",
  },
  {
    title: "Samsung",
    subTitle: "(SSNLF)",
    value: " $1,400.00",
    arrowColor: "success",
    arrowIcon: "up",
    percent: "0.50%",
    avatarColor: "pink",
    avatarIcon: "bi-broadcast",
    marketCap: "$450.00B",
    capIcon: "arrow-down-s-fill",
    capColor: "danger",
    color: "success",
    percentage: "2.0%",
    icon: "up",
    price: "$450.00B",
  },
  {
    title: "AliExpress",
    subTitle: "(BABA)",
    value: " $100.25",
    arrowColor: "danger",
    arrowIcon: "down",
    percent: "-0.30%",
    avatarColor: "teal",
    avatarIcon: "bi-shop",
    marketCap: "$270.00B",
    capIcon: "arrow-up-s-fill",
    capColor: "success",
    color: "danger",
    percentage: "-1.5%",
    icon: "down",
    price: "$270.00B",
  },
];
export const StockSwiper = StockData.map((stock, index) => (
  <div key={index}>
    <SpkStockscard stock={stock} />
  </div>
))

//*** StockCards -End ***//

//*** My Watchlist -Start ***//

interface Stock {
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: string;
  iconClass: string;
  bgColor: string;
  borderColor: string;
}
export const Watchlistdata: Stock[] = [
  {
    name: 'Tesla',
    symbol: 'TSLA',
    price: '$250.15',
    change: '+1.25%',
    icon: 'bi-battery-charging',
    iconClass: 'fs-20 lh-1',
    bgColor: 'primary',
    borderColor: 'primary',
  },
  {
    name: 'Apple',
    symbol: 'AAPL',
    price: '$175.00',
    change: '+0.75%',
    icon: 'bi-apple',
    iconClass: 'fs-20 lh-1',
    bgColor: 'secondary',
    borderColor: 'secondary',
  },
  {
    name: 'NVIDIA',
    symbol: 'NVDA',
    price: '$500.00',
    change: '+2.10%',
    icon: 'bi-broadcast',
    iconClass: 'fs-20 lh-1',
    bgColor: 'success',
    borderColor: 'success',
  },
  {
    name: 'Samsung',
    symbol: 'SSNLF',
    price: '$1,400.00',
    change: '-0.50%',
    icon: 'bi-phone',
    iconClass: 'fs-20 lh-1',
    bgColor: 'info',
    borderColor: 'info',
  },
  {
    name: 'AliExpress',
    symbol: 'BABA',
    price: '$100.25',
    change: '-0.30%',
    icon: 'bi-shop',
    iconClass: 'fs-20 lh-1',
    bgColor: 'pink',
    borderColor: 'pink',
  },
  {
    name: 'Meta Platforms',
    symbol: 'META',
    price: '$320.50',
    change: '+1.50%',
    icon: 'bi-graph-up',
    iconClass: 'fs-20 lh-1',
    bgColor: 'teal',
    borderColor: 'teal',
  },
];

//*** My Watchlist -End ***//

//*** Stock Price Overview -Start ***//

function generateDayWiseTimeSeries(baseval: number, count: number, yrange: { min: any; max: any; }) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 76400000;
    i++;
  }
  return series;
}
var data = generateDayWiseTimeSeries(new Date("22 Apr 2024").getTime(), 115, {
  min: 30,
  max: 90
});
export const StockSeries = [
  {
    name: 'Investment',
    data: data
  }
]
export const StockOptions = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#ccc",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["var(--primary-color)"],
  stroke: {
    width: 2.5,
    curve: "straight",
    dashArray: 4
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary05)",
            opacity: 0.05
          },
          {
            offset: 75,
            color: "var(--primary03)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary05)',
            opacity: 1
          }
        ],
      ]
    }
  },
  markers: {
    size: 3,
    strokeWidth: 1.5,
    dashArray: 4
  },
  //   theme: "dark"
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    tickAmount: 1,
    max: 150
  }
}

export const StockCapSeries = [
  {
    name: 'Market Cap',
    data: data
  }
]
export const StockCapOptions = {
  chart: {
    id: "chart1",
    height: 105,
    type: "bar",
    foreColor: "#ccc",
    brush: {
      target: "chart2",
      enabled: true
    },
    selection: {
      enabled: true,
      fill: {
        color: "#fff",
        opacity: 0.4
      },
      xaxis: {
        min: new Date("05 Jun 2024 10:00:00").getTime(),
        max: new Date("26 Jul 2024 10:00:00").getTime()
      }
    }
  },
  colors: ["rgba(var(--success-rgb), 1)"],
  grid: {
    show: false,
    borderColor: "#444"
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "70%",
      borderRadius: 3
    }
  },
  yaxis: {
    tickAmount: 2
  }
}

//*** Stock Price Overview -End ***//

//*** Transaction History -Start ***//

interface StockTransaction {
  name: string;
  symbol: string;
  price: string;
  value: string;
  change: string;
  date: string;
  action: 'Buy' | 'Sell';
  icon: string;
  iconClass: string;
  badgeClass: string;
  borderColor: string;
  bgColor: string;
  changeClass: string;
}
export const StockTransaction: StockTransaction[] = [
  {
    name: 'Tesla',
    symbol: 'TSLA',
    price: '$150.00',
    value: '$7,500.00',
    change: '+1.25%',
    date: '12 Apr, 2024',
    action: 'Buy',
    icon: 'ti ti-arrow-up',
    iconClass: 'fs-20 fw-semibold lh-1',
    badgeClass: 'bg-primary-transparent',
    borderColor: 'success',
    bgColor: 'success-transparent',
    changeClass: 'text-success',
  },
  {
    name: 'Apple',
    symbol: 'AAPL',
    price: '$200.00',
    value: '$10,000.00',
    change: '-0.75%',
    date: '15 Apr, 2024',
    action: 'Sell',
    icon: 'ti ti-arrow-down',
    iconClass: 'fs-20 fw-semibold lh-1',
    badgeClass: 'bg-secondary-transparent',
    borderColor: 'primary',
    bgColor: 'primary-transparent',
    changeClass: 'text-danger',
  },
  {
    name: 'Microsoft',
    symbol: 'MSFT',
    price: '$250.00',
    value: '$12,500.00',
    change: '+2.00%',
    date: '16 Apr, 2024',
    action: 'Buy',
    icon: 'ti ti-arrow-up',
    iconClass: 'fs-20 fw-semibold lh-1',
    badgeClass: 'bg-success-transparent',
    borderColor: 'success',
    bgColor: 'success-transparent',
    changeClass: 'text-success',
  },
  {
    name: 'Amazon',
    symbol: 'AMZN',
    price: '$180.00',
    value: '$9,000.00',
    change: '+1.50%',
    date: '17 Apr, 2024',
    action: 'Buy',
    icon: 'ti ti-arrow-up',
    iconClass: 'fs-20 fw-semibold lh-1',
    badgeClass: 'bg-warning-transparent',
    borderColor: 'warning',
    bgColor: 'warning-transparent',
    changeClass: 'text-success',
  },
  {
    name: 'Alphabet',
    symbol: 'GOOGL',
    price: '$300.00',
    value: '$15,000.00',
    change: '-1.20%',
    date: '18 Apr, 2024',
    action: 'Sell',
    icon: 'ti ti-arrow-down',
    iconClass: 'fs-20 fw-semibold lh-1',
    badgeClass: 'bg-danger-transparent',
    borderColor: 'danger',
    bgColor: 'danger-transparent',
    changeClass: 'text-danger',
  },
];

//*** Transaction History -End ***//

//*** Weekly Stock Earnings -Start ***//

export const StockWeeklySeries = [{
  name: 'Earnings',
  data: [55, -30, 35, -40, 32, 45, -30
  ]
}]
export const StockWeeklyOptions = {
  chart: {
    type: 'bar',
    height: 256,
    toolbar: {
      show: false
    }
  },
  grid: {
    borderColor: '#f5f4f4',
    strokeDashArray: 3
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: -100,
          to: -46,
          color: 'rgba(var(--danger-rgb), 0.9)'
        }, {
          from: -45,
          to: 0,
          color: 'rgba(var(--danger-rgb), 0.9)'
        }]
      },
      columnWidth: '50%',
      borderRadius: 2,
      borderRadiusWhenStacked: 'last',
    }
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    tickAmount: 5,
    title: {
      text: 'Earnings',
    },
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "%";
      }
    }
  },
  xaxis: {
    type: 'week',
    categories: ['sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  colors: ["rgba(var(--success-rgb), 1)"],
}

//*** Weekly Stock Earnings -End ***//

//*** Top Stock Performers -Start ***//

interface Performers {
  name: string;
  symbol: string;
  price: string;
  volume: string;
  change: string;
  icon: string;
  iconClass: string;
  badgeClass: string;
  priceClass: string;
  changeClass: string;
  volumedata: string;
}
export const PerformerssData: Performers[] = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: '$5.00',
    volume: '1,000,000',
    change: '+3.45%',
    icon: 'bi bi-apple',
    iconClass: 'fs-18 lh-1',
    badgeClass: 'bg-secondary-transparent',
    priceClass: 'text-success',
    changeClass: 'text-success',
    volumedata: '$150.00'
  },
  {
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    price: '$4.25',
    volume: '850,000',
    change: '-2.65%',
    icon: 'bi bi-google',
    iconClass: 'fs-18 lh-1',
    badgeClass: 'bg-primary-transparent',
    priceClass: 'text-danger',
    changeClass: 'text-danger',
    volumedata: '$130.00'
  },
  {
    name: 'Microsoft Corp.',
    symbol: 'MSFT',
    price: '$6.75',
    volume: '1,200,000',
    change: '+4.20%',
    icon: 'bi bi-microsoft',
    iconClass: 'fs-18 lh-1',
    badgeClass: 'bg-warning-transparent',
    priceClass: 'text-success',
    changeClass: 'text-success',
    volumedata: '$160.00'
  },
  {
    name: 'Amazon.com Inc.',
    symbol: 'AMZN',
    price: '$3.90',
    volume: '950,000',
    change: '-1.80%',
    icon: 'bi bi-amazon',
    iconClass: 'fs-18 lh-1',
    badgeClass: 'bg-success-transparent',
    priceClass: 'text-danger',
    changeClass: 'text-danger',
    volumedata: '$125.00'
  },
  {
    name: 'Meta Platforms',
    symbol: 'META',
    price: '$4.10',
    volume: '1,100,000',
    change: '-2.25%',
    icon: 'bi bi-facebook',
    iconClass: 'fs-18 lh-1',
    badgeClass: 'bg-danger-transparent',
    priceClass: 'text-danger',
    changeClass: 'text-danger',
    volumedata: '$140.00'
  },
];

//*** Top Stock Performers -End ***//

//*** My Stocks -Start ***//

interface MyStocks {
  name: string;
  symbol: string;
  market: string;
  quantity: number;
  price: string;
  priceChange: string;
  totalValue: string;
  iconClass: string;
  priceClass: string;
  changeClass: string;
  color: string;
}
export const MyStockssData: MyStocks[] = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    market: 'NASDAQ',
    quantity: 500,
    price: '$150.00',
    priceChange: '+1.75%',
    totalValue: '$75,000.00',
    iconClass: 'bi bi-apple fs-16 lh-1',
    priceClass: 'fw-medium',
    changeClass: 'text-success fw-semibold',
    color: 'primary'
  },
  {
    name: 'Microsoft Corp.',
    symbol: 'MSFT',
    market: 'NASDAQ',
    quantity: 300,
    price: '$250.00',
    priceChange: '-0.85%',
    totalValue: '$75,000.00',
    iconClass: 'bi bi-microsoft fs-16 lh-1',
    priceClass: 'fw-medium',
    changeClass: 'text-danger fw-semibold',
    color: 'warning'
  },
  {
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    market: 'NASDAQ',
    quantity: 200,
    price: '$130.00',
    priceChange: '+2.15%',
    totalValue: '$26,000.00',
    iconClass: 'bi bi-google fs-16 lh-1',
    priceClass: 'fw-medium',
    changeClass: 'text-success fw-semibold',
    color: 'success'
  },
  {
    name: 'Amazon.com Inc.',
    symbol: 'AMZN',
    market: 'NASDAQ',
    quantity: 150,
    price: '$200.00',
    priceChange: '-1.35%',
    totalValue: '$30,000.00',
    iconClass: 'bi bi-amazon fs-16 lh-1',
    priceClass: 'fw-medium',
    changeClass: 'text-danger fw-semibold',
    color: 'info'
  },
  {
    name: 'Gituhb, Demo Inc.',
    symbol: 'GTHB',
    market: 'NASDAQ',
    quantity: 100,
    price: '$700.00',
    priceChange: '+0.65%',
    totalValue: '$70,000.00',
    iconClass: 'bi bi-github fs-16 lh-1',
    priceClass: 'fw-medium',
    changeClass: 'text-success fw-semibold',
    color: 'danger'
  },
];

//*** My Stocks -End ***//

//*** Balance Summary -Start ***//

export const BalanceSummarySeries = [18780, 16890]

export const BalanceSummaryOptions = {
  chart: {
    type: 'donut',
    height: 197,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '72%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '20px',
            fontFamily: "Poppins",
            color: undefined,
            offsetY: 10,
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Balance',
            fontSize: '16px',
            fontWeight: 600,
            offsetY: 10,
            fontFamily: "Poppins",
            color: '#495057',
          }
        },
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  colors: ["var(--primary-color)", "var(--primary02)"],
  labels: ['Balance', 'Investment'],
}

//*** Balance Summary -End ***//
