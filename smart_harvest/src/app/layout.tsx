import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Harvest",
  description: "Bạn của nhà nông",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ejndaaeplrydtiootmkr.supabase.co/storage/v1/object/public/gdsc/Vector.png" type="image/png" sizes="32x32" />
      </head>
      <body className={inter.className + ' congnong'}>
        {children}
        <Toaster />

      </body>
    </html>
  );
}
