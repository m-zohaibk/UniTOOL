
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const baseUrl = 'https://unitool.qzz.io';
const logoUrl = 'https://i.postimg.cc/wTbXkjTg/unnamed.webp';

export const metadata: Metadata = {
  title: 'UniTool: All-in-One Utility App',
  description: 'The easiest toolbox for your phone. Fast, safe, and simple media and file tools for everyone.',
  keywords: 'UniTool, utility app, media vault, status saver, PDF tools, file conversion, simple tools',
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: logoUrl,
  },
  openGraph: {
    title: 'UniTool: All-in-One Utility App',
    description: 'The easiest toolbox for your phone. Fast, safe, and simple tools for everyone.',
    url: baseUrl,
    siteName: 'UniTool',
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
        alt: 'UniTool App Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'UniTool: All-in-One Utility App',
    description: 'The easiest toolbox for your phone. Fast and simple tools.',
    images: [logoUrl],
  },
  verification: {
    google: 'googleb17692b171432178',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UniTool",
    "operatingSystem": "Android",
    "applicationCategory": "UtilitiesApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10500"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Simple and fast utility tools for everyone."
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
