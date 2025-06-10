import SpkCryptocard from "@/shared/@spk-reusable-components/reusable-dashboards/spk-cryptocard";

//*** CryptoCards -Start ***//
export const CryptoSeries = [{
  name: 'Value',
  data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8]
}]
export const CryptoOptions = ({ color }: any) => ({
  chart: {
    type: 'bar',
    height: 25,
    width: 120,
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
  colors: [color],
})

interface Crypto {
  title: string;
  subTitle: string;
  imgSrc: string;
  price: string;
  percenTage: string;
  cap: string;
  icon: string;
  id: string,
  bgColor: string,
  titleclass: string,
  iconColor: string,
  chartOptions: any,
  chartSeries: any,
  type: string;
}
const CryptoCards: Crypto[] = [
  {
    title: 'Bitcoin',
    subTitle: 'BTC',
    imgSrc: '../../assets/images/crypto-currencies/square-color/Bitcoin.svg',
    price: '$174.58 USD',
    percenTage: '+0.57%',
    cap: ' $669B',
    icon: 'up',
    id: 'btc-marketcap',
    bgColor: 'secondary',
    titleclass: '',
    iconColor: 'success',
    chartOptions: CryptoOptions({ color: 'rgba(255, 183, 72, .5)' }),
    chartSeries: CryptoSeries,
    type: 'bar'
  },
  {
    title: 'Ethereum',
    subTitle: 'ETH',
    imgSrc: '../../assets/images/crypto-currencies/square-color/Ethereum.svg',
    price: '$875 USD',
    titleclass: '',
    percenTage: '+2.15%',
    cap: ' $220B',
    icon: 'up',
    id: 'eth-marketcap',
    bgColor: 'primary',
    iconColor: 'success',
    chartOptions: CryptoOptions({ color: 'rgba(139, 126, 255, .5)' }),
    chartSeries: CryptoSeries,
    type: 'bar'
  },
  {
    title: 'IOTA',
    subTitle: 'MIOTA',
    imgSrc: '../../assets/images/crypto-currencies/square-color/IOTA.svg',
    price: '$226.35 USD',
    percenTage: '-5.10%',
    cap: ' $8,275M',
    titleclass: '',
    icon: 'down',
    id: 'iota-marketcap',
    bgColor: 'success',
    iconColor: 'danger',
    chartOptions: CryptoOptions({ color: 'rgba(53, 189, 170, .5)' }),
    chartSeries: CryptoSeries,
    type: 'bar'
  },
  {
    title: 'Ripple',
    subTitle: 'XRP',
    imgSrc: '../../assets/images/crypto-currencies/square-color/Ripple.svg',
    price: '$56.48 USD',
    percenTage: '+1.80%',
    cap: ' $24B',
    titleclass: '',
    icon: 'down',
    id: 'xrp-marketcap',
    bgColor: 'info',
    iconColor: 'success',
    chartOptions: CryptoOptions({ color: 'rgba(46, 142, 247, .5)' }),
    chartSeries: CryptoSeries,
    type: 'bar'
  },
  {
    title: 'Litecoin',
    subTitle: 'LTC',
    imgSrc: '../../assets/images/crypto-currencies/square-color/Litecoin.svg',
    price: '$10.45 USD',
    percenTage: '+1.50%',
    cap: ' $7.5B',
    titleclass: '',
    icon: 'up',
    id: 'ltc-marketcap',
    bgColor: 'dark',
    iconColor: 'success',
    chartOptions: CryptoOptions({ color: 'rgba(var(--dark-rgb), .5)' }),
    chartSeries: CryptoSeries,
    type: 'bar'
  },
  {
    title: 'Dash',
    subTitle: 'DASH',
    imgSrc: '../../assets/images/crypto-currencies/square-color/Dash.svg',
    price: '$238 USD',
    percenTage: '+4.00%',
    cap: ' $5.10B',
    titleclass: 'me-3',
    icon: 'up',
    id: 'dash-marketcap',
    bgColor: 'info',
    iconColor: 'success',
    chartOptions: CryptoOptions({ color: 'rgba(46, 142, 247, .5)' }),
    chartSeries: CryptoSeries,
    type: 'bar'
  },
];
export const CryptoSwiper = CryptoCards.map((crypto, index) => (
  <div key={index}>
    <SpkCryptocard crypto={crypto} />
  </div>
))
//*** CryptoCards -End ***//

//*** Crypto Statistics -Start ***//
export const StaticSeries = [{
  data: [{
    x: new Date(1538778600000),
    y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  {
    x: new Date(1538780400000),
    y: [6632.01, 6643.59, 6620, 6630.11]
  },
  {
    x: new Date(1538782200000),
    y: [6630.71, 6648.95, 6623.34, 6635.65]
  },
  {
    x: new Date(1538784000000),
    y: [6635.65, 6651, 6629.67, 6638.24]
  },
  {
    x: new Date(1538785800000),
    y: [6638.24, 6640, 6620, 6624.47]
  },
  {
    x: new Date(1538787600000),
    y: [6624.53, 6636.03, 6621.68, 6624.31]
  },
  {
    x: new Date(1538789400000),
    y: [6624.61, 6632.2, 6617, 6626.02]
  },
  {
    x: new Date(1538791200000),
    y: [6627, 6627.62, 6584.22, 6603.02]
  },
  {
    x: new Date(1538793000000),
    y: [6605, 6608.03, 6598.95, 6604.01]
  },
  {
    x: new Date(1538794800000),
    y: [6604.5, 6614.4, 6602.26, 6608.02]
  },
  {
    x: new Date(1538796600000),
    y: [6608.02, 6610.68, 6601.99, 6608.91]
  },
  {
    x: new Date(1538798400000),
    y: [6608.91, 6618.99, 6608.01, 6612]
  },
  {
    x: new Date(1538800200000),
    y: [6612, 6615.13, 6605.09, 6612]
  },
  {
    x: new Date(1538802000000),
    y: [6612, 6624.12, 6608.43, 6622.95]
  },
  {
    x: new Date(1538803800000),
    y: [6623.91, 6623.91, 6615, 6615.67]
  },
  {
    x: new Date(1538805600000),
    y: [6618.69, 6618.74, 6610, 6610.4]
  },
  {
    x: new Date(1538807400000),
    y: [6611, 6622.78, 6610.4, 6614.9]
  },
  {
    x: new Date(1538809200000),
    y: [6614.9, 6626.2, 6613.33, 6623.45]
  },
  {
    x: new Date(1538811000000),
    y: [6623.48, 6627, 6618.38, 6620.35]
  },
  {
    x: new Date(1538812800000),
    y: [6619.43, 6620.35, 6610.05, 6615.53]
  },
  {
    x: new Date(1538814600000),
    y: [6615.53, 6617.93, 6610, 6615.19]
  },
  {
    x: new Date(1538816400000),
    y: [6615.19, 6621.6, 6608.2, 6620]
  },
  {
    x: new Date(1538818200000),
    y: [6619.54, 6625.17, 6614.15, 6620]
  },
  {
    x: new Date(1538820000000),
    y: [6620.33, 6634.15, 6617.24, 6624.61]
  },
  {
    x: new Date(1538821800000),
    y: [6625.95, 6626, 6611.66, 6617.58]
  },
  {
    x: new Date(1538823600000),
    y: [6619, 6625.97, 6595.27, 6598.86]
  },
  {
    x: new Date(1538825400000),
    y: [6598.86, 6598.88, 6570, 6587.16]
  },
  {
    x: new Date(1538827200000),
    y: [6588.86, 6600, 6580, 6593.4]
  },
  {
    x: new Date(1538829000000),
    y: [6593.99, 6598.89, 6585, 6587.81]
  },
  {
    x: new Date(1538830800000),
    y: [6587.81, 6592.73, 6567.14, 6578]
  },
  {
    x: new Date(1538832600000),
    y: [6578.35, 6581.72, 6567.39, 6579]
  },
  {
    x: new Date(1538834400000),
    y: [6579.38, 6580.92, 6566.77, 6575.96]
  },
  {
    x: new Date(1538836200000),
    y: [6575.96, 6589, 6571.77, 6588.92]
  },
  {
    x: new Date(1538838000000),
    y: [6588.92, 6594, 6577.55, 6589.22]
  },
  {
    x: new Date(1538839800000),
    y: [6589.3, 6598.89, 6589.1, 6596.08]
  },
  {
    x: new Date(1538841600000),
    y: [6597.5, 6600, 6588.39, 6596.25]
  },
  {
    x: new Date(1538843400000),
    y: [6598.03, 6600, 6588.73, 6595.97]
  },
  {
    x: new Date(1538845200000),
    y: [6595.97, 6602.01, 6588.17, 6602]
  },
  {
    x: new Date(1538847000000),
    y: [6602, 6607, 6596.51, 6599.95]
  },
  {
    x: new Date(1538848800000),
    y: [6600.63, 6601.21, 6590.39, 6591.02]
  },
  {
    x: new Date(1538850600000),
    y: [6591.02, 6603.08, 6591, 6591]
  },
  {
    x: new Date(1538852400000),
    y: [6591, 6601.32, 6585, 6592]
  },
  {
    x: new Date(1538854200000),
    y: [6593.13, 6596.01, 6590, 6593.34]
  },
  {
    x: new Date(1538856000000),
    y: [6593.34, 6604.76, 6582.63, 6593.86]
  },
  {
    x: new Date(1538857800000),
    y: [6593.86, 6604.28, 6586.57, 6600.01]
  },
  {
    x: new Date(1538859600000),
    y: [6601.81, 6603.21, 6592.78, 6596.25]
  },
  {
    x: new Date(1538861400000),
    y: [6596.25, 6604.2, 6590, 6602.99]
  },
  {
    x: new Date(1538863200000),
    y: [6602.99, 6606, 6584.99, 6587.81]
  },
  {
    x: new Date(1538865000000),
    y: [6587.81, 6595, 6583.27, 6591.96]
  },
  {
    x: new Date(1538866800000),
    y: [6591.97, 6596.07, 6585, 6588.39]
  },
  {
    x: new Date(1538868600000),
    y: [6587.6, 6598.21, 6587.6, 6594.27]
  },
  {
    x: new Date(1538870400000),
    y: [6596.44, 6601, 6590, 6596.55]
  },
  {
    x: new Date(1538872200000),
    y: [6598.91, 6605, 6596.61, 6600.02]
  },
  {
    x: new Date(1538874000000),
    y: [6600.55, 6605, 6589.14, 6593.01]
  },
  {
    x: new Date(1538875800000),
    y: [6593.15, 6605, 6592, 6603.06]
  },
  {
    x: new Date(1538877600000),
    y: [6603.07, 6604.5, 6599.09, 6603.89]
  },
  {
    x: new Date(1538879400000),
    y: [6604.44, 6604.44, 6600, 6603.5]
  },
  {
    x: new Date(1538881200000),
    y: [6603.5, 6603.99, 6597.5, 6603.86]
  },
  {
    x: new Date(1538883000000),
    y: [6603.85, 6605, 6600, 6604.07]
  },
  {
    x: new Date(1538884800000),
    y: [6604.98, 6606, 6604.07, 6606]
  },
  ]
}]
export const StaticOptions = {
  chart: {
    type: 'candlestick',
    borderRadius: 20,
    height: 306,
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
  plotOptions: {
    candlestick: {
      colors: {
        upward: "rgb(53, 189, 170)",
        downward: "rgba(248, 66, 56, 0.5)"
      },
    }
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  },
  annotations: {
    xaxis: [{
      x: new Date(1538866800000).getTime(),
      borderColor: 'rgb(248, 66, 56)',
      label: {
        borderColor: 'rgb(248, 66, 56)',
        style: {
          color: '#fff',
          background: 'rgb(248, 66, 56)'
        },
        text: 'Key Level: $6603.06'
      }
    }],
    yaxis: [{
      y: 6603.06,
      borderColor: 'rgb(53, 189, 170)',
      label: {
        borderColor: 'rgb(53, 189, 170)',
        style: {
          color: '#fff',
          background: 'rgb(53, 189, 170)'
        },
        text: 'Important Resistance'
      }
    }]
  },
}
//*** Crypto Statistics -End ***//

interface SelectType {
  value: string;
  label: string;
}
export const Coindata: SelectType[] = [
  { value: "BTC", label: "BTC" },
  { value: "ETH", label: "ETH" },
  { value: "XRP", label: "XRP" },
  { value: "DASH", label: "DASH" },
  { value: "NEO", label: "NEO" },
  { value: "LTC", label: "LTC" },
  { value: "BSD", label: "BSD" }
];

export const Currencydata: SelectType[] = [
  { value: "USD", label: "USD" },
  { value: "AED", label: "AED" },
  { value: "AUD", label: "AUD" },
  { value: "ARS", label: "ARS" },
  { value: "AZN", label: "AZN" },
  { value: "BGN", label: "BGN" },
  { value: "BRL", label: "BRL" }
];

export const PaymentOptions: SelectType[] = [
  { value: 'credit_debit', label: 'Credit / Debit Cards' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'bank_transfer', label: 'Bank Transfer' },
  { value: 'crypto_wallet', label: 'Crypto Wallet' },
];

//*** Activity -Start ***//
interface Activity {
  type: 'received' | 'sent';
  direction: 'Received From' | 'Sent To';
  source: string;
  date: string;
  time: string;
  amount: string;
  currency: string;
  name: string;
  color: string;
}
export const Activitydata: Activity[] = [
  {
    type: 'received',
    direction: 'Received From',
    source: 'Crypto Wallet XYZ',
    date: '20-10-2024',
    time: '04:24 PM',
    amount: '0.0092312',
    currency: 'Bitcoin',
    name: 'Emiley Jackson',
    color: 'success'
  },
  {
    type: 'sent',
    direction: 'Sent To',
    source: 'Crypto Exchange ABC',
    date: '19-10-2024',
    time: '03:15 PM',
    amount: '0.0050000',
    currency: 'Ethereum',
    name: 'John Doe',
    color: 'danger'
  },
  {
    type: 'received',
    direction: 'Received From',
    source: 'Wallet Address 123ABC',
    date: '18-10-2024',
    time: '09:45 AM',
    amount: '1.2500000',
    currency: 'Litecoin',
    name: 'Alice Smith',
    color: 'info'
  },
  {
    type: 'received',
    direction: 'Received From',
    source: 'Investor Group DEF',
    date: '17-10-2024',
    time: '11:30 AM',
    amount: '0.1500000',
    currency: 'Bitcoin',
    name: 'David Lee',
    color: 'warning'
  },
  {
    type: 'sent',
    direction: 'Sent To',
    source: 'Wallet Address 456XYZ',
    date: '16-10-2024',
    time: '02:00 PM',
    amount: '0.0500000',
    currency: 'Ethereum',
    name: 'Sarah Johnson',
    color: 'success'
  },
];

//*** Activity -End ***//

//*** Market Cap -Start ***//
interface Market {
  name: string;
  symbol: string;
  image: string;
  amount: string;
  valueInUSD: string;
  marketCap: string;
  supply: string;
  percentageChange: string;
  bgColor: string;
  iconColor: string;
}
export const MarketCap: Market[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: '../../assets/images/crypto-currencies/regular/Bitcoin.svg',
    amount: '0.009231298 BTC',
    valueInUSD: '0.415164 USD',
    marketCap: '$87,685,000,000',
    supply: '84,000,000 BTC',
    percentageChange: '+02.3015%',
    bgColor: 'secondary',
    iconColor: 'success',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    image: '../../assets/images/crypto-currencies/regular/Ethereum.svg',
    amount: '0.035671238 ETH',
    valueInUSD: '58.75 USD',
    marketCap: '$69,500,000,000',
    supply: '84,000,000 ETH',
    percentageChange: '-1.15%',
    bgColor: 'primary',
    iconColor: 'danger',
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    image: '../../assets/images/crypto-currencies/regular/Ripple.svg',
    amount: '150.324 XRP',
    valueInUSD: '0.75 USD',
    marketCap: '$37,500,000,000',
    supply: '84,000,000 XRP',
    percentageChange: '+3.25%',
    bgColor: 'info',
    iconColor: 'success',
  },
  {
    name: 'Monero',
    symbol: 'ADA',
    image: '../../assets/images/crypto-currencies/regular/monero.svg',
    amount: '200.546 ADA',
    valueInUSD: '1.50 USD',
    marketCap: '$48,000,000,000',
    supply: '84,000,000 LTC',
    percentageChange: '-2.10%',
    bgColor: 'warning',
    iconColor: 'danger',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    image: '../../assets/images/crypto-currencies/regular/litecoin.svg',
    amount: '0.075345 LTC',
    valueInUSD: '90.10 USD',
    marketCap: '$12,500,000,000',
    supply: '84,000,000 LTC',
    percentageChange: '+1.80%',
    bgColor: 'dark',
    iconColor: 'success',
  },
];
//*** Market Cap -End ***//

//*** Cryptocurrency Market Overview -Start ***//
const Bitcoinseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
const Bitcoinoptions = {
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
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
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false,

  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['rgb(53, 189, 170)'],
}

const Ethereumseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41]
}]
const Ethereumoptions = {
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
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
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
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
  colors: ['rgb(248, 66, 56)'],
}

