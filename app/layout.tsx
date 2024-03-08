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
  }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"   className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head>
      <meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
<meta name="twitter:image" content="<generated>" />
<meta name="twitter:image:type" content="<generated>" />
<meta name="twitter:image:width" content="<generated>" />
<meta name="twitter:image:height" content="<generated>" />
      </Head>
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
