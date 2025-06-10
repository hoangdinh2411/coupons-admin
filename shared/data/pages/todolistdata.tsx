interface Task {
  id: number;
  title: string;
  priority: string;
  assignee: string;
  status: string;
  assigneesAvatars: string[];
  imgSrc: string;
  dueDate: string;
  progress: number;
}
export const Tasks: Task[] = [
  {
    id: 1,
    title: 'Design Mockups',
    priority: 'Medium',
    assignee: 'Maria',
    status: 'On Hold',
    assigneesAvatars: ['../../assets/images/faces/13.jpg', '../../assets/images/faces/4.jpg'],
    imgSrc: '../../assets/images/faces/8.jpg',
    dueDate: '25-Feb-2024',
    progress: 50,
  },
  {
    id: 2,
    title: 'Marketing Campaign Review',
    priority: 'Urgent',
    assignee: 'David Kim',
    status: 'Pending',
    assigneesAvatars: ['../../assets/images/faces/6.jpg'],
    imgSrc: '../../assets/images/faces/9.jpg',
    dueDate: '01-Mar-2024',
    progress: 15,
  },
  {
    id: 3,
    title: 'Website Redesign',
    priority: 'Low',
    assignee: 'Lucy Chang',
    status: 'Completed',
    assigneesAvatars: ['../../assets/images/faces/8.jpg', '../../assets/images/faces/5.jpg'],
    imgSrc: '../../assets/images/faces/10.jpg',
    dueDate: '22-Jan-2024',
    progress: 100,
  },
  {
    id: 4,
    title: 'Client Meeting Preparation',
    priority: 'High',
    assignee: 'Marcus Riley',
    status: 'Pending',
    assigneesAvatars: ['../../assets/images/faces/13.jpg', '../../assets/images/faces/12.jpg'],
    imgSrc: '../../assets/images/faces/3.jpg',
    dueDate: '05-Feb-2024',
    progress: 45,
  },
  {
    id: 5,
    title: 'SEO Optimization',
    priority: 'Low',
    assignee: 'Emily Wang',
    status: 'Completed',
    dueDate: '10-Mar-2024',
    progress: 100,
    assigneesAvatars: ['../../assets/images/faces/15.jpg'],
    imgSrc: '../../assets/images/faces/14.jpg',
  },
  {
    id: 6,
    title: 'Quarterly Budget Review',
    priority: 'High',
    assignee: 'James',
    status: 'Pending',
    dueDate: '18-Mar-2024',
    progress: 20,
    assigneesAvatars: ['../../assets/images/faces/16.jpg', '../../assets/images/faces/11.jpg'],
    imgSrc: '../../assets/images/faces/8.jpg',
  },
  {
    id: 7,
    title: 'Mobile App Launch',
    priority: 'Medium',
    assignee: 'Sophia Kim',
    status: 'On Hold',
    dueDate: '30-Mar-2024',
    progress: 60,
    assigneesAvatars: ['../../assets/images/faces/10.jpg', '../../assets/images/faces/11.jpg'],
    imgSrc: '../../assets/images/faces/1.jpg',
  },
  {
    id: 8,
    title: 'Team Building Activity',
    priority: 'Low',
    assignee: 'Lucas Roy',
    status: 'Upcoming',
    dueDate: '10-Apr-2024',
    progress: 0,
    assigneesAvatars: ['../../assets/images/faces/13.jpg', '../../assets/images/faces/14.jpg', '../../assets/images/faces/5.jpg'],
    imgSrc: '../../assets/images/faces/12.jpg',
  },
  {
    id: 9,
    title: 'Market Research',
    priority: 'High',
    assignee: 'Oliver Smith',
    status: 'In Progress',
    dueDate: '15-Apr-2024',
    progress: 75,
    assigneesAvatars: ['../../assets/images/faces/7.jpg', '../../assets/images/faces/8.jpg'],
    imgSrc: '../../assets/images/faces/6.jpg',
  },
  {
    id: 10,
    title: 'Website Redesign',
    priority: 'Medium',
    assignee: 'Ava Lee',
    status: 'Pending',
    dueDate: '20-Apr-2024',
    progress: 5,
    assigneesAvatars: ['../../assets/images/faces/10.jpg', '../../assets/images/faces/11.jpg', '../../assets/images/faces/12.jpg'],
    imgSrc: '../../assets/images/faces/9.jpg',
  }
];

