import Image from "next/image";

const ChampsUIUX = () => {
    return (
        <>
            {/* UI/UX */}
            <div className="flex flex-col border-4 w-56 h-72 border-basicRed-10 bg-basicLightBrown-10 rounded-xl p-2">
                    <Image
                        src="/heart.svg"
                        width={25}
                        height={20}
                        className={`mb-4`}
                        alt="Dropdown"
                    />
                    <div className="flex flex-col items-center mt-5">
                        <svg width="99" height="103" viewBox="0 0 99 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7326 39.1646H49.5194L50.4757 40.6316L49.7326 39.1646ZM55.5038 48.3451L65.0905 63.0515L49.334 87.7314H63.7002L71.9492 73.8552H72.598L81.125 87.7314H95.3985L79.4567 63.0515L95.3985 39.1646H80.5689L72.7833 52.6443H72.1345L63.8856 39.1646H50.8537L55.5038 48.3451Z" fill="#CF363E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6065 73.5103C21.8196 74.8319 25.3725 75.4926 29.2653 75.4926C33.2198 75.4926 36.7728 74.7658 39.9241 73.3121C43.1371 71.8584 45.8559 69.843 48.0803 67.266C50.3666 64.6229 52.0967 61.4842 53.2707 57.85C54.1413 55.2434 54.7052 52.4564 54.9625 49.4892L49.663 39.0268H42.6119V46.4516C42.6119 48.8304 42.3339 51.011 41.7778 52.9933C41.2216 54.9756 40.3875 56.6936 39.2753 58.1473C38.163 59.601 36.7728 60.7574 35.1044 61.6164C33.4361 62.4093 31.4897 62.8058 29.2653 62.8058C27.1026 62.8058 25.1871 62.4093 23.5188 61.6164C21.8504 60.7574 20.4602 59.601 19.3479 58.1473C18.2357 56.6936 17.4016 54.9756 16.8454 52.9933C16.2893 51.011 16.0113 48.8304 16.0113 46.4516V2.54321H3.49878V45.6587C3.49878 50.3502 4.11668 54.5461 5.35248 58.2464C6.58829 61.8807 8.31841 64.9863 10.5429 67.5634C12.7673 70.1404 15.4552 72.1227 18.6065 73.5103ZM50.3897 38.248L50.3199 38.1103L50.0821 38.248H42.6119V16.0871H55.1244V38.248H50.3897ZM50.7842 39.0268L55.0871 47.5218C55.112 46.9081 55.1244 46.2871 55.1244 45.6587V39.0268H50.7842ZM42.6119 15.3084H55.1244V2.54321H42.6119V15.3084Z" fill="#CF363E"/>
                            </svg>
                        <h1 className="text-center text-basicRed-10 font-semibold justify-end text-xl mt-7">
                            UI/UX Design
                        </h1>
                    </div>
                </div>

                {/* Merah-merah bawah */}
                <div className="flex flex-col gap-2 text-white w-96 text-center">
                    <div className="rounded-lg border-4 border-basicRed-10 p-4">
                        Andreandhiki UIUX
                    </div>
                    <div className="rounded-lg border-4 border-basicRed-10 p-4">
                        Riyanta UIUX
                    </div>
                    <div className="rounded-lg border-4 border-basicRed-10 p-4">
                        Putra
                    </div>
                </div>
        </>
    );
}

export default ChampsUIUX;