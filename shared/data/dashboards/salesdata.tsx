import { JSX } from "react";

interface CardData {
    title: string;
    value: string;
    percentage: string;
    iconClass: string;
    iconBg: string;
    linkText: string;
    linkHref: string;
    badgeClass: string;
    badgeIconClass: string;
}
export const cardData: CardData[] = [
    {
        title: "Total Orders",
        value: "31,862",
        percentage: "0.25%",
        iconClass: "ti ti-shopping-bag fs-5",
        iconBg: "primary",
        linkText: "View All Orders",
        linkHref: "#!",
        badgeClass: "success",
        badgeIconClass: "ti ti-arrow-up",
    },
    {
        title: "Total Earnings",
        value: "$1.38M",
        percentage: "5.44%",
        iconClass: "ti ti-currency-dollar fs-5",
        iconBg: "secondary",
        linkText: "Complete Revenue",
        linkHref: "#!",
        badgeClass: "success",
        badgeIconClass: "ti ti-arrow-up",
    },
    {
        title: "Products Sold",
        value: "1,09,255",
        percentage: "12.34%",
        iconClass: "ti ti-box fs-5",
        iconBg: "success",
        linkText: "All Sales",
        linkHref: "#!",
        badgeClass: "danger",
        badgeIconClass: "ti ti-arrow-down",
    },
    {
        title: "Profit Percentage",
        value: "36.75%",
        percentage: "2.12%",
        iconClass: "ti ti-moneybag fs-5",
        iconBg: "info",
        linkText: "Total Profit",
        linkHref: "#!",
        badgeClass: "success",
        badgeIconClass: "ti ti-arrow-up",
    },
];

export const analysisSeries = [{
    name: 'Profit',
    data: [24, 22, 20, 26, 28, 35, 28, 23, 28, 34, 30, 34, 34, 32, 37, 40, 31, 35],
}]
export const analysisOptions = {
    chart: {
        type: 'area',
        height: 120,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgba(255,255,255,0.6)"],
    plotOptions: {
        bar: {
            columnWidth: '40%'
        }
    },
    stroke: {
        width: [0],
        curve: 'smooth',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 0.3
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 0.3
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 0.3
                    }
                ]
            ]
        }
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
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
    },
    tooltip: {
        enabled: false,
    }
}

export const analysis1Series = [{
    name: 'Profit',
    data: [34, 32, 37, 36, 38, 35, 38, 43, 48, 64, 60, 54, 54, 42, 57, 66, 41, 55, 60, 54, 66, 75, 82, 75, 43, 31, 42, 47, 33, 42, 57, 41, 64, 42, 65, 55],
}]
export const analysis1Options = {
    chart: {
        type: 'bar',
        height: 90,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["var(--primary-color)"],
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
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
    },
    tooltip: {
        enabled: false,
    }
}

export const analysis2Series = [{
    name: 'Profit',
    data: [30, 25, 30, 36, 32, 36, 36, 34, 39, 42, 33, 37, 30, 31, 35, 38, 33, 37],
}]
export const analysis2Options = {
    chart: {
        type: 'area',
        height: 140,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["var(--primary-color)"],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    stroke: {
        width: [0],
        curve: 'smooth',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 0.2
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 0.2
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 0.2
                    }
                ]
            ]
        }
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
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
    },
    tooltip: {
        enabled: false,
    }
}

