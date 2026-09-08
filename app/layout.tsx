import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Endlich auf Google gefunden werden | ads klar",
  description:
    "Google Ads für Unternehmen: klare Kampagnen, sauberes Tracking und laufende Optimierung. Transparent betreut durch ads klar.",
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
