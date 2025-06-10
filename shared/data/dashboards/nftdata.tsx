
interface CardData {
  title: string;
  price: string;
  percentage: string;
  color: string;
  bgColor: string;
  cardcustomclass: string;
}
export const NFTCard: CardData[] = [
  {
    title: "Total Sales:",
    price: "3,679",
    percentage: "+ 0.125%",
    color: "success",
    bgColor: "primary",
    cardcustomclass: "mb-2",
  },
  {
    title: "Total Value:",
    price: "$685",
    percentage: "- 2.10%",
    color: "danger",
    bgColor: "success",
    cardcustomclass: "mb-2",
  },
  {
    title: "Total Revenue:",
    price: "$2,879",
    percentage: "+ 1.23%",
    color: "success",
    bgColor: "secondary",
    cardcustomclass: "mb-0",
  }
]
//*** Total Balance -Start ***//

export const BalanceSeries = [{
  data: [98, 110, 80, 145, 105, 112, 87, 150, 102, 98, 110, 80,]
}]
export const BalanceOptions = {
  chart: {
    height: 115,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
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
        formatter: function (_seriesName: any) {
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
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["var(--primary-color)"],
  stroke: {
    width: [1.75],
    curve: 'straight',
    dashArray: [2]
  },
  markers: {
    size: 4,
    hover: {
      size: 9
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 3,
      opacity: 0.2
    }
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
            color: "var(--primary01)",
            opacity: 0.05
          },
          {
            offset: 75,
            color: "var(--primary01)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary01)',
            opacity: 1
          }
        ],
      ]
    }
  },
}
//*** Total Balance -End ***//

//*** Live Auctions -Start ***//
interface Auctions {
  imgSrc: string;
  avatarSrc: string;
  title: string;
  mail: string;
  price: string;
}
export const AuctionsData: Auctions[] = [
  {
    imgSrc: "../../assets/images/nft-images/1.png",
    avatarSrc: "../../assets/images/faces/4.jpg",
    title: "CryptoArt",
    mail: "@cryptoart721",
    price: "3.5ETH"
  },
  {
    imgSrc: "../../assets/images/nft-images/15.png",
    avatarSrc: "../../assets/images/faces/4.jpg",
    title: "CryptoArt",
    mail: "@cryptoart721",
    price: "3.5ETH"
  },
  {
    imgSrc: "../../assets/images/nft-images/6.png",
    avatarSrc: "../../assets/images/faces/4.jpg",
    title: "CryptoArt",
    mail: "@cryptoart721",
    price: "3.5ETH"
  }
];
//*** Live Auctions -End ***//

//***  Recent Activity  -Start ***//
interface Recent {
  avatarColor: string;
  number: number;
  username: string;
  text: string;
  linkText?: string;
  linkUrl?: string;
  timestamp: string;
  images?: string[];
}
export const RecentActivity: Recent[] = [
  {
    avatarColor: 'bg-primary-gradient',
    number: 13,
    username: '@juliacamo',
    text: '- Added new NFTs collection check',
    linkText: 'here',
    linkUrl: '#!',
    timestamp: 'Mar 2024, 9:45PM',
  },
  {
    avatarColor: 'bg-success-gradient',
    number: 7,
    username: '@nft_artist',
    text: '- Minted a new exclusive NFT artwork!',
    timestamp: 'Oct 2024, 2:30PM',
  },
  {
    avatarColor: 'bg-warning-gradient',
    number: 15,
    username: '@Nft_art_collector',
    text: '- Sold a rare NFT from the collection!',
    timestamp: 'Oct 2024, 4:15PM',
    images: ['../../assets/images/faces/12.jpg'],
  },
  {
    avatarColor: 'bg-danger-gradient',
    number: 22,
    username: '@digital_artist',
    text: '- Updated metadata for existing NFTs.',
    timestamp: 'Oct 2024, 11:00AM',
  },
  {
    avatarColor: 'bg-info-gradient',
    number: 9,
    username: '@nft_explorer',
    text: '- Bid on an exclusive NFT art piece.',
    timestamp: 'Oct 2024, 6:45PM',
    images: ['../../assets/images/nft-images/14.png'],
  },
  {
    avatarColor: 'bg-secondary-gradient',
    number: 5,
    username: '@nft_enthusiast',
    text: '- Collaborated on a new NFT project.',
    timestamp: 'Oct 2024, 3:00PM',
  },
];

//*** Recent Activity -End ***//

//*** Top Selling NFTs (%) -Start ***//

export const SellingSeries = [75]

