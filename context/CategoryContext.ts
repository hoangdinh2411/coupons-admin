import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "Category name is required"),
    image: z.any().refine((fileList) => fileList?.length > 0 || typeof fileList === "string", {
        message: "Image is required",
    }),
});

