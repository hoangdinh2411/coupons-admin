import Link from "next/link"

interface ProjectCardData {
  title: string
  price: string
  percentage: string
  arrowIcon: 'up' | 'down'
  svgColor: string
  avatarIcon: string
  avatarColor: string
  svgIcon: any;
  arrowColor: string
}
export const ProjectCardsData: ProjectCardData[] = [
  {
    title: 'Completed Projects',
    price: '109',
    percentage: '5.3%',
    arrowIcon: 'up',
    arrowColor: 'success',
    svgColor: 'primary',
    avatarIcon: 'ti-file-check',
    avatarColor: 'primary',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-image" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" style={{ overflow: 'hidden', display: 'block' }} width="700" height="700"><defs></defs><g transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" d="M 313.575145 77.289331 C 327.418325 100.888095 325.88607 142.960095 304.220117 159.667034 C 265.072813 189.854105 203.777781 150.746207 155.968211 138.175778 C 127.632454 130.725541 97.286126 89.366794 73.200321 106.048974 C 48.904535 122.876591 101.253505 183.744908 74.18203 195.601938 C 50.517987 205.966548 43.060308 142.254872 17.228565 141.890005 C 0.152177 141.648805 -9.538631 164.041187 -21.409051 176.319393 C -51.356227 207.295347 -62.021731 272.752031 -104.928243 276.673037 C -128.295041 278.808409 -152.210092 253.451797 -159.565292 231.170234 C -171.75374 194.247013 -139.774237 154.720649 -131.708436 116.683492 C -128.052249 99.441436 -110.820892 77.599717 -122.186888 64.128625 C -152.811603 27.831908 -234.291089 100.858257 -266.089398 65.585146 C -280.675169 49.405495 -272.372712 16.880257 -258.603808 0 C -234.209946 -29.906132 -156.561687 1.159049 -147.444544 -36.341816 C -138.14693 -74.585002 -246.708634 -85.16433 -231.136647 -121.309871 C -218.5408 -150.547225 -165.464401 -111.184376 -134.686904 -119.322185 C -120.91794 -122.962806 -104.114407 -128.748541 -97.616554 -141.421993 C -74.961221 -185.609088 -150.883499 -262.459729 -110.492285 -291.344211 C -87.215157 -307.990102 -59.209242 -250.863798 -31.131535 -256.391251 C 2.097484 -262.932804 6.257205 -331.490286 40.101991 -330.269613 C 70.242514 -329.18254 72.151765 -274.510405 98.634602 -260.078072 C 120.402562 -248.215202 158.518591 -270.897147 173.197115 -250.919341 C 196.314453 -219.456117 129.211822 -166.340668 151.870597 -134.54561 C 167.557709 -112.533272 207.484031 -131.557043 232.845411 -122.2067 C 260.090725 -112.161779 309.849734 -104.774154 307.621019 -75.821772 C 302.707805 -11.996088 128.913373 -64.01432 129.069612 -0.000001 C 129.230729 66.012946 280.174093 20.349848 313.575145 77.289331 Z " fill="rgba(var(--primary-rgb), 1)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g></svg>
      </>
    )
  },
  {
    title: 'Overdue Projects',
    price: '65',
    percentage: '2.1%',
    arrowIcon: 'down',
    arrowColor: 'danger',
    svgColor: 'secondary',
    avatarIcon: 'ti-briefcase',
    avatarColor: 'secondary',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-image" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" style={{ overflow: 'hidden', display: 'block' }} width="700" height="700"><defs></defs><g transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" d="M 313.575145 77.289331 C 327.418325 100.888095 325.88607 142.960095 304.220117 159.667034 C 265.072813 189.854105 203.777781 150.746207 155.968211 138.175778 C 127.632454 130.725541 97.286126 89.366794 73.200321 106.048974 C 48.904535 122.876591 101.253505 183.744908 74.18203 195.601938 C 50.517987 205.966548 43.060308 142.254872 17.228565 141.890005 C 0.152177 141.648805 -9.538631 164.041187 -21.409051 176.319393 C -51.356227 207.295347 -62.021731 272.752031 -104.928243 276.673037 C -128.295041 278.808409 -152.210092 253.451797 -159.565292 231.170234 C -171.75374 194.247013 -139.774237 154.720649 -131.708436 116.683492 C -128.052249 99.441436 -110.820892 77.599717 -122.186888 64.128625 C -152.811603 27.831908 -234.291089 100.858257 -266.089398 65.585146 C -280.675169 49.405495 -272.372712 16.880257 -258.603808 0 C -234.209946 -29.906132 -156.561687 1.159049 -147.444544 -36.341816 C -138.14693 -74.585002 -246.708634 -85.16433 -231.136647 -121.309871 C -218.5408 -150.547225 -165.464401 -111.184376 -134.686904 -119.322185 C -120.91794 -122.962806 -104.114407 -128.748541 -97.616554 -141.421993 C -74.961221 -185.609088 -150.883499 -262.459729 -110.492285 -291.344211 C -87.215157 -307.990102 -59.209242 -250.863798 -31.131535 -256.391251 C 2.097484 -262.932804 6.257205 -331.490286 40.101991 -330.269613 C 70.242514 -329.18254 72.151765 -274.510405 98.634602 -260.078072 C 120.402562 -248.215202 158.518591 -270.897147 173.197115 -250.919341 C 196.314453 -219.456117 129.211822 -166.340668 151.870597 -134.54561 C 167.557709 -112.533272 207.484031 -131.557043 232.845411 -122.2067 C 260.090725 -112.161779 309.849734 -104.774154 307.621019 -75.821772 C 302.707805 -11.996088 128.913373 -64.01432 129.069612 -0.000001 C 129.230729 66.012946 280.174093 20.349848 313.575145 77.289331 Z " fill="rgba(var(--secondary-rgb), 1)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g></svg>
      </>
    )
  },
  {
    title: 'Total Projects',
    price: '2,487',
    percentage: '1.8%',
    arrowIcon: 'up',
    arrowColor: 'success',
    svgColor: 'success',
    avatarIcon: 'ti-album',
    avatarColor: 'success',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-image" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" style={{ overflow: 'hidden', display: 'block' }} width="700" height="700"><defs></defs><g transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" d="M 313.575145 77.289331 C 327.418325 100.888095 325.88607 142.960095 304.220117 159.667034 C 265.072813 189.854105 203.777781 150.746207 155.968211 138.175778 C 127.632454 130.725541 97.286126 89.366794 73.200321 106.048974 C 48.904535 122.876591 101.253505 183.744908 74.18203 195.601938 C 50.517987 205.966548 43.060308 142.254872 17.228565 141.890005 C 0.152177 141.648805 -9.538631 164.041187 -21.409051 176.319393 C -51.356227 207.295347 -62.021731 272.752031 -104.928243 276.673037 C -128.295041 278.808409 -152.210092 253.451797 -159.565292 231.170234 C -171.75374 194.247013 -139.774237 154.720649 -131.708436 116.683492 C -128.052249 99.441436 -110.820892 77.599717 -122.186888 64.128625 C -152.811603 27.831908 -234.291089 100.858257 -266.089398 65.585146 C -280.675169 49.405495 -272.372712 16.880257 -258.603808 0 C -234.209946 -29.906132 -156.561687 1.159049 -147.444544 -36.341816 C -138.14693 -74.585002 -246.708634 -85.16433 -231.136647 -121.309871 C -218.5408 -150.547225 -165.464401 -111.184376 -134.686904 -119.322185 C -120.91794 -122.962806 -104.114407 -128.748541 -97.616554 -141.421993 C -74.961221 -185.609088 -150.883499 -262.459729 -110.492285 -291.344211 C -87.215157 -307.990102 -59.209242 -250.863798 -31.131535 -256.391251 C 2.097484 -262.932804 6.257205 -331.490286 40.101991 -330.269613 C 70.242514 -329.18254 72.151765 -274.510405 98.634602 -260.078072 C 120.402562 -248.215202 158.518591 -270.897147 173.197115 -250.919341 C 196.314453 -219.456117 129.211822 -166.340668 151.870597 -134.54561 C 167.557709 -112.533272 207.484031 -131.557043 232.845411 -122.2067 C 260.090725 -112.161779 309.849734 -104.774154 307.621019 -75.821772 C 302.707805 -11.996088 128.913373 -64.01432 129.069612 -0.000001 C 129.230729 66.012946 280.174093 20.349848 313.575145 77.289331 Z " fill="rgba(var(--success-rgb), 1)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g></svg>
      </>
    )
  },
  {
    title: 'Pending Projects',
    price: '307',
    percentage: '0.5%',
    arrowIcon: 'down',
    arrowColor: 'danger',
    svgColor: 'info',
    avatarIcon: 'ti-chart-pie-2',
    avatarColor: 'info',
    svgIcon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-image" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" style={{ overflow: 'hidden', display: 'block' }} width="700" height="700"><defs></defs><g transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" d="M 313.575145 77.289331 C 327.418325 100.888095 325.88607 142.960095 304.220117 159.667034 C 265.072813 189.854105 203.777781 150.746207 155.968211 138.175778 C 127.632454 130.725541 97.286126 89.366794 73.200321 106.048974 C 48.904535 122.876591 101.253505 183.744908 74.18203 195.601938 C 50.517987 205.966548 43.060308 142.254872 17.228565 141.890005 C 0.152177 141.648805 -9.538631 164.041187 -21.409051 176.319393 C -51.356227 207.295347 -62.021731 272.752031 -104.928243 276.673037 C -128.295041 278.808409 -152.210092 253.451797 -159.565292 231.170234 C -171.75374 194.247013 -139.774237 154.720649 -131.708436 116.683492 C -128.052249 99.441436 -110.820892 77.599717 -122.186888 64.128625 C -152.811603 27.831908 -234.291089 100.858257 -266.089398 65.585146 C -280.675169 49.405495 -272.372712 16.880257 -258.603808 0 C -234.209946 -29.906132 -156.561687 1.159049 -147.444544 -36.341816 C -138.14693 -74.585002 -246.708634 -85.16433 -231.136647 -121.309871 C -218.5408 -150.547225 -165.464401 -111.184376 -134.686904 -119.322185 C -120.91794 -122.962806 -104.114407 -128.748541 -97.616554 -141.421993 C -74.961221 -185.609088 -150.883499 -262.459729 -110.492285 -291.344211 C -87.215157 -307.990102 -59.209242 -250.863798 -31.131535 -256.391251 C 2.097484 -262.932804 6.257205 -331.490286 40.101991 -330.269613 C 70.242514 -329.18254 72.151765 -274.510405 98.634602 -260.078072 C 120.402562 -248.215202 158.518591 -270.897147 173.197115 -250.919341 C 196.314453 -219.456117 129.211822 -166.340668 151.870597 -134.54561 C 167.557709 -112.533272 207.484031 -131.557043 232.845411 -122.2067 C 260.090725 -112.161779 309.849734 -104.774154 307.621019 -75.821772 C 302.707805 -11.996088 128.913373 -64.01432 129.069612 -0.000001 C 129.230729 66.012946 280.174093 20.349848 313.575145 77.289331 Z " fill="rgba(var(--info-rgb), 1)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g></svg>
      </>
    )
  },
]

