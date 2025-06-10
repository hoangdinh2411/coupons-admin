
import Link from "next/link"
import { Fragment, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";

export const ProfileGallery = () => {

    const [open, setOpen] = useState(false);

    const Slides = [

        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-31.jpg" },
        { src: "../../assets/images/media/media-32.jpg" },
        { src: "../../assets/images/media/media-22.jpg" },
        { src: "../../assets/images/media/media-59.jpg" },
        { src: "../../assets/images/media/media-61.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
    ]

    return (
        <Fragment>
            <Row>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-22.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-32.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-30.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-31.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-59.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-61.jpg" alt="image" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}



interface User {
    id: number;
    name: string;
    role: string;
    image: string;
    status: "active" | "inactive";
    badgeColor: string; 
    buttonText: string; 
    buttonVariant: "primary" | "secondary" | "success";
}
export const Usersdata: User[] = [
    { id: 1, name: "Lila Emerson", role: "HR Manager", image: "/assets/images/faces/10.jpg", status: "active", badgeColor: "bg-pink", buttonText: "Unfollow", buttonVariant: "secondary" },
    { id: 2, name: "Della Jasmine", role: "Product Designer", image: "/assets/images/faces/2.jpg", status: "active", badgeColor: "bg-success", buttonText: "Unfollow", buttonVariant: "secondary" },
    { id: 3, name: "Alden Moon", role: "UX Researcher", image: "/assets/images/faces/14.jpg", status: "inactive", badgeColor: "bg-info", buttonText: "Follow", buttonVariant: "success" },
    { id: 4, name: "Leo Finch", role: "Software Engineer", image: "/assets/images/faces/5.jpg", status: "active", badgeColor: "bg-warning", buttonText: "Unfollow", buttonVariant: "secondary" },
    { id: 5, name: "Nia Harper", role: "Marketing Specialist", image: "/assets/images/faces/11.jpg", status: "inactive", badgeColor: "bg-danger", buttonText: "Follow", buttonVariant: "success" },
    { id: 6, name: "Kaiya Blake", role: "Content Strategist", image: "/assets/images/faces/7.jpg", status: "active", badgeColor: "bg-primary", buttonText: "Unfollow", buttonVariant: "secondary" },
    { id: 7, name: "Elias Quinn", role: "Data Analyst", image: "/assets/images/faces/8.jpg", status: "inactive", badgeColor: "bg-purple", buttonText: "Follow", buttonVariant: "success" },
    { id: 8, name: "Zayne Foster", role: "Sales Executive", image: "/assets/images/faces/9.jpg", status: "active", badgeColor: "bg-teal", buttonText: "Unfollow", buttonVariant: "secondary" }
];


interface Tag {
    id: number;
    name: string;
}

export const Skillsdata: Tag[] = [
    { id: 1, name: "UI/UX Design" },
    { id: 2, name: "Product Design" },
    { id: 3, name: "Prototyping" },
    { id: 4, name: "User Research" },
    { id: 5, name: "Design Systems" },
    { id: 6, name: "Wireframing" },
    { id: 7, name: "Agile Methodologies" },
    { id: 8, name: "Collaboration" },
    { id: 9, name: "Problem Solving" },
    { id: 10, name: "Design Thinking" },
    { id: 11, name: "Interaction Design" },
    { id: 12, name: "Visual Communication" }
];


interface Folllowrs {
    id: number;
    name: string;
    role: string;
    imageSrc: string;
    altText: string;
}

export const Followersdata: Folllowrs[] = [
    { id: 1, name: "Emily Carter", role: "Product Manager", imageSrc: "../../assets/images/faces/12.jpg", altText: "Emily Carter" },
    { id: 2, name: "Jordan Baker", role: "UX Designer", imageSrc: "../../assets/images/faces/14.jpg", altText: "Jordan Baker" },
    { id: 3, name: "Zyrah Thorn", role: "Digital Strategist", imageSrc: "../../assets/images/faces/15.jpg", altText: "Zyrah Thorn" },
    { id: 4, name: "Sophia Jackson", role: "Software Engineer", imageSrc: "../../assets/images/faces/3.jpg", altText: "Sophia Jackson" },
    { id: 5, name: "Ashwin Seth", role: "Senior Product Designer", imageSrc: "../../assets/images/faces/9.jpg", altText: "Ashwin Seth" },
    { id: 6, name: "Ethan Daniels", role: "Lead UX Researcher", imageSrc: "../../assets/images/faces/10.jpg", altText: "Ethan Daniels" }
];