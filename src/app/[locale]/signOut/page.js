"use client";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">You have been signed out</h1>
        <p className="text-gray-600 mb-6">Thank you for visiting. We hope to see you again soon!</p>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"  
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}