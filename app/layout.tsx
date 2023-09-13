import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "LAPD Dashboard",
    template: "%s | LAPD Dashboard",
  },
  description: "Access Point for LAPD Data",
  openGraph: {
    title: "LAPD Dashboard",
    description: "Access Point for LAPD Data",
    url: "https://lapd-dashboard.vercel.app/",
    siteName: "LAPD Dashboard",
    images: {
      url: "https://lapd-dashboard.vercel.app/dashboard.png",
      width: 800,
      height: 600,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "LAPD Dashboard",
    description: "Access Point for LAPD Data",
    creator: "@lacontroller",
    image: "https://lapd-dashboard.vercel.app/dashboard.png",
  },
  icons: {
    icon: "/favicon/cropped-favicon-1-32x32.png",
    shortcut: "/favicon/cropped-favicon-1-180x180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
