interface ListType {
  value: string;
  label: string;
}
export const Listviewassigneddata: ListType[] = [
  { value: 'Angelina May', label: 'Angelina May' },
  { value: 'Kiara advain', label: 'Kiara advain' },
  { value: 'Hercules Jhon', label: 'Hercules Jhon' },
  { value: 'Mayor Kim', label: 'Mayor Kim' },
]

export const Prioritydata: ListType[] = [
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' }
]

export const Statusdata: ListType[] = [
  { value: 'New', label: 'New' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Inprogress', label: 'Inprogress' },
  { value: 'Pending', label: 'Pending' }
]

export const ListViewCards = [
  {
    id: 1,
    title: 'New Tasks',
    count: '62,335',
    icon: 'ti-news',
    iconClass: 'bg-primary',
    bgClass: 'bg-primary-transparent',
  },
  {
    id: 2,
    title: 'Completed Tasks',
    count: '15.6k',
    icon: 'ti-circle-check',
    iconClass: 'bg-secondary',
    bgClass: 'bg-secondary-transparent',
  },
  {
    id: 3,
    title: 'Pending Tasks',
    count: '3,487',
    icon: 'ti-pennant-2',
    iconClass: 'bg-success',
    bgClass: 'bg-success-transparent',
  },
  {
    id: 4,
    title: 'Inprogress Tasks',
    count: '5,456',
    icon: 'ti-brightness',
    iconClass: 'bg-info',
    bgClass: 'bg-info-transparent',
  }
];


interface Task {
  id: string;
  title: string;
  status: string;
  dueDate: string;
  assignedDate: string;
  progress: { success: number; warning: number; danger: number };
  priority: { level: string; badgeClass: string, color:string };
  avatars: string[];
  extraAvatars: number;
  cradClass:string;
}

export const ListviewData: Task[] = [
  {
    id: '001',
    title: 'Design Prototype',
    status: 'On Hold',
    dueDate: '25-09-2024',
    assignedDate: '12-09-2024',
    progress: { success: 70, warning: 20, danger: 10 },
    priority: { level: 'Low', badgeClass: 'bg-success', color:'bg-warning' },
    avatars: ['../../../assets/images/faces/2.jpg', '../../../assets/images/faces/8.jpg'],
    extraAvatars: 2,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '002',
    title: 'Revise User Interface',
    status: 'In Progress',
    dueDate: '30-09-2024',
    assignedDate: '15-09-2024',
    progress: { success: 45, warning: 30, danger: 25 },
    priority: { level: 'Medium', badgeClass: 'bg-warning', color:'bg-info' },
    avatars: ['../../../assets/images/faces/5.jpg', '../../../assets/images/faces/3.jpg', '../../../assets/images/faces/7.jpg'],
    extraAvatars: 2,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '003',
    title: 'Prototype Development',
    status: 'On Hold',
    dueDate: '25-09-2024',
    assignedDate: '12-09-2024',
    progress: { success: 70, warning: 20, danger: 10 },
    priority: { level: 'Low', badgeClass: 'bg-success', color:'bg-warning' },
    avatars: ['../../../assets/images/faces/2.jpg', '../../../assets/images/faces/8.jpg'],
    extraAvatars: 2,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '004',
    title: 'Design User Interface',
    status: 'Completed',
    dueDate: '15-10-2024',
    assignedDate: '01-09-2024',
    progress: { success: 100, warning: 0, danger: 0 },
    priority: { level: 'High', badgeClass: 'bg-danger', color:'bg-success' },
    avatars: ['../../../assets/images/faces/4.jpg', '../../../assets/images/faces/7.jpg'],
    extraAvatars: 1,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '005',
    title: 'CodebaseView Process',
    status: 'Active',
    dueDate: '30-09-2024',
    assignedDate: '20-08-2024',
    progress: { success: 40, warning: 50, danger: 10 },
    priority: { level: 'Medium', badgeClass: 'bg-warning', color:'bg-success' },
    avatars: ['../../../assets/images/faces/5.jpg', '../../../assets/images/faces/9.jpg', '../../../assets/images/faces/3.jpg'],
    extraAvatars: 3,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '006',
    title: 'Conduct User Testing',
    status: 'Delayed',
    dueDate: '05-11-2024',
    assignedDate: '20-09-2024',
    progress: { success: 30, warning: 50, danger: 20 },
    priority: { level: 'Medium', badgeClass: 'bg-info', color:'bg-danger' },
    avatars: ['/assets/images/faces/6.jpg', '/assets/images/faces/3.jpg', '/assets/images/faces/7.jpg'],
    extraAvatars: 1,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '007',
    title: 'API Implementation',
    status: 'In Review',
    dueDate: '10-10-2024',
    assignedDate: '05-08-2024',
    progress: { success: 50, warning: 40, danger: 10 },
    priority: { level: 'Low', badgeClass: 'bg-secondary', color:'bg-primary' },
    avatars: ['/assets/images/faces/1.jpg', '/assets/images/faces/5.jpg', '/assets/images/faces/9.jpg'],
    extraAvatars: 2,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '008',
    title: 'Finalize Project Report',
    status: 'Completed',
    dueDate: '15-10-2024',
    assignedDate: '01-09-2024',
    progress: { success: 100, warning: 0, danger: 0 },
    priority: { level: 'High', badgeClass: 'bg-danger', color:'bg-success' },
    avatars: ['/assets/images/faces/4.jpg', '/assets/images/faces/7.jpg', '/assets/images/faces/10.jpg'],
    extraAvatars: 1,
    cradClass:'gap-4 gap-xl-2 mb-3'
  },
  {
    id: '009',
    title: 'Design User Interface',
    status: 'In Progress',
    dueDate: '30-09-2024',
    assignedDate: '15-08-2024',
    progress: { success: 45, warning: 35, danger: 20 },
    priority: { level: 'Medium', badgeClass: 'bg-warning', color:'bg-info' },
    avatars: ['/assets/images/faces/3.jpg', '/assets/images/faces/8.jpg', '/assets/images/faces/5.jpg'],
    extraAvatars: 2,
    cradClass:'gap-2'
  },
];