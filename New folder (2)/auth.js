import CredentialsProvider from "next-auth/providers/credentials";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import GoogleProvider from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,{
    db:{
        schema:"next_auth"
    }
  }
);
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Fetch user from Supabase
        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single();

        if (error || !user) {
          throw new Error("Invalid email or password");
        }

        // Validate password
        const isValidPassword = await bcrypt.compare(password, user.password_hash);
        if (!isValidPassword) {
          throw new Error("Invalid email or password");
        }

        // Return the user object to include in the session
        return { id: user.id, email: user.email};
      },
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    error: "/signin",
  },
  session: {
    jwt:false,
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user"; // Default role if none is provided
      }
      return token;
    },
  },
  debug: true,
};
