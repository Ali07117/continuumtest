import localFont from "next/font/local";
import Head from "next/head"; // Import the Head component
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Continuum",
  description: "Increasing human potential through design.",
  keywords: "UX design, human potential, design, Continuum, user experience, user-centered design",
  author: "Continuum Design Labs",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow", // Allows search engines to index the site
  ogTitle: "Continuum | Increasing Human Potential Through Design",
  ogDescription: "Discover how Continuum helps businesses maximize their potential through human-centered design.",
  ogImage: "/path/to/og-image.jpg", // Example for Open Graph Image
  twitterCard: "summary_large_image", // Twitter card type
  twitterCreator: "@ContinuumDesignLabs",
  twitterSite: "@ContinuumDesignLabs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Add all SEO and head-related meta tags here */}
        <Head>
          {/* Favicon */}
          <link className="bg-[white] favicon-color" rel="icon" href="/favicon.ico?v=2" />
          
          {/* SEO Meta Tags */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content={metadata.viewport} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content={metadata.author} />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="robots" content={metadata.robots} />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metadata.ogTitle} />
          <meta property="og:description" content={metadata.ogDescription} />
          <meta property="og:image" content={metadata.ogImage} />
          
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content={metadata.twitterCard} />
          <meta name="twitter:creator" content={metadata.twitterCreator} />
          <meta name="twitter:site" content={metadata.twitterSite} />
          
          {/* Title Tag */}
          <title>{metadata.title}</title>
        </Head>
        {/* Render children components here */}
        {children}
      </body>
    </html>
  );
}
