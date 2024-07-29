import Image from "next/image";
import Link from "next/link";

const GabungGrup = () => {
    return (
        <div className="font-medium bg-basicBlack-10 w-fit min-w-64 px-4 py-4 rounded-xl flex flex-col gap-2 items-center fixed left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl transition-all">
            {/* Text Bagian Atas */}
            <div>
                <h1 className="text-white text-center text-lg sm:text-xl">
                    Selamat bergabung <br></br> bersama <span className="text-basicLightBrown-10">OemOem</span>
                </h1>
                <p className="text-sm mt-1 text-center font-normal text-white">
                    Gabung grup chat untuk informasi lebih lanjut
                </p>
            </div>

            {/* Logo Whatsapp */}
            <Image
                src="whatsapp.svg"
                height={50}
                width={50}
                className="w-24"
                alt="WhatsApp Logo"
            />

            {/* Tombol */}
            <Link href="https://youtube.com" className="flex items-center justify-center border-2 py-1.5 w-full rounded-md text-white sm:text-xl border-basicLightBrown-10 bg-basicRed-10 mt-4 hover:bg-red-900 transition-all">
                Gabung
            </Link>
        </div>
    );
}

export default GabungGrup;