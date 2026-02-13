import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header1 } from "@/components/ui/header";
import SiteFooter from "@/components/SiteFooter";
import { FloatingButtonExample } from "@/components/ui/floating-button-demo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Göz kliniği — lazer göz ameliyatı, katarakt, akıllı lens ve göz hastalıkları tedavileri.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geist.variable} antialiased bg-background text-foreground`}>
        <Header1 />
        <main className="pt-16">{children}</main>
        <SiteFooter />
        <FloatingButtonExample />
      </body>
    </html>
  );
}
