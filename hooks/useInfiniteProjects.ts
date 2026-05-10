"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export type ProjectListItem = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  tags: string[];
  creatorName: string;
  aspectRatio?: number;
};

export type ProjectPage = {
  data: ProjectListItem[];
  nextCursor?: string;
};

export function useInfiniteProjects() {
  return useInfiniteQuery<ProjectPage, Error, InfiniteData<ProjectPage>, readonly string[]>({
    queryKey: ["projects"],
    queryFn: async ({ pageParam }) => {
      const searchParams = new URLSearchParams();
      searchParams.set("limit", "12");
      if (pageParam) searchParams.set("cursor", pageParam as string);
      const res = await fetch(`/api/projects?${searchParams.toString()}`, {
        cache: "no-store"
      });

      if (!res.ok) {
        throw new Error("Failed to load projects");
      }

      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined
  });
}
