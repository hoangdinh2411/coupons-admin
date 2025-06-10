
interface Task {
  description: string;
}
export const Tasks: Task[] = [
  { description: 'Research best practices for website optimization.' },
  { description: 'Conduct performance analysis to identify site speed.' },
  { description: 'Prepare a performance improvement plan and timeline.' },
  { description: 'Test website across different devices and browsers.' },
];

interface Comment {
  id: number;
  name: string;
  image: string;
  description: string;
  file?: {
    src: string;
    size: string;
  };
}
export const Commentstaskdata: Comment[] = [
  {
    id: 1,
    name: 'Sophia Reed',
    image: '../../../assets/images/faces/1.jpg',
    description: 'Reviewed the code and identified potential performance issues.',
  },
  {
    id: 2,
    name: 'Alex Johnson',
    image: '../../../assets/images/faces/13.jpg',
    description: 'Completed initial testing of the new feature and found minor issues.',
    file: {
      src: '../../../assets/images/media/file-manager/1.png',
      size: '556.76KB',
    },
  },
  {
    id: 3,
    name: 'Even Williams',
    image: '../../../assets/images/faces/11.jpg',
    description: 'Attached the updated wireframe designs based on feedback.',
  },
];

export const TasktimelineData = [
  {
    id: 1,
    avatar: '../../../assets/images/faces/8.jpg',
    name: 'Emma',
    action: 'uploaded a new wireframe design for the homepage layout.',
    date: '16, September 2024 - 09:45',
    description: '"This wireframe covers the new responsive layout for both mobile and desktop views. Please provide feedback."',
    media: [
      {
        type: 'image',
        src: '../../../assets/images/media/file-manager/4.png',
        alt: 'Wireframe Image',
        size: '120.45KB',
      },
    ],
     data:'120.45KB'
  },
  {
    id: 2,
    avatar: '../../../assets/images/faces/7.jpg',
    name: 'Oliver',
    action: 'updated the performance metrics document with you.',
    date: '15, September 2024 - 11:30',
    description: '"The updated metrics document now includes the latest performance benchmarks and security enhancements."',
    media: [
      {
        type: 'file',
        src: '../../../assets/images/media/file-manager/1.png',
        alt: 'Document',
        size: '340.76KB',
      },
    ],
  },
  {
    id: 3,
    avatar: '../../../assets/images/faces/7.jpg',
    name: 'You',
    action: 'shared the performance improvement plan with 5 team members, including Ethan, Olivia, Noah, Isabella',
    date: '14, September 2024 - 16:05',
    media: [
      {
        type: 'image',
        src: '../../../assets/images/media/media-17.jpg',
        alt: 'Plan Image',
      },
    ],
  },
  {
    id: 4,
    avatar: '../../../assets/images/faces/5.jpg',
    name: 'Liam',
    action: 'commented on the performance enhancement strategy.',
    date: '13, September 2024 - 10:00',
    description: '"The new strategy looks promising. Feedback by tomorrow."',
    reactions: ['User 1', 'User 2', 'User 3', 'User 4']
  }
];

interface FileData {
  id: number;
  name: string;
  size: string;
  image: string;
}
export const FileData: FileData[] = [
  { id: 1, name: 'Review Project', size: '0.68MB', image: '../../../assets/images/media/file-manager/1.png' },
  { id: 2, name: 'assets.zip', size: '0.45MB', image: '../../../assets/images/media/file-manager/3.png' },
  { id: 3, name: 'images_205', size: '1.2MB', image: '../../../assets/images/media/file-manager/1.png' },
  { id: 4, name: 'documentation.zip', size: '2MB', image: '../../../assets/images/media/file-manager/3.png' },
  { id: 5, name: 'Support-policy.doc', size: '0.45MB', image: '../../../assets/images/media/file-manager/4.png' },
  { id: 6, name: 'Profile-designs.zip', size: '3.46MB', image: '../../../assets/images/media/file-manager/3.png' },
  { id: 7, name: 'All Files', size: '1.2MB', image: '../../../assets/images/media/file-manager/1.png' }
];
