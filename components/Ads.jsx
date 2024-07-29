import Image from "next/image";

const Ads = () => {
    return (
        <>
            <section className="flex flex-col bg-basicBlack-10 px-[min(10%,512px)] gap-8 pt-48 pb-4 sm:pb-8 sm:pt-64 lg:pt-24 text-white">
                {/* Kartu Pertama */}
                <div className="flex flex-col justify-center w-[min(100%,1123px)] gap-2 bg-basicLightBrown-10 rounded-lg lg:ml-auto sm:rounded-xl relative px-8 py-8 min-h-52 lg:pl-48">
                    {/* Cards Image */}
                    <div className="w-[300px] h-[300px] sm:w-[410px] sm:h-[410px] absolute left-1/2 transform -translate-x-1/2 top-[-14rem] sm:top-[-19rem] lg:left-[2rem] lg:top-[-9rem]">
                        <Image 
                            src="cardsKontol.svg"
                            fill={true}
                        />
                    </div>
                    <h1 className="text-basicBlue-10 text-xl sm:text-2xl lg:text-3xl lg:text-left text-center font-bold">Lakukan Challenge dan Dapatkan Hadiah!</h1>
                    <p className="text-black font-medium text-sm text-center sm:text-lg lg:text-left">dapatkan posisi tertinggi dengan menyelesaikan challenge untuk masing-masing kelas!</p>
                </div>

                {/* Kartu Kedua */}
                <div className="flex flex-col sm:flex-row items-center w-[min(100%,1123px)] gap-4 bg-basicLightBrown-10 rounded-lg lg:mr-auto sm:rounded-xl px-8 py-8">
                    {/* Image on Small Screens */}
                    <div className="rounded-xl sm:hidden bg-white relative w-40 h-40 overflow-hidden">
                        <Image 
                            src="/ronaldo.jpg"
                            fill={true}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex gap-2 flex-col">
                        <h1 className="text-basicDarkGreen-10 max-w-screen-sm text-xl sm:text-2xl lg:text-3xl sm:text-right sm:ml-auto text-center font-bold">Berlatih Bersama Professional</h1>
                        <p className="text-black font-medium text-sm text-center sm:text-lg sm:text-right">Kelas dibimbing bersama anggota proffesional OmahTI dalam setiap divisi untuk memastikan kualitas pengalaman</p>
                    </div>

                    {/* Image on Larger Screens */}
                    <div className="rounded-xl shrink-0 ml-4 hidden sm:inline-block bg-white relative w-44 h-44 overflow-hidden">
                        <Image 
                            src="/ronaldo.jpg"
                            fill={true}
                        />
                    </div>
                </div>

                {/* Kartu Ketiga */}
                <div className="flex flex-col sm:flex-row items-center w-[min(100%,1123px)] gap-4 bg-basicLightBrown-10 rounded-lg lg:ml-auto sm:rounded-xl px-8 py-8">
                    {/* Image on Small Screens */}
                    <div className="rounded-xl sm:hidden bg-white relative w-40 h-40 overflow-hidden">
                        <Image 
                            src="/rehun.png.jpg"
                            fill={true}
                        />
                    </div>

                    {/* Image on Larger Screens */}
                    <div className="rounded-xl shrink-0 mr-4 hidden sm:inline-block bg-white relative w-44 h-44 overflow-hidden">
                        <Image 
                            src="/rehun.png"
                            fill={true}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex gap-2 flex-col">
                        <h1 className="text-basicRed-10 max-w-screen-sm text-xl sm:text-2xl lg:text-3xl sm:text-left sm:mr-auto text-center font-bold">Pelatihan yang ramah untuk pemula</h1>
                        <p className="text-black font-medium text-sm text-center sm:text-lg sm:text-left">OemOem berfungsi sebagai pengenalan terhadap setiap hardskill dalam bidang Information Technology</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Ads;