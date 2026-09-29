import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Newsreader({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: `${site.name} — Photography`,
  description: `${site.role}. ${site.tagline}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
