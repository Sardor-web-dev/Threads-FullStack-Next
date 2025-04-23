import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import InstagramProvider from "next-auth/providers/instagram";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_ID ?? "",
      clientSecret: process.env.INSTAGRAM_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
