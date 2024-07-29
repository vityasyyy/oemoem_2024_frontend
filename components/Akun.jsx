'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import Loading from './Loading';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Akun = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, { withCredentials: true, headers: {'Content-Type': 'application/json'} });
            if (response.data.user) {
                setUser(response.data.user);
            } else {
                // Redirect to login if not authenticated
                router.push('/auth/masuk');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            router.push('/auth/masuk');
        }
    };

    const handleLogout = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {}, { withCredentials: true, headers: {'Content-Type': 'application/json'} });
            if (response.data.message === "Logout successful") {
                // Clear any client-side storage if you're using any
                localStorage.removeItem('user'); // If you're storing user data in localStorage
                // Redirect to login page
                router.push('/auth/masuk');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    if (!user) return <Loading />;

    return (
        <section className="bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10 px-[min(10%,512px)] pt-20 relative">
            <div className="flex gap-2 items-center">
                <Link href="/">
                    <BackButton />
                </Link>
                <h2 className="font-bold text-black text-lg sm:text-xl sm:ml-2">Akun</h2>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8 pb-24 sm:pb-42 z-30">
                <h1 className="max-w-[24rem] text-3xl text-wrap text-center text-white drop-shadow-lg font-semibold z-30">Informasi Akun</h1>

                <div className="bg-basicBlack-10 w-[min(100%,32rem)] z-30 text-sm sm:text-xl flex flex-col gap-1 border-[1px] border-white rounded-xl px-6 py-4 mb-2 mx-6 sm:mx-8">
                    <h2 className="text-basicLightBrown-10 font-medium sm:mt-4">Nama</h2>
                    <h2 className="text-white font-medium sm">{user.username}</h2>

                    <h2 className="text-basicLightBrown-10 font-medium">Email</h2>
                    <h2 className="text-white font-medium">{user.email}</h2>

                    <button onClick={handleLogout} className="flex justify-center items-center bg-basicRed-10 text-white font-medium py-1 mt-4 rounded-md border-[2px] border-basicDarkBrown-10 sm:py-2 hover:bg-red-900 transition-all">Keluar</button>
                </div>
            </div>

            <div>
                <Image 
                src="heroCardsMD.svg"
                height={500}
                width={500}
                className="absolute top-0 bottom-0 right-0 left-0 m-auto z-0 opacity-50"
                />
            </div>

            <div className="bg-basicBlack-10 absolute z-10 bottom-0 left-0 right-0 top-[60%]"></div>
        </section>
    );
};

export default Akun;
