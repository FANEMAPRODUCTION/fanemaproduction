import { prisma } from "@/lib/prisma";

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: { projects: true, followers: true, following: true }
  });
}

export async function followUser(followerId: string, followingId: string) {
  return prisma.follow.create({
    data: { followerId, followingId }
  });
}
