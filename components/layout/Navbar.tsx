"use client";

import Link from "next/link";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Behance Clone
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            Explore
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
