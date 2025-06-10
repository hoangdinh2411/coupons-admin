
interface Folder {
  bgColor: string;
  borderColor: string;
  iconColor: string;
  title: string;
  fileCount: string;
  iconPath: React.ReactNode;
  altText: string;
}
export const Filecards: Folder[] = [
  {
    bgColor: 'bg-primary-transparent',
    borderColor: 'border-primary',
    iconColor: 'text-primary',
    title: 'All Images',
    fileCount: '245 files(26.14GB)',
    iconPath: [
      <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" className="text-primary mb-3 p-2 bg-white rounded-circle shadow shadow-sm" fill="currentColor" viewBox="0 0 24 24"> <path fill="currentColor" d="M5 19h14V5H5zm4-5.86l2.14 2.58l3-3.87L18 17H6z" opacity="0.3"></path> <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-4.86-7.14l-3 3.86L9 13.14L6 17h12z"></path> </svg>
    ],
    altText: 'Images Icon',
  },
  {
    bgColor: 'bg-secondary-transparent',
    borderColor: 'border-secondary',
    iconColor: 'text-secondary',
    title: 'All Videos',
    fileCount: '245 files(26.14GB)',
    iconPath: [
      <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" className="text-secondary mb-3 p-2 bg-white rounded-circle shadow shadow-sm" fill="currentColor" viewBox="0 0 24 24"> <path fill="currentColor" d="M5 8h10v8H5z" opacity="0.3"></path> <path fill="currentColor" d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2 9H5V8h10z"></path> </svg>
    ],
    altText: 'Videos Icon',
  },
  {
    bgColor: 'bg-success-transparent',
    borderColor: 'border-success',
    iconColor: 'text-success',
    title: 'All Music',
    fileCount: '245 files(26.14GB)',
    iconPath: [
      <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" className="text-success mb-3 p-2 bg-white rounded-circle shadow shadow-sm" fill="currentColor" viewBox="0 0 24 24"> <path fill="currentColor" d="M8 16h12V4H8zm4.5-6c.57 0 1.08.19 1.5.51V5h4v2h-3v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 2.5-2.5" opacity="0.3"></path> <path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.5-1a2.5 2.5 0 0 0 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5M2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"></path> </svg>
    ],
    altText: 'Music Icon',
  },
  {
    bgColor: 'bg-info-transparent',
    borderColor: 'border-info',
    iconColor: 'text-info',
    title: 'All Documents',
    fileCount: '245 files(26.14GB)',
    iconPath: [
      <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" className="text-info mb-3 p-2 bg-white rounded-circle shadow shadow-sm" fill="currentColor" viewBox="0 0 24 24"> <path fill="currentColor" d="M13 4H6v16h12V9h-5z" opacity="0.3"></path> <path fill="currentColor" d="m20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2zm-2 12H6V4h7v5h5z"></path> </svg>
    ],
    altText: 'Documents Icon',
  },
];

interface FolderData {
  image: string;
  title: string;
  filesCount: number;
  avatars: string[];
}
export const Foldersdata: FolderData[] = [
  {
    image: '../../assets/images/media/file-manager/1.png',
    title: 'Images',
    filesCount: 345,
    avatars: [
      '../../assets/images/faces/11.jpg',
      '../../assets/images/faces/2.jpg',
      '../../assets/images/faces/5.jpg',
    ],
  },
  {
    image: '../../assets/images/media/file-manager/1.png',
    title: 'Docs',
    filesCount: 45,
    avatars: [
      '../../assets/images/faces/12.jpg',
      '../../assets/images/faces/7.jpg',
    ],
  },
  {
    image: '../../assets/images/media/file-manager/1.png',
    title: 'Downloads',
    filesCount: 568,
    avatars: [
      '../../assets/images/faces/14.jpg',
      '../../assets/images/faces/9.jpg',
    ],
  },
  {
    image: '../../assets/images/media/file-manager/1.png',
    title: 'Apps',
    filesCount: 247,
    avatars: [
      '../../assets/images/faces/2.jpg',
      '../../assets/images/faces/3.jpg',
    ],
  },
];

