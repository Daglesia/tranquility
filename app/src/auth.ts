import NextAuth from "next-auth";
import "next-auth/jwt";

import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

const config = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  trustHost: true,
  providers: [GitHub],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub ?? "";
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
