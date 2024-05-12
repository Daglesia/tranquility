import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";

import "@/styles/globals.css";

const font = M_PLUS_1p({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export const metadata: Metadata = {
  title: "Daglesium",
  description: "Automate. Monitor. Relax.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="default">
      <body className={font.className}>{children}</body>
    </html>
  );
}
