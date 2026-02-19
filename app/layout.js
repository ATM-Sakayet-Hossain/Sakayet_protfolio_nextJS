import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NeonCursor from "./Components/effects/NeonCursor";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ----------- ✅ SEO META DATA -----------
export const metadata = {
  metadataBase: new URL("https://www.sakayet.dev/"),
  title: "ATM Sakayet Hossain | Front-End Developer & UI Designer",
  description:
    "I'm ATM Sakayet Hossain, a passionate Front-End Developer creating modern, fast, and responsive web experiences using React, Next.js, and Tailwind CSS.",
  keywords: [
    "ATM Sakayet Hossain",
    "ATM-Sakayet-Hossain",
    "Md Shakhawat Bhuiyan",
    "Md-Shakhawat-Bhuiyan",
    "Sakayet",
    "Sakayet Front-End Developer",
    "Sakayet Full Stack Developer",
    "Shakhawat Front-End Developer",
    "Md-Shakhawat-Bhuiyan Front-End Developer",
    "Md Shakhawat Bhuiyan Front-End Developer",
    "ATM Sakayet Hossain Front-End Developer",
    "ATM-Sakayet-Hossain Front-End Developer",
    "Shakhawat Full Stack Developer",
    "Md-Shakhawat-Bhuiyan Full Stack Developer",
    "ATM Sakayet Hossain Full Stack Developer",
    "ATM-Sakayet-Hossain Full Stack Developer",
    "Md Shakhawat Bhuiyan Full Stack Developer",
    "sakayet Web Developer",
    "Shakhawat Web Developer",
    "sakayet React Developer",
    "Shakhawat React Developer",
    "sakayet Next.js Developer",
    "Shakhawat Next.js Developer",
    "Tailwind CSS",
    "JavaScript",
    "Bangladesh Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "ATM Sakayet Hossain" }, { name: "Md Shakhawat Bhuiyan" }],
  creator: "ATM Sakayet Hossain",
  publisher: "ATM Sakayet Hossain",
  openGraph: {
    type: "website",
    url: "https://www.sakayet.dev/",
    title: "ATM Sakayet Hossain | Front-End Developer & UI Designer",
    description:
      "Modern web developer crafting responsive and interactive digital experiences. Explore my portfolio and work samples.",
    siteName: "Sakayet Portfolio",
    images: [
      {
        url: "/images/about_person.jpg", // <-- make this image (1200x630)
        width: 1200,
        height: 630,
        alt: "ATM Sakayet Hossain Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATM Sakayet Hossain | Front-End Developer & UI Designer",
    description:
      "Modern front-end developer building interactive and elegant web apps. Check out my projects and portfolio.",
    images: ["/images/icon.png"],
    creator: "@sakayet", // optional if you have a Twitter handle
  },
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.sakayet.dev/",
  },
  verification: {
    google: "FNRGUUHYELWtCxS81dqo2oyip-Dym9m6ZMOiWqiiR-A", // your GSC code
  },
};
// ---------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "#000",
        }}
      >
        <NeonCursor />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
