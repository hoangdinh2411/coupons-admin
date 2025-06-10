
interface CardData {
    title: string;
    value: string | number;
    svgIcon: React.ReactNode;
    color: string;
    iconColor: string;
    percent: string;
    icon: 'up' | 'down';
}
export const MedicalCard: CardData[] = [
    {
        title: 'Total Patients',
        value: '15,879',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="svg-icon-med text-fixed-white" fill="currentColor" viewBox="0 0 256 256"><path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2"></path><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
        ),
        color: 'primary',
        iconColor: 'danger',
        percent: '0.96%',
        icon: 'down',
    },
    {
        title: 'Total Doctors',
        value: '2,035',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="svg-icon-med text-fixed-white" fill="currentColor" viewBox="0 0 256 256">
                <path d="M240,160a32,32,0,1,1-32-32A32,32,0,0,1,240,160Z" opacity="0.2"></path>
                <path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path>
            </svg>
        ),
        color: 'secondary',
        iconColor: 'success',
        percent: '0.96%',
        icon: 'up',
    },
    {
        title: 'Total Appointments',
        value: '5,324',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="svg-icon-med text-fixed-white" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path>
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z"></path>
            </svg>
        ),
        color: 'success',
        iconColor: 'danger',
        percent: '0.96%',
        icon: 'down',
    },
    {
        title: 'Total Staff',
        value: '8,157',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="svg-icon-med text-fixed-white" fill="currentColor" viewBox="0 0 256 256">
                <path d="M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z" opacity="0.2"></path>
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
            </svg>
        ),
        color: 'info',
        iconColor: 'danger',
        percent: '1.6%',
        icon: 'down',
    },
];

//*** Doctors List -Start ***//
interface Doctor {
    id: number;
    name: string;
    qualifications: string;
    specialty: string;
    status: 'Available' | 'Busy' | 'Unavailable';
    image: string;
}
export const DoctorsList: Doctor[] = [
    {
        id: 1,
        name: 'Dr. Smith',
        qualifications: 'MBBS, Ph.D',
        specialty: 'Cardiology',
        status: 'Available',
        image: '../../assets/images/faces/doctors/1.jpg',
    },
    {
        id: 2,
        name: 'Dr. Jane Doe',
        qualifications: 'MBBS, MD',
        specialty: 'Dermatology',
        status: 'Available',
        image: '../../assets/images/faces/doctors/2.jpg',
    },
    {
        id: 3,
        name: 'Dr. Michael Lee',
        qualifications: 'MBBS, MS',
        specialty: 'Orthopedics',
        status: 'Busy',
        image: '../../assets/images/faces/doctors/3.jpg',
    },
    {
        id: 4,
        name: 'Dr. Emily Clark',
        qualifications: 'MBBS, FRCS',
        specialty: 'General Surgery',
        status: 'Unavailable',
        image: '../../assets/images/faces/doctors/4.jpg',
    },
    {
        id: 5,
        name: 'Dr. Robert King',
        qualifications: 'MBBS, DNB',
        specialty: 'Pediatrics',
        status: 'Available',
        image: '../../assets/images/faces/doctors/5.jpg',
    },
    {
        id: 6,
        name: 'Dr. Olivia Martinez',
        qualifications: 'MBBS, MSc',
        specialty: 'Neurology',
        status: 'Available',
        image: '../../assets/images/faces/doctors/6.jpg',
    },
    {
        id: 7,
        name: 'Dr. Daniel Thompson',
        qualifications: 'MBBS, DCP',
        specialty: 'Pathology',
        status: 'Busy',
        image: '../../assets/images/faces/doctors/1.jpg',
    },
];

///*** Doctors List -End ***//

///*** Revenue Statistics -Start ***//
export const MedicalrevenueSeries = [
    {
        name: 'Profit',
        data: [20, 23, 26, 22, 25, 26, 28, 26, 22, 27, 25, 26],
        type: 'bar',
    },
    {
        name: 'Income',
        data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
        type: 'area',
    },
]
export const MedicalrevenueOptions = {
    chart: {
        height: 336,
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false,
        show: true,
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 5
    },
    legend: {
        show: true,
        position: 'top',
    },
    markers: {
        size: 7,
    },
    fill: {
        type: ['gradient', 'gradient'],
        gradient: {
            type: 'vertical',
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 0.7
                    },
                    {
                        offset: 10,
                        color: "var(--primary08)",
                        opacity: 0.5
                    },
                    {
                        offset: 100,
                        color: 'var(--primary03)',
                        opacity: 0.3
                    }
                ],
                [
                    {
                        offset: 0,
                        color: 'rgba(var(--success-rgb), .5)',
                        opacity: 0.6
                    },
                    {
                        offset: 10,
                        color: 'rgba(var(--success-rgb), 0.3)',
                        opacity: 0.5
                    },
                    {
                        offset: 100,
                        color: 'rgba(var(--success-rgb), 0.1)',
                        opacity: 0.3
                    }
                ],
            ]
        },

    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            columnWidth: "25%",
        }
    },
    colors: ["var(--primary-color)", "rgba(53, 189, 170, 1)"],
    stroke: {
        curve: ['smooth', 'smooth'],
        width: [0, 3],
        colors: ["rgba(var(--secondary-rgb), 1)", "rgba(var(--secondary-rgb), 1)"],
        dashArray: [0, 4]
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
        min: 0
    }
}
///*** Revenue Statistics -End ***//