export const statisticsSeries = [{
    name: 'Profit',
    data: [44, 55, 41, 67, 42, 22, 43, 21, 41, 56, 27, 43],
    type: 'column',
}, {
    name: 'Revenue',
    data: [30, 25, 46, 28, 21, 45, 35, 64, 52, 59, 36, 39],
    type: 'area',
}, {
    name: 'Sales',
    data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
    type: 'area',
},]
export const statisticsOptions = {
    chart: {
        height: 352,
        type: 'line',
        toolbar: {
            show: false,
        }, zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 0,
            blur: 4,
            color: ["transparent", "rgb(255, 183, 72)", "rgb(53, 189, 170)"],
            opacity: 0.15
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            columnWidth: "30%",
        }
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgb(255, 183, 72)",
                        opacity: 0.025
                    },
                    {
                        offset: 75,
                        color: "rgb(255, 183, 72)",
                        opacity: 0.025
                    },
                    {
                        offset: 100,
                        color: 'rgb(255, 183, 72)',
                        opacity: 0.025
                    }
                ],
                [
                    {
                        offset: 0,
                        color: 'rgb(53, 189, 170)',
                        opacity: 0.025
                    },
                    {
                        offset: 75,
                        color: 'rgb(53, 189, 170)',
                        opacity: 0.025
                    },
                    {
                        offset: 100,
                        color: 'rgb(53, 189, 170)',
                        opacity: 0.025
                    }
                ],
            ]
        }
    },
    legend: {
        position: 'top',
        fontSize: '14px',
        fontWeight: 500,
        fontFamily: 'Poppins, sans-serif',
        markers: {
            width: 9,
            height: 9,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    colors: ["var(--primary-color)", "rgb(255, 183, 72)", "rgb(53, 189, 170)"],
    stroke: {
        width: [0, 2.5, 2.5],
        curve: 'smooth',
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    tooltip: {
        shared: true,
    }
}

export const revenueSeries = [83]
export const revenueOptions = {
    chart: {
        height: 225,
        type: 'radialBar',
        responsive: 'true',
        offsetX: 0,
        offsetY: -10,
        zoom: {
            enabled: false
        }
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
                strokeWidth: "80%",
            },
            hollow: {
                size: "55%"
            },
            dataLabels: {
                name: {
                    fontSize: '15px',
                    color: undefined,
                    offsetY: 20,
                    fontWeight: [400]
                },
                value: {
                    offsetY: -20,
                    fontSize: '22px',
                    color: undefined,
                    fontWeight: [600],
                    formatter: function (val: string) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: ["var(--primary-color)"],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            type: "horizontal",
            gradientToColors: ["rgb(53, 189, 170)"],
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Revenue'],
}

export const revenueSerirs1 = [{
    name: 'Profit',
    data: [30, 25, 30, 36, 32, 36, 36, 34, 39, 42, 33, 37, 30, 31, 35, 38, 33, 37],
}]
export const revenueOptions1 = {
    chart: {
        type: 'area',
        height: 250,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["var(--primary-color)"],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    stroke: {
        width: [0],
        curve: 'smooth',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            type: "horizontal",
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 0.05
                    },
                    {
                        offset: 25,
                        color: "var(--primary-color)",
                        opacity: 0.05
                    },
                    {
                        offset: 50,
                        color: "var(--primary-color)",
                        opacity: 0.05
                    },
                    {
                        offset: 75,
                        color: "rgb(53, 189, 170)",
                        opacity: 0.05
                    },
                    {
                        offset: 100,
                        color: 'rgb(53, 189, 170)',
                        opacity: 0.05
                    }
                ]
            ]
        }
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            }
        }
    },
    xaxis: {
        type: 'month',
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
    },
    tooltip: {
        enabled: false,
    }
}

export const inComeSeries = [75]
export const inComeOptions = {
    chart: {
        type: 'radialBar',
        width: 65,
        height: 65,
        sparkline: {
            enabled: true
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%',
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    },
    colors: ["rgb(53, 189, 170)"],
}

export const IncomeBackgroundSeries = [{
    name: 'Profit',
    data: [34, 32, 37, 36, 38, 35, 38, 43, 48, 64, 60, 54, 54, 42, 57, 66, 41, 55, 60, 54, 66, 75, 82, 75, 43, 31, 42, 47, 33, 42, 57, 41, 64, 42, 65, 55],
}]
export const IncomeBackgroundOptions = {
    chart: {
        type: 'area',
        height: 80,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgba(53, 189, 170,0.6)"],
    plotOptions: {
        bar: {
            columnWidth: '40%'
        }
    },
    stroke: {
        width: [0],
        curve: 'smooth',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "rgb(53, 189, 170)",
                        opacity: 0.15
                    },
                    {
                        offset: 75,
                        color: "rgb(53, 189, 170)",
                        opacity: 0.15
                    },
                    {
                        offset: 100,
                        color: 'rgb(53, 189, 170)',
                        opacity: 0.15
                    }
                ]
            ]
        }
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
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
    },
    tooltip: {
        enabled: false,
    }
}

