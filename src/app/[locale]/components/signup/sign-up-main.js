"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpMain() {
  const t = useTranslations('signup');
  const router = useRouter();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const nombre = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, password }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.error || 'Error al registrar');
    }
  }

  return (
      <div className="w-full bg-[rgb(255,255,255,0.8)] z-30 flex flex-col items-center justify-center px-10 py-10 rounded-lg shadow-lg mx-auto">
        <h1 className="text-black text-2xl mb-2 font-bold text-center max-sm:text-xl">{t('title')}</h1>
        <p className="text-gray-500 text-xs mb-6 max-sm:text-[0.7rem]">{t('subtitle')}</p>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 mb-1 text-xs max-sm:text-[0.7rem]">{t('name')}</label>
            <input 
            type="text" 
            id="username" 
            name="username"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-xs" 
            required 
            placeholder={t('placeholderName')}/>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-1 text-xs max-sm:text-[0.7rem]">{t('email')}</label>
            <input 
            type="text" 
            id="email" 
            name="email" 
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-xs" 
            required 
            placeholder={t('placeholderEmail')}/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-1 text-xs max-sm:text-[0.7rem]">{t('password')}</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-xs" 
            required 
            placeholder={t('placeholderPassword')}/>
          </div>
          <div className="mb-6">
            <label htmlFor="confirmpassword" className="block text-gray-700 mb-1 text-xs max-sm:text-[0.7rem]">{t('confirmPassword')}</label>
            <input 
            type="password" 
            id="confirmpassword" 
            name="confirmpassword"
            value={confirmpassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-xs" 
            required 
            placeholder={t('placeholderConfirmPassword')}/>
          </div>
          <div className="flex items-center mb-4 text-xs max-sm:text-[0.7rem]">
            <input type="checkbox" id="remember" name="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">{t('terms')}</label>
          </div>
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 text-sm max-sm:text-xs">{t('submit')}</button>
        </form>
        <p className="text-gray-700 mt-4 text-xs max-sm:text-[0.7rem]">{t('alreadyHave')} <Link href="/login" className="text-blue-500 hover:underline">{t('signIn')}</Link></p>
      </div>
    );
}