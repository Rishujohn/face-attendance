import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

interface OpenGraph {
  title: string;
  description: string;
}

interface Metadata {
  title: string;
  description: string;
  metadataBase: string;
  openGraph: OpenGraph;
}

export const metadata: Metadata = {
  title: "Grace FR Attendance",
  description: "Grace COE Face Recogonition Attendance App",
  metadataBase: "http://localhost:3000",
  openGraph: {
    title: "Grace FR Attendance",
    description: "Grace COE Face Recogonition Attendance App",
  },
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
