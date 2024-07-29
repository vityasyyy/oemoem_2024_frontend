import Image from "next/image";


const Mentor = ({event}) => {
    return (
        <>
            <div className="max-w-xs p-4 flex bg-basicLightBrown-10 gap-2 sm:gap-6 rounded-md">
                {/* Foto Orang */}
                <div className="bg-white rounded-md w-24 h-24 relative overflow-hidden">
                    <Image 
                        src={event.mentors.gambarMentor.url}
                        layout="fill"
                        objectFit="cover"
                    /> 
                </div>

                {/* Semua Text di Kanan */}
                <div className="flex flex-col place-content-between gap-2">
                    <div className="flex flex-col gap-1">
                        <h1 className="w-fit bg-basicRed-10 px-1.5 rounded-sm text-white text-base sm:text-lg">{event.mentors.namaMentor}</h1>
                        <h2 className="text-xs sm:text-sm text-black font-medium">{event.mentors.divisiMentor}</h2>
                    </div>
                    <h2 className="text-xs sm:text-sm text-basicBlue-10 font-medium">{event.mentors.tahunAjaran}</h2>
                </div>
            </div>
        </>
    )
}

export default Mentor;