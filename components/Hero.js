'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Hero = () => {
    return (
        <div id='home' className='w-full min-h-[90vh] mt-[10vh]'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className='w-full h-[90vh] bg-custom-image-1 bg-cover bg-cover bg-center flex'>
                    <div className='flex px-28 items-center'>
                        <div className="text-center">
                            <h1 className='text-7xl font-bold'>
                                Building things
                            </h1>
                            <h1 className='text-7xl font-bold'>
                                is our mission.
                            </h1>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='w-full h-[90vh] bg-custom-image-2 bg-cover bg-cover bg-center flex'>
                    <div className='flex px-28 items-center'>
                        <div className="text-center">
                            <h1 className='text-7xl font-bold'>
                                Building things
                            </h1>
                            <h1 className='text-7xl font-bold'>
                                is our mission.
                            </h1>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='w-full h-[90vh] bg-custom-image-3 bg-cover bg-cover bg-center flex'>
                    <div className='flex px-28 items-center'>
                        <div className="text-center">
                            <h1 className='text-7xl font-bold'>
                                Building things
                            </h1>
                            <h1 className='text-7xl font-bold'>
                                is our mission.
                            </h1>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
