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

// ✅ SEO Metadata for Portfolio
export const metadata: Metadata = {
  metadataBase: new URL("https://www.tanvirthedev.com"),
  title: {
    default: "Tanvir Ahamed | Full-Stack Developer",
    template: "%s | Tanvir Ahamed",
  },
  description:
    "Hi, I'm Tanvir Ahamed (tanvirthedev) — a passionate Full-Stack Developer specializing in Next.js, React, TypeScript, and Node.js. Explore my portfolio, blogs, and projects.",
  keywords: [
    "Tanvir Ahamed",
    "Tanvir Ahamed Portfolio",
    "Web Developer",
    "Software Developer",
    "Freelancer",
    "Freelance Developer",
    "Freelance Software Developer",
    "Freelance Web Developer",
    "Freelance Software Engineer",
    "Freelance Web Engineer",
    "Freelance Software Architect",
    "Freelance Web Architect",
    "Freelance Software Engineer",
    "tanvirthedev",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Tanvir Ahamed", url: "https://www.tanvirthedev.com" }],
  creator: "Tanvir Ahamed",
  publisher: "Tanvir Ahamed",
  openGraph: {
    title: "Tanvir Ahamed | Full-Stack Developer",
    description:
      "Explore the portfolio and blogs of Tanvir Ahamed (tanvirthedev), a skilled Full-Stack Developer building modern web experiences with Next.js and React.",
    url: "https://www.tanvirthedev.com",
    siteName: "Tanvir Ahamed",
    images: [
      {
        url: "https://www.tanvirthedev.com/profile.jpg", // Add your OG image inside public folder
        width: 800,
        height: 800,
        alt: "Tanvir Ahamed",
      },
      {
        url: "https://www.tanvirthedev.com/github-banner.png",
        width: 1280,
        height: 640,
        alt: "Tanvir Ahamed – Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvir Ahamed | Full-Stack Developer",
    description:
      "Hi, I'm Tanvir Ahamed (tanvirthedev). Check out my portfolio and blog about web development, JavaScript, and modern tech.",
    creator: "@tanvirthedev",
    images: ["https://www.tanvirthedev.com/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.tanvirthedev.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema.org JSON-LD for Personal Branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tanvir Ahamed",
              alternateName: "tanvirthedev",
              url: "https://www.tanvirthedev.com",
              image: "https://www.tanvirthedev.com/profile.jpg", // replace with your real photo URL
              sameAs: [
                "https://github.com/tanvirthedev",
                "https://linkedin.com/in/tanvirthedev",
                "https://twitter.com/tanvirthedev",
                "https://instagram.com/tanvirthedev",
                "https://facebook.com/tanvirthedev",
                "https://www.upwork.com/freelancers/~tanvirthedev",
                "https://www.fiverr.com/tanvirthedev",
                "https://medium.com/@tanvirthedev",
                "https://dev.to/tanvirthedev",
                "https://x.com/tanvirthedev",
                "https://www.youtube.com/@tanvirthedev",
                "https://tanvirthedev.medium.com",
                "https://www.instagram.com/tanvirthedev",
                "https://leetcode.com/u/tanvir_the_dev",
                "https://www.hackerrank.com/profile/tanvirTheDev",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "tanvirthedev.com",
              },
            }),
          }}
        />
      </head>
      <body className={jetBrainsMono.variable}>
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
