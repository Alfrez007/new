import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlFrEz - All-in-One Utility Hub",
  description: "Convert, Resize, Merge & More — 25+ Smart Tools for everyday digital tasks",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="min-h-screen bg-white text-gray-900">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}