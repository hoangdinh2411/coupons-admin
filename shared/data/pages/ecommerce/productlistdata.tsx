
interface Product {
  id: number;
  title: string;
  image: string;
  brand: string;
  price: string;
  quantity: number;
  status: string;
  category: string;
  sellerName: string;
  sellerAvatar: string;
  addedDate: string;
}
export const ProductsList: Product[] = [
  {
    id: 1,
    title: "Women's Sling Bag",
    image: "../../../assets/images/ecommerce/png/1.png",
    brand: 'SoundWave',
    price: '$1,299',
    quantity: 283,
    status: 'Published',
    category: 'Accessories',
    sellerName: 'Mayor Kelly',
    sellerAvatar: "../../../assets/images/faces/4.jpg",
    addedDate: '24, Nov 2023 - 04:42PM',
  },
  {
    id: 2,
    title: 'Wall Clock',
    image: "../../../assets/images/ecommerce/png/7.png",
    brand: 'SoundWave',
    price: '$1,299',
    quantity: 283,
    status: 'Published',
    category: 'Electronics',
    sellerName: 'Mayor Kelly',
    sellerAvatar: "../../../assets/images/faces/4.jpg",
    addedDate: '24, Nov 2023 - 04:42PM',
  },
  {
    id: 3,
    title: 'Beautiful Candle Set',
    image: "../../../assets/images/ecommerce/png/2.png",
    brand: 'TimeMaster',
    price: '$899',
    quantity: 150,
    status: 'Published',
    category: 'Wearables',
    sellerName: 'Sarah Connor',
    sellerAvatar: "../../../assets/images/faces/5.jpg",
    addedDate: '22, Nov 2023 - 02:15PM',
  },
  {
    id: 4,
    title: 'Printed Designer Top',
    image: "../../../assets/images/ecommerce/png/3.png",
    brand: 'GamerPro',
    price: '$2,499',
    quantity: 75,
    status: 'Published',
    category: 'Laptops',
    sellerName: 'John Doe',
    sellerAvatar: "../../../assets/images/faces/6.jpg",
    addedDate: '20, Nov 2023 - 11:30AM',
  },
  {
    id: 5,
    title: "Men's Casual Sneakers",
    image: "../../../assets/images/ecommerce/png/4.png",
    brand: 'SoundWave',
    price: '$299',
    quantity: 420,
    status: 'Published',
    category: 'Audio',
    sellerName: 'Alice Johnson',
    sellerAvatar: "../../../assets/images/faces/7.jpg",
    addedDate: '18, Nov 2023 - 01:05PM',
  },
  {
    id: 6,
    title: 'Flower Pot',
    image: "../../../assets/images/ecommerce/png/5.png",
    brand: 'TechPro',
    price: '$999',
    quantity: 520,
    status: 'Published',
    category: 'Mobile',
    sellerName: 'Tom Harris',
    sellerAvatar: "../../../assets/images/faces/8.jpg",
    addedDate: '15, Nov 2023 - 09:45AM',
  },
  {
    id: 7,
    title: 'Electric Kettle',
    image: "../../../assets/images/ecommerce/png/8.png",
    brand: 'AquaBoil',
    price: '$79.99',
    quantity: 158,
    status: 'Published',
    category: 'Kitchen Appliances',
    sellerName: 'Manager John',
    sellerAvatar: "../../../assets/images/faces/4.jpg",
    addedDate: '03, Dec 2024 - 11:15AM',
  },
  {
    id: 8,
    title: 'Luxury Sofa Chair',
    image: "../../../assets/images/ecommerce/png/34.png",
    brand: 'ComfortHome',
    price: '$499.99',
    quantity: 142,
    status: 'Published',
    category: 'Furniture',
    sellerName: 'Manager Lisa',
    sellerAvatar: "../../../assets/images/faces/4.jpg",
    addedDate: '02, Dec 2024 - 02:20PM',
  },
];