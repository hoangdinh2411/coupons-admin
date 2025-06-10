
export const Data1 = [
  { value: 'Choose Royalities', label: 'Choose Royalities' },
  { value: 'Flat Royalty', label: 'Flat Royalty' },
  { value: 'Graduated Royalty', label: 'Graduated Royalty' },
  { value: 'Tiered Royalty', label: 'Tiered Royalty' },
  { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
  { value: 'Customized Royalty', label: 'Customized Royalty' },
];

export const Data2 = [
  { value: 'Select a collection', label: 'Select a collection' },
  { value: 'Collection 1', label: 'Collection 1' },
  { value: 'Collection 2', label: 'Collection 2' },
];

export const BlackChaindata = [
  { value: 'Select a blockchain', label: 'Select a blockchain' },
  { value: 'Ethereum', label: 'Ethereum' },
  { value: 'Polygon', label: 'Polygon' },
]

interface NftRowData {
  imageSrc: string;
  title: string;
  likes: number;
  date: string;
};
export const CraeteNftData: NftRowData[] = [
  {
    imageSrc: '../../../assets/images/nft-images/16.png',
    title: 'Digital Dreamscapes',
    likes: 24,
    date: '24, Sep 2024 - 12:45PM',
  },
  {
    imageSrc: '../../../assets/images/nft-images/17.png',
    title: 'Cosmic Reflections',
    likes: 45,
    date: '15, Aug 2024 - 02:30PM',
  },
  {
    imageSrc: '../../../assets/images/nft-images/18.png',
    title: 'Future Visions',
    likes: 30,
    date: '10, Sep 2024 - 03:15PM',
  },
  {
    imageSrc: '../../../assets/images/nft-images/19.png',
    title: 'Mystical Forest',
    likes: 60,
    date: '05, Oct 2024 - 01:00PM',
  },
  {
    imageSrc: '../../../assets/images/nft-images/17.png',
    title: 'Celestial Horizons',
    likes: 30,
    date: '10, Oct 2024 - 03:15PM',
  },
];