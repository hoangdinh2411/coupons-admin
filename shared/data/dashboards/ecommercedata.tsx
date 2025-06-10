
import { JSX } from "react";

interface CardData {
    title: string;
    value: string;
    percentageText: string;
    percentageChange: string;
    badgeColor: string;
    icon: JSX.Element;
    iconColor: string;
}
export const cardData: CardData[] = [
    {
        title: 'Total Orders',
        value: '35,367',
        percentageText: 'Increased by',
        percentageChange: '+ 2.3%',
        badgeColor: 'success-transparent',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="p-2 bg-primary bg-opacity-25 rounded-circle" width="40px" height="40px" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"
                />
                <path
                    fill="currentColor"
                    d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641"
                    opacity="0.7"
                />
                <path
                    fill="currentColor"
                    d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802"
                    opacity="0.5"
                />
                <path
                    fill="currentColor"
                    d="m6.323 4.484l.1-.052l1.493-.784l9.1 5.005l4.025-2.011q.205.232.362.498c.15.254.262.524.346.825L17.75 9.964V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44A3 3 0 0 1 12 22c-.248 0-.493-.032-.75-.096v-9.44l-8.998-4.5c.084-.3.196-.57.346-.824q.156-.266.362-.498l9.04 4.52l3.387-1.693z"
                />
            </svg>
        ),
        iconColor: 'primary'
    },
    {
        title: 'Total Revenue',
        value: '$28,346.00',
        percentageText: 'Decreased by',
        percentageChange: '- 12.0%',
        badgeColor: 'danger-transparent',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="p-2 bg-secondary bg-opacity-25 rounded-circle" width="40px" height="40px" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.057.427-.074 1.446-.078 2.32c-2.022.067-3.237.303-4.08 1.147C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.058-1.08-4.08-1.146c-.004-.875-.02-1.894-.078-2.32c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08m3.196 4.752c-.005-.847-.019-1.758-.064-2.097c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.045.34-.06 1.25-.064 2.097Q9.34 5.999 10 6h4q.662 0 1.248.002M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                />
            </svg>
        ),
        iconColor: 'secondary'
    },
    {
        title: 'Total Sales',
        value: '24,573',
        percentageText: 'Increased by',
        percentageChange: '+ 2.3%',
        badgeColor: 'success-transparent',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="p-2 bg-success bg-opacity-25 rounded-circle" width="40px" height="40px" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z"
                    opacity="0.5"
                />
                <path
                    fill="currentColor"
                    d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6zm5.836 6.969a.75.75 0 1 0-1.172-.937l-3.476 4.345L9.53 13.97a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.116-.062z"
                />
            </svg>
        ),
        iconColor: 'success'
    },
    {
        title: 'New Visitors',
        value: '5,659',
        percentageText: 'Decreased by',
        percentageChange: '- 7.6%',
        badgeColor: 'danger-transparent',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="p-2 bg-info bg-opacity-25 rounded-circle" width="40px" height="40px" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
                />
                <path
                    fill="currentColor"
                    d="M14.477 21.92c-.726.053-1.547.08-2.477.08c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987c.237.238.542.365.964.434"
                    opacity="0.5"
                />
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        iconColor: 'info'
    },
];

export const earningSeries = [{
    name: 'Total Orders',
    type: 'line',
    data: [40, 45, 22, 22, 35, 35, 50, 65, 50, 56, 34, 57],
}, {
    name: 'Revenue',
    data: [20, 46, 46, 28, 28, 55, 30, 45, 60, 30, 46, 16],
    type: 'line',
}, {
    name: 'Profit',
    data: [20, 36, 46, 28, 28, 35, 20, 35, 22, 30, 36, 36],
    type: 'bar',
}]
export const earningOptions = {
    chart: {
        // type: 'area',
        height: 414,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
        },
        toolbar: false
    },
    grid: {
        borderColor: '#f2f6f7',
        strokeDashArray: 5,
    },
    colors: ["var(--primary-color)", "rgba(255, 183, 72, 1)", "rgba(53, 189, 170, 1)"],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            columnWidth: '20%',
            borderRadius: "4",
        }
    },
    stroke: {
        curve: ["smooth", "straight", "smooth"],
        width: [3, 2, 0],
        dashArray: [0, 4, 0],
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '12px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: any) {
                return y.toFixed(0) + "";
            }
        }
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
        axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    }
}

