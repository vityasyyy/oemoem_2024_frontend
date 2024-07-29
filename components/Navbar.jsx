"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from 'react-spring';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isClick, setisClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check user authentication status
        const checkUserLoggedIn = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, { withCredentials: true });
                if (response.data.user) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        checkUserLoggedIn();
    }, []);

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
            {/* Navigation Bar */}
            <nav className="bg-transparent z-50 fixed w-screen top-0 shadow-lg">
                <div className={`flex px-[min(10%,512px)] items-center justify-between relative z-30 mx-auto py-8 bg-basicBlack-10 h-12 ${isClick ? '' : 'rounded-b-lg'}`}>
                    <Link href={isLoggedIn ? '/kelas' : '/'}>
                        <h1 className="text-white text-xl sm:text-2xl font-semibold">
                            OemOem 
                        </h1>
                    </Link>

                    {/* Program dan Kelas & Button */}
                    <div className="hidden md:flex text-xl items-center space-x-5">
                        <Link href="/kelas" className="text-white px-4 hover:text-basicLightGrey-10 transition-all">
                            Program dan Kelas
                        </Link>
                        {isLoggedIn ? (
                            <Link href="/akun" className="text-white px-4 hover:text-basicLightGrey-10 transition-all">
                                Akun
                            </Link>
                        ) : (
                            <div className="flex items-center justify between gap-2">
                                <Link href="auth/masuk" className="flex items-center px-2 py-1 rounded justify-center gap-3 bg-basicRed-10 text-white border-basicRed-10 hover:bg-red-900 transition-all" type='login'>
                                    <label className="cursor-pointer font-medium">Masuk</label>
                                </Link>
                                <Link href="auth/daftar" className="flex items-center px-2 py-1 justify-center gap-3 border-basicWhite-10 bg-basicWhite-10 text-basicRed-10 rounded hover:bg-basicLightGrey-10 transition-all" type='login'>
                                    <label className="cursor-pointer font-medium">Daftar</label>
                                </Link>
                            </div>
                        )}
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
                            <div className="flex justify-center py-2">
                                <Link href="/kelas" className="text-basicBlack-10 font-semibold cursor-pointer">
                                    Program dan Kelas
                                </Link>
                            </div>

                            <div className="flex justify-center flex-col">
                                {isLoggedIn ? (
                                    <Link
                                        href="/akun"
                                        className="flex items-center justify-center py-2 bg-basicRed-10 text-white border-basicRed-10"
                                    >
                                        Akun
                                    </Link>
                                ) : (
                                    <>
                                        <button className="flex items-center justify-center py-2 bg-basicRed-10 text-white border-basicRed-10 " type='login'>
                                            <label className="cursor-pointer">Masuk</label>
                                        </button>
                                        <button className="flex items-center py-2 justify-center border-basicWhite-10 bg-basicWhite-10 text-basicRed-10 rounded-lg" type='login'>
                                            <label className="cursor-pointer font-semibold">Daftar</label>
                                        </button>
                                    </>
                                )}
                            </div>
                        </animated.div>
                    )
                )}
            </nav>
        </>
    );
}

export default Navbar;
