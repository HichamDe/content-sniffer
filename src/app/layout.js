import { Nunito } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Content Sniffer",
  description: "AI-powered content moderation app that detects abusive language and hides it based on your preferences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
