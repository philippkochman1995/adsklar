import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endlich auf Platz eins bei Google | Klar Ads",
  description:
    "Google Ads für Unternehmen: klare Kampagnen, sauberes Tracking und laufende Optimierung. Transparent betreut durch Klar Ads.",
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
