import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import Navbar from "./comp/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";


export const metadata: Metadata = {
  title: {
    default:"AANM & VVRSR Polytechnic",
    template:"%s - AANM & VVRSR Polytechnic"
  },
  description: "Best Polytechnic in Andhra Pradesh",
 
  twitter:{
    card:"summary_large_image",
    site:"@aanm_vvrsr_polytechnic",
    images:"https://aanm-vvrsr.vercel.app/og.png"
  },
  openGraph: {
    title: 'AANM & VVRSR Polytechnic',
    description: 'Best Polytechnic in Andhra Pradesh',
    url: 'https://aanm-vvrsr.vercel.app/',
    siteName: 'AANM & VVRSR Polytechnic',
    images: [
      {
        url: 'https://aanm-vvrsr-3q01p6wfo-ygns-projects.vercel.app/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://aanm-vvrsr-3q01p6wfo-ygns-projects.vercel.app/opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"   className={`${GeistSans.variable} ${GeistMono.variable}`}>
    
      <body className="font-sans">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={["light","dark"]}
            disableTransitionOnChange
          >
<Navbar/>
        {children}
<Analytics/>
          </ThemeProvider>


    </body>
    </html>
  );
}
