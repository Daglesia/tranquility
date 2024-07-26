import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

import "@/styles/globals.css";

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
    <html
      lang="en"
      className="default text-primary bg-background text-sm md:text-base"
    >
      <body className={font.className}>{children}</body>
    </html>
  );
}
