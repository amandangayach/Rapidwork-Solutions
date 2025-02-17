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
				"DEFAULT": "#020617",
				 "50": "#eef1ff",
				 "100": "#dde3ff",
				 "200": "#c1cbff",
				 "300": "#96a7ff",
				 "400": "#6678ff",
				 "500": "#3d4eff",
				 "600": "#0b2289",
				 "700": "#0a1d73",
				 "800": "#081a5e",
				 "900": "#071749",
				 "950": "#020617",
			},
			secondary : {
				"DEFAULT": "#01c3ba",
				"50": "#ecfffe",
				"100": "#cffcf9",
				"200": "#a3f7f4",
				"300": "#67eeeb",
				"400": "#2cdcd8",
				"500": "#01c3ba", // Your base color
				"600": "#089b94",
				"700": "#0c7b76",
				"800": "#116260",
				"900": "#135250",
				"950": "#043433",
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
