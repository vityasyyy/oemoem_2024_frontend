import Image from "next/image";
import Link from "next/link";

const LoginNavbar = () => {
    return (
        <>
            {/* Fill Color */}
            {/* <div className="bg-basicLightGreen-10 absolute top-0 right-0 left-0 bottom-0"></div> */}
            
            {/* Navigation Bar */}
            <nav className="bg-transparent z-50 fixed w-screen top-0 shadow-lg">
                <div className={`flex items-center justify-between px-[min(10%,512px)] relative z-30 mx-auto py-8  bg-basicBlack-10 h-12 rounded-b-lg`}>
                    <Link href="/">
                        <h1 className="text-white text-xl sm:text-2xl font-semibold">
                            OemOem 
                        </h1>
                    </Link>
                </div>
            </nav>
        </> 

    );
}

export default LoginNavbar;