import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klar Ads — Google Ads, nachvollziehbar betreut",
  description:
    "Klar Ads plant, betreut und verbessert Google Ads für Unternehmen — transparent, fokussiert und ohne große Versprechen.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
