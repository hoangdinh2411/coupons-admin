
import Link from "next/link"
import { Fragment, useState } from "react";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from "react-bootstrap";
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";

interface CardData {
  imgSrc: string;
  title: string;
  description: string;
  paragraph: string;
  link: string;
  links: string;
  tags: React.ReactNode;
}
export const SearchAll: CardData[] = [
  {
    imgSrc: "../../assets/images/company-logos/1.png",
    title: "Modern Admin Dashboard Template",
    description: "A complete solution for admin dashboards",
    paragraph: "The Modern Admin Dashboard template is a sleek, feature-packed template ideal for managing data in any web application, offering a clean design and user-friendly interface.",
    link: "https://www.modernadmin.com/features",
    links: "https://www.modernadmin.com/demo",
    tags: (

      <>
        <Link href="#!" scroll={false} className="badge bg-primary-transparent rounded-pill fs-11">Admin Template</Link>
        <Link href="#!" scroll={false} className="badge bg-secondary-transparent rounded-pill fs-11">Dashboard</Link>
        <Link href="#!" scroll={false} className="badge bg-success-transparent rounded-pill fs-11">Bootstrap</Link>
        <Link href="#!" scroll={false} className="badge bg-info-transparent rounded-pill fs-11">Responsive</Link>
      </>
    )
  },
  {
    imgSrc: "../../assets/images/company-logos/2.png",
    title: "Understanding AI for Beginners",
    description: "Introductory course on Artificial Intelligence",
    paragraph: "Dive into the world of Artificial Intelligence, explore the basics of machine learning, neural networks, and algorithms designed to mimic human cognition.",
    link: "https://www.companyxyz.com/ai-intro",
    links: "https://www.companyxyz.com/resources",
    tags: (
      <>
        <Link href="#!" scroll={false} className="badge bg-primary-transparent rounded-pill fs-11">AI</Link>
        <Link href="#!" scroll={false} className="badge bg-secondary-transparent rounded-pill fs-11">Machine Learning</Link>
        <Link href="#!" scroll={false} className="badge bg-success-transparent rounded-pill fs-11">Neural Networks</Link>
        <Link href="#!" scroll={false} className="badge bg-danger-transparent rounded-pill fs-11">AI Basics</Link>
      </>
    )
  },
  {
    imgSrc: "../../assets/images/company-logos/3.png",
    title: "AdminPro - Professional Admin Template",
    description: "Pro-level tools for admin dashboards",
    paragraph: "AdminPro is a fully responsive admin template designed for all your data management needs, with advanced widgets, charts, and forms to boost your dashboard experience.",
    link: "https://www.adminpro.com/documentation",
    links: "https://www.adminpro.com/pricing",
    tags: (
      <>
        <Link href="#!" scroll={false} className="badge bg-primary-transparent rounded-pill fs-11">Admin Pro</Link>
        <Link href="#!" scroll={false} className="badge bg-secondary-transparent rounded-pill fs-11">Charts</Link>
        <Link href="#!" scroll={false} className="badge bg-warning-transparent rounded-pill fs-11">Forms</Link>
        <Link href="#!" scroll={false} className="badge bg-info-transparent rounded-pill fs-11">Widgets</Link>
      </>
    )
  },
  {
    imgSrc: "../../assets/images/company-logos/5.png",
    title: "Creative UI Kit",
    description: "Comprehensive design kit for modern applications",
    paragraph: "Creative UI Kit is a robust design toolkit offering hundreds of ready-made components and templates for building modern, responsive web applications with ease.",
    link: "https://www.creativeuikit.com/components",
    links: "https://www.creativeuikit.com/documentation",
    tags: (
      <>
        <Link href="#!" scroll={false} className="badge bg-primary-transparent rounded-pill fs-11">UI Kit</Link>
        <Link href="#!" scroll={false} className="badge bg-secondary-transparent rounded-pill fs-11">Design</Link>
        <Link href="#!" scroll={false} className="badge bg-success-transparent rounded-pill fs-11">Components</Link>
        <Link href="#!" scroll={false} className="badge bg-info-transparent rounded-pill fs-11">Responsive</Link>
      </>
    )
  },
  {
    imgSrc: "../../assets/images/company-logos/6.png",
    title: "Minimalist UI Design Template",
    description: "Elegant and clean design for web and mobile apps",
    paragraph: "The Minimalist UI Design Template offers a simple yet stylish design approach for both web and mobile applications, featuring clean lines, ample white space, and highly legible typography.",
    link: "https://www.minimaluitemplate.com/features",
    links: "https://www.minimaluitemplate.com/demo",
    tags: (
      <>
        <Link href="#!" scroll={false} className="badge bg-primary-transparent rounded-pill fs-11">UI Design</Link>
        <Link href="#!" scroll={false} className="badge bg-secondary-transparent rounded-pill fs-11">Minimalist</Link>
        <Link href="#!" scroll={false} className="badge bg-success-transparent rounded-pill fs-11">Mobile</Link>
        <Link href="#!" scroll={false} className="badge bg-info-transparent rounded-pill fs-11">Clean Design</Link>
      </>
    )
  },
  {
    imgSrc: "../../assets/images/company-logos/7.png",
    title: "Pro UI Design System",
    description: "A complete UI framework for web and mobile projects",
    paragraph: "Pro UI Design System offers a comprehensive set of UI components, design patterns, and templates for building professional web and mobile interfaces with a focus on scalability and flexibility.",
    link: "https://www.prouidesignsystem.com/features",
    links: "https://www.minimaluitemplate.com/demo",
    tags: (
      <>
        <Link href="#!" scroll={false} className="badge bg-primary-transparent rounded-pill fs-11">Design System</Link>
        <Link href="#!" scroll={false} className="badge bg-secondary-transparent rounded-pill fs-11">Web Design</Link>
        <Link href="#!" scroll={false} className="badge bg-success-transparent rounded-pill fs-11">Scalable</Link>
        <Link href="#!" scroll={false} className="badge bg-info-transparent rounded-pill fs-11">UI Components</Link>
      </>
    )
  }
]

