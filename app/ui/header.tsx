"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-bgColors-black">
      <div>
        {/* Layout para mobile (768px) */}
        <div className="flex items-center justify-between px-12 h-20 md:hidden space-x-4">
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={toggleDrawer}
          >
            <Bars3Icon className="h-6 w-6 text-green-400" />
          </button>

          <Image
            width={146}
            height={32}
            src="/fintech/logo.png"
            alt="Fintech logo"
          />
        </div>

        {/* Layout para tablet e desktop */}
        <div className="hidden md:flex items-center justify-between h-20 md:px-16 lg:px-30 xl:px-40 2xl:px-48">
          <div className="flex items-center">
            {/* Tablet (768px-1023px) */}
            <Image
              width={27}
              height={27}
              src="/fintech/favicon-small.png"
              alt="Fintech logo"
              className="md:block lg:hidden"
            />

            {/* Desktop (≥1024px) */}
            <Image
              width={146}
              height={32}
              src="/fintech/logo.png"
              alt="Fintech logo"
              className="hidden lg:block"
            />
          </div>

          <div className="flex items-center space-x-4">
            <nav className="flex space-x-4">
              <Button variant="link">Sobre</Button>
              <Button variant="link">Serviços</Button>
            </nav>

            <div className="flex space-x-2 ml-4">
              <Button variant="primary">Abrir uma conta</Button>
              <Button variant="secondary">Já tenho uma conta</Button>
            </div>
          </div>
        </div>

        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleDrawer}
            />

            <div className="relative flex flex-col w-4/5 max-w-sm h-full bg-white p-6">
              <button
                className="self-end p-2 -mr-2 text-gray-700 hover:text-gray-900"
                onClick={toggleDrawer}
              >
                <XMarkIcon className="h-6 w-6 hover:bg-gray-100" />
              </button>

              <nav className="flex flex-col space-y-4 mt-8">
                <Button variant="link">Sobre</Button>
                <Button variant="link">Serviços</Button>
              </nav>

              <div className="flex flex-col space-y-2 mt-8">
                <Button variant="primary">Abrir uma conta</Button>
                <Button variant="secondary">Já tenho uma conta</Button>
              </div>

              <div className="flex justify-center py-4 mt-auto">
                <Image
                  width={146}
                  height={32}
                  src="/fintech/logo.png"
                  alt="Fintech logo"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/*
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
*/
