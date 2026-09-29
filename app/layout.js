import { Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

// Fallback shown until Glacial Indifference files are added to /public/fonts (see README)
const fallback = Jost({ subsets: ["latin"], variable: "--font-fallback", weight: ["400", "700"] });

export const metadata = {
  title: `${site.name} — Photography & Films`,
  description: `${site.intro} ${site.disciplines}. Based in ${site.location}, available worldwide.`,
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fallback.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
