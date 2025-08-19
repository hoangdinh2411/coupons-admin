import { z } from 'zod';

const ImageTypeSchema = z.object({
  file_name: z.string().min(1, 'File name is required'),
  url: z.string().url('Invalid URL format'),
  public_id: z.string().min(1, 'Public ID is required'),
});
const FAQItemSchema = z.object({
  id: z.number().optional(),
  question: z.string().min(1, 'FAQ question is required'),
  answer: z.string().min(1, 'FAQ answer is required'),
});

const MetaDataSchema = z.object({
  title: z.string().min(1, 'Meta title is required').optional(),
  description: z.string().min(1, 'Meta description is required').optional(),
  keywords: z.string().optional(),
});
export const schema = z.object({
  id: z.string().min(1, 'ID is required'),
  type: z.string().min(1, 'Page type is required'),
  content: z.string().min(1, 'Content is required'),
  images: z
    .array(ImageTypeSchema)
    .max(10, 'Maximum 10 images allowed')
    .optional(),
  thumbnail: ImageTypeSchema,
  faqs: z.array(FAQItemSchema).optional(),
  metadata: MetaDataSchema,
});

export type DynamicPageFormData = z.infer<typeof schema>;
