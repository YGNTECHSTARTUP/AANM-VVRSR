import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import Navbar from "./comp/Navbar";
import { ThemeProvider } from "@/components/theme-provider";




export const metadata: Metadata = {
  title: "AANM & VVRSR Polytechnic",
  description: "Best Polytechnic in Andhra Pradesh",
  
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

          </ThemeProvider>


    </body>
    </html>
  );
}
