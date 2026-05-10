export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="space-y-3 text-center text-slate-300">
        <div className="h-3 w-24 animate-pulse rounded-full bg-slate-700" />
        <div className="h-3 w-32 animate-pulse rounded-full bg-slate-700" />
      </div>
    </div>
  );
}
