
interface OrderStat {
  title: string;
  iconClass: string;
  cardClass: string;
  badgeClass: string;
  orderCount: number;
}
export const orderStats: OrderStat[] = [
  {
    title: 'All Orders',
    iconClass: 'ri-box-2-fill text-primary',
    cardClass: 'border border-primary border-opacity-10 bg-primary-transparent',
    badgeClass: 'bg-primary',
    orderCount: 45
  },
  {
    title: 'Orders Pending',
    iconClass: 'ri-box-2-fill text-secondary',
    cardClass: 'border border-secondary border-opacity-25 bg-secondary-transparent',
    badgeClass: 'bg-secondary',
    orderCount: 3
  },
  {
    title: 'Cancelled',
    iconClass: 'ri-box-2-fill text-danger',
    cardClass: 'border border-danger border-opacity-10 bg-danger-transparent',
    badgeClass: 'bg-danger',
    orderCount: 15
  },
  {
    title: 'Delivered',
    iconClass: 'ri-box-2-fill text-success',
    cardClass: 'border border-success border-opacity-10 bg-success-transparent',
    badgeClass: 'bg-success',
    orderCount: 23
  }
];

interface OrderData {
  id: number;
  orderId: string;
  productName: string;
  productImage: string;
  customerName: string;
  customerAvatar: string;
  customerPhone: string;
  orderDate: string;
  orderStatus: string;
  paymentMethod: string;
  orderAmount: string;
}
export const Orderdata: OrderData[] = [
  {
    id: 1,
    orderId: '#1154632',
    productName: 'Women\'s Sling Bag',
    productImage: '../../../assets/images/ecommerce/png/1.png',
    customerName: 'Emma Watson',
    customerAvatar: '../../../assets/images/faces/3.jpg',
    customerPhone: '(123) 456-7890',
    orderDate: '10 Feb 2024',
    orderStatus: 'Delivered',
    paymentMethod: 'Credit Card',
    orderAmount: '$120.00',
  },
  {
    id: 2,
    orderId: '#1154634',
    productName: 'Beautiful Candle Set',
    productImage: '../../../assets/images/ecommerce/png/2.png',
    customerName: 'Michael Smith',
    customerAvatar: '../../../assets/images/faces/9.jpg',
    customerPhone: '(321) 654-9876',
    orderDate: '22 Feb 2024',
    orderStatus: 'Processing',
    paymentMethod: 'PayPal',
    orderAmount: '$180.00',
  },
  {
    id: 3,
    orderId: '#1173652',
    productName: 'Printed Designer Top',
    productImage: '../../../assets/images/ecommerce/png/3.png',
    customerName: 'Sophia Johnson',
    customerAvatar: '../../../assets/images/faces/5.jpg',
    customerPhone: '(987) 654-3210',
    orderDate: '5 Mar 2024',
    orderStatus: 'Cancelled',
    paymentMethod: 'Debit Card',
    orderAmount: '$150.00',
  },
  {
    id: 4,
    orderId: '#1185634',
    productName: "Men's Casual Sneakers",
    productImage: "../../../assets/images/ecommerce/png/4.png",
    customerName: 'Chris Evans',
    customerAvatar: "../../../assets/images/faces/6.jpg",
    customerPhone: '(456) 789-0123',
    orderDate: '15 Mar 2024',
    orderStatus: 'Shipped',
    paymentMethod: 'Cash On Delivery',
    orderAmount: '$95.00',
  },
  {
    id: 5,
    orderId: '#1257842',
    productName: 'Flower Pot',
    productImage: "../../../assets/images/ecommerce/png/5.png",
    customerName: 'David Harper',
    customerAvatar: "../../../assets/images/faces/12.jpg",
    customerPhone: '(789) 123-4567',
    orderDate: '22 Apr 2024',
    orderStatus: 'Processing',
    paymentMethod: 'Credit Card',
    orderAmount: '$299.00',
  },
  {
    id: 6,
    orderId: '#1257845',
    productName: 'Decorative Wall Clock',
    productImage: "../../../assets/images/ecommerce/png/7.png",
    customerName: 'Jessica Parker',
    customerAvatar: "../../../assets/images/faces/13.jpg",
    customerPhone: '(567) 234-9876',
    orderDate: '29 Apr 2024',
    orderStatus: 'Delivered',
    paymentMethod: 'PayPal',
    orderAmount: '$899.00',
  },
  {
    id: 7,
    orderId: '#1257847',
    productName: 'Wrist watch',
    productImage: "../../../assets/images/ecommerce/png/6.png",
    customerName: 'Michael Johnson',
    customerAvatar: "../../../assets/images/faces/14.jpg",
    customerPhone: '(987) 456-7891',
    orderDate: '2 May 2024',
    orderStatus: 'Cancelled',
    paymentMethod: 'Debit Card',
    orderAmount: '$179.00',
  },
];