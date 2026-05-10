import { cloudinary } from "@/lib/cloudinary";

export async function uploadCloudinaryUrl(
  fileUrl: string,
  folder = "behance-clone"
) {
  const upload = await cloudinary.uploader.upload(fileUrl, {
    folder,
    quality: "auto",
    fetch_format: "auto"
  });

  return {
    url: upload.secure_url,
    width: upload.width,
    height: upload.height,
    publicId: upload.public_id
  };
}
