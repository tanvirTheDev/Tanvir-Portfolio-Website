import PageTransition from "@/components/PageTransition";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ScrollToTop from "@/components/shared/ScrollToTop";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import StairTransition from "@/components/StairTransition";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--fonts-jetBrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tanvir Ahamed",
  description: "Tanvir Ahamed Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}`}>
        <WhatsAppButton />
        <ScrollToTop />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
