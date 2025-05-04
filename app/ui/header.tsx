import { Button } from "./button"
import Image from "next/image";


//"bg-primary-gradient"
//"text-lg"

export default function Header () {
    return (
        <header className="bg-bgColors-black">
            <div className="flex items-center h-20 px-4 gap-4">
                
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
