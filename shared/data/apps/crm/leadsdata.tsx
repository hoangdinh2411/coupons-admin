interface Lead {
    id: number;
    avatar: string;
    name: string;
    status: string;
    companyLogo: string;
    companyName: string;
    email: string;
    phone: string;
    tags: string[];
    priority: number;
    assignedTo: string;
    assignedAvatar: string;
    date: string;
    color: string[]
}
export const LeadsCards: Lead[] = [
    {
        id: 1,
        avatar: '../../../assets/images/faces/1.jpg',
        name: 'Isabella White',
        status: 'New Lead',
        companyLogo: '../../../assets/images/company-logos/1.png',
        companyName: 'Dynamic Solutions',
        email: 'isabella.white@dynamicsolutions.com',
        phone: '6789-01234-567',
        tags: ['Qualified', 'New Lead'],
        color: ['success', 'primary'],
        priority: 249,
        assignedTo: 'Liam Anderson',
        assignedAvatar: '../../../assets/images/faces/11.jpg',
        date: '2024-09-15',
    },
    {
        id: 2,
        avatar: '../../../assets/images/faces/11.jpg',
        name: 'Oliver Martinez',
        status: 'Contacted',
        companyLogo: '../../../assets/images/company-logos/9.png',
        companyName: 'Green Innovations',
        email: 'oliver.martinez@greeninnovations.com',
        phone: '4567-89012-345',
        tags: ['Follow Up', 'Hot Lead'],
        color: ['warning', 'danger'],
        priority: 321,
        assignedTo: 'Emily Davis',
        assignedAvatar: '../../../assets/images/faces/5.jpg',
        date: '2024-09-10',
    },
    {
        id: 3,
        avatar: '../../../assets/images/faces/16.jpg',
        name: 'Liam Taylor',
        status: 'In Progress',
        companyLogo: '../../../assets/images/company-logos/8.png',
        companyName: 'Tech Solutions',
        email: 'liam.taylor@techsolutions.com',
        phone: '1234-56789-012',
        tags: ['Pending Follow Up', 'Qualified'],
        color: ['warning', 'success'],
        priority: 451,
        assignedTo: 'Emma Johnson',
        assignedAvatar: '../../../assets/images/faces/6.jpg',
        date: '2024-07-25',
    },
    {
        id: 4,
        avatar: '../../../assets/images/faces/14.jpg',
        name: 'Sophia Wilson',
        status: 'New Lead',
        companyLogo: '../../../assets/images/company-logos/7.png',
        companyName: 'Innovatech',
        email: 'sophia.wilson@innovatech.com',
        phone: '7890-12345-678',
        tags: ['Hot Lead', 'Follow Up'],
        color: ['primary', 'warning'],
        priority: 712,
        assignedTo: 'Michael Brown',
        assignedAvatar: '../../../assets/images/faces/15.jpg',
        date: '2024-08-12',
    },
    {
        id: 5,
        name: 'Ethan Brown',
        status: 'Contacted',
        companyName: 'Gamma Solutions',
        email: 'ethan.brown@gammasolutions.com',
        phone: '6789-01234-567',
        tags: ['Pending Review', 'Hot Lead'],
        color: ['warning', 'success'],
        priority: 532,
        assignedTo: 'Olivia Green',
        assignedAvatar: '../../../assets/images/faces/13.jpg',
        date: '2024-09-20',
        avatar: '../../../assets/images/faces/12.jpg',
        companyLogo: '../../../assets/images/company-logos/6.png',
    },
    {
        id: 6,
        name: 'Ava Martinez',
        status: 'New Inquiry',
        companyName: 'Delta Corp',
        email: 'ava.martinez@deltacorp.com',
        phone: '4567-89012-345',
        tags: ['Qualified', 'Follow Up'],
        color: ['primary', 'success'],
        priority: 903,
        assignedTo: 'Liam Johnson',
        assignedAvatar: '../../../assets/images/faces/11.jpg',
        date: '2024-09-05',
        avatar: '../../../assets/images/faces/10.jpg',
        companyLogo: '../../../assets/images/company-logos/5.png',
    },
    {
        id: 7,
        name: 'Daniel Kim',
        status: 'Contacted',
        companyName: 'Gamma Enterprises',
        email: 'daniel.kim@gammaenterprises.com',
        phone: '2345-67890-123',
        tags: ['Potential', 'Follow Up'],
        color: ['primary', 'success'],
        priority: 478,
        assignedTo: 'Olivia Brown',
        assignedAvatar: '../../../assets/images/faces/9.jpg',
        date: '2024-07-18',
        avatar: '../../../assets/images/faces/8.jpg',
        companyLogo: '../../../assets/images/company-logos/4.png',
    },
    {
        id: 8,
        name: 'Lucas Martinez',
        status: 'Follow Up',
        companyName: 'Alpha Innovations',
        email: 'lucas.m@alphainnovations.com',
        phone: '1234-56789-101',
        tags: ['Prospect', 'Important'],
        color: ['primary', 'success'],
        priority: 685,
        assignedTo: 'Emily Johnson',
        assignedAvatar: '../../../assets/images/faces/3.jpg',
        date: '2024-09-10',
        avatar: '../../../assets/images/faces/5.jpg',
        companyLogo: '../../../assets/images/company-logos/2.png',
    },
    {
        id: 9,
        name: 'Sophia Chen',
        status: 'Interested',
        companyName: 'Beta Solutions',
        email: 'sophia.chen@betasolutions.com',
        phone: '9876-54321-012',
        tags: ['Review Needed', 'VIP'],
        color: ['warning', 'success'],
        priority: 722,
        assignedTo: 'Mark Davis',
        assignedAvatar: '../../../assets/images/faces/7.jpg',
        date: '2024-08-25',
        avatar: '../../../assets/images/faces/6.jpg',
        companyLogo: '../../../assets/images/company-logos/3.png',
    },
];

interface Selecttype {
    value: string;
    label: string;
}
export const Data: Selecttype[] = [
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

export const Data1: Selecttype[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];

interface data2 {
    value: string;
    label: string;
}
export const Data2: data2[] = [
    { value: 'Select Status', label: 'Select Status' },
    { value: 'New', label: 'New' },
    { value: 'Follow-up', label: 'Follow-up' },
    { value: 'Closed', label: 'Closed' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Disqualified', label: 'Disqualified' },
    { value: 'Qualified', label: 'Qualified' }
];
