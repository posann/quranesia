import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Quran App",
  description: "Membaca Quran dengan mudah",
};

import { Plus_Jakarta_Sans, Roboto } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