//*** Project Analysis - Start ***//
export const ProjectAnalayticsSeries = [{
  name: 'Total Projects',
  type: 'column',
  data: [18, 25, 25, 33, 25, 28, 38, 20, 29, 37, 35, 44]
}, {
  name: 'All Tasks',
  type: 'column',
  data: [11, 22, 45, 40, 41, 49, 65, 18, 38, 33, 15, 25]
}, {
  name: 'Current Projects',
  type: 'line',
  data: [20, 29, 37, 35, 44, 43, 50, 33, 35, 31, 40, 41],
},
]
export const ProjectAnalayticsOptions = {
  chart: {
    toolbar: {
      show: false
    },
    height: 356,
    type: 'line',
    stacked: false,
    fontFamily: 'Poppins, Arial, sans-serif',
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  grid: {
    borderColor: '#f5f4f4',
    strokeDashArray: 3
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: undefined,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: [
    {
      show: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: false,
        color: '#4eb6d0'
      },
      labels: {
        style: {
          colors: '#4eb6d0',
        }
      },
    },
  ],
  tooltip: {
    enabled: true,
  },
  legend: {
    show: true,
    position: 'top',
    offsetX: 40,
    fontSize: '13px',
    fontWeight: 'normal',
    labels: {
      colors: '#acb1b1',
    },
    markers: {
      width: 10,
      height: 10,
    },
  },
  stroke: {
    width: [0, 0, 3],
    curve: 'straight',
    dashArray: [0, 0, 0],
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 3
    }
  },
  colors: ["rgba(var(--secondary-rgb), 1)", "var(--primary-color)", "rgba(var(--success-rgb), 1)"]
}