interface InProgress {
  id: number;
  title: string;
  priority: string;
  status: 'In Progress' | 'Completed' | 'Pending';
  assignedTo: string;
  deadline: string;
  progress: number;
  avatars: string[];
  ProgressBg?:string;
}
export const InProgress: InProgress[] = [
  {
    id: 1,
    title: 'Team Building Activity',
    priority: 'Low',
    status: 'In Progress',
    assignedTo: 'Lucas Roy',
    deadline: '10-Apr-2024',
    progress: 0,
    avatars: ['../../assets/images/faces/12.jpg', '../../assets/images/faces/13.jpg', '../../assets/images/faces/14.jpg'],
  },
  {
    id: 2,
    title: 'Market Research',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 'Oliver Smith',
    deadline: '15-Apr-2024',
    progress: 75,
    ProgressBg:'warning',
    avatars: ['../../assets/images/faces/6.jpg', '../../assets/images/faces/7.jpg', '../../assets/images/faces/8.jpg'],
  },
  {
    id: 3,
    title: 'Website Redesign',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'Ava Lee',
    deadline: '20-Apr-2024',
    progress: 5,
    ProgressBg:'danger',
    avatars: ['../../assets/images/faces/9.jpg', '../../assets/images/faces/10.jpg', '../../assets/images/faces/11.jpg'],
  },
  {
    id: 4,
    title: 'Website Redesign',
    priority: 'Low',
    status: 'In Progress',
    assignedTo: 'Lucy Chang',
    deadline: '22-Jan-2024',
    progress: 100,
    ProgressBg:'primary',
    avatars: ['../../assets/images/faces/10.jpg', '../../assets/images/faces/8.jpg', '../../assets/images/faces/5.jpg'],
  },
  {
    id: 5,
    title: 'Client Meeting Preparation',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 'Marcus Riley',
    deadline: '05-Feb-2024',
    progress: 45,
    ProgressBg:'warning',
    avatars: ['../../assets/images/faces/3.jpg', '../../assets/images/faces/13.jpg', '../../assets/images/faces/12.jpg'],
  },
  {
    id: 6,
    title: 'Design Mockups',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'Maria',
    deadline: '25-Feb-2024',
    progress: 50,
    ProgressBg:'warning',
    avatars: ['../../assets/images/faces/8.jpg', '../../assets/images/faces/13.jpg', '../../assets/images/faces/4.jpg'],
  },
  {
    id: 7,
    title: 'Marketing Campaign Review',
    priority: 'Urgent',
    status: 'In Progress',
    assignedTo: 'David Kim',
    deadline: '01-Mar-2024',
    progress: 15,
    ProgressBg:'danger',
    avatars: ['../../assets/images/faces/6.jpg', '../../assets/images/faces/9.jpg'],
  },
  {
    id: 8,
    title: 'SEO Optimization',
    priority: 'Low',
    status: 'In Progress',
    assignedTo: 'Emily Wang',
    deadline: '10-Mar-2024',
    progress: 100,
    ProgressBg:'success',
    avatars: ['../../assets/images/faces/14.jpg', '../../assets/images/faces/15.jpg'],
  },
  {
    id: 9,
    title: 'Quarterly Budget Review',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 'James',
    deadline: '18-Mar-2024',
    progress: 20,
    ProgressBg:'danger',
    avatars: ['../../assets/images/faces/16.jpg', '../../assets/images/faces/11.jpg', '../../assets/images/faces/8.jpg'],
  },
];

