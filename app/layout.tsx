import type { Metadata } from "next";
import "./globals.css";

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Endlich auf Google gefunden werden | ads klar",
  description:
    "Google Ads für Unternehmen: klare Kampagnen, sauberes Tracking und laufende Optimierung. Transparent betreut durch ads klar.",
  icons: {
    icon: `${assetPrefix}/favicon.svg`,
    shortcut: `${assetPrefix}/favicon.svg`,
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