interface FileData {
  avatarClass: string;
  fileName: string;
  category: string;
  size: string;
  date: string;
  link: string;
  svgIcon: React.ReactNode;
}
export const Files: FileData[] = [
  {
    avatarClass: 'svg-primary text-primary bg-primary-transparent',
    fileName: 'MEETING_NOTES_2024.docx',
    category: 'Documents',
    size: '1.2MB',
    date: '20 Mar 2024',
    link: '#!',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2"></path><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
      </>
    )
  },
  {
    avatarClass: 'svg-secondary text-secondary bg-secondary-transparent',
    fileName: 'PROJECT_PLAN_MARCH_2024.pdf',
    category: 'Documents',
    size: '2.3MB',
    date: '05 Apr 2024',
    link: '#!',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2"></path><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
      </>
    )
  },
  {
    avatarClass: 'svg-success text-success bg-success-transparent',
    fileName: 'BUDGET_REPORT_2024.xlsx',
    category: 'Spreadsheets',
    size: '550KB',
    date: '11 Jan 2024',
    link: '#!',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,192h16a20,20,0,0,0,0-40H168v56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="128" y1="152" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><polyline points="56 152 88 152 56 208 88 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>
      </>
    )
  },
  {
    avatarClass: 'svg-info text-info bg-info-transparent',
    fileName: 'PROJECT_UPDATE_2024.mp4',
    category: 'Videos',
    size: '1.5GB',
    date: '12, Jun 2024',
    link: '#!',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" opacity="0.2"></polygon><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polygon><path d="M128,152a32.5,32.5,0,0,1,0,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
      </>
    )
  },
  {
    avatarClass: 'svg-danger text-danger bg-danger-transparent',
    fileName: 'FINANCIAL_REPORT_Q2.pdf',
    category: 'Reports',
    size: '3.1MB',
    date: '05, Jun 2024',
    link: '#!',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polyline points="216 152 184 152 184 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="208" y1="184" x2="184" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M48,192H64a20,20,0,0,0,0-40H48v56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M112,152v56h16a28,28,0,0,0,0-56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
      </>
    )
  },
];

interface ListItemData {
  iconClass: string;
  title: string;
  fileCount: number;
  size: string;
  progress: number;
  icon: string;
  colorClass: string;
}
export const ListItem: ListItemData[] = [
  {
    iconClass: 'primary',
    title: 'Media',
    fileCount: 3145,
    size: '45GB',
    progress: 90,
    icon: 'ti ti-photo fs-20',
    colorClass: 'bg-primary',
  },
  {
    iconClass: 'secondary',
    title: 'Downloads',
    fileCount: 568,
    size: '66GB',
    progress: 86,
    icon: 'ti ti-download fs-20',
    colorClass: 'bg-secondary',
  },
  {
    iconClass: 'success',
    title: 'Apps',
    fileCount: 74,
    size: '55GB',
    progress: 75,
    icon: 'ti ti-layout-grid fs-20',
    colorClass: 'bg-success',
  },
  {
    iconClass: 'info',
    title: 'Documents',
    fileCount: 1441,
    size: '34GB',
    progress: 80,
    icon: 'ti ti-file-description fs-20',
    colorClass: 'bg-info',
  },
]

export const StorageSeries = [38, 36, 27, 32]

export const StorageOptions = {
  labels: ["Media", "Downloads", "Apps", "Documents"],
  chart: {
    height: 220,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: "#fff",
    width: 0,
    dashArray: 0,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      expandOnClick: false,
      donut: {
        size: '75%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            offsetY: -3,
          },
          value: {
            show: true,
            fontSize: '28px',
            fontWeight: 600,
            color: undefined,
            offsetY: -40,
            formatter: function (val: string) {
              return val + "%";
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Used of 720 GB',
            fontSize: '12px',
            fontWeight: 400,
          }
        },
        borderRadius: '8px',
      }
    }
  },
  grid: {
    padding: {
      bottom: -100
    }
  },
  colors: ["var(--primary-color)", "rgba(var(--secondary-rgb), 1)", "rgba(var(--success-rgb), 1)", "rgba(var(--info-rgb), 1)"],
}