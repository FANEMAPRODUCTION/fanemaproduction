import "../styles/tailwind.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import QueryProvider from "@/components/QueryProvider";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Behance Clone Portfolio",
  description: "Creative portfolio clone with masonry grid, infinite scroll, and modal route UX."
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <QueryProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            {modal}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