export const newCutomersSeries = [{
    name: 'Last Week',
    data: [650, 770, 890, 840, 1380, 1100]
}, {
    name: 'This Week',
    data: [500, 650, 820, 720, 1280, 1050]
}]
export const newCutomersOptions = {
    chart: {
        height: 225,
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    colors: ['var(--primary-color)', "rgba(53, 189, 170, 0.5)"],
    plotOptions: {
        bar: {
            barHeight: '70%',
            horizontal: true,
            borderRadius: 2,
        }
    },
    stroke: {
        width: 1,
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'top',
        markers: {
            size: 5,
            shape: "circle"
        }
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        categories: [
            ['Monday'],
            ['Tuesday'],
            ['Wedensday'],
            ['Thursday'],
            ['Friday'],
            ['Saturday'],
        ],
        labels: {
            show: false,
            style: {
                fontSize: '12px'
            },
        }
    },
    yaxis: {
        offsetX: 30,
        offsetY: 30,
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 500,
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetY: 8,
        }
    },
    tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
        x: {
            show: false
        },
        theme: "dark",
    },
}

interface CustomerData {
    name: string;
    status: string;
    location: string;
    liclass: string;
    purchases: number;
    totalSpend: string;
    lastOrder: string;
    avatar: string;
    avatarBgColor: string;
}
export const customerData: CustomerData[] = [
    {
        name: "Natalie Brown",
        status: "active",
        location: "San Francisco",
        liclass: "mb-3",
        purchases: 48,
        totalSpend: "3,784",
        lastOrder: "06 Jul,24",
        avatar: "../../assets/images/faces/6.jpg",
        avatarBgColor: "bg-secondary"
    },
    {
        name: "Alex Johnson",
        status: "active",
        location: "Los Angeles",
        liclass: "mb-3",
        purchases: 52,
        totalSpend: "5,578",
        lastOrder: "06 Jul,24",
        avatar: "", // For this one, the avatar is a letter
        avatarBgColor: "bg-primary"
    },
    {
        name: "Michael Davis",
        status: "active",
        location: "Chicago",
        liclass: "mb-3",
        purchases: 42,
        totalSpend: "2,050",
        lastOrder: "06 Jul,24",
        avatar: "../../assets/images/faces/14.jpg",
        avatarBgColor: "bg-success"
    },
    {
        name: "Sophia Lee",
        status: "active",
        location: "Seattle",
        liclass: "mb-0",
        purchases: 38,
        totalSpend: "2,003",
        lastOrder: "06 Jul,24",
        avatar: "../../assets/images/faces/8.jpg",
        avatarBgColor: "bg-info"
    }
];

//***  Top Partners -Start ***//
interface TopPartners {
    logo: string;
    name: string;
    growth: number;
    revenue: string;
    clientGrowth: number;
    color: string;
    color1: string;
}
export const TopPartnersdata: TopPartners[] = [
    {
        logo: '../../assets/images/company-logos/1.png',
        name: 'GlobalGoods Inc.',
        growth: 20,
        revenue: '$1,500,000',
        clientGrowth: 30,
        color: 'success',
        color1: 'success',
    },
    {
        logo: '../../assets/images/company-logos/3.png',
        name: 'PrimeLogistics',
        growth: 18,
        revenue: '$1,200,000',
        clientGrowth: 25,
        color: 'danger',
        color1: 'danger',
    },
    {
        logo: '../../assets/images/company-logos/4.png',
        name: 'SecurePay Solutions',
        growth: 15,
        revenue: '$950,000',
        clientGrowth: 22,
        color: 'success',
        color1: 'success',
    },
    {
        logo: '../../assets/images/company-logos/2.png',
        name: 'MarketMasters Agency',
        growth: 12,
        revenue: '$800,000',
        clientGrowth: 18,
        color: 'danger',
        color1: 'danger',
    },
    {
        logo: '../../assets/images/company-logos/6.png',
        name: 'TechConnect Services',
        growth: 10,
        revenue: '$600,000',
        clientGrowth: 15,
        color: 'success',
        color1: 'success',
    },
];

//***  Top Partners -End ***//

//***  Top Selling Products  -Start ***//

