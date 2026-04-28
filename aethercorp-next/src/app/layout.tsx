import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aethercorp.io"),
  title: {
    default: "AetherCorp — AI, Social, Web & Native Mobile Studio",
    template: "%s · AetherCorp",
  },
  description:
    "AetherCorp is a modern studio building AI products, social media engines, rich web platforms, and native iOS & Android apps for businesses ready to scale.",
  openGraph: {
    title: "AetherCorp — AI, Social, Web & Native Mobile Studio",
    description:
      "We design, ship, and scale AI products, social presence, modern web platforms, and native mobile apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-[--color-bg] text-[--color-fg]">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
