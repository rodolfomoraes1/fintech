"use client";

import HeaderHome from "./ui/components/header-home";
import { Footer } from "./ui/components/footer";
import Image from "next/image";
import { Button } from "./ui/components/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <>
      <HeaderHome />
      <main className="flex min-h-screen flex-col p-6 bg-primary-gradient">
        <div className="flex flex-col lg:flex-col justify-center items-center gap-8 p-4 w-full max-w-screen-xl mx-auto">
          <div className="max-w-lg md:max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Ops! Não encontramos a página...
            </h2>
            <p className="text-lg">
              E olha que exploramos o universo procurando por ela! Que tal
              voltar e tentar novamente?
            </p>
          </div>
          <Button onClick={handleReturn}>Voltar ao início</Button>
          <div>
            <Image
              width={470}
              height={350}
              src="/fintech/not-found.png"
              alt="Mulher sentada observando código de erro 404"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