export const SellingOptions = {
  chart: {
    height: 283,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '65%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0,
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val: string) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['var(--primary-color)'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  colors: ["rgb(53, 189, 170)"],
  labels: ['Percent'],
}

//*** Top Selling NFTs (%) -End ***//

//*** Top NFTs Collections -Start ***//

interface Collections {
  avatarColor: string;
  avatarImage: string;
  name: string;
  collection: string;
  nftImages: string[];
  price: string;
  ethAmount: string;
  spanClass?: any;
}
export const Collectionsdata: Collections[] = [
  {
    avatarColor: 'bg-primary-transparent',
    avatarImage: '../../assets/images/faces/1.jpg',
    name: 'Space Animatior',
    collection: 'Collection',
    nftImages: ['../../assets/images/nft-images/13.png', '../../assets/images/nft-images/15.png', '../../assets/images/nft-images/18.png'],
    price: '$9,223.46',
    ethAmount: '0.214ETH',
  },
  {
    avatarColor: 'bg-success-transparent',
    avatarImage: '../../assets/images/faces/12.jpg',
    name: 'Digital Artist',
    collection: 'Artworks',
    nftImages: ['../../assets/images/nft-images/10.png', '../../assets/images/nft-images/11.png', '../../assets/images/nft-images/12.png'],
    price: '$12,456.78',
    ethAmount: '0.321ETH',
  },
  {
    avatarColor: 'bg-danger-transparent',
    avatarImage: '../../assets/images/faces/3.jpg',
    name: '3D Modeler',
    collection: 'Designs',
    nftImages: ['../../assets/images/nft-images/7.png', '../../assets/images/nft-images/8.png', '../../assets/images/nft-images/9.png'],
    price: '$15,789.00',
    ethAmount: '0.456ETH',
  },
  {
    avatarColor: 'bg-warning-transparent',
    avatarImage: '../../assets/images/faces/4.jpg',
    name: 'Concept Artist',
    collection: 'Illustrations',
    nftImages: ['../../assets/images/nft-images/4.png', '../../assets/images/nft-images/5.png', '../../assets/images/nft-images/6.png'],
    price: '$8,999.99',
    ethAmount: '0.200ETH',
  },
  {
    avatarColor: 'bg-info-transparent',
    avatarImage: '../../assets/images/faces/15.jpg',
    name: 'Game Developer',
    collection: 'Game Assets',
    nftImages: ['../../assets/images/nft-images/16.png', '../../assets/images/nft-images/15.png'],
    price: '$18,450.00',
    ethAmount: '0.500ETH',
    spanClass: (
      <>
        <span className="avatar avatar-sm avatar-rounded bg-primary"> +3 </span>
      </>
    )
  },
  {
    avatarColor: 'bg-secondary-transparent',
    avatarImage: '../../assets/images/faces/16.jpg',
    name: 'Music Producer',
    collection: 'Soundtracks',
    nftImages: ['../../assets/images/nft-images/8.png', '../../assets/images/nft-images/5.png', '../../assets/images/nft-images/6.png'],
    price: '$5,250.75',
    ethAmount: '0.150ETH',
  },
  {
    avatarColor: 'bg-dark-transparent',
    avatarImage: '../../assets/images/faces/7.jpg',
    name: 'Photographer',
    collection: 'Collections',
    nftImages: ['../../assets/images/nft-images/1.png', '../../assets/images/nft-images/4.png', '../../assets/images/nft-images/3.png'],
    price: '$11,300.50',
    ethAmount: '0.320ETH',
  },
];

//*** Top NFTs Collections -End ***//

//*** Featured Creators -Start ***//

interface Creators {
  avatarImage: string;
  name: string;
  email: string;
  soldCount: number;
  buttonText: string;
  buttonVariant: 'primary' | 'primary-light';
}
export const Creatorsdata: Creators[] = [
  {
    avatarImage: '../../assets/images/faces/1.jpg',
    name: 'Amanda Nanes',
    email: 'amandananes@',
    soldCount: 53,
    buttonText: 'Follow',
    buttonVariant: 'primary',
  },
  {
    avatarImage: '../../assets/images/faces/12.jpg',
    name: 'John Doe',
    email: 'johndoe@example.com',
    soldCount: 120,
    buttonText: 'Follow',
    buttonVariant: 'primary',
  },
  {
    avatarImage: '../../assets/images/faces/3.jpg',
    name: 'Emily Clark',
    email: 'emilyclark@example.com',
    soldCount: 87,
    buttonText: 'Follow',
    buttonVariant: 'primary',
  },
  {
    avatarImage: '../../assets/images/faces/11.jpg',
    name: 'Michael Smith',
    email: 'michaelsmith@example.com',
    soldCount: 75,
    buttonText: 'UnFollow',
    buttonVariant: 'primary-light',
  },
  {
    avatarImage: '../../assets/images/faces/5.jpg',
    name: 'Sophia Lee',
    email: 'sophialee@example.com',
    soldCount: 64,
    buttonText: 'Follow',
    buttonVariant: 'primary',
  },
  {
    avatarImage: '../../assets/images/faces/6.jpg',
    name: 'James Brown',
    email: 'jamesbrown@example.com',
    soldCount: 45,
    buttonText: 'Follow',
    buttonVariant: 'primary',
  },
];

//*** Featured Creators -End ***//

//*** Latest Bids -Start ***//

interface Latest {
  nftImage: string;
  nftName: string;
  creator: string;
  originalPrice: string;
  currentPrice: string;
  sellerImage: string;
  sellerName: string;
  status: 'Open' | 'Pending' | 'Closed';
  timeRemaining: string;
};
export const Latestdata: Latest[] = [
  {
    nftImage: '../../assets/images/nft-images/2.png',
    nftName: 'Starter Sense NFT',
    creator: '@irukasensei229',
    originalPrice: '2.56ETH',
    currentPrice: '2.1ETH',
    sellerImage: '../../assets/images/faces/3.jpg',
    sellerName: 'Elisha Sean',
    status: 'Open',
    timeRemaining: '03hrs : 12m : 45s',
  },
  {
    nftImage: '../../assets/images/nft-images/3.png',
    nftName: 'Urban Vibes NFT',
    creator: '@cityartist77',
    originalPrice: '1.25ETH',
    currentPrice: '1.0ETH',
    sellerImage: '../../assets/images/faces/5.jpg',
    sellerName: 'Jordan Lee',
    status: 'Open',
    timeRemaining: '05hrs : 45m : 30s',
  },
  {
    nftImage: '../../assets/images/nft-images/4.png',
    nftName: 'Mystic Forest NFT',
    creator: '@naturelover99',
    originalPrice: '4.50ETH',
    currentPrice: '3.75ETH',
    sellerImage: '../../assets/images/faces/6.jpg',
    sellerName: 'Sophia Brown',
    status: 'Pending',
    timeRemaining: '01hrs : 15m : 20s',
  },
  {
    nftImage: '../../assets/images/nft-images/5.png',
    nftName: 'Digital Harmony NFT',
    creator: '@musiclover88',
    originalPrice: '2.90ETH',
    currentPrice: '2.60ETH',
    sellerImage: '../../assets/images/faces/7.jpg',
    sellerName: 'Lucas Gray',
    status: 'Open',
    timeRemaining: '04hrs : 05m : 50s',
  },
  {
    nftImage: '../../assets/images/nft-images/5.png',
    nftName: 'Digital NFT',
    creator: '@musiclover88',
    originalPrice: '2.90ETH',
    currentPrice: '2.60ETH',
    sellerImage: '../../assets/images/faces/7.jpg',
    sellerName: 'Lucas Gray',
    status: 'Open',
    timeRemaining: '04hrs : 05m : 50s',
  },
  {
    nftImage: '../../assets/images/nft-images/6.png',
    nftName: 'Celestial Art NFT',
    creator: '@starrynight12',
    originalPrice: '5.20ETH',
    currentPrice: '4.90ETH',
    sellerImage: '../../assets/images/faces/8.jpg',
    sellerName: 'Mia Johnson',
    status: 'Closed',
    timeRemaining: '00hrs : 30m : 10s',
  },
];

//*** Latest Bids -End ***//

//*** Trending Collections : -Start ***//

export const Trendingdata = [
  { id: 1, imgSrc: '../../assets/images/nft-images/5.png', title: 'Digital Collectible #721', time: '02hrs : 45m : 12s', avatarSrc: '../../assets/images/faces/4.jpg', avatarTitle: 'CryptoArt Collection ', avatarId: '#cryptoart721', svgPrice: ' 5.250ETH ', avatarClass: 'avatar avatar-rounded avatar-sm' },
  { id: 2, imgSrc: '../../assets/images/nft-images/3.png', title: 'Abstract Digital Art', time: ' 03hrs : 12m : 45s ', avatarSrc: '../../assets/images/faces/2.jpg', avatarTitle: 'Manistics NFT ', avatarId: '#manistics454', svgPrice: ' 15.325ETH ', avatarClass: 'avatar avatar-rounded avatar-sm' },
  { id: 3, imgSrc: '../../assets/images/nft-images/13.png', title: 'Epic Fantasy Artwork', time: '01hrs : 30m : 55s', avatarSrc: '../../assets/images/faces/5.jpg', avatarTitle: 'FantasyArt Studio ', avatarId: '#fantasyart123', svgPrice: ' 7.800ETH ', avatarClass: 'avatar avatar-rounded avatar-sm' },
  { id: 4, imgSrc: '../../assets/images/nft-images/5.png', title: 'Retro Gaming', time: '04hrs : 10m : 30s', avatarSrc: '../../assets/images/faces/6.jpg', avatarTitle: 'GamingNFT Hub ', avatarId: '#gamingnft456', svgPrice: ' 3.500ETH ', avatarClass: 'avatar avatar-rounded avatar-sm' },
]

//*** Trending Collections : -End ***//