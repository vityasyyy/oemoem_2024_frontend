import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import NavbarKelas from "./NavbarKelas";
import KelasButton from "./KelasButton";
import Champions from "./Champions";
import ChampionsBelom from "./ChampionsBelom";
import ChampionsButton from "./ChampionsButton";
import DiceAd from "./DiceAd";
import GabungGrupMini from "./GabungGrupMini";

const Class = ({ user }) => {
    const [activeView, setActiveView] = useState('kelas');
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        if (user) {
            fetchEnrolledClasses();
            fetchAllClasses();
        }
    }, [user]);

    const fetchEnrolledClasses = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/${user._id}/enrolled`, { withCredentials: true, headers: {'Content-Type': 'application/json'} });
            setEnrolledClasses(response.data);
        } catch (error) {
            console.error('Error fetching enrolled classes:', error);
        }
    };

    const fetchAllClasses = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event`, { withCredentials: true, headers: {'Content-Type': 'application/json'} });
            setAllClasses(response.data);
        } catch (error) {
            console.error('Error fetching all classes:', error);
        }
    };
    
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const newPosition = Math.max(scrollPosition - 200, 0);
            scrollRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            const newPosition = Math.min(scrollPosition + 200, maxScroll);
            scrollRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <NavbarKelas />

            {/* Main Section */}
            <section className="bg-gradient-to-t from-[#777A69] to-[#99A27F] px-[min(10%,512px)] pt-20 relative">
                {/* Dice Background */}
                <Image 
                    src="diceloading.svg"
                    width={300}
                    height={300}
                    alt="dice"
                    className="absolute opacity-50 z-0 w-64 sm:w-auto right-0 sm:right-[min(10%,512px)]"
                />

                {/* Header */}
                <div className="flex gap-2 pb-6 pt-4">

                    {/* Greeting and Buttons */}
                    <div className="flex z-30 flex-col gap-5">

                        {/* Hello, User */}
                        <h1 className="text-basicBlack-10 text-3xl sm:text-4xl font-bold">Hello, {user.username}!</h1>

                        {/* Kelas and Champions Buttons */}
                        <div className="flex gap-2">
                            <KelasButton 
                                onClick={() => setActiveView('kelas')}
                                isActive={activeView === 'kelas'}
                            />
                            <ChampionsButton
                                onClick={() => setActiveView('champions')}
                                isActive={activeView === 'champions'}
                            />
                        </div>
                    </div>

                    {/* Whatsapp */}
                    <GabungGrupMini />
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-[#777A69] relative z-30">
                {activeView === 'kelas' ? (
                    <>
                        <section className="flex flex-col z-30 text-lg rounded-t-3xl py-8 pb-40 px-[min(10%,512px)] bg-basicBlack-10">
                            {/* Kelas Pilihanmu */}
                            <div className="flex">
                                <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2">Kelas Pilihanmu</div>
                            </div>

                            {/* Gallery */}
                            <div className="flex flex-wrap pt-4 gap-4 mb-8">
                                {enrolledClasses.length === 0 ? (
                                    <>
                                        <h1 className="text-white text-lg">Kamu belom memilih kelas, silahkan pilih kelas yang tersedia dibawah</h1>
                                    </>
                                ) : (
                                    enrolledClasses.map((cls) => (
                                        <div key={cls._id} className="relative border-[3px] rounded-xl w-44 h-56 py-2 px-2 flex flex-col items-center justify-end" style={{ borderColor: cls.color, backgroundColor: '#EDB465' }}>
                                            {/* Logo Kiri Atas (heart, spade, dll) */}
                                            {cls.shape && (
                                                <Image
                                                    src={cls.shape.url}
                                                    alt="shape"
                                                    width={25}
                                                    height={32}
                                                    className="absolute top-2 left-2"
                                                />
                                            )}
                                            {/* Kumpulin Logo, Nama, Tombol Join */}
                                            <div className="flex flex-col w-full gap-2 justify-end items-center">

                                                {/* Logo Kelas */}
                                                <div className="flex justify-center">
                                                    {cls.image && (
                                                        <Image
                                                            src={cls.imageWarna.url}
                                                            alt="class logo"
                                                            width={75}
                                                            height={32}
                                                        />
                                                    )}
                                                </div>
                                                {/* Nama Kelas */}
                                                <h1 className="text-center font-medium text-base" style={{ color: cls.color }}>
                                                    {cls.title}
                                                </h1>
                                                {/* Tombol Lihat Kelas */}
                                                <Link href={`/kelas/${cls._id}`} className="text-white w-[90%] py-1.5 text-base text-center rounded-xl cursor-pointer transition-all hover:rounded-2xl hover:shadow-2xl" style={{ backgroundColor: cls.color }}>
                                                    Lihat Kelas
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Program dan Kelas */}
                            <div className="flex">
                                <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2 mb-4">Program dan Kelas</div>
                            </div>

                            {/* Wrapper */}
                            <div className="relative">
                                {/* Gallery */}
                                <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar gap-4">

                                    {/* Slide Button Kanan */}
                                    <Image
                                        src="slideButtonRight.svg"
                                        alt="shape"
                                        width={40}
                                        height={32}
                                        onClick={scrollRight}
                                        className="absolute right-[-1rem] z-20 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all shadow-xl"
                                    />

                                    {/* Slide Button Kiri */}
                                    <Image
                                        src="slideButtonLeft.svg"
                                        alt="shape"
                                        width={40}
                                        height={32}
                                        onClick={scrollLeft}
                                        className="absolute left-[-1rem] z-20 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all shadow-xl"
                                    />
                                    {allClasses.map((cls) => (
                                        <div key={cls._id} className="relative border-[3px] shrink-0 rounded-xl w-44 h-56 py-2 px-2 flex flex-col items-center justify-end" style={{ borderColor: cls.color, backgroundColor: '#EDB465' }}>
                                            {/* Logo Kiri Atas */}
                                            {cls.shape && (
                                                <Image
                                                    src={cls.shape.url}
                                                    alt="shape"
                                                    width={25}
                                                    height={32}
                                                    className="absolute top-2 left-2"
                                                />
                                            )}
                                            {/* Kumpulin gambar, nama, dan tombol */}
                                            <div className="flex flex-col w-full gap-2 justify-end items-center">
                                                {/* Logo Kelas */}
                                                <div className="flex justify-center">
                                                    {cls.image && (
                                                        <Image
                                                            src={cls.imageWarna.url}
                                                            alt="class logo"
                                                            width={75}
                                                            height={32}
                                                            className="w-20"
                                                        />
                                                    )}
                                                </div>
                                                {/* Nama Kelas */}
                                                <h3 className="text-center font-medium text-base" style={{ color: cls.color }}>
                                                    {cls.title}
                                                </h3>
                                                {/* Tombol Lihat Kelas */}
                                                <Link href={`/kelas/${cls._id}`} className="text-white w-[90%] py-1.5 text-base text-center rounded-xl cursor-pointer hover:rounded-2xl hover:shadow-2xl transition-all" style={{ backgroundColor: cls.color }}>
                                                    Lihat Kelas
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {/* Champions Section */}
                        <section className="flex flex-col z-30 text-lg rounded-t-3xl py-8 pb-32 px-[min(10%,512px)] bg-basicBlack-10">
                            {/* NANTI INI DIUNCOMMENT/COMMENT SESUAI KEBUTUHAN, UNTUK AWAL PRODUCTION PAKE YANG BELOM */}
                            <Champions /> 
                            {/* <ChampionsBelom /> */}
                        </section>
                        <DiceAd />
                    </>
                )}
            </div>
        </>
    );
};

export default Class;
