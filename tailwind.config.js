module.exports = {
	purge: [
		"./assets/**/*.{css}",
		"./components/*.{vue,js}",
		"./components/**/*.{vue,js}",
		"./pages/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./*.{vue,js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			screens: {
				xs: "475px",
				sm: "640px",
				md: "768px",
				mdb: "920px",
				lg: "1024px",
				mlg: "1100px",
				xl: "1200px",
				mxl: "1368px",
				"2xl": "1500px",
				"3xl": "1800px",
				"4xl": "2300px",
			},
			colors: {
				white: "#fffeff",
				black: "#18181b",
				bluey: "#0769f8",
				pinky: "#ff357a",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
