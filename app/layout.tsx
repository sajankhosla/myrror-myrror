import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://myrror-myrror.vercel.app'),
  title: "MyrrorMyrror - Transform Your Life with Daily Affirmations",
  description: "Create and record personalized affirmation videos to boost your confidence and enhance your well-being. Start your journey to a more positive you today!",
  keywords: ["affirmations", "self-improvement", "personal development", "positive mindset", "confidence building", "video affirmations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