///*** Patients Visits -Start ***//
export const PatientsSeries = [90, 80]
export const PatientsOptions = {
    chart: {
        height: 282,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            background: '#000',
            startAngle: -180,
            endAngle: 180,
            hollow: {
                margin: 15,
                size: '70%',
                background: '#000'
            },
            track: {
                background: '#000',
                strokeWidth: '10',
                margin: 6,
            },
            dataLabels: {
                name: {
                    fontSize: '25px',
                },
                value: {
                    fontSize: '16px',
                    fontWeight: "bold"
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (_w: any) {
                        return 249;
                    }
                }
            }
        }
    },
    stroke: {
        dashArray: 4,
        width: 5
    },
    colors: [
        "var(--primary-color)",
        "rgba(var(--success-rgb), 1)",
    ],
    labels: ['Female', 'Male'],
};
//*** Patients Visits -End ***//

//*** Upcoming Appointments -Start ***//
interface ScheduleItem {
    id: number;
    title: string;
    subtitle: string;
    startTime: string;
    endTime: string;
    color: string;
    scheduleClass: string;
}
export const Upcomingdata: ScheduleItem[] = [
    {
        id: 1,
        title: 'Meeting with Xion Shan',
        subtitle: 'G - Meets',
        startTime: '09:00',
        endTime: '11:00',
        color: 'bg-orange-transparent',
        scheduleClass: 'mb-2',
    },
    {
        id: 2,
        title: 'Updating UI Of Dashboard',
        subtitle: 'Dashboard Xin',
        startTime: '12:50',
        endTime: '13:20',
        color: 'bg-primary-transparent',
        scheduleClass: 'mb-2',
    },
    {
        id: 3,
        title: 'Assigning Tasks To Members',
        subtitle: 'Task MWU',
        startTime: '15:45',
        endTime: '16:00',
        color: 'bg-success-transparent',
        scheduleClass: '',
    },
];

interface Event {
    id: number;
    title: string;
    subtitle: string;
    startTime: string;
    endTime: string;
    avatarColor: string;
    eventClass: string;
}
export const Upcomingdata1: Event[] = [
    {
        id: 1,
        title: 'Medical Billing Workshop',
        subtitle: 'Online session',
        startTime: '09:00 AM',
        endTime: '11:00 AM',
        avatarColor: 'bg-teal-transparent',
        eventClass: 'mb-2',
    },
    {
        id: 2,
        title: 'Staff Training: Medical Records',
        subtitle: 'Online seminar',
        startTime: '11:00 AM',
        endTime: '01:00 PM',
        avatarColor: 'bg-purple-transparent',
        eventClass: 'mb-2',
    },
    {
        id: 3,
        title: 'Emergency Response Drill',
        subtitle: 'Simulation exercise',
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        avatarColor: 'bg-orange-transparent',
        eventClass: '',
    },
];

interface Upcomingdata {
    id: number;
    title: string;
    subtitle: string;
    startTime: string;
    endTime: string;
    avatarColor: string;
    itemClass: string;
}
export const Upcomingdata2: Upcomingdata[] = [
    {
        id: 1,
        title: 'Medical Equipment Meeting',
        subtitle: 'Conference room',
        startTime: '10:30 AM',
        endTime: '12:00 PM',
        avatarColor: 'bg-yellow-transparent',
        itemClass: 'mb-2',
    },
    {
        id: 2,
        title: 'Internal Audit Review',
        subtitle: 'Departmental review meeting',
        startTime: '01:30 PM',
        endTime: '03:00 PM',
        avatarColor: 'bg-teal-transparent',
        itemClass: 'mb-2',
    },
    {
        id: 3,
        title: 'Patient Care Quality Review',
        subtitle: 'Cross-department discussion',
        startTime: '04:00 PM',
        endTime: '05:30 PM',
        avatarColor: 'bg-danger-transparent',
        itemClass: '',
    },
];
///*** Upcoming Appointments -End ***//

