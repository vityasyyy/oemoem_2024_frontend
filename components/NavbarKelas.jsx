"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTransition, animated } from 'react-spring';

const NavbarKelas = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };

    const transitions = useTransition(isClick, {
        from: { transform: 'translateY(-100%)', opacity: 0 },
        enter: { transform: 'translateY(0%)', opacity: 1 },
        leave: { transform: 'translateY(-100%)', opacity: 0 },
        config: { tension: 220, friction: 20 }
    });

    return (
        <>
            {/* Fill color behind navbar RUSAK */}
            {/* <div className="bg-basicLightGreen-10 absolute top-0 right-0 left-0 bottom-0"></div> */}

            {/* Navigation Bar */}
            <nav className="bg-transparent z-50 fixed w-screen top-0 shadow-lg">
                <div className={`flex items-center justify-between relative z-30 mx-auto py-8 px-[min(10%,512px)] 3xl:px-0 bg-basicBlack-10 h-12 ${isClick ? '' : 'rounded-b-lg'}`}>
                    <Link href="/">
                        <h1 className="text-white text-xl sm:text-2xl font-semibold">
                            OemOem 
                        </h1>
                    </Link>

                    {/* Program dan Kelas & Button */}
                    <div className="hidden md:flex text-xl items-center space-x-5">
                        <Link href="https://wa.me/6285259343364" className="text-white px-4 hover:text-basicLightGrey-10 transition-all">
                            Kontak dan Bantuan
                        </Link>   
                        <Link href="/akun" className="text-white px-4 hover:text-basicLightGrey-10 transition-all">
                            Akun
                        </Link>
                    </div>

                    <button onClick={toggleNavbar} className="md:hidden focus:outline-none relative w-8 h-8">
                        <div className={`hamburger ${isClick ? 'open' : ''}`}>
                            <span className="block w-full h-1 bg-white transition-transform duration-300 rounded"></span>
                            <span className="block w-full h-1 bg-white mt-2 transition-transform duration-300 rounded"></span>
                            <span className="block w-full h-1 bg-white mt-2 transition-transform duration-300 rounded"></span>
                        </div>
                    </button>
                </div>

                {transitions((style, item) =>
                    item && (
                        <animated.div style={style} className="absolute z-[51] w-screen md:hidden bg-basicWhite-10 rounded-b-lg shadow-lg">
                            <div className="flex flex-col justify-center pb-2 text-center text-lg bg-basicBlack-10 rounded-b-lg">
                                <Link href="https://wa.me/6285259343364" className="text-basicBlack-10 bg-basicWhite-10 py-1 font-semibold cursor-pointer">
                                    Kontak dan Bantuan
                                </Link>
                                <Link href="/akun" className="text-basicWhite-10 bg-basicBlack-10 pt-1 font-semibold cursor-pointer">
                                    Akun
                                </Link>
                            </div>
                        </animated.div>
                    )
                )}
            </nav>
        </>
    );
}

export default NavbarKelas;