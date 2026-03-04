import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Octary | Community & Learning Platform",
    template: "%s | Octary"
  },
  description: "Platform komunitas belajar coding, berbagi project, dan kolaborasi developer. Bergabunglah dengan Octary untuk mengembangkan skill programming bersama.",
  keywords: ["octary", "belajar coding", "komunitas programmer", "web development", "nextjs", "react", "indonesia"],
  authors: [{ name: "Octary Team" }],
  creator: "Octary Community",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://octary.vercel.app",
    title: "Octary | Community & Learning Platform",
    description: "Tempat belajar dan berkolaborasi untuk developer masa depan.",
    siteName: "Octary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octary | Community & Learning Platform",
    description: "Tempat belajar dan berkolaborasi untuk developer masa depan.",
  },
  icons: {
    icon: "/octary-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
