import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const usuariosDB = [
  { id: 1, email: "cliente@correo.com", password: "1234", name: "Cliente", role: "cliente" },
  { id: 2, email: "colaborador@correo.com", password: "1234", name: "Colaborador", role: "colaborador" },
  { id: 3, email: "admin@correo.com", password: "1234", name: "Administrador", role: "admin" },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = usuariosDB.find(
          u => u.email === credentials?.email && u.password === credentials?.password
        );
        if (user) return user;
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login", 
    signOut: "/login", 
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;