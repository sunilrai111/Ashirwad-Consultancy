import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashirwad Consultancy - Industrial Financing & Government Subsidy",
  description:
    "Your trusted partner for industrial financing and government subsidy services. MSME loans, machinery finance, working capital, and more. Contact us at +91 9714631847",
  keywords:
    "industrial loan, MSME loan, government subsidy, machinery finance, working capital, industrial financing, Ashirwad Consultancy",
  authors: [{ name: "Ashirwad Consultancy" }],
  openGraph: {
    title: "Ashirwad Consultancy - Industrial Financing & Government Subsidy",
    description:
      "Your trusted partner for industrial financing and government subsidy services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashirwad Consultancy - Industrial Financing & Government Subsidy",
    description:
      "Your trusted partner for industrial financing and government subsidy services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