//*** Project Analysis - End ***//

//*** Projects Overview - Start ***//
interface ProjectStatus {
  title: string;
  icon: string;
  color: string;
  percentage: number;
  count: number;
  arrowDirection: 'up' | 'down';
};
export const ProjectStatuses: ProjectStatus[] = [
  {
    title: 'Total Projects',
    icon: 'ri-folder-2-line',
    color: 'primary',
    percentage: 5.3,
    count: 1982,
    arrowDirection: 'up',
  },
  {
    title: 'Ongoing Projects',
    icon: 'ri-loader-2-fill',
    color: 'secondary',
    percentage: -1.3,
    count: 214,
    arrowDirection: 'down',
  },
  {
    title: 'On-Hold Projects',
    icon: 'ri-pause-fill',
    color: 'success',
    percentage: 2.0,
    count: 262,
    arrowDirection: 'up',
  },
  {
    title: 'Pending Projects',
    icon: 'ri-time-line',
    color: 'info',
    percentage: -0.3,
    count: 395,
    arrowDirection: 'down',
  },
  {
    title: 'Inactive Projects',
    icon: 'ri-close-fill',
    color: 'pink',
    percentage: 2.6,
    count: 395,
    arrowDirection: 'up',
  },
  {
    title: 'Finished Projects',
    icon: 'ri-check-fill',
    color: 'purple',
    percentage: -0.2,
    count: 79,
    arrowDirection: 'down',
  },
];

