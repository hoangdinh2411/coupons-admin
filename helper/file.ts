import { deleteFiles } from '@/services/file.service';
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
    if (usedImages) {
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
      const res = await deleteFiles(imagesShouldBeDeleted);
      if (res.success) {
        console.log(`✅ Deleted success unused image for HTMl}`);
      } else {
        console.error('Something wrong when delete unused image for HTML');
        isDone = false;
      }
    }
  }
  return isDone;
};

const MAX_SIZE_MB = 3; // 2MB
export const isFileSizeValid = (fileSize: number): boolean => {
  if (!fileSize) return false;
  const maxSize = 1024 * 1024 * MAX_SIZE_MB;

  return fileSize <= maxSize;
};

function checkFileFormat(file: File): boolean {
  const allowedFormats = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/svg+xml',
    'image/webp',
  ];
  return allowedFormats.includes(file?.type);
}

export function validateFile(file: File) {
  let isValid = true;
  if (!file) {
    isValid = false;
    toast.error('Missing File');
  }
  if (!isFileSizeValid(file?.size)) {
    isValid = false;
    toast.error('File is too large, max 3 MB');
  }

  if (!checkFileFormat(file)) {
    isValid = false;
    toast.error('Just support jpeg, png,jpg ,svg+xml');
  }
  return isValid;
}
