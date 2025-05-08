import { Geist, Geist_Mono, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const Ubuntu = Ubuntu_Sans_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Chinnarat Kh.",
  description: "Profile Mr.CHINNARAT KHAMMASUK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
