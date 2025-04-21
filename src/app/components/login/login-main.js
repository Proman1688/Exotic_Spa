import Link from "next/link";
import Image from "next/image";

export default function LoginMain() {
    return (
      <div className="relative flex items-center justify-center w-180 h-135 border-2 rounded-4xl mx-5 md:mx-0">
        {/* Capa de fondo con opacidad */}
        <div className="absolute inset-0 bg-white opacity-50 rounded-4xl"></div>
  
        {/* Contenido que NO es afectado por la opacidad */}
        <div className="relative flex w-full md:p-4 p-2">
          
          {/* Sección de formulario */}
          <div className="w-full md:w-1/2 p-6 text-white items-center justify-center">
            <h2 className=" text-3xl font-bold text-center mt-5">Login</h2>
  
            <div className="mt-8 space-y-3">
              <div className="flex gap-3">
              </div>
              <input type="email" placeholder="Email" className="w-full p-2 bg-gray-700 rounded-md outline-none text-[14px]"/>
              <input type="password" placeholder="Enter your password" className="w-full p-2 bg-gray-700 rounded-md outline-none text-[14px]"/>
              <Link href="/sign-up" className="text-gray-700 text-[12px]">Forgot password?</Link>
              <button className="w-full text-[13px] py-3 mt-8 bg-black rounded-md hover:bg-gray-900 transition">Sign in</button>
            </div>
  
              {/* Divider */}
              <div className="my-4 flex items-center">
                <hr className="w-full border-white"/>
                <span className="px-5 text-white text-sm whitespace-nowrap">or sign in with</span>
                <hr className="w-full border-white"/>
              </div>
  
            {/* Botones de redes sociales */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 w-1/2 p-2 border rounded-md hover:bg-gray-700 transition">
                <Image width={100} height={100} src="/logo_google.png" alt="Google" className="w-8"/>
                Google
              </button>
              <button className="flex items-center gap-2 w-1/2 p-2 border rounded-md hover:bg-gray-700 transition">
                <Image width={100} height={100} src="/logo_apple.png" alt="Apple" className="w-8"/>
                Apple
              </button>
            </div>
            <p className="text-sm mt-5 text-center">Don&apos;t have an account? <Link href="/sign-up" className="text-blue-400">Login</Link></p>
          </div>
          <Image width={100} height={100} src="/buso-2.png" alt="Logo" className="hidden md:block w-1/2 " />
        </div>
      </div>
    );
  }
  