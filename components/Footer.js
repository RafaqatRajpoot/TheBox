import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="w-full h-[25vh]">
            <div className="px-28 py-20 flex gap-80 items-center justify-center">
                <div className="flex flex-col gap-8">
                    <p className="text-xl gap-5 flex"> <span className="text-custom-blue text-bold">Address: </span> <span>6391 Elgin St. Celina, Delaware 10299</span></p>
                    <p className="text-xl gap-7 flex"> <span className="text-custom-blue text-bold">Phone: </span>+84 1102 2703</p>
                    <p className="text-xl gap-10 flex"> <span className="text-custom-blue text-bold">Email: </span>hello@thebox.com</p>
                    <div className="flex gap-4">
                        <img className="rounded" src="/logo.png" alt="Logo" width={38} height={47} />
                        <p className="text-custom-blue font-extrabold italic text-3xl mt-2">
                            TheBox
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-11'>
                    <div className='flex flex-col gap-5'>
                        <p className="text-xl text-custom-blue text-bold">Newsletter:</p>
                        <div className="flex gap-4">
                            <input type="text" class="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-custom-blue" placeholder="Enter Your Email">
                            </input>
                            <button className='text-white bg-custom-orange py-2 px-8 rounded-md text-lg hover:bg-custom-light-orange'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className="text-xl text-custom-blue text-bold">Social:</p>
                        <div className='flex gap-5'>
                            <a href="https://www.facebook.com">
                                <FaFacebook size={40} />
                            </a>
                            <a href="https://www.linkedin.com">
                                <FaLinkedin size={40} />
                            </a>
                            <a href="https://www.twitter.com">
                                <FaTwitter size={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
