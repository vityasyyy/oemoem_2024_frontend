
"use client"
import LoginNavbar from "@/components/LoginNavbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import BackButton from "@/components/BackButton";

export default function Masuk() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, { withCredentials: true, headers: {'Content-Type': 'application/json'}});
                if (response.data.user) {
                    router.push('/'); // Redirect to home page if user is logged in
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        checkUserLoggedIn();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                email,
                password
            }, {withCredentials: true});
            console.log(response)
            if (response.status === 200) {
                const validateResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
                    withCredentials: true, headers: {'Content-Type': 'application/json'}
                });
                console.log(validateResponse)
                // Login successful, redirect to home page
                router.push('/kelas');
            }
        } catch (error) {
            console.log(error)
            setError(error.response?.data?.error || 'An error occurred during login');
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <LoginNavbar />

            {/* Section */}
            <section className="bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10 px-[min(10%,512px)] pt-20 relative">

                {/* Back Button*/}
                <div className="flex gap-2 items-center">
                    <Link href="/">
                        <BackButton />
                    </Link>
                    <h2 className="font-bold text-black text-lg sm:text-xl sm:ml-2">Masuk</h2>
                </div>

                {/* Hero */}
                <div className="flex flex-col items-center gap-4 mt-8 z-30">
                    {/* Title */}
                    <h1 className="max-w-[24rem] text-3xl text-wrap text-center text-white drop-shadow-lg font-semibold z-30">Selamat Datang Kembali di <span className="text-basicLightBrown-10">OemOem</span></h1>

                    {/* Login Card */}
                    <form onSubmit={handleSubmit} className="bg-basicBlack-10 w-[min(100%,32rem)] z-30 text-sm sm:text-base flex flex-col gap-1 border-[1px] border-white rounded-xl px-6 py-4 mb-2 mx-6 sm:mx-8">
                        {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

                        {/* Form */}
                        <h2 className="text-basicLightBrown-10 font-medium sm:mt-4">Email</h2>
                        <input
                            type="text"
                            placeholder="Tuliskan Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"
                            required
                        />

                        <h2 className="text-basicLightBrown-10 font-medium ">Password</h2>
                        <input
                            type="password"
                            placeholder="Tuliskan Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-8 px-2 py-1 sm:py-2"
                            required
                        />

                        <button type="submit" className="bg-basicRed-10 text-white font-medium py-1 rounded-md border-[2px] border-basicDarkBrown-10 hover:bg-red-900 transition-all sm:py-2">Masuk</button>
                    </form>

                    {/* Belom punya akun? */}
                    <h1 className="text-white text-xl font-medium mb-12 z-30">Belom punya akun? <Link href="/auth/daftar" className="text-basicLightBrown-10 hover:text-basicDarkBrown-10 transition-all">Daftar</Link></h1>
                </div>

                {/* Card Background */}
                <div>
                    <Image 
                        src="heroCardsMD.svg"
                        height={500}
                        width={500}
                        className="absolute top-0 bottom-0 right-0 left-0 m-auto z-0 opacity-50"
                        alt="Hero Cards"
                    />
                </div>

                {/* Black Background */}
                <div className="bg-basicBlack-10 absolute z-10 bottom-0 left-0 right-0 top-[60%]"></div>

            </section>
        </>
    );
}
