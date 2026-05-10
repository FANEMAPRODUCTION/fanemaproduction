import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ProjectCreatePayload, projectCreateSchema } from "@/lib/validators";
import { uploadCloudinaryUrl } from "@/services/cloudinaryService";

export async function createProject(formData: FormData) {
  const parsed = projectCreateSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    tags: JSON.parse((formData.get("tags") as string) || "[]"),
    coverUrl: formData.get("coverUrl"),
    assetUrls: JSON.parse((formData.get("assetUrls") as string) || "[]"),
    creatorId: formData.get("creatorId")
  });

  if (!parsed.success) {
    throw new Error("Invalid project payload");
  }

  const payload = parsed.data as ProjectCreatePayload;

  const uploadedAssets = await Promise.all(
    payload.assetUrls.map(async (assetUrl) => {
      const uploadResult = await uploadCloudinaryUrl(assetUrl);
      return {
        url: uploadResult.url,
        altText: "Project asset",
        width: uploadResult.width ?? 1000,
        height: uploadResult.height ?? 1000,
        metadata: {
          publicId: uploadResult.publicId
        }
      };
    })
  );

  const project = await prisma.project.create({
    data: {
      title: payload.title,
      slug: payload.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      description: payload.description,
      category: payload.category,
      tags: payload.tags.join(","),
      coverUrl: payload.coverUrl,
      creator: {
        connect: {
          id: payload.creatorId
        }
      },
      mediaAssets: {
        create: uploadedAssets.map((asset, index) => ({
          url: asset.url,
          altText: asset.altText,
          width: asset.width,
          height: asset.height,
          order: index,
          metadata: JSON.stringify(asset.metadata)
        }))
      }
    }
  });

  revalidatePath("/");

  return project;
}
