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
		variables: {
			'--primary-600-rgb': '59, 130, 246', // Adjust this value to match your primary color
		  },
  		colors: {
			background: "#FFFFFF",
			foreground: "#090909",
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
		},
		fontFamily: {
			sans: ["var(--font-poppins)"],
		},
		keyframes: {
			"fade-in": {
			  "0%": {
				opacity: "0",
				transform: "translateY(-10px)",
			  },
			  "100%": {
				opacity: "1",
				transform: "translateY(0)",
			  },
			},
			"fade-in-up": {
			  "0%": {
				opacity: "0",
				transform: "translateY(10px)",
			  },
			  "100%": {
				opacity: "1",
				transform: "translateY(0)",
			  },
			},
		  },
		  animation: {
			"fade-in": "fade-in 1s ease-out",
			"fade-in-up": "fade-in-up 1s ease-out 0.5s forwards",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
