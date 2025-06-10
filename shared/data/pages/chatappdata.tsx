
import Link from "next/link"
import { Fragment, useState } from "react"
import { Col } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";

export const ChatGallery = () => {

    const [open, setOpen] = useState(false);

    const Slides = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" },
        { src: "../../assets/images/media/media-61.jpg" },
    ]

    return (
        <Fragment>

            <div className="row">
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-61.jpg" alt="image" />
                    </Link>
                </Col>
            </div>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}

interface Recent {
    name: string;
    message: string;
    image: string;
    time: string;
    unReadMsgCount: string;
    unReadMsgStatus: string;
    status: 'online' | 'offline';
    chatMsgUnread: boolean;
    chatMsgTyping: boolean;
}
export const recents: Recent[] = [

    {
        name: ' Alex Turner ',
        message: 'Hey! How\'s everything going? 😊',
        image: '../../assets/images/faces/7.jpg',
        time: '11:12PM',
        unReadMsgCount: '5',
        unReadMsgStatus: 'bg-primary2',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },
    {
        name: 'Ella Fitzgerald',
        message: 'Typing...',
        image: '../../assets/images/faces/6.jpg',
        time: '06:52AM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: true,
    },
    {
        name: ' Liam Neeson ',
        message: 'Excited for our meeting later! ☕',
        image: '../../assets/images/faces/2.jpg',
        time: '10:15AM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },
    {
        name: ' Natalie Portman ',
        message: 'Looking forward about the matter',
        image: '../../assets/images/faces/1.jpg',
        time: '03:15PM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'online',
        chatMsgUnread: true,
        chatMsgTyping: false,
    },
];

export const allchats: Recent[] = [
    {
        name: ' Sophia Loren ',
        message: 'Let\'s catch up soon! ⭐',
        image: '../../assets/images/faces/4.jpg',
        time: '5:30 PM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'offline',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },
    {
        name: 'James Dean',
        message: 'Can you send me the files? 📄',
        image: '../../assets/images/faces/9.jpg',
        time: '10:30PM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'offline',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },
    {
        name: ' Emma Watson ',
        message: 'Thanks for your help! 😊',
        image: '../../assets/images/faces/8.jpg',
        time: '07:45AM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'offline',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },
    {
        name: ' Brad Pitt ',
        message: 'Let\'s meet next week! 📅',
        image: '../../assets/images/faces/5.jpg',
        time: '02:20PM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'offline',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },
    {
        name: ' Scarlett Johansson ',
        message: 'Can you confirm our schedule? 📅',
        image: '../../assets/images/faces/6.jpg',
        time: '03:30PM',
        unReadMsgCount: '',
        unReadMsgStatus: '',
        status: 'offline',
        chatMsgUnread: false,
        chatMsgTyping: false,
    },


];

interface ChatGroup {
    name: string;
    bg: string;
    images: string[];
    time: string;
    unReadMsgCount: string;
    unReadMsgStatus: string;
    status: 'online' | 'offline';
    chatMsgUnread: boolean;
    chatMsgTyping: boolean;
    number: string;
    online: string;
    bg1: string;
}
export const GroupData: ChatGroup[] = [
    {
        name: 'Adventure Seekers ',
        bg: "success",
        images: [
            '../../assets/images/faces/7.jpg',
            '../../assets/images/faces/8.jpg',
        ],
        time: '12:24 PM ',
        unReadMsgCount: '2',
        unReadMsgStatus: 'bg-success-transparent',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: true,
        number: "+10",
        online: "6",
        bg1: "primary"
    },
    {
        name: 'Art Enthusiasts',
        bg: "secondary",
        images: [
            '../../assets/images/faces/9.jpg',
            '../../assets/images/faces/10.jpg',
        ],
        time: '12:24 PM ',
        unReadMsgCount: '2',
        unReadMsgStatus: 'bg-warning-transparent',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: true,
        number: "+50",
        online: "4",
        bg1: "success"
    },
    {
        name: 'Nature Lovers ',
        bg: "primary",
        images: [
            '../../assets/images/faces/11.jpg',
            '../../assets/images/faces/12.jpg',
        ],
        time: '12:24 PM ',
        unReadMsgCount: '2',
        unReadMsgStatus: 'bg-primary-transparent',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: true,
        number: "+25",
        online: "7",
        bg1: "secondary"
    },
    {
        name: 'Book Club ',
        bg: "secondary",
        images: [
            '../../assets/images/faces/1.jpg',
            '../../assets/images/faces/2.jpg',
        ],
        time: '12:24 PM ',
        unReadMsgCount: '2',
        unReadMsgStatus: 'bg-success-transparent',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: true,
        number: "+30",
        online: "8",
        bg1: "secondary"
    },
    {
        name: 'Tech Updates ',
        bg: "warning",
        images: [
            '../../assets/images/faces/3.jpg',
            '../../assets/images/faces/4.jpg',
        ],
        time: '12:24 PM ',
        unReadMsgCount: '2',
        unReadMsgStatus: 'bg-success-transparent',
        status: 'online',
        chatMsgUnread: false,
        chatMsgTyping: true,
        number: "+40",
        online: "5",
        bg1: "secondary"
    },
];

export const GroupChatData = [
    {
        class: 'checkforactive',
        status: 'online',
        image: '../../assets/images/faces/7.jpg',
        name: ' Adventure Seekers ',
        time: '12:24PM',
        message: 'Mony Typing...',
        badge: '2',
        class1: "chat-msg-typing",
        class2: "chat-msg text-truncate",
        name1: ""
    },
    {
        class: 'chat-msg-unread checkforactive',
        status: 'online',
        image: '../../assets/images/faces/8.jpg',
        name: 'Art Enthusiasts',
        time: '06:16AM',
        message: ' Have any updates today?',
        class1: "",
        class2: "group-indivudial",
        name1: "Kin :"
    },
    {
        class: "chat-inactive checkforactive",
        status: 'offline',
        image: '../../assets/images/faces/9.jpg',
        name: 'Nature Lovers 🌲',
        time: '2 days ago',
        message: 'Samantha, Adam, Jessica, Emily, Alex',
        class1: "",
        class2: "chat-msg text-truncate",
        name1: ""
    },
    {
        class: "chat-inactive checkforactive",
        status: 'offline',
        image: '../../assets/images/faces/10.jpg',
        name: ' Book Club',
        time: '3 days ago',
        message: 'Elsa,Henry,Susan, Emily, Ashlin',
        class1: "",
        class2: "chat-msg text-truncate",
        name1: ""
    },
    {
        class: "chat-inactive checkforactive",
        status: 'offline',
        image: '../../assets/images/faces/11.jpg',
        name: 'Tech Updates ',
        time: '10 days ago',
        message: 'Emanuel, Rony, Alina, Lilly, Rush',
        class1: "",
        class2: "chat-msg text-truncate",
        name1: ""
    },
];

interface Call {
    image?: string | any;
    name?: string;
    time?: string;
    status?: string;
    videoCall?: string;
    callsatus?: string;
    upDown?: string;
}
export const calls: Call[] = [
    {
        name: 'Aarav Sharma',
        image: '../../assets/images/faces/1.jpg',
        time: 'Today,12:47PM',
        status: 'online',
        videoCall: '',
        callsatus: 'ms-1 incoming-call-success',
        upDown: 'ti ti-arrow-down-left',
    },
    {
        name: ' Priya Gupta',
        image: '../../assets/images/faces/2.jpg',
        time: 'Today,10:27AM',
        status: 'online',
        videoCall: '',
        callsatus: 'ms-1 outgoing-call-failed',
        upDown: 'ti ti-arrow-up-right',
    },
    {
        name: 'Vikram Malhotra',
        image: '../../assets/images/faces/3.jpg',
        time: 'Yesterday,12:45PM',
        status: 'offline',
        videoCall: 'ti ti-video',
        callsatus: 'ms-1 outgoing-call-success',
        upDown: 'ti ti-arrow-up-right',
    },
    {
        name: 'Neha Kapoor',
        image: '../../assets/images/faces/4.jpg',
        time: '3 Days ago',
        status: 'offline',
        videoCall: '',
        callsatus: 'ms-1 incoming-call-success',
        upDown: 'ti ti-arrow-down-left',
    },
    {
        name: 'Rahul Desai',
        image: '../../assets/images/faces/5.jpg',
        time: '22, Oct 2023',
        status: 'offline',
        videoCall: 'ti ti-video',
        callsatus: 'ms-1 incoming-call-success',
        upDown: 'ti ti-arrow-down-left',
    },
    {
        name: 'Priyanka Singh',
        image: '../../assets/images/faces/6.jpg',
        time: '24, Oct 2023',
        status: 'offline',
        videoCall: '',
        callsatus: 'ms-1 incoming-call-failed',
        upDown: 'ti ti-arrow-up-right',
    },
    {
        name: 'Deepika Mehta',
        image: '../../assets/images/faces/7.jpg',
        time: '22, Oct 2023',
        status: 'offline',
        videoCall: '',
        callsatus: 'ms-1 incoming-call-success',
        upDown: 'ti ti-arrow-down-left',
    },
    {
        name: 'Rohan Khanna',
        image: '../../assets/images/faces/8.jpg',
        time: '13, Oct 2023',
        status: 'online',
        videoCall: 'ti ti-video',
        callsatus: 'ms-1 incoming-call-success',
        upDown: 'ti ti-arrow-down-left',
    },
    {
        name: ' Sameer Choudhary',
        image: '../../assets/images/faces/9.jpg',
        time: '13, Sep 2023',
        status: 'online',
        videoCall: '',
        callsatus: 'ms-1 outgoing-call-failed',
        upDown: 'ti ti-arrow-up-right',
    },
    {
        name: 'Kavya Iyer',
        image: '../../assets/images/faces/10.jpg',
        time: '10, July 2023',
        status: 'offline',
        videoCall: '',
        callsatus: 'ms-1 outgoing-call-success',
        upDown: 'ti ti-arrow-up-right',
    },
    {
        name: 'Neeraj Tiwari',
        image: '../../assets/images/faces/11.jpg',
        time: '1, Apr 2023',
        status: 'offline',
        videoCall: '',
        callsatus: 'ms-1 incoming-call-success',
        upDown: 'ti ti-arrow-down-left',
    },
];


type Status = {
    id: number;
    name: string;
    time: string;
    imageSrc: string;
    isNew?: boolean;
    yourStatus?: boolean;
    newStatus?: boolean;
    views?: number;
};

export const Statusdata: Status[] = [
    { id: 1, name: "My Status", time: "Tap to add status", imageSrc: "../../assets/images/faces/9.jpg", isNew: true },
    { id: 2, name: "You", time: "Today, 09:03", imageSrc: "../../assets/images/faces/9.jpg", views: 12, yourStatus: true },
    { id: 3, name: "You", time: "Today, 08:36", imageSrc: "../../assets/images/faces/9.jpg", views: 35 },
    { id: 4, name: "Advitha", time: "Today, 13:45", imageSrc: "../../assets/images/faces/2.jpg", newStatus: true },
    { id: 5, name: "Revanth", time: "Today, 12:15", imageSrc: "../../assets/images/faces/13.jpg" },
    { id: 6, name: "Samista Roy", time: "Today, 09:32", imageSrc: "../../assets/images/faces/5.jpg" },
    { id: 7, name: "Govardhan", time: "Yesterday, 15:45", imageSrc: "../../assets/images/faces/12.jpg" },
    { id: 8, name: "Lavanya", time: "Yesterday, 14:11", imageSrc: "../../assets/images/faces/6.jpg" },
    { id: 9, name: "Sunil", time: "Yesterday, 04:12", imageSrc: "../../assets/images/faces/11.jpg" }
];

type FileItem = {
    id: number;
    name: string;
    date: string;
    icon: string;
    bgClass: string;
    downloadLink: string;
  };
  
export const FileItems: FileItem[] = [
    { id: 1, name: "Project_Report_2024.pdf", date: "01, Sep 2024 - 09:15 AM", icon: "ti-file-text", bgClass: "bg-primary", downloadLink: "#!" },
    { id: 2, name: "Project_Overview_Video.mp4", date: "30, Aug 2024 - 11:18 AM", icon: "ti-video", bgClass: "bg-info", downloadLink: "#!" },
    { id: 3, name: "Design_Mockup_2024.jpg", date: "30, Aug 2024 - 11:22 AM", icon: "ti-photo", bgClass: "bg-secondary", downloadLink: "#!" },
    { id: 4, name: "Final_Illustration_2024.png", date: "30, Aug 2024 - 11:20 AM", icon: "ti-photo", bgClass: "bg-success", downloadLink: "#!" }
  ];