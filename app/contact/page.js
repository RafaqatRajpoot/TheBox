import Footer from "@/components/Footer"

const page = () => {
    return (
        <>
            <div className='w-2/5 h-[65vh] mx-auto flex flex-col items-center mt-14 gap-5'>
                <p className='text-bold text-4xl'>What can us do for you?</p>
                <p className='text-justify w-1/2 mb-4'>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                <div className='flex gap-8 w-full'>
                    <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-custom-blue" placeholder="Your Name *">
                    </input>
                    <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-custom-blue" placeholder="Email *">
                    </input>
                </div>
                <div className='flex gap-8 w-full'>
                    <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-custom-blue" placeholder="Reason for Contacting *">
                    </input>
                    <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-custom-blue" placeholder="Phone">
                    </input>
                </div>
                <div className='w-full'>
                    <input type="text" class="w-full h-28  px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-custom-blue" placeholder="Message">
                    </input>
                    <p className='mt-2 text-gray-400'>* indicates a required field</p>
                </div>

                <div>
                    <button className='text-white bg-custom-blue mt-8 py-4 px-24 rounded-xl text-lg hover:bg-custom-light-blue'>
                        Submit
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page