import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصة مساري | مقاييس . دعم . توجيه أفضل",
  description: "منصة متطورة لتحليل القدرات العقلية والميول المهنية والمقاييس النفسية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic min-h-full flex flex-col">{children}</body>
    </html>
  );
}
