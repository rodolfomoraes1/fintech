import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ps-4 pe-4 md:ps-8 md:pe-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <div className="space-y-2">
              <div className="flex items-center">Conta corrente</div>
              <div className="flex items-center">Conta PJ</div>
              <div className="flex items-center">Cartão de crédito</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">0800 004 250 08</div>
              <div className="flex items-center">meajuda@bytebank.com.br</div>
              <div className="flex items-center">ouvidoria@bytebank.com.br</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Desenvolvido por Alura
            </h3>
            <div className="relative w-[146px] h-[32px]">
              <Image
                src="/fintech/logo-white.png"
                alt="Fintech logo"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
