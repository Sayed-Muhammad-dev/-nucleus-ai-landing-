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
    "Nucleus connects to the systems your team already runs on and answers operational questions with citations you can check."
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
