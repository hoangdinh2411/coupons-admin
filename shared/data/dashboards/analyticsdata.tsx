
export const AnalyticsSeries = [{
    name: 'Value',
    data: [0, 21, 54, 38, 56, 24, 65, 25, 53, 33, 70]
}]
export const AnalyticsOptions = ({ color }: any) => ({
    chart: {
        type: 'line',
        height: 50,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        }
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    stroke: {
        show: true,
        curve: 'straight',
        width: 2,
        dashArray: 1,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    yaxis: {
        min: 0,
        show: false
    },
    xaxis: {
        show: false,
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    // yaxis: {
    //     axisBorder: {
    //         show: false
    //     },
    // },
    colors: [color],
})

interface AnalyticsCardData {
    icon: string;
    bgColor: string;
    title: string;
    users: string;
    percentage: string;
    chartOptions: any;
    chartSeries: any;
    type: string;
    textColor: string;
}
export const AnalyticsData: AnalyticsCardData[] = [
    {
        icon: 'ti-user',
        bgColor: 'primary',
        title: 'Total Users',
        users: '$12,432',
        percentage: '+ 2.10%',
        chartOptions: AnalyticsOptions({ color: 'var(--primary-color)' }),
        chartSeries: AnalyticsSeries,
        type: "line",
        textColor: 'success'
    },
    {
        icon: 'ti-currency-dollar',
        bgColor: 'success',
        title: 'Income',
        users: '$35,897',
        percentage: '- 1.03%',
        chartOptions: AnalyticsOptions({ color: 'rgba(var(--success-rgb), 1)' }),
        chartSeries: AnalyticsSeries,
        type: "line",
        textColor: 'danger'
    },
    {
        icon: 'ti-moneybag',
        bgColor: 'secondary',
        title: 'Revenue',
        users: '$35,897',
        percentage: '+ 0.45%',
        chartOptions: AnalyticsOptions({ color: 'rgba(var(--secondary-rgb), 1)' }),
        chartSeries: AnalyticsSeries,
        type: "line",
        textColor: 'success'
    },
]

//*** Audience Overview -Start ***//
export const AudienceSeries = [
    {
        name: 'Views',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
    },
    {
        name: 'Followers',
        type: 'column',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
    },
]
export const AudienceOptions = {
    chart: {
        toolbar: {
            show: false
        },
        type: 'line',
        height: 328,
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1.1],
        curve: ['straight', 'smooth'],
    },
    legend: {
        show: true,
        position: 'top',
        markers: {
            shape: "diamond",
            size: 5
        }
    },
    xaxis: {
        axisBorder: {
            color: '#e9e9e9',
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "45%",
            borderRadius: 2
        }
    },
    colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)"],
}
//*** Audience Overview - End ***//

//*** Impression Overview - Start ***//
export const ImpressionSeries = [1800, 987, 752, 368]
export const ImpressionOptions = {
    labels: ["Email", "Search", "Social", "Direct"],
    chart: {
        height: 235,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: "#fff",
        width: 3,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'rgba(var(--light-rgb), 1)',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: 0
                    },
                    value: {
                        show: true,
                        fontSize: '12px',
                        fontFamily: "Poppins",
                        color: undefined,
                        offsetY: 10,
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Impression',
                        fontSize: '14px',
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        color: '#495057',
                    }

                }
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(var(--success-rgb), 1)", "rgba(var(--secondary-rgb), 1)", "rgba(var(--info-rgb), 1)",],
}
//*** Impression Overview - End ***//

