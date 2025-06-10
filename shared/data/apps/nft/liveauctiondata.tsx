
interface NftItem {
  imageSrc: string;
  altText: string;
  title: string;
  creator: string;
  username: string;
  bidAmount: string;
  remainingTime: string;
};
export const TopNfts: NftItem[] = [
  {
    imageSrc: "../../../assets/images/nft-images/1.png",
    altText: "Mystic Forest",
    title: "Mystic Forest",
    creator: "Ethan Hunt",
    username: "@ethanhunt",
    bidAmount: "4.5 ETH",
    remainingTime: "3h 15m"
  },
  {
    imageSrc: "../../../assets/images/nft-images/2.png",
    altText: "Digital Dreams",
    title: "Digital Dreams",
    creator: "Sophia",
    username: "@sophia",
    bidAmount: "3.8 ETH",
    remainingTime: "2h 40m"
  },
  {
    imageSrc: "../../../assets/images/nft-images/3.png",
    altText: "Pixelated Glory",
    title: "Pixelated Glory",
    creator: "Oliver King",
    username: "@oliver",
    bidAmount: "2.7 ETH",
    remainingTime: "5h 20m"
  },
  {
    imageSrc: "../../../assets/images/nft-images/4.png",
    altText: "Galactic Voyage",
    title: "Galactic Voyage",
    creator: "Ava Johnson",
    username: "@avajohn",
    bidAmount: "6.2 ETH",
    remainingTime: "1h 10m"
  },
  {
    imageSrc: "../../../assets/images/nft-images/5.png",
    altText: "Cyber Samurai",
    title: "Cyber Samurai",
    creator: "Noah Brown",
    username: "@noah",
    bidAmount: "5.1 ETH",
    remainingTime: "4h 50m"
  },
  {
    imageSrc: "../../../assets/images/nft-images/6.png",
    altText: "Ethereal Realm",
    title: "Ethereal Realm",
    creator: "Liam Smith",
    username: "@liamsmith",
    bidAmount: "7.8 ETH",
    remainingTime: "2h 5m"
  }
];

type Tag = {
  className: string;
  icon: string;
  text: string;
};
export const Categories: Tag[] = [
  {
    className: 'nft-tag-primary',
    icon: 'ri-list-check',
    text: 'All Categories',
  },
  {
    className: 'nft-tag-success',
    icon: 'ri-star-line',
    text: 'Trending Now',
  },
  {
    className: 'nft-tag-secondary',
    icon: 'ri-computer-line',
    text: 'Digital Collectibles',
  },
  {
    className: 'nft-tag-danger',
    icon: 'ri-image-line',
    text: 'Photography',
  },
  {
    className: 'nft-tag-info',
    icon: 'ri-paint-brush-line',
    text: 'Visual Arts',
  },
  {
    className: 'nft-tag-warning',
    icon: 'ri-gift-line',
    text: 'Miscellaneous',
  },
];