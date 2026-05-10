import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/95 p-8 shadow-soft">
        <h1 className="text-3xl font-semibold text-white">Masuk ke Portofolio</h1>
        <p className="mt-3 text-sm text-slate-400">
          Masuk dengan akun GitHub untuk mengelola proyek dan melihat statistik.
        </p>
        <div className="mt-8 space-y-4">
          <button className="w-full rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
            Masuk dengan GitHub
          </button>
          <Link href="/" className="block text-center rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/5">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
