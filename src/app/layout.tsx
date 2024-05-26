import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from '@/store/provider';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_NAME+' Store',
  description: process.env.NEXT_PUBLIC_NAME,
  applicationName: process.env.NEXT_PUBLIC_NAME+' Store',
  keywords: ["react", "server components", 'nextjs', 'tailwind', 'admin', 'dashboard'],
  
  icons: [
    // { rel: "icon", type: 'image/svg', url: "/map/location.svg" },
    { rel: "apple-touch-icon", type: 'image/png', url: "/img/horizon.png" }
  ],
  generator: process.env.NEXT_PUBLIC_GENERATOR,
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR, url: process.env.NEXT_PUBLIC_AUTHOR_URL }],
  creator: process.env.NEXT_PUBLIC_AUTHOR
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return  <html lang="es" data-iorad-extension="firefox" className="some-class iorad-extension-widget-visible">
            <body id="__next" className={inter.className}>
              <Providers>
                {children}
              </Providers>
            </body>
          </html>    
}