//*** Bounce Rate : - Start ***//
export const BounceSeries = [{
    name: 'Value',
    data: [65, 38, 56, 22, 65, 96, 53, 45, 62, 80, 35, 48]
},
{
    name: 'Value',
    data: [25, 88, 62, 80, 35, 48, 54, 100, 56, 35, 65, 50]
}]
export const BounceOptions = {
    chart: {
        type: 'line',
        height: 66,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: '#fff',
            opacity: 0.05
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        dashArray: [0, 4],
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    yaxis: {
        min: 0,
        show: false
    },
    xaxis: {
        axisBorder: {
            show: false
        },
    },
    // yaxis: {
    //     axisBorder: {
    //         show: false
    //     },
    // },
    colors: ["var(--primary-color)", "rgba(var(--secondary-rgb), 1)"],
    tooltip: {
        enabled: false,
    }
}
//*** Bounce Rate : - End ***//

//*** Sessions : - Start ***//
export const SessionsSeries = [{
    name: 'Value',
    data: [65, 38, 56, 22, 65, 96, 53, 45, 62, 80, 35, 48]
}]
export const SessionsOptions = {
    chart: {
        type: 'area',
        height: 66,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        dashArray: [0, 4],
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            gradientToColors: ['#35bdaa'],
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0.05,
            stops: [0, 100]
        },
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        axisBorder: {
            show: false
        },
    },
    colors: ["#35bdaa"],
    tooltip: {
        enabled: false,
    }
}
//*** Sessions : - End ***//