interface Product {
    imageUrl: string;
    name: string;
    category: string;
    stockStatus: 'In Stock' | 'Out Of Stock';
    quantity: string;
}
export const Sellingproducts: Product[] = [
    {
        imageUrl: '../../assets/images/media/media-93.jpg',
        name: 'Galaxy X9 Ultra Smartphone',
        category: 'Smartphones',
        stockStatus: 'In Stock',
        quantity: "7,892",
    },
    {
        imageUrl: '../../assets/images/ecommerce/png/18.png',
        name: 'Fitbit Charge 5',
        category: 'Smartwatches',
        stockStatus: 'In Stock',
        quantity: "3,578",
    },
    {
        imageUrl: '../../assets/images/ecommerce/png/17.png',
        name: 'Elegant Summer Dress',
        category: 'Fashion',
        stockStatus: 'Out Of Stock',
        quantity: "2,934",
    },
    {
        imageUrl: '../../assets/images/ecommerce/png/16.png',
        name: 'Neh Air Max 0060',
        category: 'Footwear',
        stockStatus: 'Out Of Stock',
        quantity: "4,589",
    },
];

//***  Top Selling Products  -End ***//

//***  Recent Orders  -End ***//

interface Order {
    orderId: string;
    productImage: string;
    productName: string;
    category: string;
    status: 'Delivered' | 'Shipped' | 'Cancelled' | 'Pending' | 'Returned';
    amount: number;
    date: string;
}
export const Recentorders: Order[] = [
    {
        orderId: '#42A5689',
        productImage: '../../assets/images/ecommerce/png/28.png',
        productName: 'Little Pro Kids Backpack',
        category: "Kids' Fashion",
        status: 'Delivered',
        amount: 999.00,
        date: '24th Jul, 24',
    },
    {
        orderId: '#875J789',
        productImage: '../../assets/images/ecommerce/jpg/1.jpg',
        productName: 'Wood-Handled Stainless Kettle',
        category: 'Home Essentials',
        status: 'Shipped',
        amount: 897.69,
        date: '08th Aug, 24',
    },
    {
        orderId: '#37T8746L',
        productImage: '../../assets/images/ecommerce/jpg/2.jpg',
        productName: 'Premium Leather Wallet',
        category: "Men's Accessories",
        status: 'Cancelled',
        amount: 688.00,
        date: '19th May, 24',
    },
    {
        orderId: '#589Y324',
        productImage: '../../assets/images/ecommerce/jpg/3.jpg',
        productName: 'White Heels with a Touch of Flair',
        category: "Women's Footwear",
        status: 'Pending',
        amount: 599.09,
        date: '02th Aug, 24',
    },
    {
        orderId: '#66T7845',
        productImage: '../../assets/images/ecommerce/jpg/4.jpg',
        productName: 'Stunning Long Dress for Women',
        category: 'Fashion Trends',
        status: 'Returned',
        amount: 245.99,
        date: '05th Sep, 24',
    },
];

//***  Recent Orders  -End ***//

interface CarouselItem {
    imageSrc: string;
    discount: string;
    description: string;
    rating: number;
    reviews: number;
    link: string;
    borderColor: string;
}
export const CarouselItems: CarouselItem[] = [
    {
        imageSrc: "../../assets/images/ecommerce/png/30.png",
        discount: "20% OFF",
        description: "on home decor",
        rating: 4.5,
        reviews: 22,
        link: "#!",
        borderColor: "pink",
    },
    {
        imageSrc: "../../assets/images/ecommerce/png/34.png",
        discount: "21% OFF",
        description: "on home decor",
        rating: 4.5,
        reviews: 75,
        link: "#!",
        borderColor: "primary",
    },
    {
        imageSrc: "../../assets/images/ecommerce/png/35.png",
        discount: "30% OFF",
        description: "on home decor",
        rating: 4.5,
        reviews: 66,
        link: "#!",
        borderColor: "danger",
    },
];

interface CarouselItem1 {
    imageSrc: string;
    discount: string;
    description: string;
    rating: number;
    reviews: number;
    link: string;
    borderColor: string;
    ribbonColor: string;
}
export const CarouselItems1: CarouselItem1[] = [
    {
        imageSrc: "../../assets/images/ecommerce/png/31.png",
        discount: "20% OFF",
        description: "on Fashion Wear",
        rating: 4.5,
        reviews: 111,
        link: "#!",
        borderColor: "info",
        ribbonColor: "ribbon-secondary",
    },
    {
        imageSrc: "../../assets/images/ecommerce/png/32.png",
        discount: "10% OFF",
        description: "on sports shoes",
        rating: 4.5,
        reviews: 23,
        link: "#!",
        borderColor: "warning",
        ribbonColor: "ribbon-secondary",
    },
    {
        imageSrc: "../../assets/images/ecommerce/png/33.png",
        discount: "15% OFF",
        description: "on Wrist Watch",
        rating: 4.5,
        reviews: 43,
        link: "#!",
        borderColor: "success",
        ribbonColor: "ribbon-secondary",
    },
];