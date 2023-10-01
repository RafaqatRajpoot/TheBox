'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const page = () => {
    return (
        <div className="w-full h-[90vh]">
            <div className="p-14 text-center">
                <p className="text-4xl text-bold">Projects</p>
                <div className="my-12 px-20 flex gap-20 justify-center">
                    <Swiper className='flex justify-around px-44'
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='mb-16'>
                            <div className="w-[384px] min-h-[247px] flex flex-col items-start shadow-md hover:scale-110 hover:duration-500">
                                <img src="/project1.png" alt="Project" className="w-full h-auto bg-cover" />
                                <div class="w-full flex flex-col items-start gap-2 bg-custom-blue p-2">
                                    <p className='text-white text-justify text-lg font-bold'>Wildstone Infra Hotel</p>
                                    <p className='text-white'>2715 Ash Dr. San Jose, South Dakota</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-16'>
                            <div className="w-[384px] min-h-[247px] flex flex-col items-start shadow-md hover:scale-110 hover:duration-500">

                                <img src="/project2.png" alt="Project" className="w-full h-auto bg-cover" />
                                <div class="w-full flex flex-col items-start gap-2 bg-custom-blue p-2">
                                    <p className='text-white text-justify text-lg font-bold'>Wish Stone Building</p>
                                    <p className='text-white'>2972 Westheimer Rd. Santa Ana, Illinois </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-16'>
                            <div className="w-[384px] min-h-[247px] flex flex-col items-start shadow-md hover:scale-110 hover:duration-500">
                                <img src="/project3.png" alt="Project" className="w-full h-auto bg-cover" />
                                <div class="w-full flex flex-col items-start gap-2 bg-custom-blue p-2">
                                    <p className='text-white text-justify text-lg font-bold'>Mr. Parkinston’s House</p>
                                    <p className='text-white'>3517 W. Gray St. Utica, Pennsylvania</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-16'>
                            <div className="w-[384px] min-h-[247px] flex flex-col items-start shadow-md hover:scale-110 hover:duration-500">
                                <img src="/project4.png" alt="Project" className="w-full h-auto bg-cover" />
                                <div class="w-full flex flex-col items-start gap-2 bg-custom-blue p-2">
                                    <p className='text-white text-justify text-lg font-bold'>Oregano Height</p>
                                    <p className='text-white'>2464 Royal Ln. Mesa, New Jersey </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default page
