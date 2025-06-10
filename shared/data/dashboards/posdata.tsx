
interface Product {
  id: number;
  title: string;
  imgSrc: string;
  fruitName: string;
  oldPrice: string;
  newPrice: string;
  percent: string;
  available: string;
  availableColor: string;
  badgeShow?: boolean;
  badgeColor?: string;
  bage?: string;
}
export const PosCardItems: Product[] = [
  {
    id: 1,
    title: 'fruits',
    imgSrc: '../../assets/images/pos-system/9.jpg',
    fruitName: 'Strawberry',
    oldPrice: '$15.99',
    newPrice: '$12.99',
    percent: '15% Off',
    available: "Available",
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "danger",
    bage: "15% Off",
  },
  {
    id: 2,
    title: 'vegetables',
    imgSrc: '../../assets/images/pos-system/18.jpg',
    fruitName: 'Fresh Lettuce',
    oldPrice: '$5.99',
    newPrice: '$3.99',
    percent: '',
    available: "Available",
    availableColor: 'success'
  },
  {
    id: 3,
    title: 'beverages',
    imgSrc: '../../assets/images/pos-system/15.jpg',
    fruitName: 'Orange Juice',
    oldPrice: '$3.49',
    newPrice: '$2.49',
    percent: '30% Off',
    available: "Available",
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "info",
    bage: "30% Off",
  },
  {
    id: 4,
    title: 'bakery',
    fruitName: 'Biscuit with Choco Chips',
    imgSrc: '../../assets/images/pos-system/11.jpg',
    oldPrice: "4.99",
    newPrice: "$3.99",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success'
  },
  {
    id: 5,
    title: 'daily-products',
    fruitName: 'Paneer',
    imgSrc: '../../assets/images/pos-system/19.jpg',
    oldPrice: "5.99",
    newPrice: "$4.99",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "pink",
    bage: "30% Off",
  },
  {
    id: 6,
    title: 'bakery',
    fruitName: 'Croissants',
    imgSrc: '../../assets/images/pos-system/10.jpg',
    oldPrice: "6.99",
    newPrice: "$5.99",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "info",
    bage: "30% Off",
  },
  {
    id: 7,
    title: 'beverages',
    fruitName: 'Lime Soda',
    imgSrc: '../../assets/images/pos-system/8.jpg',
    oldPrice: "2.99",
    newPrice: "$1.99",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success'
  },
  {
    id: 8,
    title: 'snacks',
    fruitName: 'Potato Chips',
    imgSrc: '../../assets/images/pos-system/13.jpg',
    oldPrice: "3.49",
    newPrice: "$2.49",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "danger",
    bage: "30% Off",
  },
  {
    id: 9,
    title: 'snacks',
    fruitName: 'Salt Biscuits',
    imgSrc: '../../assets/images/pos-system/12.jpg',
    oldPrice: " 2.99",
    newPrice: "$1.99",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success'
  },
  {
    id: 10,
    title: 'vegetables',
    fruitName: 'Fresh Cabbage',
    imgSrc: '../../assets/images/pos-system/16.jpg',
    oldPrice: "6.50",
    newPrice: "$4.50",
    available: "Available",
    percent: '30% Off',
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "danger",
    bage: "30% Off",
  },
  {
    id: 11,
    title: 'daily-products',
    fruitName: 'Toned Milk',
    imgSrc: '../../assets/images/pos-system/17.jpg',
    oldPrice: "3.99",
    newPrice: "$2.99",
    available: "Available",
    percent: '25% Off',
    availableColor: 'success',
    badgeShow: true,
    badgeColor: "info",
    bage: "25% Off",
  },
  {
    id: 12,
    title: 'fruits',
    fruitName: 'Oranges',
    imgSrc: '../../assets/images/pos-system/14.jpg',
    oldPrice: "10.99",
    newPrice: "$8.99",
    available: "Not Available",
    percent: '30% Off',
    availableColor: 'danger'
  },
];

//Offcanvas Data
interface OffcanvasProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  discountedPrice: number;
  discount: string;
  imageSrc: string;
  imageAlt: string;
  listClass: string;
  discountColor: string;
}
export const OffcanvasProducts: OffcanvasProduct[] = [
  {
    id: 1,
    name: "Strawberry",
    category: "Fruits",
    price: 4.3,
    discountedPrice: 3.99,
    discount: "30% Off",
    imageSrc: "../../assets/images/pos-system/9.jpg",
    imageAlt: "Strawberry",
    listClass: 'list-group-item border-top-0 border-start-0 border-end-0',
    discountColor: 'primary'
  },
  {
    id: 2,
    name: "Lettuce",
    category: "Vegetables",
    price: 3.99,
    discountedPrice: 3.19,
    discount: "20% Off",
    imageSrc: "../../assets/images/pos-system/18.jpg",
    imageAlt: "Lettuce",
    listClass: 'list-group-item border-top-0 border-start-0 border-end-0',
    discountColor: 'info'
  },
  {
    id: 3,
    name: "Croissants",
    category: "Bakery",
    price: 500,
    discountedPrice: 4.25,
    discount: "15% Off",
    imageSrc: "../../assets/images/pos-system/10.jpg",
    imageAlt: "Croissants",
    listClass: 'list-group-item border-top-0 border-start-0 border-end-0',
    discountColor: 'orange'
  },
  {
    id: 4,
    name: "Lime Soda",
    category: "Beverages",
    price: 2.99,
    discountedPrice: 2.69,
    discount: "10% Off",
    imageSrc: "../../assets/images/pos-system/8.jpg",
    imageAlt: "Lime Soda",
    listClass: 'list-group-item border-top-0 border-start-0 border-end-0',
    discountColor: 'secondary'
  },
  {
    id: 5,
    name: "Potato Chips",
    category: "Snacks",
    price: 1.99,
    discountedPrice: 1.89,
    discount: "5% Off",
    imageSrc: "../../assets/images/pos-system/13.jpg",
    imageAlt: "Potato Chips",
    listClass: 'list-group-item border-0',
    discountColor: 'pink'
  },
];