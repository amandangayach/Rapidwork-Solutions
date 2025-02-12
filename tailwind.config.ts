import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background: "#090909",
			foreground: "#F3F3F3",
			primary: {
				"DEFAULT": "#4169e1",
				"100": "#e3e8ff",
				"200": "#bac3ff",
				"300": "#8daaff",
				"400": "#607fff",
				"500": "#4169e1",
				"600": "#2e4fc7",
				"700": "#1d34ad",
				"800": "#0c1a93",
				"900": "#000080",
				"950": "#000066",	
			},
			secondary : {
				"DEFAULT": "#ff4500",
				"100": "#ffddcc",
				"200": "#ffb299",
				"300": "#ff8c66",
				"400": "#ff6633",
				"500": "#ff4500",
				"600": "#cc3600",
				"700": "#992700",
				"800": "#661900",
				"900": "#330c00",
				"950": "#310000",
			}
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
