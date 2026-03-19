import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { TranslationProvider } from "@/app/lib/translation-context";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Lincoln Tagore Pte. Ltd. | Digital Systems & Fintech Engineering",
  description:
    "Lincoln Tagore Pte. Ltd. delivers modern software engineering, fintech platforms, and digital transformation programs for growth-focused enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${sora.variable} antialiased`}>
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}
