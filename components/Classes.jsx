"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useState } from "react";

const Classes = ({ events }) => {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/kelas/${id}`);
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
        <section className="bg-basicBlack-10 py-10">
            <div className="w-fit text-lg bg-basicBlue-10 px-4 py-2 rounded-md text-white mb-4">
                Program dan Kelas
            </div>
            
            
            {/* Wrapper */}
            <div className="relative">
                {/* Scrollable Gallery */}
                <div ref={scrollRef} className="overflow-x-auto no-scrollbar">

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

                    {/* Cards */}
                    <div className="flex gap-4 pb-4" style={{ width: `${events.length * 188}px` }}>
                        {events.map((event, index) => (
                            <div 
                                key={index} 
                                className="relative border-[3px] rounded-xl w-44 h-56 py-2 px-2 flex flex-col items-center justify-end" 
                                style={{ borderColor: event.color, backgroundColor: '#EDB465' }}
                            >
                                {/* Logo Kiri Atas */}
                                {event.shape && event.shape && (
                                    <Image
                                    src={event.shape.url}
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
                                        {event.image && event.image && (
                                            <Image
                                                src={event.imageWarna.url}
                                                alt="class logo"
                                                width={75}
                                                height={75}
                                                className="w-20"
                                            />
                                        )}
                                    </div>

                                    {/* Nama Kelas */}
                                    <h1 className="text-center font-medium text-base" style={{color: event.color}}>
                                        {event.title}
                                    </h1>

                                    {/* Tombol Lihat Kelas */}
                                    <button 
                                        onClick={() => handleClick(event._id)} 
                                        className="text-white w-[90%] py-1.5 text-center rounded-xl cursor-pointer transition-all hover:rounded-2xl hover:shadow-2xl" 
                                        style={{ backgroundColor: event.color }}
                                        >
                                        Lihat Kelas
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            

        </section>
    );
}

export default Classes;