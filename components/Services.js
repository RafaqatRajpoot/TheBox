'use client';
import { MdArchitecture } from 'react-icons/md';
import { MdHomeWork } from 'react-icons/md';
import { FaCodeMerge } from 'react-icons/fa6';
import { PiHandshakeLight } from 'react-icons/pi';
import { MdHomeRepairService } from 'react-icons/md';
import { MdElectricalServices } from 'react-icons/md';
import Status from './Status';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    return (
        <div id='services'>
            <div className="w-full min-h-[608px]">
                <div className="p-11 text-center">
                    <p className="text-4xl text-extrabold">Services</p>
                    <div className="mt-12 flex gap-20 justify-center">
                        <div
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            className="w-[271px] flex flex-col items-center py-12 gap-5 min-h-[181px] p-5 border shadow-md hover:bg-gray-50">
                            <MdHomeWork size={40} color='#F9995D' />
                            <hr className="w-1/5 mx-3 border-dotted border-t-3 border-custom-blue" />
                            <p className="text-lg font-bold">construction</p>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            className="w-[271px] flex flex-col items-center py-12 text-white bg-custom-blue gap-5 min-h-[181px] p-5 border shadow-md hover:bg-custom-light-blue">
                            <FaCodeMerge size={40} color='#F9995D' />
                            <hr className="w-1/5 mx-3 border-dotted border-t-3 border-custom-white" />
                            <p className="text-lg font-bold">Renovation</p>
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            className="w-[271px] flex flex-col items-center py-12 gap-5 min-h-[181px] p-5 border shadow-md hover:bg-gray-50">
                            <PiHandshakeLight size={40} color='#F9995D' />
                            <hr className="w-1/5 mx-3 border-dotted border-t-3 border-custom-blue" />
                            <p className="text-lg font-bold">Consultation</p>
                        </div>
                    </div>
                    <div className="mt-12 flex gap-20 justify-center">
                        <div
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            className="w-[271px] flex flex-col items-center py-12 text-white bg-custom-blue gap-5 min-h-[181px] p-5 border shadow-md hover:bg-custom-light-blue">
                            <MdHomeRepairService size={40} color='#F9995D' />
                            <hr className="w-1/5 mx-3 border-dotted border-t-3 border-custom-white" />
                            <p className="text-lg font-bold">Repair Services</p>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            className="w-[271px] flex flex-col items-center py-12 gap-5 min-h-[181px] p-5 border shadow-md hover:bg-gray-50">
                            <MdArchitecture size={40} color='#F9995D' />
                            <hr className="w-1/5 mx-3 border-dotted border-t-3 border-custom-blue" />
                            <p className="text-lg font-bold">Architecture</p>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            className="w-[271px] flex flex-col items-center py-12 text-white bg-custom-blue gap-5 min-h-[181px] p-5 border shadow-md hover:bg-custom-light-blue">
                            <MdElectricalServices size={40} color='#F9995D' />
                            <hr className="w-1/5 mx-3 border-dotted border-t-3 border-custom-white" />
                            <p className="text-lg font-bold">Electic</p>
                        </div>
                    </div>
                </div>
            </div>
            <Status />
        </div>
    )
}

export default Services
