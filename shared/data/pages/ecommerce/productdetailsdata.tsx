
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { MasterData } from "./productsdata";
import SpkProductscard from "@/shared/@spk-reusable-components/reusable-pages/spk-productscard";
import Image from "next/image";

export const ProductDetailsSwiper = [
  <div className="p-4" id="img-container">
    <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/10.png" alt="img" />
  </div>,
  <div className="p-4 image-container">
    <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/11.png" alt="img" />
  </div>,
  <div className="p-4 image-container">
    <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/9.png" alt="img" />
  </div>,
  <div className="p-4 image-container">
    <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/12.png" alt="img" />
  </div>
]

export const ProductDetailsSwiperthumb = [
  <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/10.png" alt="img" />,
  <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/11.png" alt="img" />,
  <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/9.png" alt="img" />,
  <Image fill className="img-fluid" src="../../../assets/images/ecommerce/png/12.png" alt="img" />
]

//*** Featured Products-Start  ***//
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  rating: number;
}
export const Featuredproducts: Product[] = [
  {
    id: 1,
    name: "Ladies' Sling Bag",
    imageUrl: "../../../assets/images/ecommerce/png/1.png",
    price: 545,
    originalPrice: 854,
    rating: 4.3
  },
  {
    id: 2,
    name: "Wireless Headphones",
    imageUrl: "../../../assets/images/ecommerce/png/2.png",
    price: 545,
    originalPrice: 854,
    rating: 4.3
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    imageUrl: "../../../assets/images/ecommerce/png/3.png",
    price: 545,
    originalPrice: 854,
    rating: 4.3
  },
  {
    id: 4,
    name: "Voluptatem Alarm Clock",
    imageUrl: "../../../assets/images/ecommerce/png/4.png",
    price: 545,
    originalPrice: 854,
    rating: 4.3
  },
  {
    id: 5,
    name: "Lightweight Sneakers",
    imageUrl: "../../../assets/images/ecommerce/png/5.png",
    price: 545,
    originalPrice: 854,
    rating: 4.3
  }
];

//*** Featured Products-End  ***//
interface ProductDetail {
  label: string;
  value: string;
}
export const ProductDetails: ProductDetail[] = [
  { label: "Brand", value: "RoyaliX" },
  { label: "Series", value: "Elegance Series" },
  { label: "Material", value: "Premium Stainless Steel" },
  { label: "Type", value: "Wrist Chain Watch" },
  { label: "Water Resistance", value: "Up to 50 meters" },
  { label: "Warranty", value: "2 Years International Warranty" }
];


interface Feature {
  label: string;
  description: string;
}
export const Featuresdata: Feature[] = [
  {
    label: "Design",
    description: "Sleek and sophisticated design crafted from premium stainless steel for a luxurious and durable finish."
  },
  {
    label: "Water Resistance",
    description: "Up to 50 meters of water resistance, making it perfect for daily wear and light water activities."
  },
  {
    label: "Movement",
    description: "Precision quartz movement ensures accurate timekeeping with minimal maintenance."
  },
  {
    label: "Strap",
    description: "Stainless steel wrist chain with a secure clasp for a comfortable yet elegant fit."
  },
  {
    label: "Warranty",
    description: "Backed by a 2-year international warranty, offering peace of mind for your purchase."
  },
  {
    label: "Dial",
    description: "Classic round dial with minimalistic markers for a timeless and refined look."
  },
  {
    label: "Luminous Hands",
    description: "Features glow-in-the-dark hands for easy readability, even in low-light conditions."
  },
  {
    label: "Style",
    description: "Perfectly suited for both formal occasions and everyday wear, elevating your fashion game effortlessly."
  }
];

//*** Reviews - Start ***//
interface Review {
  avatarUrl: string;
  title: string;
  description: string;
  reviewerName: string;
  rating: number;
  date: string;
}
export const reviews: Review[] = [
  {
    avatarUrl: "../../../assets/images/faces/1.jpg",
    title: "Elegance and Durability Combined!",
    description: "The RoyaliX Elegance Series watch is a perfect blend of style and durability. The stainless steel design is stunning, and it's comfortable for daily wear. The water resistance is a great!",
    reviewerName: "Neelin Mehta",
    rating: 4.8,
    date: "3rd Mar, 2024"
  },
  {
    avatarUrl: "../../../assets/images/faces/12.jpg",
    title: "Stylish and Comfortable!",
    description: "I absolutely love my RoyaliX Elegance Series watch. The stainless steel wrist chain is both elegant and comfortable, and it fits perfectly. The luminous hands make it easy to read!",
    reviewerName: "Paramesh Jen",
    rating: 4.7,
    date: "3rd Mar, 2024"
  }
];

export const Reviwsdata = reviews.map((review, index) => (
  <div className="swiper-slide" key={index}>
    <div className="d-sm-flex d-block align-items-start">
      <span className="avatar avatar-md avatar-rounded me-2 flex-shrink-0">
        <Image width={40} height={40} src={review.avatarUrl} alt={review.reviewerName} />
      </span>
      <div>
        <div className="mb-3">
          <p className="fw-semibold mb-1">{review.title}</p>
          <p className="mb-0 fs-11">{review.description}</p>
        </div>
        <div className="fw-medium">-- {review.reviewerName}</div>
      </div>
      <div className="ms-auto mt-sm-0 mt-2 text-end">
        <div className="mb-3 fs-11 fw-normal text-nowrap">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle ${i < review.rating ? 'text-warning' : 'text-muted'}`}
            />
          ))}
          {review.rating}   <span className="text-muted fs-10">({review.date})</span>
        </div>
        <SpkButton Buttonvariant="light" Customclass="btn-sm me-2" Buttontype="button"> Report </SpkButton>
        <SpkButton Buttonvariant="primary-light" Customclass="btn-sm btn-icon me-2" Buttontype="button">
          <i className="ri-thumb-up-line" />
        </SpkButton>
        <SpkButton Buttonvariant="primary-light" Customclass="btn-sm btn-icon" Buttontype="button">
          <i className="ri-thumb-down-line" />
        </SpkButton>
      </div>
    </div>
  </div>
))

//*** Reviews - End ***//

export const SwiperProducts = MasterData.map((review, index) => (
  <SpkProductscard key={index} idx={review} />
))