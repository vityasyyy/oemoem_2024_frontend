import Link from "next/link";
import Image from "next/image";

const BackButton = () => {
    return (
        <>
            <div href="/" className="flex items-center justify-center bg-white rounded-md py-0.5 px-2 transition-all hover:scale-110">
                <Image
                    src="back.svg"
                    alt="back"
                    width={10}
                    height={10}
                />
            </div>
        </>
    );
};

export default BackButton;