import { prisma } from "@/lib/prisma";

export async function getProjects({
  cursor,
  limit = 12
}: {
  cursor?: string | null;
  limit?: number;
}) {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    take: limit + 1,
    where: { published: true },
    cursor: cursor ? { id: cursor } : undefined,
    skip: cursor ? 1 : 0,
    include: {
      mediaAssets: { orderBy: { order: "asc" }, take: 1 },
      creator: true
    }
  });

  const nextCursor = projects.length > limit ? projects[limit]?.id : undefined;
  const data = projects.slice(0, limit).map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    coverUrl: project.coverUrl,
    tags: project.tags,
    creatorName: project.creator.name,
    aspectRatio: project.mediaAssets[0]
      ? project.mediaAssets[0].width && project.mediaAssets[0].height
        ? project.mediaAssets[0].width / project.mediaAssets[0].height
        : 1.4
      : 1.4
  }));

  return {
    data,
    nextCursor
  };
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({
    where: { id },
    include: {
      creator: true,
      mediaAssets: { orderBy: { order: "asc" } },
      comments: { orderBy: { createdAt: "desc" }, include: { author: true } }
    }
  });
}
