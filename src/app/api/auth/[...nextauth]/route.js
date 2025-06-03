import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from '@/lib/prisma';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const user = await prisma.usuario.findFirst({
          where: { Email: credentials.email },
          include: {
            administrador: true,
            terapeuta: true,
          },
        });

        if (!user) return null;

        // Cargar cliente si existe
        const cliente = await prisma.cliente.findUnique({
          where: {
            IdUsuario: user.Id,
          },
        });

        // Determinar rol
        let role = null;
        if (user.administrador) {
          role = "admin";
        } else if (user.terapeuta) {
          role = "colaborador";
        } else if (cliente) {
          role = "cliente";
        }

        // Retornar usuario con rol
        return {
          id: user.Id,
          nombre: user.Nombre,
          email: user.Email,
          role,
        };
        } catch(err) {
          console.error("❌ Error en authorize:", err);
          return null;
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
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