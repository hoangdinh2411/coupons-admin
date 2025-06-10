
const BasicSeries = [{
  name: 'Value',
  data: [8, 52, 60, 42, 70, 26, 80, 30, 36, 38, 64, 53, 43, 47, 34, 28, 90, 55, 63, 26, 60, 45, 20, 50]
}]
const BasicOptions = {
  chart: {
    type: 'line',
    height: 40,
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
  colors: ['var(--primary-color)'],
};

const BasicSeries1 = [{
  name: 'Value',
  data: [8, 52, 60, 42, 70, 26, 80, 30, 36, 38, 64, 53, 43, 47, 34, 28, 90, 55, 63, 26, 60, 45, 20, 50]
}]
const BasicOptions1 = {
  chart: {
    type: 'line',
    height: 40,
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
  colors: ['rgb(244, 138, 167)'],
};

const BasicSeries2 = [{
  name: 'Value',
  data: [10, 55, 64, 48, 66, 34, 75, 41, 47, 49, 72, 61, 45, 51, 45, 37, 103, 63, 71, 37, 64, 53, 29, 56]
}]
const BasicOptions2 = {
  chart: {
    type: 'line',
    height: 40,
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
};

const BasicSeries3 = [{
  name: 'Value',
  data: [15, 50, 62, 34, 75, 31, 78, 40, 45, 37, 66, 55, 48, 49, 39, 30, 95, 58, 70, 29, 62, 46, 25, 52]
}]
const BasicOptions3 = {
  chart: {
    type: 'line',
    height: 40,
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
  yaxis: {
    min: 0,
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['rgb(46, 142, 247)'],
};

interface CryptoCardProps {
  imgSrc: string;
  title: string;
  rank: string;
  value: string;
  market: string;
  percent: string;
  chartId: string;
  type: string;
  chartOptions: any;
  chartSeries: any;
  color: string;
}
export const CryptoMarketData: CryptoCardProps[] = [
  {
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg",
    title: "Bitcoin",
    rank: "BTC - Rank 1",
    value: "$35,876.29",
    market: "Market Cap: $1.054B",
    percent: "(+2.33%)",
    chartId: "bitcoin-chart",
    type: "line",
    chartOptions: BasicOptions,
    chartSeries: BasicSeries,
    color: 'success'
  },
  {
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg",
    title: "Ethereum",
    rank: "ETH - Rank 2",
    value: "$1,845.23",
    market: "Market Cap: $224.57B",
    percent: "(-1.12%)",
    chartId: "etherium-chart",
    type: "line",
    chartOptions: BasicOptions1,
    chartSeries: BasicSeries1,
    color: 'danger'
  },
  {
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Dash.svg",
    title: "Dash",
    rank: "DASH - Rank 50",
    value: "$112.45",
    market: "Market Cap: $1.21B",
    percent: "(-0.02%)",
    chartId: "dashcoin-chart",
    type: "line",
    chartOptions: BasicOptions2,
    chartSeries: BasicSeries2,
    color: 'danger'
  },
  {
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Litecoin.svg",
    title: "Litecoin",
    rank: "LTC - Rank 15",
    value: "$65.73",
    market: "Market Cap: $4.67B",
    percent: "(+1.15%)",
    chartId: "litecoin-chart",
    type: "line",
    chartOptions: BasicOptions3,
    chartSeries: BasicSeries3,
    color: 'success'
  }
];

const MarketSeries = [
  {
    name: "Value",
    data: [
      16, 11, 14, 19, 31, 23, 15
    ],
  },
]

const MarketSeries1 = [
  {
    name: "Value",
    data: [
      12, 7, 12, 17, 27, 22, 12
    ],
  },
]

const MarketSeries2 = [
  {
    name: "Value",
    data: [
      25, 15, 10, 30, 20, 15, 15
    ],
  },
]

const MarketSeries3 = [
  {
    name: "Value",
    data: [
      18, 12, 20, 22, 28, 26, 17
    ],
  },
]

const MarketSeries4 = [
  {
    name: "Value",
    data: [
      12, 7, 12, 17, 27, 22, 12
    ],
  },
]

const MarketSeries5 = [
  {
    name: "Value",
    data: [
      22, 12, 18, 26, 20, 28, 17
    ],
  },
]

const MarketSeries6 = [
  {
    name: "Value",
    data: [
      10, 15, 20, 15, 25, 15, 30
    ],
  },
]

const MarketSeries7 = [
  {
    name: "Value",
    data: [
      14, 9, 16, 21, 29, 24, 13
    ],
  },
]

const MarketSeries8 = [
  {
    name: "Value",
    data: [
      13, 21, 9, 24, 16, 29, 14
    ],
  },
]

const MarketOptions = ({ color }: any) => ({
  chart: {
    type: "line",
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
      blur: 3,
      color: "#000",
      opacity: 0.1,
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
  tooltip: {
    enabled: false,
  },
  colors: [color],
});

export const MarketTabledata = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$29,948.80',
    marketCap: '$582.23B',
    marketChange: '0.239%',
    tradingVolume: '$11.79B USD',
    weekChange: '-5.12%',
    chartId: 'btc-chart',
    priceChange: '0.483%',
    chartOptions: MarketOptions({ color: "rgb(244, 138, 167)" }),
    chartSeries: MarketSeries,
    marketIcon: 'down',
    priceIcon: 'up',
    marketColor: 'danger',
    priceColor: 'success'
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$1,895.96',
    marketCap: '$226.91B',
    marketChange: '0.45%',
    tradingVolume: '$2.83B USD',
    weekChange: '+5.12%',
    chartId: 'eth-chart',
    priceChange: '-0.87%',
    chartOptions: MarketOptions({ color: "rgb(53, 189, 170)" }),
    chartSeries: MarketSeries1,
    marketIcon: 'down',
    priceIcon: 'up',
    marketColor: 'danger',
    priceColor: 'success'
  },
  {
    rank: 3,
    name: 'Dash',
    symbol: 'DASH',
    price: '$4.87B',
    marketCap: '$203.00',
    marketChange: '1.56%',
    tradingVolume: '$185.50M USD',
    weekChange: '+3.45%',
    chartId: 'dash-chart',
    priceChange: '1.05%',
    chartOptions: MarketOptions({ color: "rgb(53, 189, 170)" }),
    chartSeries: MarketSeries2,
    marketIcon: 'up',
    priceIcon: 'up',
    marketColor: 'success',
    priceColor: 'success'
  },
  {
    rank: 4,
    name: 'Ripple',
    symbol: 'XRP',
    price: '$24.63B',
    marketCap: '$0.50',
    marketChange: '1.33%',
    tradingVolume: '$1.15B USD',
    weekChange: '+2.10%',
    chartId: 'ripple-chart',
    priceChange: '+1.22%',
    chartOptions: MarketOptions({ color: "rgb(53, 189, 170)" }),
    chartSeries: MarketSeries3,
    marketIcon: 'up',
    priceIcon: 'up',
    marketColor: 'success',
    priceColor: 'success'
  },
  {
    rank: 5,
    name: 'Golem',
    symbol: 'GNT',
    price: '$1.23B',
    marketCap: '$0.42',
    marketChange: '0.15%',
    tradingVolume: '$45.67M USD',
    weekChange: '+3.30%',
    chartId: 'glm-chart',
    priceChange: '+0.98%',
    chartOptions: MarketOptions({ color: "rgb(53, 189, 170)" }),
    chartSeries: MarketSeries4,
    marketIcon: 'up',
    priceIcon: 'up',
    marketColor: 'success',
    priceColor: 'success'
  },
  {
    rank: 6,
    name: 'EOS',
    symbol: 'EOS',
    price: '$3.25B',
    marketCap: '$1.05',
    marketChange: '-1.30%',
    tradingVolume: '$120.45M USD',
    weekChange: '+4.20%',
    chartId: 'eos-chart',
    priceChange: '-1.10%',
    chartOptions: MarketOptions({ color: "rgb(53, 189, 170)" }),
    chartSeries: MarketSeries5,
    marketIcon: 'down',
    priceIcon: 'down',
    marketColor: 'danger',
    priceColor: 'danger'
  },
  {
    rank: 7,
    name: 'Litecoin',
    symbol: 'LTC',
    price: '$52.32',
    marketCap: '$11.45B',
    marketChange: '-0.50%',
    priceChange: '-1.50%',
    tradingVolume: '$205.78M USD',
    weekChange: '-3.40%',
    chartId: 'lite-chart',
    chartOptions: MarketOptions({ color: "rgb(244, 138, 167)" }),
    chartSeries: MarketSeries6,
    marketIcon: 'down',
    priceIcon: 'down',
    marketColor: 'danger',
    priceColor: 'danger'
  },
  {
    rank: 8,
    name: 'IOTA',
    symbol: 'MIOTA',
    price: '$3.45B',
    marketCap: '$0.90',
    marketChange: '+1.20%',
    priceChange: '-0.50%',
    tradingVolume: '$35.67M USD',
    weekChange: '-4.20%',
    chartId: 'iota-chart',
    chartOptions: MarketOptions({ color: "rgb(244, 138, 167)" }),
    chartSeries: MarketSeries7,
    marketIcon: 'up',
    priceIcon: 'down',
    marketColor: 'success',
    priceColor: 'danger'
  },
  {
    rank: 9,
    name: 'Monero',
    symbol: 'XMR',
    price: '$149.99',
    marketCap: '$3.36B',
    marketChange: '-0.05%',
    priceChange: '+0.45%',
    tradingVolume: '$2.47M USD',
    weekChange: '+3.10%',
    chartId: 'monero-chart',
    chartOptions: MarketOptions({ color: "rgb(53, 189, 170)" }),
    chartSeries: MarketSeries8,
    marketIcon: 'down',
    priceIcon: 'up',
    marketColor: 'danger',
    priceColor: 'success'
  },
];