export const Holdtasks = [
  {
    id: 1,
    title: 'Team Building Activity',
    priority: 'Low',
    priorityClass: 'bg-success',
    assignee: { name: 'Lucas Roy', avatars: '../../assets/images/faces/12.jpg' },
    status: 'Upcoming',
    dueDate: '10-Apr-2024',
    progress: 0,
    team: [
      { avatar: '../../assets/images/faces/12.jpg' },
      { avatar: '../../assets/images/faces/12.jpg' },
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/14.jpg' },
    ],
    createdBy: 'Lucas Roy'
  },
  {
    id: 2,
    title: 'Market Research',
    priority: 'High',
    priorityClass: 'bg-pink',
    statusClass: 'text-info',
    assignee: { name: 'Oliver Smith', avatars: '../../assets/images/faces/6.jpg' },
    status: 'In Progress',
    dueDate: '15-Apr-2024',
    progress: 75,
    ProgressBg:'warning',
    team: [
      { avatar: '../../assets/images/faces/7.jpg' },
      { avatar: '../../assets/images/faces/7.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
    ],
    createdBy: 'Oliver Smith'
  },
  {
    id: 3,
    title: 'Website Redesign',
    priority: 'Medium',
    priorityClass: 'bg-warning',
    statusClass: 'text-warning',
    assignee: { name: 'Ava Lee', avatars: '../../assets/images/faces/9.jpg' },
    status: 'Pending',
    dueDate: '20-Apr-2024',
    progress: 5,
    ProgressBg:'danger',
    createdBy: 'Ava Lee',
    team: [
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/12.jpg' },
    ],
  },
  {
    id: 4,
    title: 'Website Redesign',
    priority: 'Low',
    priorityClass: 'bg-success',
    assignee: { name: 'Lucy Chang', avatars: '../../assets/images/faces/10.jpg' },
    status: 'Completed',
    statusClass: 'text-success',
    team: [
      { avatar: '../../assets/images/faces/8.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
      { avatar: '../../assets/images/faces/5.jpg' }
    ],
    dueDate: '22-Jan-2024',
    progress: 100,
    ProgressBg:'primary',
    checked: false
  },
  {
    id: 5,
    title: 'Client Meeting Preparation',
    priority: 'High',
    priorityClass: 'bg-pink',
    assignee: { name: 'Marcus Riley', avatars: '../../assets/images/faces/3.jpg' },
    status: 'Pending',
    statusClass: 'text-warning',
    dueDate: '05-Feb-2024',
    progress: 45,
    ProgressBg:'warning',
    createdBy: 'Marcus Riley',
    team: [
      { avatar: '../../assets/images/faces/15.jpg' },
      { avatar: '../../assets/images/faces/15.jpg' },
    ],
  },
  {
    id: 6,
    title: 'Design Mockups',
    priority: 'Medium',
    priorityClass: 'bg-warning',
    assignee: { name: 'Maria', avatars: '../../assets/images/faces/8.jpg' },
    status: 'On Hold',
    statusClass: 'text-danger',
    team: [
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/4.jpg' }
    ],
    dueDate: '25-Feb-2024',
    progress: 50,
    ProgressBg:'warning',
    checked: false
  },
  {
    id: 7,
    title: 'Marketing Campaign Review',
    priority: 'Urgent',
    priorityClass: 'bg-danger',
    assignee: { name: 'David Kim', avatars: '../../assets/images/faces/6.jpg' },
    status: 'Pending',
    statusClass: 'text-warning',
    team: [{ avatar: '../../assets/images/faces/9.jpg' }, { avatar: '../../assets/images/faces/9.jpg' }],
    dueDate: '01-Mar-2024',
    progress: 15,
    ProgressBg:'danger',
    checked: false
  },
  {
    id: 8,
    title: 'SEO Optimization',
    priority: 'Low',
    priorityClass: 'bg-success',
    statusClass: 'text-success',
    assignee: { name: 'Emily Wang', avatars: '../../assets/images/faces/14.jpg' },
    status: 'Completed',
    dueDate: '10-Mar-2024',
    progress: 100,
    ProgressBg:'success',
    team: [
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
    ],
    createdBy: 'Emily Wang'
  },
  {
    id: 9,
    title: 'Quarterly Budget Review',
    priority: 'High',
    assignee: { name: 'James', avatars: '../../assets/images/faces/14.jpg' },
    status: 'Pending',
    priorityClass: 'bg-pink',
    statusClass: 'text-warning',
    dueDate: '18-Mar-2024',
    progress: 20,
    ProgressBg:'danger',
    team: [
      { avatar: '../../assets/images/faces/16.jpg' },
      { avatar: '../../assets/images/faces/16.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' }
    ],
    createdBy: 'James'
  },
  {
    id: 10,
    title: 'Mobile App Launch',
    priority: 'Medium',
    assignee: { name: 'Sophia Kim', avatars: '../../assets/images/faces/1.jpg' },
    status: 'On Hold',
    priorityClass: 'bg-warning',
    statusClass: 'text-danger',
    progressClass: 'bg-warning',
    dueDate: '30-Mar-2024',
    progress: 60,
    createdBy: 'Sophia Kim',
    team: [
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' },
    ],
  },

]

export const Pendingtasks = [
  {
    id: 1,
    title: 'Team Building Activity',
    priority: 'Low',
    priorityClass: 'bg-success',
    assignee: { name: 'Lucas Roy', avatar: '../../assets/images/faces/12.jpg' },
    status: 'Upcoming',
    dueDate: '10-Apr-2024',
    progress: 0,
    team: [
      { avatar: '../../assets/images/faces/12.jpg' },
      { avatar: '../../assets/images/faces/12.jpg' },
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/14.jpg' },
    ],
    createdBy: 'Lucas Roy',
    progressColor:'',
  },
  {
    id: 2,
    title: 'Market Research',
    priority: 'High',
    priorityClass: 'bg-pink',
    statusClass: 'text-info',
    progressClass: 'bg-warning',
    assignee: { name: 'Oliver Smith', avatar: '../../assets/images/faces/6.jpg' },
    status: 'In Progress',
    dueDate: '15-Apr-2024',
    progress: 75,
    team: [
      { avatar: '../../assets/images/faces/7.jpg' },
      { avatar: '../../assets/images/faces/7.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
    ],
    createdBy: 'Oliver Smith',
    progressColor:'warning',
  },
  {
    id: 3,
    title: 'Website Redesign',
    priority: 'Medium',
    priorityClass: 'bg-warning',
    statusClass: 'text-warning',
    progressClass: 'bg-danger',
    assignee: { name: 'Ava Lee', avatar: '../../assets/images/faces/9.jpg' },
    status: 'Pending',
    dueDate: '20-Apr-2024',
    progress: 5,
    createdBy: 'Ava Lee',
    progressColor:'danger',
    team: [
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/12.jpg' },
    ],
  },
  {
    id: 4,
    title: 'Website Redesign',
    priority: 'Low',
    priorityClass: 'bg-success',
    assignee: { name: 'Lucy Chang', avatar: '../../assets/images/faces/10.jpg' },
    status: 'Completed',
    statusClass: 'text-success',
    team: [
      { avatar: '../../assets/images/faces/8.jpg' },
      { avatar: '../../assets/images/faces/5.jpg' }
    ],
    dueDate: '22-Jan-2024',
    progress: 100,
    progressClass: 'bg-primary',
    checked: false,
    progressColor:'primary',
  },
  {
    id: 5,
    title: 'Client Meeting Preparation',
    priority: 'High',
    priorityClass: 'bg-pink',
    assignee: { name: 'Marcus Riley', avatar: '../../assets/images/faces/3.jpg' },
    status: 'Pending',
    statusClass: 'text-warning',
    dueDate: '05-Feb-2024',
    progress: 45,
    createdBy: 'Marcus Riley',
    progressColor:'warning',
    team: [
      { avatar: '../../assets/images/faces/15.jpg' },
    ],
  },
  {
    id: 6,
    title: 'Design Mockups',
    priority: 'Medium',
    priorityClass: 'bg-warning',
    assignee: { name: 'Maria', avatar: '../../assets/images/faces/8.jpg' },
    status: 'On Hold',
    statusClass: 'text-danger',
    team: [
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/4.jpg' }
    ],
    dueDate: '25-Feb-2024',
    progress: 50,
    progressColor:'warning',
    checked: false
  },
  {
    id: 7,
    title: 'Marketing Campaign Review',
    priority: 'Urgent',
    priorityClass: 'bg-danger',
    assignee: { name: 'David Kim', avatar: '../../assets/images/faces/6.jpg' },
    status: 'Pending',
    statusClass: 'text-warning',
    team: [{ avatar: '../../assets/images/faces/9.jpg' }],
    dueDate: '01-Mar-2024',
    progress: 15,
    progressColor:'danger',
    checked: false
  },
  {
    id: 8,
    title: 'SEO Optimization',
    priority: 'Low',
    priorityClass: 'bg-success',
    statusClass: 'text-success',
    assignee: { name: 'Emily Wang', avatar: '../../assets/images/faces/14.jpg' },
    status: 'Completed',
    dueDate: '10-Mar-2024',
    progress: 100,
    team: [
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
    ],
    createdBy: 'Emily Wang',
    progressColor:'success',
  },
  {
    id: 9,
    title: 'Quarterly Budget Review',
    priority: 'High',
    assignee: { name: 'James', avatar: '../../assets/images/faces/14.jpg' },
    status: 'Pending',
    priorityClass: 'bg-pink',
    statusClass: 'text-warning',
    dueDate: '18-Mar-2024',
    progress: 20,
    team: [
      { avatar: '../../assets/images/faces/16.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' }
    ],
    createdBy: 'James',
    progressColor: 'danger',
  },
]

export const Completedtasks = [
  {
    id: 1,
    title: 'Team Building Activity',
    priority: 'Low',
    priorityClass: 'bg-success',
    assignee: { name: 'Lucas Roy', avatar: '../../assets/images/faces/12.jpg' },
    status: 'Upcoming',
    dueDate: '10-Apr-2024',
    progress: 0,
    team: [
      { avatar: '../../assets/images/faces/12.jpg' },
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/14.jpg' },
    ],
    createdBy: 'Lucas Roy',
    progressColor:''
  },
  {
    id: 2,
    title: 'Market Research',
    priority: 'High',
    priorityClass: 'bg-pink',
    statusClass: 'text-info',
    progressClass: 'bg-warning',
    assignee: { name: 'Oliver Smith', avatar: '../../assets/images/faces/6.jpg' },
    status: 'In Progress',
    dueDate: '15-Apr-2024',
    progress: 75,
    team: [
      { avatar: '../../assets/images/faces/7.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
    ],
    createdBy: 'Oliver Smith',
    progressColor:'warning'
  },
  {
    id: 3,
    title: 'Website Redesign',
    priority: 'Medium',
    priorityClass: 'bg-warning',
    statusClass: 'text-warning',
    progressClass: 'bg-danger',
    assignee: { name: 'Ava Lee', avatar: '../../assets/images/faces/9.jpg' },
    status: 'Pending',
    dueDate: '20-Apr-2024',
    progress: 5,
    createdBy: 'Ava Lee',
    team: [
      { avatar: '../../assets/images/faces/10.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/12.jpg' },
    ],
    progressColor:'danger'
  },
  {
    id: 4,
    title: 'Website Redesign',
    priority: 'Low',
    priorityClass: 'bg-success',
    assignee: { name: 'Lucy Chang', avatar: '../../assets/images/faces/10.jpg' },
    status: 'Completed',
    statusClass: 'text-success',
    team: [
      { avatar: '../../assets/images/faces/8.jpg' },
      { avatar: '../../assets/images/faces/5.jpg' }
    ],
    dueDate: '22-Jan-2024',
    progress: 100,
    progressClass: 'bg-primary',
    checked: false,
    progressColor:'primary'
  },
  {
    id: 5,
    title: 'Client Meeting Preparation',
    priority: 'High',
    priorityClass: 'bg-pink',
    assignee: { name: 'Marcus Riley', avatar: '../../assets/images/faces/3.jpg' },
    status: 'Pending',
    statusClass: 'text-warning',
    dueDate: '05-Feb-2024',
    progress: 45,
    createdBy: 'Marcus Riley',
    progressClass: 'bg-warning',
    team: [
      { avatar: '../../assets/images/faces/15.jpg' },
    ],
    progressColor:'warning'
  },
  {
    id: 6,
    title: 'Design Mockups',
    priority: 'Medium',
    priorityClass: 'bg-warning',
    assignee: { name: 'Maria', avatar: '../../assets/images/faces/8.jpg' },
    status: 'On Hold',
    statusClass: 'text-danger',
    team: [
      { avatar: '../../assets/images/faces/13.jpg' },
      { avatar: '../../assets/images/faces/4.jpg' }
    ],
    dueDate: '25-Feb-2024',
    progress: 50,
    progressClass: 'bg-warning',
    checked: false,
    progressColor:'warning'
  },
  {
    id: 7,
    title: 'Marketing Campaign Review',
    priority: 'Urgent',
    priorityClass: 'bg-danger',
    assignee: { name: 'David Kim', avatar: '../../assets/images/faces/6.jpg' },
    status: 'Pending',
    statusClass: 'text-warning',
    team: [{ avatar: '../../assets/images/faces/9.jpg' }],
    dueDate: '01-Mar-2024',
    progress: 15,
    progressClass: 'bg-danger',
    checked: false,
    progressColor:'danger'
  },
  {
    id: 8,
    title: 'SEO Optimization',
    priority: 'Low',
    priorityClass: 'bg-success',
    statusClass: 'text-success',
    progressClass: 'bg-success',
    assignee: { name: 'Emily Wang', avatar: '../../assets/images/faces/14.jpg' },
    status: 'Completed',
    dueDate: '10-Mar-2024',
    progress: 100,
    team: [
      { avatar: '../../assets/images/faces/11.jpg' },
      { avatar: '../../assets/images/faces/8.jpg' },
    ],
    createdBy: 'Emily Wang',
    progressColor:'success'
  },
  {
    id: 9,
    title: 'Quarterly Budget Review',
    priority: 'High',
    assignee: { name: 'James', avatar: '../../assets/images/faces/14.jpg' },
    status: 'Pending',
    priorityClass: 'bg-pink',
    statusClass: 'text-warning',
    progressClass: 'bg-danger',
    dueDate: '18-Mar-2024',
    progress: 20,
    team: [
      { avatar: '../../assets/images/faces/16.jpg' },
      { avatar: '../../assets/images/faces/11.jpg' }
    ],
    createdBy: 'James',
    progressColor:'danger'
  },

]

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