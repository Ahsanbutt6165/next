// lib/createUser.ts
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export const createUserIfNotExists = async () => {
  const user = await currentUser();
  if (!user) return;

  const existing = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!existing) {
    await prisma.user.create({
      data: {
        name: user.fullName || "",
        clerkUserId: user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        imageUrl: user.imageUrl,
      },
    });
  }
};
