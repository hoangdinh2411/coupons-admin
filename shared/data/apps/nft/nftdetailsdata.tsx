
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { Row } from "react-bootstrap";

export const Swiperdata = [
    <div className="" id="img-container">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/3.png" alt="img" />
    </div>,
    <div className="image-container">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/4.png" alt="img" />
    </div>,
    <div className="image-container">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/5.png" alt="img" />
    </div>,
    <div className="image-container">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/6.png" alt="img" />
    </div>,
]

interface NftType {
    name: string;
    date: string;
    rating: number;
    title: string;
    description: string;
    avatar: string;
    images: string | any;
    badge: string;
    badges: string;
}
const nftReviews: NftType[] = [
    {
        name: "Alexander",
        date: "12 Aug, 2024 - 09:30AM",
        rating: 4.5,
        title: "Ethereal Landscapes 🌍",
        description: "Ethereal Landscapes is a mesmerizing NFT that transports you to serene vistas filled with breathtaking colors and tranquil elements.",
        avatar: "../../../assets/images/faces/15.jpg",
        badge: 'Art',
        badges: 'Creative',
        images: [
            "../../../assets/images/nft-images/21.png",
            "../../../assets/images/nft-images/22.png"
        ]
    },
    {
        name: "Sophia Clark ",
        date: "5 Sep, 2024 - 02:15PM ",
        rating: 4.0,
        title: "Celestial Harmony",
        description: "Celestial Harmony invites you into a world where the sky meets the earth in perfect balance and beauty.",
        avatar: "../../../assets/images/faces/10.jpg",
        badge: 'Inspiration',
        badges: 'Nature',
        images: [
            "../../../assets/images/nft-images/23.png",
            "../../../assets/images/nft-images/24.png"
        ]
    }
];

export const NftSwiper = nftReviews.map((review, index) => (
    <div key={index}>
        <div className="border rounded p-3">
            <div className="d-sm-flex d-block align-items-top mb-3">
                <div className="d-flex flex-fill">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded">
                            <Image height={28} width={28} src={review.avatar} alt={review.name} />
                        </span>
                    </div>
                    <div className="lh-1 me-2">
                        <p className="mb-1 fw-medium fs-14">{review.name}</p>
                        <div className="mb-1">
                            <span className="fs-11 text-muted">{review.date}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-1 ms-auto text-end">
                    <i className="ri-star-fill fs-15 text-warning align-middle me-1"></i>
                    <span className="align-middle">{review.rating}</span>
                </div>
            </div>
            <div className="ps-sm-4 ps-0 mb-3">
                <div className="tags mb-1">
                    <span className="badge bg-info me-1">{review.badge}</span>
                    <span className="badge bg-success text-fixed-white">{review.badges}</span>
                </div>
                <p className="fw-medium mb-1 ps-2">{review.title}</p>
                <p className="mb-0 fs-12 text-muted ps-2">{review.description}</p>
            </div>
            <div className="product-images ps-sm-4 ps-0">
                <Row>
                    <div className="col-xl-6">
                        <div className="">
                            {review.images.map((img: string | undefined, imgIndex: any) => (
                                <Link key={imgIndex} href="#!" scroll={false} className="avatar avatar-sm me-1">
                                    <Image fill src={img as string} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="me-2">Report abuse</SpkButton>
                        <SpkButton Buttonvariant="success-light" Size="sm" Customclass="btn-icon me-2">
                            <i className="ri-thumb-up-line"></i>
                        </SpkButton>
                        <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon">
                            <i className="ri-thumb-down-line"></i>
                        </SpkButton>
                    </div>
                </Row>
            </div>
        </div>
    </div>
))

interface ListItemData {
    label: string;
    value: string;
};
export const ListData: ListItemData[] = [
    { label: 'NFT Title', value: '"Ethereal Horizons"' },
    { label: 'Edition', value: 'Limited edition of 50' },
    { label: 'Tags', value: '#ethereallandscape, #fantasyart, #digitalmasterpiece' },
    { label: 'Creation Date', value: 'September 12, 2024' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Dimensions', value: '4000x3000 pixels' },
    { label: 'Exhibition History', value: 'NFT Art Showcase 2024 - Digital Dreams Gallery, London' },
];

interface NftRowData {
    imageSrc: string;
    title: string;
    likes: number;
    artist: string;
    date: string;
    price: number;
    oldPrice: number;
    avatarSrc: string;
};
export const Bidsdata: NftRowData[] = [
    {
        imageSrc: '../../../assets/images/nft-images/16.png',
        title: 'Digital Dreamscapes',
        likes: 24,
        artist: 'Ananth',
        date: '24, Sep 2024 - 12:45PM',
        price: 2.299,
        oldPrice: 3.299,
        avatarSrc: '../../../assets/images/faces/9.jpg',
    },
    {
        imageSrc: '../../../assets/images/nft-images/17.png',
        title: 'Cosmic Reflections',
        likes: 45,
        artist: 'Maya',
        date: '15, Aug 2024 - 02:30PM',
        price: 1.875,
        oldPrice: 2.5,
        avatarSrc: '../../../assets/images/faces/10.jpg',
    },
    {
        imageSrc: '../../../assets/images/nft-images/18.png',
        title: 'Future Visions',
        likes: 30,
        artist: 'Leo',
        date: '10, Sep 2024 - 03:15PM',
        price: 3.15,
        oldPrice: 4.0,
        avatarSrc: '../../../assets/images/faces/11.jpg',
    },
    {
        imageSrc: '../../../assets/images/nft-images/19.png',
        title: 'Mystical Forest',
        likes: 60,
        artist: 'Sarah',
        date: '05, Oct 2024 - 01:00PM',
        price: 4.8,
        oldPrice: 5.5,
        avatarSrc: '../../../assets/images/faces/12.jpg',
    },
];