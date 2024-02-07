import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grace FR Attendance",
  description: "Grace COE Face Recogonition Attendance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
