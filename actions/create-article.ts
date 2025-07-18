"use server";
import { auth } from "@clerk/nextjs/server";
import { title } from "process";
import { success, z } from "zod";

const createArticleSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(100),
  content: z.string().min(10),
});
export const createArticle = async (formData: FormData) => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      errors: ["unauthorized please login"],
    };
  }
};
