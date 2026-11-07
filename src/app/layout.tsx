import type { Metadata, Viewport } from "next";
import { Anton, Caveat, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { SkipLink } from "@/components/layout/SkipLink";
import { LINKEDIN_LABEL, LINKEDIN_URL } from "@/constants/profile";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "ANDRE SAFTARI | Software Engineer";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Andre Saftari. Software Engineer working remotely from Jakarta. Front-end web and mobile products built with React, Next.js, Flutter and React Native.",
  openGraph: {
    title: TITLE,
    description:
      "Front-end web and mobile products by Andre Saftari, a software engineer working remotely.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${manrope.variable} ${caveat.variable}`}
    >
      <body>
        <MotionProvider>
          <SkipLink />
          <ReadingProgress />
          <Header />
          {children}
          <Footer />
        </MotionProvider>
        <noscript>
          <main className="bg-ground p-10 font-[sans-serif] text-[#eee]">
            <h1>Andre Saftari, Software Engineer</h1>
            <p>Enable JavaScript to open the interactive project gallery.</p>
            <a className="text-[#ff5d65]" href={LINKEDIN_URL}>
              {LINKEDIN_LABEL}
            </a>
          </main>
        </noscript>
      </body>
    </html>
  );
}