const Dashseries = [{
  name: 'Value',
  data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
}]
const Dashoptions = {
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
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
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
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
  colors: ['rgb(53, 189, 170)'],
}

const Rippleseries = [{
  name: 'Value',
  data: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41]
}]
const Rippleoptions = {
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
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
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
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
  colors: ['rgb(53, 189, 170)'],
}

const Iotaseries = [{
  name: 'Value',
  data: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31]
}]
const Iotaoptions = {
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
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
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
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
  colors: ['rgb(248, 66, 56)'],

}

const Golemseries = [{
  name: 'Value',
  data: [62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38]
}]
const Golemoptions = {
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
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
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false
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
  colors: ['rgb(248, 66, 56)'],
}

export const Cryptocurrencydata = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    image: '../../assets/images/crypto-currencies/square-color/Bitcoin.svg',
    price: '$34,283.53',
    marketCap: '21,457.02M',
    supply: ' $669,649,033,571 ',
    percentageChange: '+39.23%',
    graphId: 'bitcoin-price-graph',
    chartoptions: Bitcoinoptions,
    chartseries: Bitcoinseries
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    image: '../../assets/images/crypto-currencies/square-color/Ethereum.svg',
    price: '$1,875.42',
    marketCap: '120,000.00M',
    supply: '$220,000,000,000',
    percentageChange: '+22.15%',
    graphId: 'etherium-price-graph',
    chartoptions: Ethereumoptions,
    chartseries: Ethereumseries
  },
  {
    rank: 3,
    name: 'Dash',
    symbol: 'DASH',
    image: '../../assets/images/crypto-currencies/square-color/Dash.svg',
    price: '$102.45',
    marketCap: '10,500.00M',
    supply: '$1,182,000,000',
    percentageChange: '+15.80%',
    graphId: 'dash-price-graph',
    chartoptions: Dashoptions,
    chartseries: Dashseries
  },
  {
    rank: 4,
    name: 'Ripple',
    symbol: 'XRP',
    image: '../../assets/images/crypto-currencies/square-color/Ripple.svg',
    price: '$0.48',
    marketCap: '50,000.00M',
    supply: '$24,000,000,000',
    percentageChange: '-3.25%',
    graphId: 'ripple-price-graph',
    chartoptions: Rippleoptions,
    chartseries: Rippleseries
  },
  {
    rank: 5,
    name: 'IOTA',
    symbol: 'MIOTA',
    image: '../../assets/images/crypto-currencies/square-color/IOTA.svg',
    price: '$0.35',
    marketCap: '2,500.00M',
    supply: '$875,000,000',
    percentageChange: '+5.10%',
    graphId: 'iota-price-graph',
    chartoptions: Iotaoptions,
    chartseries: Iotaseries
  },
  {
    rank: 6,
    name: 'Golem',
    symbol: 'GNT',
    image: '../../assets/images/crypto-currencies/square-color/Golem.svg',
    price: '$0.20',
    marketCap: '1,500.00M',
    supply: '$300,000,000',
    percentageChange: '+3.45%',
    graphId: 'golem-price-graph',
    chartoptions: Golemoptions,
    chartseries: Golemseries
  },
];
//*** Cryptocurrency Market Overview -End ***//

