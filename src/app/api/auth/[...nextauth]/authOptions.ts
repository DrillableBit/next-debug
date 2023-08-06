import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    // CognitoProvider({
    //   clientId: clientId,
    //   clientSecret: clientSecret,
    //   issuer: `https://cognito-idp.${region}.amazonaws.com/${PoolId}`,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        if (!credentials) throw new Error("No username provided");

        if (credentials.username !== null) {
          console.log("Login succesful");
          return user;
        } else {
          console.log("login failed");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
