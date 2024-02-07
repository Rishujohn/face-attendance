import { DefaultSeo, NextSeoProps } from "next-seo";

const DEFAULT_SEO_CONFIG: NextSeoProps = {
  title: "Your Default Title",
  description: "Your default description",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.your-website-url.com",
    title: "Your Default Title",
    description: "Your default description",
    site_name: "Your Website Name",
  },
  // Add more default SEO properties as needed
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
