import { z } from "zod";

export const projectCreateSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  category: z.enum([
    "BRANDING",
    "WEB_DESIGN",
    "ILLUSTRATION",
    "MOTION",
    "PACKAGING",
    "PRODUCT",
    "UI_UX"
  ]),
  tags: z.string().array().min(1),
  coverUrl: z.string().url(),
  assetUrls: z.string().array().min(1),
  creatorId: z.string().cuid()
});

export type ProjectCreatePayload = z.infer<typeof projectCreateSchema>;
