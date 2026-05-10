import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProjectModal from "@/components/project/ProjectModal";

export default async function Page(props: any) {
  const { params } = props as { params: { id: string } };
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: {
      creator: true,
      mediaAssets: { orderBy: { order: "asc" } }
    }
  });

  if (!project) notFound();

  return (
    <ProjectModal
      title={project.title}
      description={project.description}
      coverUrl={project.coverUrl}
      creatorName={project.creator.name}
      tags={project.tags}
      mediaAssets={project.mediaAssets.map((asset) => ({
        url: asset.url,
        altText: asset.altText,
        width: asset.width ?? 1200,
        height: asset.height ?? 800
      }))}
    />
  );
}
