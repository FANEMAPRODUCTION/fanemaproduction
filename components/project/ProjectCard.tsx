"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageLoader } from "@/lib/imageLoader";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  tags: string[];
  creatorName: string;
  aspectRatio?: number;
};

export default function ProjectCard({
  id,
  title,
  description,
  coverUrl,
  tags,
  creatorName,
  aspectRatio = 1.4
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="mb-4 rounded-3xl border border-white/10 bg-slate-950/90 shadow-soft break-inside-avoid"
    >
      <Link href={`/project/${id}`} className="group block">
        <div
          className="relative overflow-hidden rounded-3xl bg-slate-900"
          style={{ paddingBottom: `${100 / aspectRatio}%` }}
        >
          <Image
            src={coverUrl}
            alt={title}
            fill
            loader={imageLoader}
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="space-y-3 p-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="max-h-12 overflow-hidden text-sm text-slate-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {creatorName}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
