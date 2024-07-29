import Image from "next/image";
import Link from "next/link";
import PresentedBy from "./PresentedBy";

const Footer = () => {
    return (
        <footer className="bg-basicLightGreen-10 px-[min(10%,512px)] h-[min(90%,72rem)] py-4 sm:py-8 border-red-600 z-20 text-white ">
            <div className="bg-basicBlack-10 rounded-xl h-full py-24 px-8 lg:px-24 flex flex-col items-center gap-4 lg:flex-row lg:place-content-between lg:items-center">
                <div className="flex flex-col items-center gap-10">
                    {/* Logo OemOem */}
                    <Image
                        src="footerLogo.svg"
                        alt="menu"
                        width={328}
                        height={64}
                        className="h-[200px] w-[200px] lg:h-[320px] lg:w-[320px] inline-block"
                    />

                    {/* Presented By */}
                    <PresentedBy /> 
                </div>

                {/* Socials */}
                <div className=" flex flex-col gap-5 mb-5 mt-12 items-center lg:items-stretch lg:mt-0 lg:mr-10 md:flex-row lg:flex-col lg:font-lg">

                    {/* Link Instagram */}
                    <Link href="https://www.instagram.com/omahti_ugm" className="flex items-center gap-2 sm:gap-4 transition-all hover:underline">
                        <Image
                            src="instagram.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                        <p>Instagram</p>
                    </Link>

                    {/* Link TikTok */}
                    <Link href="https://www.tiktok.com/@omahti_ugm" className="flex items-center gap-2 sm:gap-4 transition-all hover:underline">
                        <Image
                            src="tiktok.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                        <p>TikTok</p>
                    </Link>

                    {/* Link Website */}
                    <Link href="https://www.omahti.web.id" className="flex items-center gap-2 sm:gap-4 transition-all hover:underline">
                        <Image
                            src="web.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />  
                        <p>Website OmahTI</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
