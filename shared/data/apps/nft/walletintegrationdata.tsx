interface WalletData {
  imageSrc: string;
  customClass: string;
  title: string;
  buttonLabel: string;
  btnColor:string;
};
export const WalletData: WalletData[] = [
  {
    imageSrc: "../../../assets/images/nft-images/38.png",
    title: "MetaMask",
    buttonLabel: "Connect",
    customClass: "active",
    btnColor:'primary'
  },
  {
    imageSrc: "../../../assets/images/nft-images/39.png",
    title: "Enjin Wallet",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
  {
    imageSrc: "../../../assets/images/nft-images/31.png",
    title: "Trust Wallet",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
  {
    imageSrc: "../../../assets/images/nft-images/40.png",
    title: "Coinbase Wallet",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
  {
    imageSrc: "../../../assets/images/nft-images/27.png",
    title: "Lido",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
  {
    imageSrc: "../../../assets/images/nft-images/25.png",
    title: "Huobi Wallet",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
  {
    imageSrc: "../../../assets/images/nft-images/35.png",
    title: "Phantom Wallet",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
  {
    imageSrc: "../../../assets/images/nft-images/37.png",
    title: "Ledger Live",
    buttonLabel: "Connect",
    customClass: "",
    btnColor:'primary-light'
  },
];


interface BlockchainData {
  imageSrc: string;
  name: string;
};
export const BlockchainData: BlockchainData[] = [
  {
    imageSrc: "../../../assets/images/nft-images/34.png",
    name: "Ethereum",
  },
  {
    imageSrc: "../../../assets/images/nft-images/33.png",
    name: "Polygon",
  },
  {
    imageSrc: "../../../assets/images/nft-images/32.png",
    name: "Solana",
  },
  {
    imageSrc: "../../../assets/images/nft-images/28.png",
    name: "Tezos",
  },
  {
    imageSrc: "../../../assets/images/nft-images/30.png",
    name: "Avalanche",
  },
  {
    imageSrc: "../../../assets/images/nft-images/29.png",
    name: "Cardano",
  },
  {
    imageSrc: "../../../assets/images/nft-images/36.png",
    name: "Binance Smart Chain",
  },
];

interface Transaction {
  type: string;
  direction: 'From' | 'To';
  user: string;
  amount: string;
  amountType: string;
  amountClass: string;
  time: string;
};
export const WalletFeatures: Transaction[] = [
  {
    type: 'NFT Sale Proceeds',
    direction: 'From',
    user: '@buyer456',
    amount: '0.75',
    amountType: 'ETH',
    amountClass: 'text-success fw-medium',
    time: '30 mins ago',
  },
  {
    type: 'NFT Purchase',
    direction: 'To',
    user: '@artist123',
    amount: '$500',
    amountType: '',
    amountClass: 'text-danger fw-medium',
    time: '15 mins ago',
  },
  {
    type: 'NFT Auction Bid',
    direction: 'From',
    user: '@bidder789',
    amount: '0.5',
    amountType: 'ETH',
    amountClass: 'text-primary fw-medium',
    time: '10 mins ago',
  },
  {
    type: 'ETH Withdrawal',
    direction: 'To',
    user: '0xA1B2C3D4...',
    amount: '2.0',
    amountType: 'ETH',
    amountClass: 'text-danger fw-medium',
    time: '1 hour ago',
  },
];

interface ImageData {
  src: string;
  alt: string;
};
export const WalletFeaturesdata: ImageData[] = [
  { src: "../../../assets/images/nft-images/2.png", alt: "NFT Image 2" },
  { src: "../../../assets/images/nft-images/1.png", alt: "NFT Image 1" },
  { src: "../../../assets/images/nft-images/3.png", alt: "NFT Image 3" },
  { src: "../../../assets/images/nft-images/4.png", alt: "NFT Image 4" },
];