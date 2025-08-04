import Image from "next/image";
import { AdvantageCard } from "./ui/components/advantage-card/advantage-card";
import { Footer } from "./ui/components/footer";
import HeaderHome from "./ui/components/header-home";
import { Suspense } from "react";
import { Loading } from "./ui/components/loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HeaderHome />
      <main className="flex min-h-screen flex-col p-6 bg-primary-gradient">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-4 w-full max-w-screen-xl mx-auto">
          <div className="max-w-lg md:max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Controle financeiro liberdade
            </h2>
            <p className="text-lg">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </p>
          </div>
          <div>
            <Image
              width={660}
              height={412}
              src="/fintech/home-img.png"
              alt="Homem segurando dinheiro e gráfico por trás"
            />
          </div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Vantagens do nosso banco:
          </h2>

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
              <AdvantageCard
                imageSrc="/fintech/gift.png"
                imageAlt="Caixa de presente"
                title="Conta e cartão gratuitos"
                description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
              />

              <AdvantageCard
                imageSrc="/fintech/cash.png"
                imageAlt="Saque de dinheiro"
                title="Saques sem custo"
                description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
              />

              <AdvantageCard
                imageSrc="/fintech/star.png"
                imageAlt="Estrela"
                title="Programa de pontos"
                description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
              />

              <AdvantageCard
                imageSrc="/fintech/devices.png"
                imageAlt="PC, tablet e celular"
                title="Seguro Dispositivos"
                description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Suspense>
  );
}
