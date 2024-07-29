import Image from "next/image";
import Link from "next/link";

const GabungGrupMini = () => {
    return (
        <div className="bg-basicBlack-10 h-fit ml-auto z-30 w-fit transition-all sm:w-28 p-2 rounded-lg flex flex-col items-center place-content-between gap-1">
            <h1 className="hidden sm:block text-white text-sm sm:text-base text-center">Grup Chat</h1>

            {/* On Larger Screens */}
            <Image
                src="whatsapp.svg"
                height={50}
                width={50}
                className="hidden sm:block w-8 sm:w-10"
                alt="WhatsApp Logo"
            />

            {/* On Smaller Screens, show this only */}
            <Link href="https://youtube.com">
                <Image
                    src="whatsapp.svg"
                    height={50}
                    width={50}
                    className="w-8 sm:hidden"
                    alt="WhatsApp Logo"
                />
            </Link>

            <Link href="https://youtube.com" className="hidden text-white text-xs sm:text-sm sm:flex place-content-center w-full py-1 rounded-lg -basicLightBrown-1 bg-basicRed-10 hover:bg-red-900 transition-all">
                Gabung
            </Link>
        </div>
    );
}

export default GabungGrupMini;