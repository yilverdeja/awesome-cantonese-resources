import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";

import NextTopLoader from "nextjs-toploader";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteConfig.metadataBase
    ? { metadataBase: siteConfig.metadataBase }
    : {}),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", figtree.variable)} suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ThemeProvider>
          <NextTopLoader color="var(--primary)" shadow={false} showSpinner={false} showForHashAnchor={false} height={5} />
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
