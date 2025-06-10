interface CryptoItem {
    label: string;
    value: number;
}
export const SellCrypto: CryptoItem[] = [
    { label: 'BTC', value: 1 },
    { label: 'ETH', value: 2 },
    { label: 'XRP', value: 3 },
    { label: 'DASH', value: 4 },
    { label: 'NEO', value: 5 },
    { label: 'LTC', value: 6 },
    { label: 'BSD', value: 7 },
]

export const SellCrypto1: CryptoItem[] = [
    { label: 'USD', value: 1 },
    { label: 'AED', value: 2 },
    { label: 'AUD', value: 3 },
    { label: 'ARS', value: 4 },
    { label: 'AZN', value: 5 },
    { label: 'BGN', value: 6 },
    { label: 'BRL', value: 7 },
]

export const PaymentSelect: CryptoItem[] = [
    { label: 'Select Payment Method', value: 1 },
    { label: 'Credit / Debit Card', value: 2 },
    { label: 'PayPal', value: 3 },
    { label: 'Wallet', value: 4 },
    { label: 'Bank Transfer', value: 5 },
    { label: 'Cryptocurrency', value: 6 }
]

export const Staticseries = [{
    type: 'bar',
    name: "Deposits",
    data: [12, 30, 45, 55, 65, 80, 50, 70, 85, 95, 40, 75],
}, {
    type: 'bar',
    name: "Withdrawals",
    data: [60, 50, 70, 20, 90, 25, 55, 35, 40, 65, 55, 80]
}]

export const Staticoptions = {
    chart: {
        height: 316,
        type: 'bar',
        zoom: {
            enabled: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 3
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold",
        markers: {
            size: 4,
            strokeWidth: 0,
            shape: "circle",
        }
    },
    stroke: {
        curve: 'smooth',
    },
    markers: {
        size: 5,
        hover: {
            size: 7
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["var(--primary-color)", "rgba(53, 189, 170, 0.8)"],
    yaxis: {
        title: {
            text: 'Transaction Amount (in TL)',
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

interface CryptoCardData {
    id: number;
    symbol: string;
    price: string;
    change: string;
    availableBalance: string;
    assetValue: string;
    totalBuy: string;
    totalSell: string;
    imageUrl: string;
}
export const Buydata: CryptoCardData[] = [
    {
        id: 1,
        symbol: 'BTC/USD',
        price: '27,536.12',
        change: '-0.06% (24h)',
        availableBalance: '$22,803.92 USD',
        assetValue: '$456,683.00 USD',
        totalBuy: '$324.25 USD',
        totalSell: '$4,235.25 USD',
        imageUrl: '../../../assets/images/crypto-currencies/square-color/Bitcoin.svg',
    },
    {
        id: 2,
        symbol: 'ETH/USD',
        price: '1,837.45',
        change: '+1.23% (24h)',
        availableBalance: '$10,452.67 USD',
        assetValue: '$150,300.00 USD',
        totalBuy: '$1,234.56 USD',
        totalSell: '$3,456.78 USD',
        imageUrl: '../../../assets/images/crypto-currencies/square-color/Ethereum.svg',
    },
    // Add more crypto card data as needed
];