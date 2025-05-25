import Image from "next/image";
import HeaderHome from "../ui/components/header-home";
import { Footer } from "../ui/components/footer";

export default function Page() {
  return (
    <>
      <HeaderHome />
      <main className="flex min-h-screen flex-col p-6 bg-primary-gradient">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-4 w-full max-w-screen-xl mx-auto">
          <div className="max-w-lg md:max-w-md">
            <h2 className="text-2xl font-bold mb-4">Em contrução</h2>
            <p className="text-lg">
              Volte em breve e desfrute da melhor experiência possível!
            </p>
          </div>
          <div>
            <Image
              width={660}
              height={412}
              src="/fintech/em-construcao.png"
              alt="Homem construindo uma parede"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
