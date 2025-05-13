import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "./button"
import Image from "next/image";

//"bg-primary-gradient"
//"text-lg"

export default function Header () {
    return (
        <header className="bg-bgColors-black">
            <div className="flex items-center h-20 px-4 gap-4">

            <div className="block md:hidden">
                {/* visível em telas menores que 768px (mobile) */}
            </div>

            <div className="hidden md:block lg:hidden">
                {/* visível apenas entre 768px e 1023px (tablet) */}
            </div>

            <div className="hidden lg:block">
                {/* visível apenas em ≥ 1024px (desktop) */}
            </div>

                <div className="block md:hidden">
                    <Bars3Icon className="h-6 w-6 text-white" />
                </div>

                <div className="hidden md:flex lg:hidden items-center">
                    <Image
                        width={27}
                        height={27}
                        src="/fintech/favicon-small.png"
                        alt="Fintech logo"
                        className="hidden md:block"
                    />
                </div>
                
                {/* Start Spacer */}
                <span className="flex-grow" />

                {/* Left: Logo + Nav Links */}
                <div className="flex items-center gap-4">
                    <Image
                        width={146}
                        height={32}
                        src="/fintech/logo.png"
                        alt="Fintech logo"
                        className="hidden md:block"
                    />
                    <Button variant="link">Sobre</Button>
                    <Button variant="link">Serviços</Button>
                </div>

                {/* Fills space between left and right */}
                <div className="flex-grow" />

                {/* Right: CTA Buttons */}
                <div className="flex items-center gap-2">
                    <Button variant="primary">Abrir uma conta</Button>
                    <Button variant="secondary">Já tenho uma conta</Button>
                </div>

                {/* End Spacer */}
                <span className="flex-grow" />
            </div>
        </header>
    )
};
