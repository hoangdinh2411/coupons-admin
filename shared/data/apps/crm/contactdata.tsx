interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  campaign: string;
  priority: string;
  lastContacted: string;
  avatar: string;
  companyLogo: string;
}
export const Contactsdata: Contact[] = [
  {
    id: '1',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(321) 654-0987',
    company: 'Global Solutions',
    campaign: 'Marketing Campaign',
    priority: 'Medium Priority',
    lastContacted: 'Sep, 18 2024 - 09:45 AM',
    avatar: '../../../assets/images/faces/5.jpg',
    companyLogo: '../../../assets/images/company-logos/3.png',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(987) 654-3210',
    company: 'Tech Innovators',
    campaign: 'Product Launch',
    priority: 'High Priority',
    lastContacted: 'Oct, 12 2024 - 02:30 PM',
    avatar: '../../../assets/images/faces/6.jpg',
    companyLogo: '../../../assets/images/company-logos/2.png',
  },
  {
    id: '3',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '(555) 123-4567',
    company: 'Creative Ventures',
    campaign: 'Client Retention Program',
    priority: 'Low Priority',
    lastContacted: 'Aug, 25 2024 - 11:15 AM',
    avatar: '../../../assets/images/faces/7.jpg',
    companyLogo: '../../../assets/images/company-logos/4.png',
  },
  {
    id: '4',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '(444) 987-6543',
    company: 'NextTech Innovations',
    campaign: 'New Website Development',
    priority: 'High Priority',
    lastContacted: 'Oct, 05 2024 - 03:20 PM',
    avatar: '../../../assets/images/faces/8.jpg',
    companyLogo: '../../../assets/images/company-logos/5.png',
  },
  {
    id: '5',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    phone: '(222) 333-4444',
    company: 'Future Enterprises',
    campaign: 'Social Media Strategy',
    priority: 'Medium Priority',
    lastContacted: 'Sep, 30 2024 - 10:00 AM',
    avatar: '../../../assets/images/faces/9.jpg',
    companyLogo: '../../../assets/images/company-logos/1.png',
  },
  {
    id: '6',
    name: 'David Lee',
    email: 'david.lee@example.com',
    phone: '(555) 555-1212',
    company: 'Green Tech Solutions',
    campaign: 'Annual Revenue Review',
    priority: 'Critical Priority',
    lastContacted: 'Nov, 01 2024 - 01:45 PM',
    avatar: '../../../assets/images/faces/10.jpg',
    companyLogo: '../../../assets/images/company-logos/6.png',
  },
  {
    id: '7',
    name: 'Linda Taylor',
    email: 'linda.taylor@example.com',
    phone: '(333) 222-1111',
    company: 'Health Solutions Inc.',
    campaign: 'Annual Revenue Review',
    priority: 'Medium Priority',
    lastContacted: 'Dec, 15 2024 - 09:00 AM',
    avatar: '../../../assets/images/faces/11.jpg',
    companyLogo: '../../../assets/images/company-logos/7.png',
  },
  {
    id: '8',
    name: 'James Miller',
    email: 'james.miller@example.com',
    phone: '(888) 555-0199',
    company: 'Innovative Designs',
    campaign: 'Brand Revitalization Project',
    priority: 'High Priority',
    lastContacted: 'Jan, 10 2025 - 02:30 PM',
    avatar: '../../../assets/images/faces/12.jpg',
    companyLogo: '../../../assets/images/company-logos/8.png',
  },
  {
    id: '9',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '(777) 123-4567',
    company: 'Creative Agency',
    campaign: 'Customer Feedback Initiative',
    priority: 'Critical Priority',
    lastContacted: 'Feb, 20 2025 - 11:15 AM',
    avatar: '../../../assets/images/faces/13.jpg',
    companyLogo: '../../../assets/images/company-logos/9.png',
  },
  {
    id: '10',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '(444) 888-0000',
    company: 'NextGen Technologies',
    campaign: 'Partnership Collaboration',
    priority: 'Medium Priority',
    lastContacted: 'Mar, 05 2025 - 03:45 PM',
    avatar: '../../../assets/images/faces/14.jpg',
    companyLogo: '../../../assets/images/company-logos/10.png',
  },
];

interface loppdata {
  value: string;
  label: string;
}
export const Data: loppdata[] = [
  { value: 'Select Tag', label: 'Select Tag' },
  { value: 'New Lead', label: 'New Lead' },
  { value: 'Prospect', label: 'Prospect' },
  { value: 'Customer', label: 'Customer' },
  { value: 'Hot Lead', label: 'Hot Lead' },
  { value: 'Partner', label: 'Partner' },
  { value: 'LostCustomer', label: 'LostCustomer' },
  { value: 'Influencer', label: 'Influencer' },
  { value: 'Subscriber', label: 'Subscriber' }
];

export const Data1: loppdata[] = [
  { value: 'Social Media', label: 'Social Media' },
  { value: 'Direct mail', label: 'Direct mail' },
  { value: 'Blog Articles', label: 'Blog Articles' },
  { value: 'Affiliates', label: 'Affiliates' },
  { value: 'Organic search', label: 'Organic search' }
];