//*** Avg sessions : - Start ***//
export const AvgSessionsSeries = [{
    name: 'Value',
    data: [65, 38, 56, 22, 65, 96, 53]
}]
export const AvgSessionsOptions = {
    chart: {
        type: 'bar',
        height: 278,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        dashArray: [0],
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisBorder: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: "30%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["var(--primary-color)"],
    tooltip: {
        enabled: false,
    }
}
//*** Avg sessions : - End ***//

//*** Browser Usage - Start ***//
interface BrowserData {
    name: string;
    icon: string;
    bgColor: string;
    usage: number;
    progress: number;
    iconColor: string;
    changePercentage: string;
    trend: 'up' | 'down';
}
export const BrowsersData: BrowserData[] = [
    {
        name: 'Google',
        icon: 'ri-google-fill',
        bgColor: 'light',
        usage: 23379,
        progress: 65,
        changePercentage: '2.5%',
        trend: 'up',
        iconColor: 'primary',
    },
    {
        name: 'Safari',
        icon: 'ri-safari-line',
        bgColor: 'light',
        usage: 78973,
        progress: 25,
        changePercentage: '2.5%',
        trend: 'up',
        iconColor: 'secondary',
    },
    {
        name: 'Opera',
        icon: 'ri-opera-fill',
        bgColor: 'light',
        usage: 12457,
        progress: 85,
        changePercentage: '2.5%',
        trend: 'down',
        iconColor: 'success',
    },
    {
        name: 'Edge',
        icon: 'ri-edge-fill',
        bgColor: 'light',
        usage: 8570,
        progress: 35,
        changePercentage: '2.5%',
        trend: 'up',
        iconColor: 'info',
    },
    {
        name: 'Firefox',
        icon: 'ri-firefox-fill',
        bgColor: 'light',
        usage: 6135,
        progress: 55,
        changePercentage: '2.5%',
        trend: 'down',
        iconColor: 'danger',
    },
]
//*** Browser Usage - End ***//

//*** Visitors by Channel - Start ***//
interface TrafficData {
    id: number
    source: string
    icon: string
    color: string
    traffic: number
    percentage: string
    durationColor: string
    percentageColor: string
    trafficColor: string
    duration: string
    badgeColor: string
    badgeCount: number
    score: string
    change: string
}
export const VisitorstrafficData: TrafficData[] = [
    {
        id: 1,
        source: 'Organic Search',
        icon: 'ri-search-2-line',
        color: 'primary',
        traffic: 850,
        percentage: '28.45%',
        duration: '0 hrs : 1 mins : 15 secs',
        badgeColor: 'primary',
        badgeCount: 300,
        score: " 3.2",
        change: '+7.1%',
        durationColor: '',
        percentageColor: '',
        trafficColor: '',
    },
    {
        id: 2,
        source: 'Direct Traffic',
        icon: 'ri-share-line',
        color: 'success',
        traffic: 900,
        percentage: '25.50%',
        duration: '0 hrs : 2 mins : 30 secs',
        badgeColor: 'success',
        badgeCount: 150,
        score: "4.0",
        change: '+3.8%',
        durationColor: '',
        percentageColor: '',
        trafficColor: 'text-info fw-medium',
    },
    {
        id: 3,
        source: 'Social Media',
        icon: 'ri-facebook-line',
        color: 'info',
        traffic: 500,
        percentage: '40.00%',
        duration: '0 hrs : 1 mins : 10 secs',
        badgeColor: 'info',
        badgeCount: 80,
        score: "2.5",
        change: '-2.0%',
        durationColor: '',
        percentageColor: 'fw-semibold text-pink',
        trafficColor: '',
    },
    {
        id: 4,
        source: 'Email Campaign',
        icon: 'ri-mail-line',
        color: 'warning',
        traffic: 350,
        percentage: '20.00%',
        duration: '0 hrs : 3 mins : 5 secs',
        badgeColor: 'warning',
        badgeCount: 60,
        score: "4.8",
        change: '+4.5%',
        durationColor: 'text-success fw-medium',
        percentageColor: '',
        trafficColor: '',
    },
    {
        id: 5,
        source: 'Referral',
        icon: 'ri-error-warning-line',
        color: 'danger',
        traffic: 450,
        percentage: '35.00%',
        duration: '0 hrs : 2 mins : 15 secs',
        badgeColor: 'danger',
        badgeCount: 50,
        score: "3.1",
        change: '-1.5%',
        durationColor: '',
        percentageColor: 'text-primary fw-semibold',
        trafficColor: '',
    },
    {
        id: 6,
        source: 'Paid Search',
        icon: 'ri-global-line',
        color: 'secondary',
        traffic: 300,
        percentage: '20.50%',
        duration: '0 hrs : 2 mins : 50 secs',
        badgeColor: 'secondary',
        badgeCount: 75,
        score: "4.2",
        change: '+6.0%',
        durationColor: 'text-info fw-medium',
        percentageColor: '',
        trafficColor: '',
    },
]
//*** Visitors by Channel - End ***//

//*** Visitors by Region - Start ***//
interface CountryData {
    id: number
    name: string
    flag: string
    traffic: number
    percentage: string
    change: string
    liClass: string
}
export const VisitorscountryData: CountryData[] = [
    {
        id: 1,
        name: 'United States',
        flag: 'us_flag.jpg',
        traffic: 32190,
        percentage: '32,190',
        change: '+ 1.03%',
        liClass: 'mb-3',
    },
    {
        id: 2,
        name: 'Germany',
        flag: 'germany_flag.jpg',
        traffic: 8798,
        percentage: '8,798',
        change: '- 0.03%',
        liClass: 'mb-3',
    },
    {
        id: 3,
        name: 'Canada',
        flag: 'canada_flag.jpg',
        traffic: 15450,
        percentage: '15,450',
        change: '+ 2.15%',
        liClass: 'mb-3',
    },
    {
        id: 4,
        name: 'UAE',
        flag: 'uae_flag.jpg',
        traffic: 20763,
        percentage: '20,763',
        change: '- 0.89%',
        liClass: 'mb-3',
    },
    {
        id: 5,
        name: 'France',
        flag: 'french_flag.jpg',
        traffic: 12540,
        percentage: '12,540',
        change: '+ 1.50%',
        liClass: 'mb-3',
    },
    {
        id: 6,
        name: 'China',
        flag: 'china_flag.jpg',
        traffic: 9672,
        percentage: '9,672',
        change: '+ 3.20%',
        liClass: 'mb-3',
    },
    {
        id: 7,
        name: 'Russia',
        flag: 'russia_flag.jpg',
        traffic: 18245,
        percentage: '18,245',
        change: '- 1.25%',
        liClass: 'mb-3',
    },
    {
        id: 8,
        name: 'Mexico',
        flag: 'mexico_flag.jpg',
        traffic: 7839,
        percentage: '7,839',
        change: '+ 4.10%',
        liClass: 'mb-0',
    },
]
//*** Visitors by Region - End ***//