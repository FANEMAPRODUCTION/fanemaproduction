import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Halaman tidak ditemukan</h1>
      <p className="mt-2 max-w-lg text-slate-400">
        Proyek yang Anda cari tidak tersedia atau sudah dihapus.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
