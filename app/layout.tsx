import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { GradientMesh } from "@/src/components/gradient-mesh";
import { SiteFooter, SiteHeader } from "@/src/components/site-chrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Nucleus — Put your company's knowledge to work",
  description:
    "Nucleus is a private text-document workspace with account-scoped keyword search, referenced source passages and reviewed content publishing."
};

export const viewport: Viewport = {
  themeColor: "#04060f"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <GradientMesh />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
