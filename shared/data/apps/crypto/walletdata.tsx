interface Wallet {
  id: string;
  title: string;
  imgSrc: string;
  available: string;
  value: string;
  amount: string;
  transactions: string;
  value1: string;
  date: string;
  address: string;
}
export const WalletCardsdata: Wallet[] = [
  {
    id: '1',
    title: 'Bitcoin (BTC) Wallet',
    imgSrc: '../../../assets/images/crypto-currencies/square-color/Bitcoin.svg',
    available: 'Available BTC',
    value: '0.075 BTC',
    amount: '$2,230.25',
    transactions: '45',
    value1: '0.005 BTC',
    date: ' on 2024-09-24',
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  },
  {
    id: '2',
    title: 'Ethereum (ETH) Wallet',
    imgSrc: '../../../assets/images/crypto-currencies/square-color/Ethereum.svg',
    available: 'Available ETH',
    value: '1.25 ETH',
    amount: '$2,000.50',
    transactions: '30',
    value1: '0.1 ETH',
    date: ' on 2024-09-24',
    address: '0x3fB1eAd4D7F6f94D8DFe9BFEfEa94B9C1a',
  },
  {
    id: '3',
    title: 'Litecoin (LTC) Wallet',
    imgSrc: '../../../assets/images/crypto-currencies/square-color/Litecoin.svg',
    available: 'Available LTC',
    value: '5.6 LTC',
    amount: '$650.75',
    transactions: '50',
    value1: '0.2 LTC',
    date: ' on 2024-09-24',
    address: 'LcHKTh9wRrX9PrsX3fLpVTpcTrB6LVoKss',
  },
  {
    id: '4',
    title: ' Ripple (XRP) Wallet ',
    imgSrc: '../../../assets/images/crypto-currencies/square-color/Ripple.svg',
    available: 'Available XRP',
    value: '500 XRP',
    amount: '$235.00',
    transactions: '120',
    value1: '50 XRP',
    date: ' on 2024-09-23',
    address: 'rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH',
  },
  {
    id: '5',
    title: 'Dash (DASH) Wallet',
    imgSrc: '../../../assets/images/crypto-currencies/square-color/Dash.svg',
    available: 'Available DASH',
    value: '8.5 DASH',
    amount: '$925.30',
    transactions: '40',
    value1: '0.3 DASH',
    date: ' on 2024-09-22',
    address: 'Xn3HgXoVX8REeAxF6JrYte4fz8AwF5p5Ku',
  },
  {
    id: '6',
    title: 'Monero (XMR) Wallet',
    imgSrc: '../../../assets/images/crypto-currencies/square-color/Monero.svg',
    available: 'Available XMR',
    value: '10 XMR',
    amount: '$1,450.00',
    transactions: '70',
    value1: '1 XMR',
    date: ' on 2024-09-21',
    address: '49NsXk3Mb9Hw5D2bDxJnEp8f6eVQEDrfLZ',
  },
];