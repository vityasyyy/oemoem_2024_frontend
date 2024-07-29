import Image from "next/image";

const PresentedBy = () => {
    return (
        <>
            <div className="flex rounded-xl gap-1 bg-white text-black text-lg text-center px-3 sm:px-8 py-2">
                <h1 className="text-sm sm:text-lg text-nowrap font-semibold">Presented By:</h1>
                <Image 
                    width={100}
                    height={100}
                    src="omahti.svg"
                    className="w-20"
                />
            </div>
        </>
    )
};

export default PresentedBy;