interface News {
  title: string;
  description: string;
  postedOn: string;
  author: string;
  location: string;
  avatar: string;
  dropdownItems: string[];
}
export const NewsCard: News[] = [
  {
    title: "Quantum Physicists Break New Ground",
    description:
      "In a groundbreaking experiment, quantum physicists have detected a previously unknown subatomic particle, challenging.",
    postedOn: "12-05-2024, 17:55",
    author: "Mohith Singh",
    location: "Geneva",
    avatar: "../../assets/images/faces/11.jpg",
    dropdownItems: ["Week", "Day", "Year"],
  },
  {
    title: "New Trends in Admin Templates",
    description:
      "Discover the latest trends in admin templates, offering advanced features like dark mode, custom dashboards, and fully responsive layouts for modern web applications.",
    postedOn: "12-10-2024, 11:30",
    author: "Sarah Jones",
    location: "New York",
    avatar: "../../assets/images/faces/12.jpg",
    dropdownItems: ["Week", "Day", "Year"],
  },
  {
    title: "Latest UI Components for Web Development",
    description:
      "Explore the latest UI components designed to enhance your web development projects. From customizable buttons to advanced data tables, stay ahead with cutting-edge UI kits.",
    postedOn: "12-10-2024, 09:15",
    author: "James Smith",
    location: "San Francisco",
    avatar: "../../assets/images/faces/13.jpg",
    dropdownItems: ["Week", "Day", "Year"],
  },
  {
    title: "Design Innovations for 2024",
    description:
      "2024 is bringing exciting innovations in design, from minimalistic interfaces to advanced animations. Learn about the latest design tools that will define the future of digital experiences.",
    postedOn: "12-10-2024, 14:45",
    author: "Amanda Williams",
    location: "London",
    avatar: "../../assets/images/faces/14.jpg",
    dropdownItems: ["Week", "Day", "Year"],
  },
  {
    title: "Performance Optimization for Admin Templates",
    description:
      "Learn the best practices for optimizing admin templates to ensure faster load times and better performance, even with complex data management systems.",
    postedOn: "12-09-2024, 16:20",
    author: "Michael Lee",
    location: "Toronto",
    avatar: "../../assets/images/faces/15.jpg",
    dropdownItems: ["Week", "Day", "Year"],
  },
  {
    title: "Emerging UI Trends in 2024",
    description:
      "2024 is bringing fresh UI trends, including glassmorphism, minimalistic animations, and dark mode. Stay updated on how these trends are shaping modern web applications.",
    postedOn: "12-08-2024, 10:05",
    author: "Sophia Brown",
    location: "Berlin",
    avatar: "../../assets/images/faces/16.jpg",
    dropdownItems: ["Week", "Day", "Year"],
  },
];

