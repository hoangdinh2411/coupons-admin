import SpkReviewsCard from "@/shared/@spk-reusable-components/reusable-pages/spk-reviewscard";
import SpkReviewStyle from "@/shared/@spk-reusable-components/reusable-pages/spk-reviewstyle";
import Image from "next/image";
import { Card } from "react-bootstrap";

const reviewsData = [
  {
    title: "Excellent Experience!",
    description:
      "I am extremely satisfied with the product and the outstanding service I received. The quality exceeded my expectations, and the customer support was incredible.",
    imgSrc: "../../assets/images/faces/1.jpg",
    name: "Hadley Kylin",
    role: "Product Designer",
  },
  {
    title: "Amazing Product Quality!",
    description:
      "The product arrived on time and the quality is top-notch. I am impressed by the attention to detail and the exceptional durability. Highly recommend durability.",
    imgSrc: "../../assets/images/faces/2.jpg",
    name: "Jaxon Blake",
    role: "Tech Enthusiast",
  },
  {
    title: "Unmatched Value for Money!",
    description:
      "I am incredibly happy with my purchase. The product offers fantastic features for the price. It performs as advertised, and I couldn't be more satisfied.",
    imgSrc: "../../assets/images/faces/14.jpg",
    name: "Liam Harper",
    role: "Marketing Specialist",
  },
  {
    title: "Exceeded My Expectations!",
    description:
      "The product quality and functionality are beyond what I expected. It's rare to find something that works so well and looks so good. I'll definitely be purchasing again!",
    imgSrc: "../../assets/images/faces/12.jpg",
    name: "Sophia Carter",
    role: "Business Owner",
  },
];
export const Reviewstyle1data = reviewsData.map((review, index) => (
  <div key={index}>
    <SpkReviewsCard cardClass="text-fixed-white review-01" bodyClass="text-center p-5 pb-4" review={review} />
  </div>
));

interface Review {
  imgSrc: string;
  description: string;
  name: string;
  role: string;
  rating: number;
  icon: string;
  bgColor: string;
}
const reviews: Review[] = [
  {
    imgSrc: '../../assets/images/faces/19.jpg',
    description: 'The team went above and beyond to ensure that all my questions were answered. Their dedication to customer satisfaction is truly commendable. I\'m extremely happy with my purchase!',
    name: 'Flora Mary',
    role: 'Customer Support Specialist',
    rating: 4.5,
    icon: 'half-fill',
    bgColor: 'info'
  },
  {
    imgSrc: '../../assets/images/faces/18.jpg',
    description: 'This product exceeded my expectations! The quality is excellent, and the customer service team was helpful and responsive. I would highly recommend this to anyone.',
    name: 'James Carter',
    role: 'Operations Manager',
    rating: 5.0,
    icon: 'fill',
    bgColor: 'warning'
  },
  {
    imgSrc: '../../assets/images/faces/17.jpg',
    description: 'The team went above and beyond to ensure that all my questions were answered. Their dedication to customer satisfaction is truly commendable. I\'m extremely happy with my purchase!',
    name: 'Flora Mary',
    role: 'Customer Support Specialist',
    rating: 4.5,
    icon: 'half-fill',
    bgColor: 'success'
  },
];
export const Reviewstyle2data = reviews.map((style, index) => (
  <div key={index}>
    <SpkReviewStyle cardClass="overflow-hidden" bodyClass="" style={style} />
  </div>
));

interface Review3 {
  imgSrc: string;
  name: string;
  role: string;
  rating: number;
  description: string;
}
const ReviewStyle3: Review3[] = [
  {
    imgSrc: '../../assets/images/faces/1.jpg',
    name: 'Hadley Kylin',
    role: 'Product Designer',
    rating: 4.5,
    description:
      "I am extremely satisfied with the product and the outstanding service I received. The quality exceeded my expectations, and the customer support was incredible.",
  },
  {
    imgSrc: '../../assets/images/faces/11.jpg',
    name: 'Liam Anderson',
    role: 'Web Developer',
    rating: 5.0,
    description:
      "This product has greatly improved my productivity. The user experience is seamless, and the support team went the extra mile to help with any issues I faced. Absolutely recommended!",
  },
  {
    imgSrc: '../../assets/images/faces/7.jpg',
    name: 'Olivia Bennett',
    role: 'Graphic Designer',
    rating: 4.5,
    description:
      "The design and functionality of this product are outstanding. It has made my workflow much smoother. I love the support I received from the team. Would definitely recommend to other creatives.",
  },
  {
    imgSrc: '../../assets/images/faces/13.jpg',
    name: 'Emily Johnson',
    role: 'Project Manager',
    rating: 4.5,
    description:
      "This product has transformed the way I work! It's not only efficient but also easy to use. The customer support team has been outstanding throughout the process.",
  },
];

export const Reviewstyle3data = ReviewStyle3.map((review, index) => (
  <div key={index} className="swiper-slide pt-5">
    <Card className="custom-card text-fixed-white">
      <Card.Body className="text-center p-5 py-4">
        <i className="ri-double-quotes-l review-03-quote1"></i>
        <i className="ri-double-quotes-r review-03-quote2"></i>
        <span className="avatar avatar-xxl rounded-circle mb-2 review-03-img">
          <Image width={80} height={80} src={review.imgSrc} alt={`${review.name}-image`} className="img-fluid rounded-circle"/>
        </span>
        <div className="bg-light p-3 pt-5 rounded-3">
          <p className="mb-1 fw-bold fs-14">{review.name}</p>
          <p className="mb-1 fs-11 text-muted">{review.role}</p>
          <div className="mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} className={`ri-star-${i < review.rating ? 'fill' : 'half-fill'} text-warning me-1`}/>
            ))}
          </div>
          <p>{review.description}</p>
        </div>
      </Card.Body>
    </Card>
  </div>
));


interface Review {
  imgSrc: string;
  description: string;
  name: string;
  role: string;
  rating: number;
  icon: string;
  bgColor: string;
}
const Landingreviews: Review[] = [
  {
    imgSrc: '../assets/images/faces/19.jpg',
    description: 'The team went above and beyond to ensure that all my questions were answered. Their dedication to customer satisfaction is truly commendable. I\'m extremely happy with my purchase!',
    name: 'Flora Mary',
    role: 'Customer Support Specialist',
    rating: 4.5,
    icon: 'half-fill',
    bgColor: 'info'
  },
  {
    imgSrc: '../assets/images/faces/18.jpg',
    description: 'This product exceeded my expectations! The quality is excellent, and the customer service team was helpful and responsive. I would highly recommend this to anyone.',
    name: 'James Carter',
    role: 'Operations Manager',
    rating: 5.0,
    icon: 'fill',
    bgColor: 'warning'
  },
  {
    imgSrc: '../assets/images/faces/17.jpg',
    description: 'The team went above and beyond to ensure that all my questions were answered. Their dedication to customer satisfaction is truly commendable. I\'m extremely happy with my purchase!',
    name: 'Flora Mary',
    role: 'Customer Support Specialist',
    rating: 4.5,
    icon: 'half-fill',
    bgColor: 'success'
  },
];
export const Landingreview = Landingreviews.map((style, index) => (
  <div key={index}>
    <SpkReviewStyle cardClass="overflow-hidden" bodyClass="" style={style} />
  </div>
));