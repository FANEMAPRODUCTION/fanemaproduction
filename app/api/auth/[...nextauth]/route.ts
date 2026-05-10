import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

let adapter;
let prisma;

if (process.env.DATABASE_URL) {
  const { PrismaAdapter } = require("@next-auth/prisma-adapter");
  const { prisma: prismaClient } = require("@/lib/prisma");
  adapter = PrismaAdapter(prismaClient);
  prisma = prismaClient;
}

const handler = NextAuth({
  adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  session: {
    strategy: process.env.DATABASE_URL ? "database" : "jwt"
  },
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user && user) {
        (session.user as any).id = user.id;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };