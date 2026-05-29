
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const baseUrl = 'https://unitool.qzz.io';

export const metadata: Metadata = {
  title: 'UniTool: All-in-One Professional Utility & Media Toolbox',
  description: 'UniTool is the ultimate professional toolbox for media, security, and document management. Access 40+ powerful local utilities including AES encryption vaults.',
  keywords: 'UniTool, utility app, media vault, status saver, PDF tools, file conversion, AI writer, private security, encryption',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'UniTool: All-in-One Professional Utility & Media Toolbox',
    description: 'The ultimate professional toolbox for media, security, and document management. 40+ local utilities for power users.',
    url: baseUrl,
    siteName: 'UniTool',
    images: [
      {
        url: 'https://i.postimg.cc/C51bs5sM/01-two-devices.png',
        width: 1200,
        height: 630,
        alt: 'UniTool App Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniTool: All-in-One Professional Utility & Media Toolbox',
    description: 'The ultimate professional toolbox for media, security, and document management. 40+ local utilities for power users.',
    images: ['https://i.postimg.cc/C51bs5sM/01-two-devices.png'],
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
  const jsonLd = {
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
    "description": "The most comprehensive set of professional tools for media, security, and document management."
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
