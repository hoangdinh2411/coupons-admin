
import { Fragment, useState } from "react";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";

export const LightboxGallery = () => {

  const [open, setOpen] = useState(false);
  const value = true;
  const div = value.toString();

  const slidedata = [
    { src: "../../../assets/images/media/media-48.jpg" },
    { src: "../../../assets/images/media/media-49.jpg" },
    { src: "../../../assets/images/media/media-50.jpg" },
    { src: "../../../assets/images/media/media-51.jpg" },
    { src: "../../../assets/images/media/media-52.jpg" },
    { src: "../../../assets/images/media/media-53.jpg" },
    { src: "../../../assets/images/media/media-54.jpg" },
    { src: "../../../assets/images/media/media-55.jpg" },
    { src: "../../../assets/images/media/media-56.jpg" }

  ]
  return (
    <Fragment>
      <Row className="gy-3">
        <Col sm={6} className="col-6">
          <Link href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <Image fill src="../../../assets/images/media/media-52.jpg" alt="image" />
          </Link>
        </Col>
        <Col sm={6} className="col-6">
          <Link href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <Image fill src="../../../assets/images/media/media-56.jpg" alt="image" />
          </Link>
        </Col>
        <Col lg={4} sm={6} className="col-6">
          <Link href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <Image fill src="../../../assets/images/media/media-55.jpg" alt="image" />
          </Link>
        </Col>
        <Col lg={4} sm={6} className="col-6">
          <Link href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <Image fill src="../../../assets/images/media/media-53.jpg" alt="image" />
          </Link>
        </Col>
        <Col lg={4} md={4} sm={6} className="col-6">
          <Link href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <Image fill src="../../../assets/images/media/media-54.jpg" alt="image" />
          </Link>
        </Col>
      </Row>

      <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={slidedata} index={0} />

    </Fragment>
  );
};

interface BlogItem {
  image: string;
  altText: string;
  category: string;
  link: string;
  date: string;
  time: string;
  contentTitle: string;
  categoryColor: string;
}
export const blogItems: BlogItem[] = [
  {
    image: '../../../assets/images/media/media-52.jpg', altText: 'Milkshake Recipe', category: 'Milkshakes', link: '#!', date: '3rd October 2024', time: '10:33', contentTitle: 'The Ultimate Chocolate Milkshake Recipe', categoryColor: 'text-info'
  },
  {
    image: '../../../assets/images/media/media-53.jpg', altText: 'Milkshake Varieties', category: 'Beverages', link: '#!', date: '3rd October 2024', time: '14:45', contentTitle: 'Exploring Different Milkshake Varieties', categoryColor: 'text-pink'
  },
  {
    image: '../../../assets/images/media/media-54.jpg', altText: 'Healthy Milkshake Options', category: 'Health', link: '#!', date: '3rd October 2024', time: '11:23', contentTitle: 'Healthy Milkshake Options for a Balanced Diet', categoryColor: 'text-primary'
  },
  {
    image: '../../../assets/images/media/media-55.jpg', altText: 'Milkshake Toppings', category: 'Desserts', link: '#!', date: '3rd October 2024', time: '15:11', contentTitle: 'Tasty Toppings to Elevate Your Milkshake Experience', categoryColor: 'text-secondary'
  }
];

interface ListItem {
  icon: string;
  category: string;
  badgeClass: string;
  badgeCount: number;
  listClass: string;
}
export const relatedItems: ListItem[] = [
  {
    icon: 'ri-drinks-2-fill', category: 'Milkshakes', badgeClass: 'primary', badgeCount: 25, listClass: 'secondary'
  },
  {
    icon: 'ri-goblet-2-fill', category: 'Ice Cream', badgeClass: 'secondary', badgeCount: 18, listClass: 'primary'
  },
  {
    icon: 'ri-blender-fill', category: 'Smoothies', badgeClass: 'danger', badgeCount: 12, listClass: 'success'
  },
  {
    icon: 'ri-cake-2-fill', category: 'Desserts', badgeClass: 'info', badgeCount: 20, listClass: 'danger'
  },
  {
    icon: 'ri-drinks-fill', category: 'Beverages', badgeClass: 'pink', badgeCount: 30, listClass: 'info'
  },
  {
    icon: 'ri-bubble-chart-fill', category: 'Snacks', badgeClass: 'success', badgeCount: 15, listClass: "warning"
  }
];

interface BadgeItem {
  label: string;
  link: string;
}
export const badgeItems: BadgeItem[] = [
  { label: '#milkshake', link: '#!' },
  { label: '#recipes', link: '#!' },
  { label: '#desserts', link: '#!' },
  { label: '#beverages', link: '#!' },
  { label: '#smoothies', link: '#!' },
  { label: '#toppings', link: '#!' },
  { label: '#summerdrinks', link: '#!' },
  { label: '#creamy', link: '#!' },
  { label: '#chocolate', link: '#!' },
  { label: '#fruity', link: '#!' },
  { label: '#healthy', link: '#!' },
  { label: '#homemade', link: '#!' },
  { label: '#milkshakeart', link: '#!' },
  { label: '#flavors', link: '#!' }
];

interface BlogPost {
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  time: string;
  title: string;
  altText: string;
}

export const PopularPosts: BlogPost[] = [
  {
    image: '../../../assets/images/media/media-52.jpg', category: 'Milkshakes', categoryColor: 'text-info', date: '3rd October 2024', time: '10:15', title: 'The Ultimate Chocolate Milkshake Recipe', altText: 'Milkshake Recipe'
  },
  {
    image: '../../../assets/images/media/media-53.jpg', category: 'Beverages', categoryColor: 'text-pink', date: '3rd October 2024', time: '14:45', title: 'Exploring Different Milkshake Varieties', altText: 'Milkshake Varieties'
  },
  {
    image: '../../../assets/images/media/media-55.jpg', category: 'Desserts', categoryColor: 'text-secondary', date: '3rd October 2024', time: '15:11', title: 'Tasty Toppings to Elevate Your Milkshake Experience', altText: 'Milkshake Toppings'
  }
];