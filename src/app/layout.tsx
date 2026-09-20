import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yohannes Hailu | Portfolio",
  description:
    "SAP iXp Intern in AI Solutions Advisory. Honors Computer Science, Mathematics, and Data Science at UNL — internships, projects, and leadership.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "1024x1024" }],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var stored=localStorage.getItem('portfolio-theme');var theme=(stored==='dark'||stored==='light')?stored:'light';document.documentElement.dataset.theme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
