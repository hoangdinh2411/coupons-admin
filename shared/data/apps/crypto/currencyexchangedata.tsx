interface SelectType {
  value: string;
  label: string;
}
export const Options1: SelectType[] = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherium', label: 'Etherium' },
  { value: 'Litecoin', label: 'Litecoin' },
  { value: 'Ripple', label: 'Ripple' },
  { value: 'Cardano', label: 'Cardano' },
  { value: 'Neo', label: 'Neo' },
  { value: 'Stellar', label: 'Stellar' },
  { value: 'EOS', label: 'EOS' },
  { value: 'NEM', label: 'NEM' },
];

export const Options2: SelectType[] = [
  { value: 'USD', label: 'USD' },
  { value: 'Pound', label: 'Pound' },
  { value: 'Rupee', label: 'Rupee' },
  { value: 'Euro', label: 'Euro' },
  { value: 'Won', label: 'Won' },
  { value: 'Dinar', label: 'Dinar' },
  { value: 'Rial', label: 'Rial' }
];

interface CryptoData {
  name: string;
  price: string;
  marketCap: string;
}
export const Currencydata: CryptoData[] = [
  {
    name: 'Bitcoin',
    price: '$30k',
    marketCap: '$580 B',
  },
  {
    name: 'Ethereum',
    price: '$2k',
    marketCap: '$300 B',
  },
  {
    name: 'Ripple',
    price: '$0.79',
    marketCap: '$38 B',
  },
  {
    name: 'Litecoin',
    price: '$158.42',
    marketCap: '$10 B',
  },
];

const Cuurencyseries = [
  {
    name: "Value",
    data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
  },
]

const CuurencyOptions = ({ color }: any) => ({
  chart: {
    type: "area",
    height: 30,
    width: 100,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 1,
      color: "#fff",
      opacity: 0.05,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  // yaxis: {
  //   axisBorder: {
  //     show: false,
  //   },
  // },
  colors: [color],
  tooltip: {
    enabled: false,
  },
})

export const CryptoCurrencydata = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    change: '24.3%',
    chartId: 'btc-currency-chart',
    marketCap: '$12 B',
    price: {
      amount: '0.00434',
      value: '$30.29',
    },
    totalMarketCap: '$580 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(132, 90, 223,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.59',
    icon: 'up',
    color: 'success'
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    change: '18.7%',
    chartId: 'eth-currency-chart',
    marketCap: '$8 B',
    price: {
      amount: '0.01758',
      value: '$2564.89',
    },
    totalMarketCap: '$300 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(35, 183, 229,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.92',
    icon: 'down',
    color: 'danger'
  },
  {
    rank: 3,
    name: 'Dash',
    symbol: 'DASH',
    change: '12.5%',
    chartId: 'dash-currency-chart',
    marketCap: '$8 B',
    price: {
      amount: '0.00487',
      value: '$116.78',
    },
    totalMarketCap: '$1 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(38, 191, 148,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '-0.30',
    icon: 'down',
    color: 'danger'
  },
  {
    rank: 4,
    name: 'Litecoin',
    symbol: 'LTC',
    change: '8.2%',
    chartId: 'ltc-currency-chart',
    marketCap: '$5 B',
    price: {
      amount: '0.00789',
      value: '$158.42',
    },
    totalMarketCap: '$11 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(245, 184, 73,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.15',
    icon: 'up',
    color: 'success'
  },
  {
    rank: 5,
    name: 'Ripple',
    symbol: 'XRP',
    change: '6.5%',
    chartId: 'xrp-currency-chart',
    marketCap: '$3 B',
    price: {
      amount: '0.00123',
      value: '$0.79',
    },
    totalMarketCap: '$35 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(231, 145, 188,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.10',
    icon: 'up',
    color: 'success'
  },
  {
    rank: 6,
    name: 'Monero',
    symbol: 'XMR',
    change: '3.2%',
    chartId: 'monero-currency-chart',
    marketCap: '$2 B',
    price: {
      amount: '0.00456',
      value: '$182.34',
    },
    totalMarketCap: '$3.27 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(230, 83, 60,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.08',
    icon: 'up',
    color: 'success'
  },
  {
    rank: 7,
    name: 'EOS',
    symbol: 'EOS',
    change: '5.7%',
    chartId: 'eos-currency-chart',
    marketCap: '$1 B',
    price: {
      amount: '0.00234',
      value: '$4.78',
    },
    totalMarketCap: '$4.2 Billion',
    chartOptions: CuurencyOptions({ color: "rgba(73, 182, 245,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.23',
    icon: 'up',
    color: 'success'
  },
  {
    rank: 8,
    name: 'Stratis',
    symbol: 'STRAX',
    change: '2.1%',
    chartId: 'strax-currency-chart',
    marketCap: '$5 M',
    price: {
      amount: '0.001234',
      value: '$2.34',
    },
    totalMarketCap: '$300 Million',
    chartOptions: CuurencyOptions({ color: "rgba(137, 32, 173,0.5)" }),
    chartSeries: Cuurencyseries,
    type: 'area',
    percent: '+0.04',
    icon: 'up',
    color: 'success'
  },
];