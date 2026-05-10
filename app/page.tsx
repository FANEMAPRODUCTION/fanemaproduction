"use client";

import { useMemo } from "react";
import { ProjectPage, useInfiniteProjects } from "@/hooks/useInfiniteProjects";
import MasonryGrid from "@/components/project/MasonryGrid";
import Button from "@/components/ui/Button";

export default function HomePage() {
  const projectsQuery = useInfiniteProjects();
  const allProjects = useMemo(
    () =>
      (projectsQuery.data?.pages as ProjectPage[] | undefined)?.flatMap((page) =>
        page.data.map((project) => ({
          id: project.id,
          title: project.title,
          description: project.description,
          coverUrl: project.coverUrl,
          tags: project.tags,
          creatorName: project.creatorName,
          aspectRatio: project.aspectRatio ?? 1.35
        }))
      ) ?? [],
    [projectsQuery.data]
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Portofolio Kreatif</h1>
        <p className="max-w-3xl text-slate-400">
          Koleksi proyek dengan transisi dinamis, grid masonry, dan modal route UX yang menyerupai Behance.
        </p>
      </div>

      {projectsQuery.isLoading && (
        <div className="space-y-4">
          <div className="h-3 rounded-full bg-white/5" />
          <div className="h-3 rounded-full bg-white/5" />
          <div className="h-3 rounded-full bg-white/5" />
        </div>
      )}

      {projectsQuery.isError && (
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-red-200">
          Gagal memuat portofolio.
        </div>
      )}

      {projectsQuery.data && (
        <>
          <MasonryGrid projects={allProjects} />

          <div className="mt-10 flex justify-center">
            {projectsQuery.hasNextPage ? (
              <Button
                onClick={() => projectsQuery.fetchNextPage()}
                disabled={projectsQuery.isFetchingNextPage}
              >
                {projectsQuery.isFetchingNextPage ? "Memuat..." : "Muat lebih banyak"}
              </Button>
            ) : (
              <p className="text-sm text-slate-500">Tidak ada lagi proyek.</p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
