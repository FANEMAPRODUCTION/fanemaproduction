import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

export function cloudinaryLoader({
  src,
  width
}: {
  src: string;
  width: number;
}) {
  const url = new URL(src);
  url.searchParams.set("f", "auto");
  url.searchParams.set("q", "auto");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("dpr", "auto");
  url.searchParams.set("auto", "format");
  return url.toString();
}

export { cloudinary };
