import Image from "next/image";

const ChampsFE = () => {
    return (
        <>
            {/* Frontend */}
            <div className="flex flex-col border-4 w-56 h-72 border-basicDarkGreen-10 bg-basicLightBrown-10 rounded-xl p-2">
                    <Image
                        src="/spade.svg"
                        width={20}
                        height={20}
                        className={`mb-4`}
                        alt="Dropdown"
                    />
                    <div className="flex flex-col items-center mt-5">
                        <svg width="99" height="102" viewBox="0 0 99 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.051 2.29761H6.84644L14.7446 88.9382L49.4487 98.7511L84.3922 88.9382L92.051 2.29761ZM84.3923 9.23873H49.4488V91.0925L77.6908 83.4337L84.3923 9.23873ZM22.0442 19.7694H20.3689L24.9322 74.7512L35.7823 77.1566L33.6014 51.9605H44.0634V41.3099H32.6795L31.7369 30.42H44.0634V19.7694H30.815H22.0442Z" fill="#467448"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.2015 19.7695H78.6476L74.0843 74.7514L73.9927 74.7717L73.9798 74.9371L54.8311 79.1246V68.589L64.1544 66.5262L65.4151 51.9605H54.8333V41.3099H66.337L67.2796 30.4202H54.833V19.7696H68.2015L68.2015 19.7695Z" fill="#467448"/>
                        </svg>

                        <h1 className="text-center text-basicDarkGreen-10 font-semibold justify-end text-xl mt-7">
                            Frontend
                        </h1>
                    </div>
                </div>

                {/* Merah-merah bawah */}
                <div className="flex flex-col gap-2 text-white w-96 text-center">
                    <div className="rounded-lg border-4 border-basicRed-10 p-4">
                        Andreandhiki
                    </div>
                    <div className="rounded-lg border-4 border-basicRed-10 p-4">
                        Riyanta
                    </div>
                    <div className="rounded-lg border-4 border-basicRed-10 p-4">
                        Putra
                    </div>
                </div>
        </>
    );
}

export default ChampsFE;