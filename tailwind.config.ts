import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			background: {
				dark: "#1F1F28",
				light: "#F2ECBC",
			},
			black: {
				dark: "#090618",
				light: "#1F1F28",
			},
			blue: {
				dark: "#7E9CD8",
				light: "#4D699B",
			},
			brightBlack: {
				dark: "#727169",
				light: "#8A8980",
			},
			brightBlue: {
				dark: "#7FB4CA",
				light: "#6693BF",
			},
			brightCyan: {
				dark: "#7AA89F",
				light: "#5E857A",
			},
			brightGreen: {
				dark: "#98BB6C",
				light: "#6E915F",
			},
			brightPurple: {
				dark: "#938AA9",
				light: "#624C83",
			},
			brightRed: {
				dark: "#E82424",
				light: "#D7474B",
			},
			brightWhite: {
				dark: "#DCD7BA",
				light: "#43436C",
			},
			brightYellow: {
				dark: "#E6C384",
				light: "#836F4A",
			},
			backgroundHl: {
				dark: "#2D4F67",
				light: "#C9CBD1",
			},
			foregroundHl: {
				light: "#43436C",
				dark: "#C8C093",
			},
			cyan: {
				dark: "#6A9589",
				light: "#597B75",
			},
			foreground: {
				dark: "#DCD7BA",
				light: "#545464",
			},
			green: {
				dark: "#76946A",
				light: "#6F894E",
			},
			purple: {
				dark: "#957FB8",
				light: "#B35B79",
			},
			red: {
				dark: "#C34043",
				light: "#C84053",
			},
			selectionBackground: {
				dark: "#2D4F67",
				light: "#B5CBD2",
			},
			white: {
				dark: "#C8C093",
				light: "#545464",
			},
			yellow: {
				dark: "#C0A36E",
				light: "#77713F",
			},
			socials: "#ffffff",
			linkedin: "#0e76a8",
			github: "#24292e",
		},
		fontWeight: {
			title: "bold",
			par: "normal",
		},
	},
	plugins: [],
};
export default config;
