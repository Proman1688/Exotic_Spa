import Head from "next/head";

export default function TopBar() {
  return ( 
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    </Head>
    
    <nav className="flex justify-between p-2 px-16 text-xs bg-amber-50 text-black dark:bg-[#2a24242d] dark:text-white">
      <p className="flex items-center">Welcome to our online store</p>

      <div className="flex items-center space-x-5">
        <select>
          <option className="dark:bg-white dark:text-black">English</option>
          <option className="dark:bg-white dark:text-black">Spanish</option>
          <option className="dark:bg-white dark:text-black">French</option>
        </select>
        <a className="border-l-2 px-5" href="#">Login or Register</a>
        <div className="flex space-x-4">
          <a href="https://github.com/jadodevs">
            <img className="invert dark:invert-0" src="/github.svg" alt="GitHub" width="30" height="30" />
          </a>
          <a href="https://instagram.com/mi_usuario">
            <img className="invert dark:invert-0" src="/instagram.svg" alt="Instagram" width="30" height="30" />
          </a>
          <a href="https://linkedin.com/in/mi_usuario">
            <img className="invert dark:invert-0" src="/linkedin.svg" alt="LinkedIn" width="30" height="30" />
          </a>
        </div>
      </div>
    </nav>
  </>
  );
}