//*** Projects Overview - End ***//

//*** Active Projects - Start ***//
export const ActiveSeries = [48]
export const ActiveOptions = {
  chart: {
    height: 230,
    type: "radialBar",
    sparkline: {
      enabled: true
    }
  },
  colors: ["var(--primary-color)"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff"
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#4b9bfa",
          fontSize: "10px",
          show: false
        },
        value: {
          offsetY: 7,
          color: "#4b9bfa",
          fontSize: "23px",
          show: true,
          fontWeight: 600,
          fontFamily: "Poppins",

        }
      }
    }
  }, grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Active Projects"]
}

export const NewSeries = [56]
export const NewOptions = {
  chart: {
    height: 230,
    type: "radialBar",
    sparkline: {
      enabled: true
    }
  },
  colors: ["rgba(var(--success-rgb), 1)"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff"
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#4b9bfa",
          fontSize: "10px",
          show: false
        },
        value: {
          offsetY: 7,
          color: "#4b9bfa",
          fontSize: "23px",
          show: true,
          fontWeight: 600,
          fontFamily: "Poppins",
        }
      }
    }
  }, grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["New Projects"]
}

export const ActiveProjectsdata = [
  { title: 'Active Projects', value: '6,289', color: 'primary', arrowColor: "success", percentage: '5.3%', arrowIcon: 'up', cardtype: 'active', chartOptions: ActiveOptions, chartSeries: ActiveSeries, type: 'radialBar' },
  { title: 'New Projects', value: '1,056', color: 'success', arrowColor: "success", percentage: '1.25%', arrowIcon: 'up', cardtype: 'new', chartOptions: NewOptions, chartSeries: NewSeries, type: 'radialBar' },
]
//*** Active Projects - End ***//

//*** Todo Projects List - Start ***//
interface Task {
  id: number;
  title: string | any;
  assignedTo: string;
  assignedToImg: string;
  dueDate: string;
  status: 'in-progress' | 'completed' | 'removed';
  checkboxChecked: boolean;
  additionalAvatars: string[];
  class: string;
  titleClass: string;
};
export const Tododata: Task[] = [
  {
    id: 1,
    title: 'Designing a landing page',
    assignedTo: 'Ashwin Crown',
    assignedToImg: '../../assets/images/faces/2.jpg',
    dueDate: '24 Oct, 2025',
    status: 'in-progress',
    checkboxChecked: false,
    additionalAvatars: ['../../assets/images/faces/2.jpg', '../../assets/images/faces/8.jpg', '../../assets/images/faces/2.jpg'],
    class: 'mb-3',
    titleClass: ''
  },
  {
    id: 2,
    title: 'Implementing user authentication',
    assignedTo: 'Ravi Sharma',
    assignedToImg: '../../assets/images/faces/3.jpg',
    dueDate: '26 Oct, 2025',
    status: 'completed',
    checkboxChecked: true,
    additionalAvatars: ['../../assets/images/faces/4.jpg', '../../assets/images/faces/5.jpg', '../../assets/images/faces/6.jpg'],
    class: 'mb-3 pt-1',
    titleClass: ''
  },
  {
    id: 3,
    title: 'Finalizing the Project Budget',
    assignedTo: 'Vikram Rao',
    assignedToImg: '../../assets/images/faces/10.jpg',
    dueDate: '30 Oct, 2025',
    status: 'in-progress',
    checkboxChecked: false,
    additionalAvatars: ['../../assets/images/faces/11.jpg', '../../assets/images/faces/12.jpg'],
    class: 'mb-3 pt-1',
    titleClass: ''
  },
  {
    id: 4,
    title: (
      <>
        <s>Conducting User Testing</s>
      </>
    ),
    assignedTo: 'Sneha Patel',
    assignedToImg: '../../assets/images/faces/13.jpg',
    dueDate: '31 Oct, 2025',
    status: 'removed',
    checkboxChecked: true,
    additionalAvatars: ['../../assets/images/faces/14.jpg', '../../assets/images/faces/15.jpg'],
    class: 'mb-3 pt-1',
    titleClass: 'text-muted op-7'
  },
  {
    id: 5,
    title: 'Creating API Documentation',
    assignedTo: 'Ananya Verma',
    assignedToImg: '../../assets/images/faces/7.jpg',
    dueDate: '28 Oct, 2025',
    status: 'completed',
    checkboxChecked: false,
    additionalAvatars: ['../../assets/images/faces/8.jpg', '../../assets/images/faces/9.jpg'],
    class: '',
    titleClass: ''
  },
];

