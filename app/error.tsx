"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-center">
        <h1 className="mb-3 text-2xl font-semibold text-white">Something went wrong</h1>
        <p className="text-sm text-red-100">{error.message}</p>
      </div>
    </div>
  );
}
