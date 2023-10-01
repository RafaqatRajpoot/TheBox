'use client';
import { MdDesignServices } from 'react-icons/md';
import { AiTwotoneCustomerService } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Reasons = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    return (
        <div className="w-full min-h-[433px]">
            <div className="p-14 text-center">
                <p className="text-4xl text-bold">Our Reputation</p>
                <div className="mt-12 flex gap-20 justify-center">
                    <div data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        className="w-[292px] flex flex-col items-start gap-5 min-h-[197px] p-5 border rounded-xl shadow-md">
                        <AiTwotoneCustomerService size={40} color='#F9995D' />
                        <p className="text-lg font-bold">Best Services</p>
                        <p className="text-base text-justify">Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        className="w-[292px] flex flex-col items-start gap-5 min-h-[197px] p-5 border rounded-xl shadow-md">
                        <AiTwotoneCustomerService size={40} color='#F9995D' />
                        <p className="text-lg font-bold">Best Teams</p>
                        <p className="text-base text-justify">Cursus semper tellus volutpat aliquet lacus. </p>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        className="w-[292px] flex flex-col items-start gap-5 min-h-[197px] p-5 border rounded-xl shadow-md">
                        <MdDesignServices size={40} color='#F9995D' />
                        <p className="text-lg font-bold">Best Designs</p>
                        <p className="text-base text-justify">Ultricies at ipsum nunc, tristique nam lectus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons
