import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import header from "./header/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio: Souvik",
  description: "Dive into my portfolio showcasing my projects, blogs, and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header()}
        <main>{children}</main>
      </body>
    </html>
  );
}