///*** Treatments -Start ***//
interface Specialty {
    id: number;
    name: string;
    iconClass: string;
    iconBgColor: string;
    patientCount: string;
    successRate: string;
    successRateColor: string;
    sessions: string;
    class: string;
}
export const Treatmentsdata: Specialty[] = [
    {
        id: 1,
        name: 'Cardiology',
        iconClass: 'ri-heart-pulse-line',
        iconBgColor: 'bg-danger-transparent',
        patientCount: '500+ Patients Treated',
        successRate: '85%',
        successRateColor: 'text-success',
        sessions: '3 Sessions',
        class: 'mb-3'
    },
    {
        id: 2,
        name: 'Immunology',
        iconClass: 'ri-syringe-line',
        iconBgColor: 'bg-primary-transparent',
        patientCount: '700+ Vaccinations',
        successRate: '92%',
        successRateColor: 'text-info',
        sessions: '1 Follow-up',
        class: 'mb-3'
    },
    {
        id: 3,
        name: 'Neurology',
        iconClass: 'ri-brain-line',
        iconBgColor: 'bg-warning-transparent',
        patientCount: '300+ Brain Surgeries',
        successRate: '88%',
        successRateColor: 'text-success',
        sessions: '4 Sessions',
        class: 'mb-3'
    },
    {
        id: 4,
        name: 'Pediatrics',
        iconClass: 'ti ti-mood-kid',
        iconBgColor: 'bg-success-transparent',
        patientCount: '1,000+ Pediatric Patients',
        successRate: '95%',
        successRateColor: 'text-primary',
        sessions: '2 Sessions',
        class: 'mb-3'
    },
    {
        id: 5,
        name: 'Dermatology',
        iconClass: 'ri-stethoscope-line',
        iconBgColor: 'bg-info-transparent',
        patientCount: '800+ Skin Treatments',
        successRate: '90%',
        successRateColor: 'text-success',
        sessions: '3 Sessions',
        class: ''
    },
];
//*** Treatments -End ***//

//*** Patients List -Start ***//
interface Patient {
    id: string;
    patientId: string;
    name: string;
    gender: string;
    age: number;
    doctor: string;
    condition: string;
    contact: string;
    appointmentDate: string;
    roomNumber: number;
    avatar: string;
    conditionBg: string;
}
export const Patientsdata: Patient[] = [
    {
        id: '01',
        patientId: 'PATI-9XYZ',
        name: 'Alice Brown',
        gender: 'Female',
        age: 29,
        doctor: 'Dr. Sarah Lee',
        condition: 'Anemia',
        contact: '321-654-9870',
        appointmentDate: '2024-01-10',
        roomNumber: 201,
        avatar: '../../assets/images/faces/15.jpg',
        conditionBg: 'primary'
    },
    {
        id: '02',
        patientId: 'PATI-8LMN',
        name: 'Daniel Green',
        gender: 'Male',
        age: 40,
        doctor: 'Dr. James White',
        condition: 'Chronic Migraine',
        contact: '456-123-7890',
        appointmentDate: '2023-12-15',
        roomNumber: 202,
        avatar: '../../assets/images/faces/16.jpg',
        conditionBg: 'warning'
    },
    {
        id: '03',
        patientId: 'PATI-5ASD',
        name: 'Ethan Walker',
        gender: 'Male',
        age: 50,
        doctor: 'Dr. Rachel Clark',
        condition: 'Arthritis',
        contact: '567-890-1234',
        appointmentDate: '2023-11-12',
        roomNumber: 203,
        avatar: '../../assets/images/faces/12.jpg',
        conditionBg: 'success'
    },
    {
        id: '04',
        patientId: 'PATI-2QRF',
        name: 'Sophia Harris',
        gender: 'Female',
        age: 32,
        doctor: 'Dr. Michael Brown',
        condition: 'Food Allergies',
        contact: '678-901-2345',
        appointmentDate: '2023-10-05',
        roomNumber: 204,
        avatar: '../../assets/images/faces/5.jpg',
        conditionBg: 'danger'
    },
    {
        id: '05',
        patientId: 'PATI-4JTU',
        name: 'Liam Martinez',
        gender: 'Male',
        age: 42,
        doctor: 'Dr. Elizabeth Taylor',
        condition: 'High Blood Pressure',
        contact: '345-678-9012',
        appointmentDate: '2023-09-30',
        roomNumber: 205,
        avatar: '../../assets/images/faces/6.jpg',
        conditionBg: 'info'
    },
];
///*** Patients List -End ***//