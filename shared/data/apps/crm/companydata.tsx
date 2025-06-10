interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  size: string;
  industry: string;
  contactPerson: string;
  contactPersonAvatar: string;
  employees: number;
  logo: string;
}
export const CompaniesData: Company[] = [
  {
    id: '1',
    name: 'Beta Innovations',
    email: 'beta.innovations@example.com',
    phone: '2345-678-901',
    size: '50-200',
    industry: 'Marketing',
    contactPerson: 'Sarah',
    contactPersonAvatar: '../../../assets/images/faces/6.jpg',
    employees: 200,
    logo: '../../../assets/images/company-logos/3.png',
  },
  {
    id: '2',
    name: 'Gamma Tech',
    email: 'gamma.tech@example.com',
    phone: '3456-789-012',
    size: '200-500',
    industry: 'Information Technology',
    contactPerson: 'John',
    contactPersonAvatar: '../../../assets/images/faces/7.jpg',
    employees: 150,
    logo: '../../../assets/images/company-logos/4.png',
  },
  {
    id: '3',
    name: 'Delta Dynamics',
    email: 'delta.dynamics@example.com',
    phone: '4567-890-123',
    size: '10-50',
    industry: 'Consulting',
    contactPerson: 'Emily',
    contactPersonAvatar: '../../../assets/images/faces/8.jpg',
    employees: 75,
    logo: '../../../assets/images/company-logos/5.png',
  },
  {
    id: '4',
    name: 'Beta Innovations',
    email: 'contact@betainnovations.com',
    phone: '9876-543-210',
    size: 'Startup',
    industry: 'Biotechnology',
    contactPerson: 'Sophia',
    contactPersonAvatar: '../../../assets/images/faces/6.jpg',
    employees: 420,
    logo: '../../../assets/images/company-logos/3.png',
  },
  {
    id: '5',
    name: 'Gamma Solutions',
    email: 'info@gammasolutions.com',
    phone: '555-123-4567',
    size: 'Enterprise',
    industry: 'Consulting Services',
    contactPerson: 'Oliver',
    contactPersonAvatar: '../../../assets/images/faces/7.jpg',
    employees: 390,
    logo: '../../../assets/images/company-logos/4.png',
  },
  {
    id: '6',
    name: 'Delta Tech Solutions',
    email: 'contact@deltatech.com',
    phone: '678-987-6543',
    size: 'Startup',
    industry: 'Technology Solutions',
    contactPerson: 'Sophie',
    contactPersonAvatar: '../../../assets/images/faces/8.jpg',
    employees: 280,
    logo: '../../../assets/images/company-logos/5.png',
  },
  {
    id: '7',
    name: 'Epsilon Innovations',
    email: 'info@epsiloninnovations.com',
    phone: '111-222-3333',
    size: 'Startup',
    industry: 'Innovation Services',
    contactPerson: 'Emma',
    contactPersonAvatar: '../../../assets/images/faces/9.jpg',
    employees: 320,
    logo: '../../../assets/images/company-logos/6.png',
  },
  {
    id: '8',
    name: 'Theta Systems',
    email: 'info@thetasystems.com',
    phone: '456-789-0123',
    size: 'Enterprise',
    industry: 'Software Solutions',
    contactPerson: 'Liam',
    contactPersonAvatar: '../../../assets/images/faces/10.jpg',
    employees: 410,
    logo: '../../../assets/images/company-logos/8.png',
  },
  {
    id: '9',
    name: 'Iota Innovations',
    email: 'contact@iotainnovations.com',
    phone: '333-444-5555',
    size: 'Startup',
    industry: 'Digital Marketing',
    contactPerson: 'Ava',
    contactPersonAvatar: '../../../assets/images/faces/11.jpg',
    employees: 290,
    logo: '../../../assets/images/company-logos/9.png',
  },
  {
    id: '10',
    logo: '../../../assets/images/company-logos/4.png',
    name: 'Alpha Solutions',
    email: 'info@alphasolutions.com',
    phone: '1234-567-890',
    size: 'Enterprise',
    industry: 'Technology Services',
    contactPerson: 'John',
    contactPersonAvatar: '../../../assets/images/faces/7.jpg',
    employees: 570,
  },
  {
    id: '11',
    logo: '../../../assets/images/company-logos/5.png',
    name: 'Gamma Industries',
    email: 'contact@gammatech.com',
    phone: '8765-432-109',
    size: 'Startup',
    industry: 'Engineering',
    contactPerson: 'Emily',
    contactPersonAvatar: '../../../assets/images/faces/9.jpg',
    employees: 320,
  },
];

interface selectdata1 {
  value: string;
  label: string;
}
export const Selectdata1: selectdata1[] = [
  { value: 'Company Size', label: 'Company Size' },
  { value: 'Corporate', label: 'Corporate' },
  { value: 'Small Business', label: 'Small Business' },
  { value: 'Micro Business', label: 'Micro Business' },
  { value: 'Startup', label: 'Startup' },
  { value: 'Large Enterprise', label: 'Large Enterprise' },
  { value: 'Medium Size', label: 'Medium Size' },
];

interface selectdata2 {
  value: string;
  label: string;
}
export const Selectdata2: selectdata2[] = [
  { value: 'Select Insustry', label: 'Select Insustry' },
  { value: 'Information Technology', label: 'Information Technology' },
  { value: 'Telecommunications', label: 'Telecommunications' },
  { value: 'Logistics', label: 'Logistics' },
  { value: 'Professional Services', label: 'Professional Services' },
  { value: 'Education', label: 'Education' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Healthcare', label: 'Healthcare' }
];