interface Book {
  id: number;
  imgSrc: string;
  title: string;
  tags: React.ReactNode;
  description: string;
  date: string;
  author: string;
}
export const BooksCardData: Book[] = [
  {
    id: 1,
    imgSrc: '../../assets/images/media/books/2.jpg',
    title: 'Shadows of the Forgotten',
    tags: (
      <>
        <Link scroll={false} className="badge rounded-pill me-1 bg-warning" href="#!">Mystery</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-info" href="#!">Thriller</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-pink" href="#!">Suspense</Link>
      </>
    ),
    description: 'A gripping mystery novel set in a small town where a detective uncovers secrets buried in the shadows.',
    date: 'July 15, 2021',
    author: 'Johnathan Greene',
  },
  {
    id: 2,
    imgSrc: '../../assets/images/media/books/3.jpg',
    title: 'Mastering Admin Dashboard Designs',
    tags: (
      <>
        <Link scroll={false} className="badge rounded-pill me-1 bg-primary" href="#!">Admin</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-success" href="#!">Dashboard</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-secondary" href="#!">Templates</Link>
      </>
    ),
    description: 'This book covers the essentials of designing effective admin dashboards with a focus on usability, clean code.',
    date: 'February 20, 2022',
    author: 'Daniel Roberts',
  },
  {
    id: 3,
    imgSrc: '../../assets/images/media/books/4.jpg',
    title: 'UI Design Fundamentals',
    tags: (
      <>
        <Link scroll={false} className="badge rounded-pill me-1 bg-primary" href="#!">UI</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-dark" href="#!">Design</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-success" href="#!">Patterns</Link>
      </>
    ),
    description: 'Learn the core principles of UI design, from wireframes to prototypes, focusing on creating intuitive, user-friendly interfaces.',
    date: 'March 8, 2021',
    author: 'Sophia Clark',
  },
  {
    id: 4,
    imgSrc: '../../assets/images/media/books/5.jpg',
    title: 'Design Systems: The Art of Consistency',
    tags: (
      <>
        <Link scroll={false} className="badge rounded-pill me-1 bg-info" href="#!">Design</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-secondary" href="#!">System</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-success" href="#!">Consistency</Link>
      </>
    ),
    description: 'This book dives deep into the development and maintenance of design systems, ensuring visual consistency across platforms while improving design workflow and collaboration.',
    date: 'January 14, 2023',
    author: 'Lucas Rivera',
  },
  {
    id: 5,
    imgSrc: '../../assets/images/media/books/6.jpg',
    title: 'Building Responsive Admin Templates',
    tags: (
      <>
        <Link scroll={false} className="badge rounded-pill me-1 bg-primary" href="#!">Responsive</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-success" href="#!">Admin</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-secondary" href="#!">Templates</Link>
      </>
    ),
    description: 'This comprehensive guide covers the design and development of fully responsive admin templates that work seamlessly across all devices and screen sizes.',
    date: 'August 19, 2022',
    author: 'Megan Brooks',
  },
  {
    id: 6,
    imgSrc: '../../assets/images/media/books/1.jpg',
    title: 'Creative UI Design Patterns',
    tags: (
      <>
        <Link scroll={false} className="badge rounded-pill me-1 bg-primary" href="#!">UI</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-success" href="#!">Design</Link>,
        <Link scroll={false} className="badge rounded-pill me-1 bg-warning" href="#!">Patterns</Link>
      </>
    ),
    description: 'Discover creative and effective UI design patterns used in modern web and mobile applications. This book offers practical examples and insights into intuitive user interfaces.',
    date: 'September 5, 2023',
    author: 'Olivia Turner',
  },
];

export const LightboxGallery = () => {

  const [open, setOpen] = useState(false);
  const value = true;
  const div = value.toString();

  const slidedata = [
    { src: "../../assets/images/media/media-40.jpg" },
    { src: "../../assets/images/media/media-41.jpg" },
    { src: "../../assets/images/media/media-43.jpg" },
    { src: "../../assets/images/media/media-44.jpg" },
    { src: "../../assets/images/media/media-45.jpg" },
    { src: "../../assets/images/media/media-46.jpg" },
    { src: "../../assets/images/media/media-60.jpg" }
  ]
  return (
    <Fragment>
      <Row>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/6.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">Beginner</div>
                  <div className="fs-12 text-muted ms-auto">Beginner In.co</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="../../assets/images/media/media-41.jpg" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-41.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/2.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">Responsive</div>
                  <div className="fs-12 text-muted ms-auto">Responsive Design</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/4.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">JavaScript</div>
                  <div className="fs-12 text-muted ms-auto">JavaScript Devlops</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-43.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/5.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">Layoutscss</div>
                  <div className="fs-12 text-muted ms-auto">Layout SCSS</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-44.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/6.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">frontend</div>
                  <div className="fs-12 text-muted ms-auto">Frontend Development.co</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-45.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/7.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">backenddevlops</div>
                  <div className="fs-12 text-muted ms-auto">Backend Solutions</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/8.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">Frontend Dev</div>
                  <div className="fs-12 text-muted ms-auto">Project innovations.in</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={3} md={3} sm={6} className="col-12">
          <Link href="#!" className="glightbox card search-images-card p-2" data-gallery="gallery1" onClick={() => setOpen(true)}>
            <div className="bg-light rounded">
              <Image fill src="../../assets/images/media/media-60.jpg" alt="image" className="img-fluid rounded-top" />
              <div className="p-3 bg-light rounded-bottom">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <div className="avatar avatar-xs">
                    <Image fill src="../../assets/images/company-logos/9.png" alt="" />
                  </div>
                  <div className="figure-caption fs-14 fw-medium text-default">Flawless</div>
                  <div className="fs-12 text-muted ms-auto">Masters In.co</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col xl={12} className="mb-4">
          <SpkButton Buttontype="button" Buttonvariant="info-light" Id="button-addon2" Customclass=" btn-loader mx-auto">
            <span className="me-2">Loading</span>
            <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
          </SpkButton>
        </Col>
      </Row>
      <Lightboxcomponent
        close={() => setOpen(false)}
        zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
        open={open}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        slides={slidedata}
      />

    </Fragment>
  );
};



