// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Sakayet's Portfolio",
//   description: "Sakayet's Portfolio Website",
//   icons: "/images/icon.png",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta
//           name="google-site-verification"
//           content="FNRGUUHYELWtCxS81dqo2oyip-Dym9m6ZMOiWqiiR-A"
//         />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
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
  metadataBase: new URL("https://sakayet.vercel.app"),
  title: "ATM Sakayet Hossain | Front-End Developer & UI Designer",
  description:
    "I'm ATM Sakayet Hossain, a passionate Front-End Developer creating modern, fast, and responsive web experiences using React, Next.js, and Tailwind CSS.",
  keywords: [
    "ATM Sakayet Hossain",
    "ATM-Sakayet-Hossain",
    "Sakayet",
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript",
    "Bangladesh Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "ATM Sakayet Hossain" }],
  creator: "ATM Sakayet Hossain",
  publisher: "ATM Sakayet Hossain",
  openGraph: {
    type: "website",
    url: "https://sakayet.vercel.app",
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
    canonical: "https://sakayet.vercel.app",
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
        {/* main contain add */}
        <Script src="https://presidepickles.com/6c/34/ce/6c34ce1fdc71d301a2c9db3867abbf01.js"></Script>
        {/* popup add */}
        <Script src="https://presidepickles.com/ec/57/29/ec572998d7d0505654cbbb4a7acfae0c.js"></Script>
        {/* Social bar */}
        <Script src="https://presidepickles.com/ec/57/29/ec572998d7d0505654cbbb4a7acfae0c.js"></Script>
      </body>
    </html>
  );
}
