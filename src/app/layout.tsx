import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rapidwork Solutions | Professional IT Services & Software Development",
  description: "Rapidwork Solutions provides enterprise-grade IT services, custom software development, cloud solutions, and digital transformation. Transform your business with our expert technology solutions.",
  keywords: "Rapidwork Solutions, IT Services, Software Development, Cloud Solutions, Digital Transformation, Technology Consulting",
  openGraph: {
    title: "Rapidwork Solutions | Professional IT Services & Software Development",
    description: "Transform your business with Rapidwork Solutions - Your trusted partner for IT services, software development, and digital innovation.",
    siteName: "Rapidwork Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
