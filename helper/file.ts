import { deleteFile } from '@/services/file.service';
import { ImageType } from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';

export const filterUsedImageForEditor = async (
  content: string,
  uploadedImages: ImageType[],
) => {
  let isDone = true;
  if (uploadedImages.length > 0) {
    // get all image url from HTML content
    const usedImages: string[] = Array.from(
      content.matchAll(/<img [^>]*src="([^"]+)"[^>]*>/g),
    ).map((match) => match[1]); // match[1] là URL

    let imagesShouldBeDeleted: string[] = [];
    if (uploadedImages.length !== usedImages.length) {
      //
      for (const img of uploadedImages) {
        const isUsed = usedImages.some((usedImg) =>
          usedImg.includes(img.public_id),
        );
        if (!isUsed) {
          imagesShouldBeDeleted.push(img.public_id);
        }
      }
      imagesShouldBeDeleted = [...new Set(imagesShouldBeDeleted)];
    }
    if (imagesShouldBeDeleted.length > 0) {
      const res = await Promise.all(
        imagesShouldBeDeleted.map((i) => deleteFile(i)),
      );
      res.forEach((result, index) => {
        if (result.success) {
          console.log(`✅ Deleted: ${imagesShouldBeDeleted[index]}`);
        } else {
          toast.error(
            `❌ Failed to delete: ${imagesShouldBeDeleted[index]}, ${result.message}`,
          );
          isDone = false;
        }
      });
    }
  }
  return isDone;
};
