import Image from "next/image";

const Loading = () => {
    return (
        <>
            {/* Black Background */}
            <div className="fixed bg-basicBlack-10 flex items-center justify-center inset-0 z-[100]">
                {/* Dice */}
                <Image 
                    src="diceloading.svg"
                    width={500}
                    height={500}
                    className="z-[999] animate-bounce"
                />
            </div>
        </>
    )
};

export default Loading;