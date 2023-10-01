
const Status = () => {
    return (
        <div className='flex flex-rom gap-40 items-center justify-center mb-16 px-44 p-y-33'>
            <div>
                <div className='flex gap-16 my-10'>
                    <div className="relative w-[280px] min-h-[155px] flex flex-col items-center py-12 bg-custom-white gap-5 p-5 border shadow-md hover:bg-gray-50 hover:scale-110 hover:duration-500">
                        <img
                            className="absolute top-0 right-0 w-[93px] h-[93px] -mt-2 -mr-2"
                            src="/happyclient.png"
                            alt="Image"
                        />
                        <p className="text-7xl font-semibold">84</p>
                        <p className="text-lg font-normal">
                            <span className="border-4 border-custom-orange h-10 mr-4"></span>
                            Happy Clients
                        </p>
                    </div>
                    <div className="relative w-[280px] min-h-[155px] flex flex-col items-center py-12 bg-custom-white gap-5 p-5 border shadow-md hover:bg-gray-50 hover:scale-110 hover:duration-500">
                        <img
                            className="absolute top-0 right-0 w-[93px] h-[93px] -mt-2 -mr-2"
                            src="/projectscompleted.png"
                            alt="Image"
                        />
                        <p className="text-7xl font-semibold">123</p>
                        <p className="text-lg font-normal">
                            <span className="border-4 border-custom-orange h-10 mr-4"></span>
                            Projects Completed
                        </p>
                    </div>
                </div>
                <div className='flex gap-16 mb-10'>
                    <div className="relative w-[280px] min-h-[155px] flex flex-col items-center py-12 bg-custom-white gap-5 p-5 border shadow-md hover:bg-gray-50 hover:scale-110 hover:duration-500">
                        <img
                            className="absolute top-0 right-0 w-[93px] h-[93px] -mt-2 -mr-2"
                            src="/awardswin.png"
                            alt="Image"
                        />
                        <p className="text-7xl font-semibold">37</p>
                        <p className="text-lg font-normal">
                            <span className="border-4 border-custom-orange h-10 mr-4"></span>
                            Awards Win
                        </p>
                    </div>
                    <div className="relative w-[280px] min-h-[155px] flex flex-col items-center py-12 bg-custom-white gap-5 p-5 border shadow-md hover:bg-gray-50 hover:scale-110 hover:duration-500">
                        <img
                            className="absolute top-0 right-0 w-[93px] h-[93px] -mt-2 -mr-2"
                            src="/yearsinbusiness.png"
                            alt="Image"
                        />
                        <p className="text-7xl font-semibold">30</p>
                        <p className="text-lg font-normal">
                            <span className="border-4 border-custom-orange h-10 mr-4"></span>
                            Years in Business
                        </p>
                    </div>

                </div>
            </div>
            <div className='w-[360px]'>
                <div className='flex flex-col gap-5'>
                    <p className='text-extrabold text-5xl text-custom-blue'>30 Years Experience</p>
                    <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                    <button className='text-white bg-custom-blue mt-4 py-4 px-8 w-fit rounded-xl hover:bg-custom-light-blue'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Status 
