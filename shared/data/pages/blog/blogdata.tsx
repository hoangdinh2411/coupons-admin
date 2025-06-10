import Image from "next/image";

interface BlogPost {
    image: string;
    category: string;
    badgeClass: string;
    title: string;
    author: string;
    comments: number;
    likes: number;
    date: string;
    link: string;
}
export const blogs: BlogPost[] = [
    { image: '../../../assets/images/media/media-31.jpg', category: 'Books & Literature', badgeClass: 'bg-pink', title: 'The Magic of Books: How Stories Shape Our World', author: 'Book Enthusiast', comments: 52, likes: 18, date: '3rd October, 2024', link: '/pages/blog/blog-details/' },
    { image: '../../../assets/images/media/media-32.jpg', category: 'Nature & Health', badgeClass: 'bg-warning', title: 'The Golden Elixir: Unveiling the Health Benefits of Honey', author: 'Honey Enthusiast', comments: 58, likes: 45, date: '3rd October, 2024', link: '/pages/blog/blog-details/' },
    { image: '../../../assets/images/media/media-33.jpg', category: 'Cakes & Celebrations', badgeClass: 'bg-pink', title: 'Sweet Moments: The Art of Crafting Perfect Birthday Cakes', author: 'Cake Lover', comments: 82, likes: 47, date: '3rd October, 2024', link: '/pages/blog/blog-details/' },
    { image: '../../../assets/images/media/media-30.jpg', category: 'Autumn Vibes', badgeClass: 'bg-orange', title: 'The Magic of Autumn Leaves: Nature\'s Colorful', author: 'Autumn Lover', comments: 76, likes: 58, date: '3rd October, 2024', link: '/pages/blog/blog-details/' }
];

interface BlogCard {
    class?: string;
    badgeClass: string;
    category: string;
    link: string;
    title: string;
    description: string;
    author: string;
    authorImage: string;
    date: string;
    time: string;
    comments: number;
    likes: number;
    image: string;
    altText: string;
}
export const blogs1: BlogCard[] = [
    {
        class: 'col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6', badgeClass: 'bg-success', category: 'Spiritual Celebration', link: '/pages/blog/blogdetails', title: 'The Vibrant Spirit of Holi', description: 'Holi, the festival of colors, symbolizes the victory of good over evil and the arrival of spring. It is a time to forgive, celebrate, and spread joy among friends and family.', author: 'Sophia', authorImage: '../../../assets/images/faces/5.jpg', date: '3rd October 2024', time: '10:30', comments: 42, likes: 12, image: '../../../assets/images/media/media-36.jpg', altText: 'Celebrating Colors of Holi'
    },
    {
        class: 'col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6', badgeClass: 'bg-primary', category: 'Mountain Exploration', link: '/pages/blog/blogdetails', title: 'Peaks of the World', description: 'From the towering heights of the Himalayas to the rugged beauty of the Andes, mountains have long been a source of awe and adventure. Discover the stories.', author: 'John Explorer', authorImage: '../../../assets/images/faces/10.jpg', date: '3rd October 2024', time: '15:30', comments: 58, likes: 34, image: '../../../assets/images/media/media-86.jpg', altText: '...'
    },
    {
        class: 'col-xxl-4', badgeClass: 'bg-secondary', category: 'Art & Creativity', link: '/pages/blog/blogdetails', title: 'Celebrating Creative Minds', description: 'Artists shape our culture and emotions through their work. Explore the diverse expressions of creativity, from paintings to sculptures and everything in between.', author: 'Emma Artist', authorImage: '../../../assets/images/faces/10.jpg', date: '3rd October 2024', time: '14:30', comments: 58, likes: 25, image: '../../../assets/images/media/media-34.jpg', altText: '...'
    }
];

interface Blog2 {
    image: string;
    altText: string;
    badgeClass: string;
    category: string;
    link: string;
    title: string;
    description: string;
    author: string;
    date: string;
    time: string;
    comments: number;
    likes: number;
    imageFirst?: boolean;
    imageAfter?: boolean
}
export const blogs2: Blog2[] = [
    {
        image: '../../../assets/images/media/media-42.jpg', altText: 'Pearls', badgeClass: 'bg-info', category: 'Beauty & Elegance', link: '/pages/blog/blogdetails', title: "The Allure of Pearls: Nature's Timeless Gem", description: 'Pearls have fascinated humanity for centuries, symbolizing purity and elegance. From ancient royalty to modern.', author: 'Jewelry Expert', date: '3rd October, 2024', time: '10:30', comments: 58, likes: 25, imageFirst: true
    },
    {
        image: '../../../assets/images/media/media-45.jpg', altText: 'Milkshakes', badgeClass: 'bg-success', category: 'Delicious Treats', link: '/pages/blog/blogdetails', title: 'Indulge in the Creamy Delight of Milkshakes', description: 'Milkshakes are the perfect blend of nostalgia and indulgence. From classic flavors like chocolate and vanilla to innovative.', author: 'Foodie Blogger', date: '3rd October, 2024', time: '14:30', comments: 58, likes: 25, imageAfter: true
    }
];

export const blogCarouseldata = [
    <div>
        <Image fill src="../../../assets/images/media/media-25.jpg" className="d-block w-100" alt="..." />
    </div>,
    <div>
        <Image fill src="../../../assets/images/media/media-24.jpg" className="d-block w-100" alt="..." />
    </div>,
    <div>
        <Image fill src="../../../assets/images/media/media-23.jpg" className="d-block w-100" alt="..." />
    </div>
];

interface BlogItem {
    avatar: string;
    name: string;
    category: string;
    content: string;
    date: string;
}
export const BlogItems: BlogItem[] = [
    {
        avatar: "../../../assets/images/media/media-31.jpg", name: "Sophia Green", category: "Books", content: "Exploring the future of sustainable architecture and green living practices in modern cities.", date: "12, Nov 2024 - 10:15"
    },
    {
        avatar: "../../../assets/images/media/media-32.jpg", name: "Liam Carter", category: "Food", content: "How virtual reality is transforming travel experiences, allowing us to explore destinations from home.", date: "11, Nov 2024 - 15:45"
    }
];

interface Category {
    iconClass: string;
    title: string;
    count: string;
    iconBgClass: string;
    iconTextClass: string;
}
export const Categories: Category[] = [
    {
        iconClass: 'ri-leaf-fill', title: 'Eco-Friendly Living', count: "22 Posts", iconBgClass: 'bg-primary-transparent', iconTextClass: 'text-primary'
    },
    {
        iconClass: 'ri-flight-takeoff-fill', title: 'Adventure & Travel', count: "57 articles", iconBgClass: 'bg-secondary-transparent', iconTextClass: 'text-secondary'
    },
    {
        iconClass: 'ri-global-fill', title: 'Innovation & Tech', count: "88 updates", iconBgClass: 'bg-success-transparent', iconTextClass: 'text-success'
    },
    {
        iconClass: 'ri-home-wifi-fill', title: 'Smart Homes', count: "30 articles", iconBgClass: 'bg-pink-transparent', iconTextClass: 'text-pink'
    }
];