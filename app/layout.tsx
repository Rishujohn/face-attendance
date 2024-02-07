import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grace FR Attendance",
  description: "Grace COE Face Recogonition Attendance App",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