export const expenseSeries = [75];
export const expenseOptions = {
    chart: {
        type: 'radialBar',
        width: 65,
        height: 65,
        sparkline: {
            enabled: true
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%',
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    },
    colors: ["rgb(255, 183, 72)"],
}

export const expenseBackgroundSeries = [{
    name: 'Profit',
    data: [34, 32, 37, 36, 38, 35, 38, 43, 48, 64, 60, 54, 54, 42, 57, 66, 41, 55, 60, 54, 66, 75, 82, 75, 43, 31, 42, 47, 33, 42, 57, 41, 64, 42, 65, 55],
}]
export const expenseBackgroundOptions = {
    chart: {
        type: 'bar',
        height: 50,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgba(255, 183, 72, 0.15)"],
    plotOptions: {
        bar: {
            columnWidth: '40%'
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
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
    },
    tooltip: {
        enabled: false,
    }
}

interface BrowserData {
    name: string;
    company: string;
    sales: string;
    percentage: string;
    iconClass: string;
    badgeColor: string;
    borderColor: string;
    trendIcon: string;
    saleColor?: string;
}
export const browserData: BrowserData[] = [
    {
        name: "Google",
        company: "Google,Inc",
        sales: "14,123",
        percentage: "3.26%",
        iconClass: "ri-chrome-fill fs-4",
        badgeColor: "primary",
        borderColor: "primary",
        trendIcon: "ti ti-arrow-up",
        saleColor: 'success'
    },
    {
        name: "Edge",
        company: "Microsoft Corp,Inc",
        sales: "12,324",
        percentage: "15.27%",
        iconClass: "ri-edge-fill fs-4",
        badgeColor: "secondary",
        borderColor: "secondary",
        trendIcon: "ti ti-arrow-up",
        saleColor: 'success'
    },
    {
        name: "Firefox",
        company: "Mozilla,Inc",
        sales: "7,422",
        percentage: "-7.43%",
        iconClass: "ri-firefox-fill fs-4",
        badgeColor: "success",
        borderColor: "success",
        trendIcon: "ti ti-arrow-down",
        saleColor: 'danger'
    },
    {
        name: "Safari",
        company: "Apple Corp,Inc",
        sales: "4,833",
        percentage: "5.21%",
        iconClass: "ri-safari-fill fs-4",
        badgeColor: "pink",
        borderColor: "pink",
        trendIcon: "ti ti-arrow-up",
        saleColor: 'success'
    },
    {
        name: "Opera",
        company: "Opera,Inc",
        sales: "6,986",
        percentage: "2.95%",
        iconClass: "ri-opera-fill fs-4",
        badgeColor: "info",
        borderColor: "info",
        trendIcon: "ti ti-arrow-up",
        saleColor: 'success'
    },
];

interface ProductData {
    name: string;
    category: string;
    sales: number;
    imageUrl: string;
}
export const sellingProductData: ProductData[] = [
    {
        name: "VisionPro 55\" 4K TV",
        category: "Electronics",
        sales: 100,
        imageUrl: "../../assets/images/media/media-91.jpg",
    },
    {
        name: "EliteChair Pro",
        category: "Furniture",
        sales: 200,
        imageUrl: "../../assets/images/media/media-92.jpg",
    },
    {
        name: "StellarPhone X",
        category: "Electronics",
        sales: 150,
        imageUrl: "../../assets/images/media/media-93.jpg",
    },
    {
        name: "Gourmet Chef Knife",
        category: "Kitchen",
        sales: 300,
        imageUrl: "../../assets/images/media/media-94.jpg",
    },
    {
        name: "Fashionista Sunglasses",
        category: "Fashion",
        sales: 350,
        imageUrl: "../../assets/images/media/media-95.jpg",
    },
    {
        name: "PowerBeats Pro",
        category: "Electronics",
        sales: 150,
        imageUrl: "../../assets/images/media/media-96.jpg",
    },
];

interface ActivityData {
    title: string;
    time: string;
    description: JSX.Element | string;
    colorClass: string;
}
export const activityData: ActivityData[] = [
    {
        title: "New Lead",
        time: "12:24pm",
        description: (
            <span>
                John Smith from Acme Corp. submitted a lead for{" "}
                <span className="fw-semibold">Beekipo.</span>
            </span>
        ),
        colorClass: "text-primary",
    },
    {
        title: "Quote Sent",
        time: "10:18am",
        description: (
            <span>
                Quote{" "}
                <span className="fw-semibold text-decoration-underline">#12345</span>{" "}
                for Hexno sent to Sarah Lee this Tuesday.
            </span>
        ),
        colorClass: "text-secondary",
    },
    {
        title: "Meeting Scheduled",
        time: "11:45am",
        description: (
            <span>
                Follow-up meeting with David Kim regarding proposal for{" "}
                <span className="fw-semibold">Spruko</span> scheduled.
            </span>
        ),
        colorClass: "text-success",
    },
    {
        title: "Invoice Paid",
        time: "04:30pm",
        description: (
            <span>
                Invoice{" "}
                <span className="fw-semibold">#54321</span> for Meebom paid by
                Michael Jackson.
            </span>
        ),
        colorClass: "text-pink",
    },
    {
        title: "New Orders",
        time: "12:23am",
        description: (
            <span>
                Highest order value:{" "}
                <span className="fw-semibold">$2,500</span> for Stellar X
            </span>
        ),
        colorClass: "text-info",
    },
];

interface CountryData {
    country: string;
    flag: string;
    sales: string;
    progress: number;
    progressColor: string;
    arrowDir: string;
    arrowColor: string;
}
export const countryData: CountryData[] = [
    {
        country: "India",
        flag: "../../assets/images/flags/india_flag.jpg",
        sales: "$32,879",
        progress: 65,
        progressColor: "bg-primary",
        arrowDir: 'down',
        arrowColor: 'danger'
    },
    {
        country: "Russia",
        flag: "../../assets/images/flags/russia_flag.jpg",
        sales: "$22,710",
        progress: 55,
        progressColor: "bg-secondary",
        arrowDir: 'up',
        arrowColor: 'success'
    },
    {
        country: "Canada",
        flag: "../../assets/images/flags/canada_flag.jpg",
        sales: "$56,291",
        progress: 69,
        progressColor: "bg-success",
        arrowDir: 'down',
        arrowColor: 'danger'
    },
    {
        country: "UAE",
        flag: "../../assets/images/flags/uae_flag.jpg",
        sales: "$34,209",
        progress: 60,
        progressColor: "bg-pink",
        arrowDir: 'up',
        arrowColor: 'success'
    },
    {
        country: "United States",
        flag: "../../assets/images/flags/us_flag.jpg",
        sales: "$8,110",
        progress: 86,
        progressColor: "bg-info",
        arrowDir: 'up',
        arrowColor: 'success'
    },
    {
        country: "Germany",
        flag: "../../assets/images/flags/germany_flag.jpg",
        sales: "$67,357",
        progress: 73,
        progressColor: "bg-warning",
        arrowDir: 'up',
        arrowColor: 'success'
    },
];

interface OrderData {
    id: number;
    customerName: string;
    customerEmail: string;
    orderDate: string;
    product: string;
    orderNumber: string;
    status: string;
    amount: string;
    avatarSrc: string;
    checked: boolean;
    statusColor: string;
}
export const orderData: OrderData[] = [
    {
        id: 1,
        checked: false,
        customerName: "Sania Deo",
        customerEmail: "saniadeo231@gmail.com",
        orderDate: "1-02-2024",
        product: "Soft Toys",
        orderNumber: "#18027169169",
        status: "Delivered",
        amount: "$3,278",
        avatarSrc: "../../assets/images/faces/11.jpg",
        statusColor: 'success',
    },
    {
        id: 2,
        checked: true,
        customerName: "Labina Martina",
        customerEmail: "labinamartina@gmail.com",
        orderDate: "10-03-2024",
        product: "Mobiles Phone",
        orderNumber: "#15263748493",
        status: "Out for Delivery",
        amount: "$36,628",
        avatarSrc: "../../assets/images/faces/2.jpg",
        statusColor: 'success',
    },
    {
        id: 3,
        checked: true,
        customerName: "Sania Martina",
        customerEmail: "saniamartina@gmail.com",
        orderDate: "5-04-2024",
        product: "Photo Frame",
        orderNumber: "#17890345670",
        status: "Pending",
        amount: "$978",
        avatarSrc: "../../assets/images/faces/4.jpg",
        statusColor: 'warning',
    },
    {
        id: 4,
        checked: false,
        customerName: "Carmen Goh",
        customerEmail: "carmengoh32@gmail.com",
        orderDate: "28-02-2024",
        product: "Decorative Flower",
        orderNumber: "#50935467837",
        status: "Shipped",
        amount: "$10,243",
        avatarSrc: "../../assets/images/faces/8.jpg",
        statusColor: 'warning',
    },
    {
        id: 5,
        checked: true,
        customerName: "Barry Kade",
        customerEmail: "barrykade22@gmail.com",
        orderDate: "17-03-2024",
        product: "Bag",
        orderNumber: "#23687364789",
        status: "Cancelled",
        amount: "$4,897",
        avatarSrc: "../../assets/images/faces/14.jpg",
        statusColor: 'danger',
    }
];

interface Customer {
    id: string;
    name: string;
    company: string;
    avatarSrc: string;
    amount: string;
    badgeColor: string;
}
export const customerData: Customer[] = [

    {
        id: "customer1",
        name: "John Doe",
        company: "Customer ID - #1902545",
        avatarSrc: "../../assets/images/faces/11.jpg",
        amount: "$2,000",
        badgeColor: "primary"
    },
    {
        id: "customer2",
        name: "Emiley",
        company: "Customer ID - #1902533",
        avatarSrc: "../../assets/images/faces/1.jpg",
        amount: "$2,360",
        badgeColor: "secondary"
    },
    {
        id: "customer3",
        name: "Leo Phillip",
        company: "Customer ID - #1902241",
        avatarSrc: "../../assets/images/faces/14.jpg",
        amount: "$2,500",
        badgeColor: "success"
    },
    {
        id: "customer4",
        name: "Jane Smith",
        company: "Customer ID - #1902613",
        avatarSrc: "../../assets/images/faces/5.jpg",
        amount: "$3,000",
        badgeColor: "info"
    },
    {
        id: "customer5",
        name: "Josh Matthews",
        company: "Customer ID - #1902111",
        avatarSrc: "../../assets/images/faces/10.jpg",
        amount: "$2,500",
        badgeColor: "pink"
    },
    {
        id: "customer6",
        name: "Taylor Jackson",
        company: "Customer ID - #19022311",
        avatarSrc: "../../assets/images/faces/7.jpg",
        amount: "$2,833",
        badgeColor: "teal"
    }
];

//*** Sales By Traffic -Start ***//

interface ListItem {
    type: string;
    percentage: number;
    count: string;
    isPositive: boolean;
}
export const SalesByTraffic: ListItem[] = [
    { type: 'Organic', percentage: 0.56, count: "32,164", isPositive: true },
    { type: 'Paid', percentage: 4.23, count: "16,343", isPositive: true },
    { type: 'Referral', percentage: 6.88, count: "18,564", isPositive: false },
];

//*** Sales By Traffic -End ***//

