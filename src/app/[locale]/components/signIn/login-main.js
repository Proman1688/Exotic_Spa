"use client";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "use-intl";

export default function LoginMain() {
    const t = useTranslations("signIn");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(t('invalidCredentials'));
      } else {
        const session = await getSession();
        const role = session?.user?.role || "guest";

        if (role === "cliente") {
          router.push("/home");
        }else if (role === "colaborador") {
          router.push("/");
        }else if (role === "admin") {
          router.push("/");
        }else {
          router.push("/");
        }
      }
    }


    return (
      <div className="w-full bg-[rgb(255,255,255,0.8)] z-30 flex flex-col items-center justify-center px-10 py-10 rounded-lg shadow-lg mx-auto">
        <h1 className="text-black text-2xl mb-2 font-bold text-center max-sm:text-xl">{t('title')}</h1>

        <p className="text-gray-500 text-xs mb-6 max-sm:text-[0.7rem]">{t('subtitle')}</p>

        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-1 text-xs">{t('email')}</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder={t('exampleEmail')}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-1 text-xs">{t('password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder={t('examplePassword')}
            />
          </div>

          {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 text-sm">
            {t('submit')}
          </button>
        </form>

        <p className="text-gray-700 mt-4 text-xs max-sm:text-[0.7rem]">{t('dontHave')} <Link href="/sign-up" className="text-blue-500 hover:underline">{t('signUp')}</Link></p>
      </div>
    );
  }
  