"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { useSession } from "next-auth/react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const t = useTranslations("menu");
  const { data: session } = useSession();
  const role = session?.user?.role || "guest";

  let links = [];

  if (role === "guest") {
    links = [
      { href: "/", label: t("home") },
      { href: "/services", label: t("services") },
      { href: "/login", label: t("login") },
      { href: "/contact", label: t("contact") },
    ];
  } else if (role === "cliente") {
    links = [
      { href: "/client/clientHome", label: t("clientHome") },
      { href: "/services", label: t("services") },
      { href: "/client/bookAppointment", label: t("bookAppointment") },
      { href: "/client/myAppointments", label: t("myAppointments") },
      { href: "/myProfile", label: t("myProfile") },
      { href: "/signOut", label: t("logout") },
    ];
  } else if (role === "colaborador") {
    links = [
      { href: "/collaborator/mySchedule", label: t("mySchedule") },
      { href: "/collaborator/completeSchedule", label: t("completeSchedule") },
      { href: "/collaborator/clientsServed", label: t("clientsServed") },
      { href: "/myProfile", label: t("myProfile") },
      { href: "/signOut", label: t("logout") },
    ];
  } else if (role === "admin") {
    links = [
      { href: "/admin/dashboard", label: t("dashboard") },
      { href: "/admin/appointmentManagement", label: t("appointmentManagement") },
      { href: "/admin/clientManagement", label: t("clientManagement") },
      { href: "/admin/teamMembers", label: t("teamMembers") },
      { href: "/admin/inventory", label: t("inventory") },
      { href: "/admin/servicesPrices", label: t("servicesPrices") },
      { href: "/admin/memberships", label: t("memberships") },
      { href: "/signOut", label: t("logout") },
    ];
  }

  const handleLinkClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300); 
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      <nav className="flex px-10 py-4 text-white bg-opacity-0 select-none relative z-10 justify-between">
        <div className="flex items-center space-x-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={80}
              height={0}
              alt="Logo"
              className="w-30 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-base transform max-lg:text-sm">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-8 ml-auto">
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {(isMenuOpen || isClosing) && (
        <div
          className={`md:hidden bg-opacity-90 text-white p-4 rounded-lg
          transform origin-top transition-all duration-300 ease-out z-30 relative
          overflow-x-auto whitespace-nowrap
          ${isClosing ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
        >
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="inline-block mr-4 font-medium rounded-md text-center z-10 transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-700 px-4 py-2"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