//***  Wallet Balance -Start ***//
interface Wallet {
  id: number;
  name: string;
  symbol: string;
  balanceliclass: string;
  image: string;
  balance: string;
  currencyValue: string;
  bgcolor: string;
}
export const WalletBalance: Wallet[] = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    image: '../../assets/images/crypto-currencies/round-outline/Bitcoin.svg',
    balance: "58.6225600",
    currencyValue: '$9,772.46',
    balanceliclass: 'mb-3',
    bgcolor: 'secondary',
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    image: '../../assets/images/crypto-currencies/round-outline/Ethereum.svg',
    balance: "12.4537800",
    currencyValue: '$1,580.47',
    balanceliclass: 'mb-3',
    bgcolor: 'primary',
  },
  {
    id: 3,
    name: 'Litecoin',
    symbol: 'LTC',
    image: '../../assets/images/crypto-currencies/round-outline/Litecoin.svg',
    balance: "25.6489200",
    currencyValue: '$2,563.12',
    balanceliclass: 'mb-3',
    bgcolor: 'dark',
  },
  {
    id: 4,
    name: 'Ripple',
    symbol: 'XRP',
    image: '../../assets/images/crypto-currencies/round-outline/Ripple.svg',
    balance: "1500.2345600",
    currencyValue: '$1,080.75',
    balanceliclass: 'mb-3',
    bgcolor: 'info',
  },
  {
    id: 5,
    name: 'IOTA',
    symbol: 'MIOTA',
    image: '../../assets/images/crypto-currencies/round-outline/IOTA.svg',
    balance: "200.5000000",
    currencyValue: '$80.20',
    balanceliclass: 'mb-0',
    bgcolor: 'success',
  },
];
//***  Wallet Balance -End ***//
