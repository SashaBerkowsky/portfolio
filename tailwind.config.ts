import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: {
					dark: "#1F1F28",
					light: "#F2ECBC",
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
				foreground: {
					dark: "#DCD7BA",
					light: "#545464",
				},
				selectionBackground: {
					dark: "#2D4F67",
					light: "#B5CBD2",
				},
				cyan: {
					dark: "#6A9589",
					light: "#597B75",
				},
				socials: "#ffffff",
				linkedin: "#0e76a8",
				github: "#24292e",
			},
		},
		colors: {
			black: {
				dark: "#090618",
				light: "#1F1F28",
			},
			white: {
				dark: "#C8C093",
				light: "#545464",
			},
			blue: {
				dark: "#7E9CD8",
				light: "#4D699B",
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
			yellow: {
				dark: "#C0A36E",
				light: "#77713F",
			},
		},
		fontWeight: {
			title: "bold",
			par: "normal",
		},
	},
	plugins: [
		nextui({
			themes: {
				dark: {
					colors: {
						default: {
							100: "#1F1F28",
						},
						primary: {
							DEFAULT: "#DCD7BA",
							foreground: "#000000",
						},
						focus: "transparent",
					},
				},
				light: {
					colors: {
						primary: {
							DEFAULT: "#6693BF",
							foreground: "#fff",
						},
						focus: "transparent",
					},
				},
			},
		}),
	],
};
export default config;
