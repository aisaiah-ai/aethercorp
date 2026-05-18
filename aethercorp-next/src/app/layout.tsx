import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aethercorp.us"),
  title: {
    default:
      "AetherCorp — Web apps, mobile apps, AI systems & growth engines",
    template: "%s · AetherCorp",
  },
  description:
    "AetherCorp builds flagship web apps, native iOS & Android products, custom AI systems, and end-to-end launch engines for companies that need to look, feel, and perform like the market leader.",
  openGraph: {
    title: "AetherCorp — Build a site people cannot ignore.",
    description:
      "Flagship web apps, native mobile, AI systems, and growth engines. From $200 starter sites to eight-figure platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-[--color-paper] text-[--color-ink]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
