import Image from "next/image";

const ChampionsBelom = () => {
    return (
        <>
            <p className="text-white text-base mb-8">Champions dipersembahkan bagi top-3 pemenang challenge untuk masing-masing kelas</p>

            <div className="flex flex-col gap-2 text-white items-center">
                {/* Wheel Image */}
                <Image
                    src="championswheel.svg"
                    width={100}
                    height={100}
                    className="w-24 mb-4 sm:w-32"
                />

                {/* Text */}
                <h1 className="text-lg text-center mb-4 font-medium sm:mb-0 md:text-2xl">Champions belum ditentukan, selesaikan challenge di kelas masing-masing</h1>
                <h1 className="text-xl text-center font-medium md:text-2xl">Pengumuman Champions pada</h1>
                <h1 className="text-2xl text-center font-semibold text-basicLightBrown-10 md:text-2xl">23/08/24</h1>
            </div>
        </>
    )
};

export default ChampionsBelom;