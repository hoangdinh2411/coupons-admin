
interface InvoiceData {
  bgColor: string;
  icon: string;
  value: string;
  total: string;
  price: string;
  inc: string;
  percent: string;
  percentIcon: string;
  iconColor: string;
}
export const InvoiceCards: InvoiceData[] = [
  {
    bgColor: 'primary',
    icon: 'file-invoice',
    value: "$5,385k",
    total: 'Total Amount',
    price: "18,654",
    inc: ' Increased By ',
    percent: '2.13%',
    percentIcon: 'up',
    iconColor: 'success'
  },
  {
    bgColor: 'secondary',
    icon: 'file-dollar',
    value: "$745k",
    total: 'Total Paid',
    price: "8,145",
    inc: ' Decreased By ',
    percent: '2.13%',
    percentIcon: 'down',
    iconColor: 'danger'
  },
  {
    bgColor: 'success',
    icon: 'file-alert',
    value: "634",
    total: 'Total Pending Invoices',
    price: "7,578",
    inc: ' Decreased By ',
    percent: '2.13%',
    percentIcon: 'down',
    iconColor: 'danger'
  },
  {
    bgColor: 'info',
    icon: 'clock-cancel',
    value: "878",
    total: 'Overdue Invoices',
    price: "6,547",
    inc: ' Decreased By ',
    percent: '2.13%',
    percentIcon: 'down',
    iconColor: 'danger'
  },
];

interface InvoiceData1 {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: string;
  status: string;
  dueDate: string;
  avatarSrc: string;
}
export const InvoiceData: InvoiceData1[] = [
  {
    id: '#INV20258903',
    name: 'Neha Gupta',
    email: 'nehagupta101@gmail.com',
    date: '20 Jun 2024',
    amount: '$1,050.40',
    status: 'Paid',
    dueDate: '30 Jun 2024',
    avatarSrc: '../../../assets/images/faces/10.jpg',
  },
  {
    id: '#INV20241323',
    name: 'Henry Milo',
    email: 'henrymilo2416@gmail.com',
    date: '13 Mar 2024',
    amount: '$898.12',
    status: 'Paid',
    dueDate: '25 May 2024',
    avatarSrc: '../../../assets/images/faces/11.jpg',
  },
  {
    id: '#INV20251234',
    name: 'Rohit Sharma',
    email: 'rohitsharma0012@gmail.com',
    date: '05 Jun 2024',
    amount: '$540.75',
    status: 'Overdue',
    dueDate: '20 Jun 2024',
    avatarSrc: '../../../assets/images/faces/8.jpg',
  },
  {
    id: '#INV20257654',
    name: 'Rajesh Patel',
    email: 'rajeshpatel523@gmail.com',
    date: '10 Jul 2024',
    amount: '$3,600.89',
    status: 'Overdue',
    dueDate: '25 Jul 2024',
    avatarSrc: '../../../assets/images/faces/13.jpg',
  },
  {
    id: '#INV20251789',
    name: 'Anjali Mehra',
    email: 'anjalimehra9901@gmail.com',
    date: '12 May 2024',
    amount: '$860.30',
    status: 'Paid',
    dueDate: '25 May 2024',
    avatarSrc: '../../../assets/images/faces/9.jpg',
  },
  {
    id: '#INV20252345',
    name: 'Vikram Desai',
    email: 'vikram.desai1024@gmail.com',
    date: '30 Jun 2024',
    amount: '$1,200.50',
    status: 'Pending',
    dueDate: '15 Jul 2024',
    avatarSrc: '../../../assets/images/faces/12.jpg',
  },
  {
    id: '#INV20244578',
    name: 'Priya Riva',
    email: 'priyariva3214@gmail.com',
    date: '26 Apr 2024',
    amount: '$235.52',
    status: 'Pending',
    dueDate: '13 May 2024',
    avatarSrc: '../../../assets/images/faces/7.jpg',
  },
];