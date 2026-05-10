"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { imageLoader } from "@/lib/imageLoader";

type ProjectModalProps = {
  title: string;
  description: string;
  coverUrl: string;
  creatorName: string;
  tags: string[];
  mediaAssets: { url: string; altText: string; width?: number; height?: number }[];
};

export default function ProjectModal({
  title,
  description,
  coverUrl,
  creatorName,
  tags,
  mediaAssets
}: ProjectModalProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4"
      onClick={() => router.back()}
    >
      <motion.div
        onClick={(event) => event.stopPropagation()}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-soft"
      >
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute right-4 top-4 z-20 rounded-full bg-slate-900/90 p-3 text-slate-100 transition hover:bg-slate-800"
        >
          <X size={18} />
        </button>
        <div className="grid gap-6 p-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-900">
              <Image
                src={coverUrl}
                alt={title}
                fill
                loader={imageLoader}
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mediaAssets.map((asset) => (
                <div
                  key={asset.url}
                  className="relative overflow-hidden rounded-3xl bg-slate-900"
                  style={{ minHeight: 160 }}
                >
                  <Image
                    src={asset.url}
                    alt={asset.altText}
                    fill
                    loader={imageLoader}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Project</span>
              <h2 className="mt-3 text-3xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-900/90 p-5">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Creator</p>
                <p className="text-base text-white">{creatorName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Tags</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