//*** Todo Projects List - End ***//

//*** Team Members - Start ***//
interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
};
export const TeamMembers: User[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Project Manager',
    email: 'rahul.sharma@example.com',
    image: '../../assets/images/faces/11.jpg',
  },
  {
    id: 2,
    name: 'Ananya Verma',
    role: 'Developer',
    email: 'ananya.verma@example.com',
    image: '../../assets/images/faces/2.jpg',
  },
  {
    id: 3,
    name: 'Sneha Patel',
    role: 'UI/UX Designer',
    email: 'sneha.patel@example.com',
    image: '../../assets/images/faces/3.jpg',
  },
  {
    id: 4,
    name: 'Vikram Rao',
    role: 'Quality Analyst',
    email: 'vikram.rao@example.com',
    image: '../../assets/images/faces/14.jpg',
  },
  {
    id: 5,
    name: 'Pooja Gupta',
    role: 'Business Analyst',
    email: 'pooja.gupta@example.com',
    image: '../../assets/images/faces/5.jpg',
  },
  {
    id: 6,
    name: 'Amit Kumar',
    role: 'Frontend Developer',
    email: 'amit.kumar@example.com',
    image: '../../assets/images/faces/15.jpg',
  },
];

//*** Team Members - End ***//

//*** Team Tasks - Start ***//
interface Taskdata {
  id: number;
  name: string;
  avatars: string[];
  trackTime: string;
  progress: number;
  status: string;
  progressBg: string;
}
export const TeamTasks: Taskdata[] = [
  {
    id: 1,
    name: 'Design Mockups',
    avatars: ['../../assets/images/faces/2.jpg', '../../assets/images/faces/8.jpg', '../../assets/images/faces/2.jpg'],
    trackTime: '05h:12m:05s',
    progress: 100,
    status: 'Completed',
    progressBg: 'success',
  },
  {
    id: 2,
    name: 'API Development',
    avatars: ['../../assets/images/faces/13.jpg', '../../assets/images/faces/14.jpg'],
    trackTime: '08h:30m:15s',
    progress: 70,
    status: 'In Progress',
    progressBg: 'warning',
  },
  {
    id: 3,
    name: 'User Testing',
    avatars: ['../../assets/images/faces/15.jpg', '../../assets/images/faces/6.jpg'],
    trackTime: '04h:45m:00s',
    progress: 50,
    status: 'Pending',
    progressBg: 'danger',
  },
  {
    id: 4,
    name: 'Deployment',
    avatars: ['../../assets/images/faces/11.jpg', '../../assets/images/faces/7.jpg'],
    trackTime: '02h:30m:00s',
    progress: 30,
    status: 'Scheduled',
    progressBg: 'info',
  },
  {
    id: 5,
    name: 'Implementation',
    avatars: ['../../assets/images/faces/9.jpg', '../../assets/images/faces/10.jpg', '../../assets/images/faces/11.jpg'],
    trackTime: '07h:20m:10s',
    progress: 80,
    status: 'Completed',
    progressBg: 'success',
  },
  {
    id: 6,
    name: 'Code Review',
    avatars: ['../../assets/images/faces/12.jpg', '../../assets/images/faces/13.jpg'],
    trackTime: '03h:45m:25s',
    progress: 60,
    status: 'In Progress',
    progressBg: 'warning',
  },
];

//*** Team Tasks - End ***//

