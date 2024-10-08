import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMZ Front Test",
  description: "HMZ Front Test by Thiago Faria Moreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {children}
        </div>
        <Toaster  toastOptions={{
            className: 'toast-error'
        }}/>
      </body>
    </html>
  );
}
