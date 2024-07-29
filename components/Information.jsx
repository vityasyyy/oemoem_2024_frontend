const Information = () => {
    return (
        <>
            <section className="flex flex-col gap-3 bg-basicBlack-10 px-[min(10%,512px)] py-4 sm:py-8 text-white">
                {/* Section Title (Informasi) */}
                <div className="w-fit text-lg bg-basicBlue-10 px-4 py-2 rounded-md">Informasi</div>

                {/* Section Children */}
                <div className="flex flex-col gap-3 text-sm sm:text-lg">
                    <div className="flex flex-col sm:grow gap-2">
                        <h1>Lokasi</h1>
                        <div className="bg-basicLightBrown-10 rounded-sm md:rounded-xl text-basicRed-10 px-4 py-2 sm:py-4">Lorem Ipsum Dolor Sit Amet</div>
                    </div>

                    {/* Grouping these two together on non-Mobile screens */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col gap-3 text-sm sm:text-lg sm:flex-grow">
                            <h1>Periode Pendaftaran</h1>
                            <div className="bg-basicLightBrown-10 rounded-sm md:rounded-xl text-basicRed-10 px-4 py-2 sm:py-4">Lorem Ipsum Dolor Sit Amet</div>
                        </div>

                        <div className="flex flex-col gap-3 text-sm sm:text-lg sm:flex-grow">
                            <h1>Waktu Pelaksanaan</h1>
                            <div className="bg-basicLightBrown-10 rounded-sm md:rounded-xl text-basicRed-10 px-4 py-2 sm:py-4">Lorem Ipsum Dolor Sit Amet</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Information;