//*** Projects Summary - Start ***//
interface Summary {
  id: string;
  name: string;
  avatars: string[];
  startDate: string;
  progress: number;
  endDate: string;
  status: string;
  budget: string;
  badge?: React.ReactNode;
}
export const ProjectsSummary: Summary[] = [
  {
    id: '#15481',
    name: 'Website Redesign',
    avatars: [
      '../../assets/images/faces/10.jpg',
      '../../assets/images/faces/11.jpg',
      '../../assets/images/faces/4.jpg'
    ],
    startDate: '2024-01-15',
    progress: 100,
    endDate: '2024-03-30',
    status: 'Completed',
    budget: '$10,000',
    badge: (
      <>
        <Link scroll={false} className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!"> +5 </Link>
      </>
    )
  },
  {
    id: '#15482',
    name: 'Mobile App Development',
    avatars: [
      '../../assets/images/faces/2.jpg',
      '../../assets/images/faces/8.jpg',
      '../../assets/images/faces/2.jpg'
    ],
    startDate: '2024-02-01',
    progress: 35,
    endDate: '2024-05-15',
    status: 'In Progress',
    budget: '$15,000',
    badge: (
      <>
        <Link scroll={false} className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!"> +2 </Link>
      </>
    )
  },
  {
    id: '#15483',
    name: 'Marketing Campaign',
    avatars: [
      '../../assets/images/faces/5.jpg',
      '../../assets/images/faces/6.jpg',
      '../../assets/images/faces/9.jpg',
      '../../assets/images/faces/15.jpg'
    ],
    startDate: '2024-03-10',
    progress: 50,
    endDate: '2024-04-20',
    status: 'On Hold',
    budget: '$5,000',
  },
  {
    id: '#15724',
    name: 'Landing Page Redesign',
    avatars: [
      '../../assets/images/faces/1.jpg',
      '../../assets/images/faces/2.jpg',
      '../../assets/images/faces/3.jpg',
      '../../assets/images/faces/4.jpg'
    ],
    startDate: '2024-02-15',
    progress: 100,
    endDate: '2024-05-30',
    status: 'Completed',
    budget: '$12,000',
  },
  {
    id: '#15484',
    name: 'Data Analysis',
    avatars: [
      '../../assets/images/faces/1.jpg',
      '../../assets/images/faces/3.jpg',
      '../../assets/images/faces/4.jpg'
    ],
    startDate: '2024-04-05',
    progress: 86,
    endDate: '2024-06-10',
    status: 'In Progress',
    budget: '$8,000',
  }
];

//*** Projects Summary - End ***//

//*** Recent Transactions - Start ***//
interface Transaction {
  avatar: string;
  name: string;
  date: string;
  amount: string;
  avatarBg: string;
  class: string;
}
export const RecentTransactions: Transaction[] = [
  {
    avatar: 'R',
    name: 'Riya Malhotra',
    date: 'Oct 10, 2025 - 11:30AM',
    amount: '$15,200',
    avatarBg: 'bg-primary-transparent',
    class: 'mb-3'
  },
  {
    avatar: 'A',
    name: 'Ajay Singh',
    date: 'Oct 12, 2025 - 02:45PM',
    amount: '$9,800',
    avatarBg: 'bg-secondary-transparent',
    class: 'mb-3'
  },
  {
    avatar: 'S',
    name: 'Sofia Khan',
    date: 'Oct 14, 2025 - 09:20AM',
    amount: '$12,350',
    avatarBg: 'bg-success-transparent',
    class: 'mb-3'
  },
  {
    avatar: 'M',
    name: 'Meera Sharma',
    date: 'Oct 16, 2025 - 01:15PM',
    amount: '$4,500',
    avatarBg: 'bg-warning-transparent',
    class: 'mb-3'
  },
  {
    avatar: 'T',
    name: 'Tanvi Mehta',
    date: 'Oct 20, 2025 - 10:00AM',
    amount: '$8,900',
    avatarBg: 'bg-danger-transparent',
    class: 'mb-3'
  },
  {
    avatar: 'N',
    name: 'Sowmya Patel',
    date: 'Oct 22, 2025 - 05:45PM',
    amount: '$5,600',
    avatarBg: 'bg-info-transparent',
    class: 'mb-3'
  },
  {
    avatar: 'K',
    name: 'Karan Bansal',
    date: 'Oct 18, 2025 - 03:30PM',
    amount: '$6,250',
    avatarBg: 'bg-purple-transparent',
    class: ''
  },
];

//*** Recent Transactions - End ***//