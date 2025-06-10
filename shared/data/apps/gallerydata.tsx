
import Link from "next/link"
import { Fragment, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";

export const GalleryList = () => {

    const [open, setOpen] = useState(false);

    const Slides = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-36.jpg" },
        { src: "../../assets/images/media/media-47.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-65.png" },
        { src: "../../assets/images/media/media-24.jpg" },
        { src: "../../assets/images/media/media-47.jpg" },
        { src: "../../assets/images/media/media-47.jpg" },
        { src: "../../assets/images/media/media-47.jpg" },
        { src: "../../assets/images/media/media-34.jpg" },
        { src: "../../assets/images/media/media-34.jpg" },
        { src: "../../assets/images/media/media-34.jpg" },
    ]

    return (
        <Fragment>
            <Row className="g-2 mb-3">
                <Col lg={3} sm={6}>
                    <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" />
                    </Link>
                    <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-36.jpg" alt="image" />
                    </Link>
                    <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-47.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} sm={6}>
                    <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-30.jpg" alt="image" />
                    </Link>
                    <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-65.png" alt="image" />
                    </Link>
                    <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-24.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={5} className="d-none d-lg-block">
                    <Row className="gx-2 gy-0">
                        <Col lg={6}>
                            <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <Image fill src="../../assets/images/media/media-47.jpg" alt="image" />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <Image fill src="../../assets/images/media/media-47.jpg" alt="image" />
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <Image fill src="../../assets/images/media/media-47.jpg" alt="image" />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <Image fill src="../../assets/images/media/media-34.jpg" alt="image" />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <Image fill src="../../assets/images/media/media-34.jpg" alt="image" />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link href="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <Image fill src="../../assets/images/media/media-34.jpg" alt="image" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}

//*** Glightbox Tabs View ***//

export const GlightboxTabs = () => {

    const [open, setOpen] = useState(false);

    const Slides = [

        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
    ]

    return (
        <Fragment>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}

export const GlightboxPopular = () => {

    const [open, setOpen] = useState(false);

    const Slides = [

        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-64.jpg" },
    ]

    return (
        <Fragment>
            <Row className="justify-content-center">
                <Col lg={7}>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-30.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-30.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} className="col-auto">
                    <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                        <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                            <Image fill src="../../assets/images/media/media-64.jpg" alt="image" className="img-fluid gallery-tab-img" />
                            <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                        </Link>
                    </Card>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}

export const GlightboxLatest = () => {

    const [open, setOpen] = useState(false);

    const Slides = [

        { src: "../../assets/images/media/media-64.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
    ]

    return (
        <Fragment>
            <Row>
                <Col lg={5} className="col-auto">
                    <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                        <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                            <Image fill src="../../assets/images/media/media-64.jpg" alt="image" className="img-fluid gallery-tab-img" />
                            <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                Lorem Ipsum is simply dummy text of the printing
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col lg={7}>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-30.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link href="#!" onClick={() => setOpen(true)} className="glightbox stretched-link" data-gallery="gallery1">
                                    <Image fill src="../../assets/images/media/media-30.jpg" alt="image" className="img-fluid gallery-tab-img" />
                                    <div className="gallery-desc p-3 text-fixed-white fw-medium">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}