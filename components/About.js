import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full min-h-[90vh]'>
            <div className='mt-20 mx-28 relative'>
                <div className='flex'>
                    <img src='/about_pic.png' alt='Pic' width={902} height={669} />
                    <div className='absolute flex flex-col justify-start items-start gap-6 top-[73px] left-[726px] w-[488px] h-[523px] bg-custom-blue pt-14 px-10'>
                        <p className='text-white text-3xl font-bold mb-4'>About us</p>
                        <p className='text-white text-justify'>
                            For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.
                        </p>
                        <p className='text-white text-justify'>
                            We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
                        </p>
                        <button className='relative inline-block mt-12'>
                            <span className='bg-white text-custom-blue text-lg font-semibold p-2 rounded-lg hover:bg-gray-100 hover:shadow-xl'>
                                More on Our History
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
