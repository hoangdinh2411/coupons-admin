
//Basic Polar Area Chart
export const Areaseries = [14, 23, 21, 17, 15, 10, 12, 17, 21]
export const Areaoptions = {
	chart: {
		type: "polarArea",
		height: 300,
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}
		},
	},
	stroke: {
		colors: ["#fff"]
	},
	fill: {
		opacity: 0.8
	},
	legend: {
		position: "bottom",
		// height: 50,
	},
	colors: ["#8b7eff", "#35bdaa", "#ffb748", "#49b6f5", "#e6533c", "#26bf94", "#a65e76", "#49b6f5", "#5b67c7"],
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 200
			},
			legend: {
				position: "bottom"
			}
		}
	}]
}

// Polar Area Monochrome Chart
export const Monoseries = [42, 47, 52, 58, 65]
export const Monooptions = {
	chart: {
		height: 300,
		type: "polarArea",
		events: {
			mounted: (chart: { windowResizeHandler: () => void; }) => {
				chart.windowResizeHandler();
			}
		},
	},
	labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
	fill: {
		opacity: 1
	},
	stroke: {
		width: 1,
		colors: undefined
	},
	yaxis: {
		show: false
	},
	legend: {
		position: "bottom"
	},
	plotOptions: {
		polarArea: {
			rings: {
				strokeWidth: 0
			},
			spokes: {
				strokeWidth: 0
			},
		}
	},
	theme: {
		monochrome: {
			enabled: true,
			shadeTo: 'light',
			shadeIntensity: 0.6,
			color: "#8b7eff",
		}
	}
}
