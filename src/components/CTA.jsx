import React from 'react'

const CTA = () => {
    return (
        <section className='bg-gradient-to-b from-[#333333] to-[#F5E7D7] w-full py-20 px-5 md:px-10 mx-auto'>

            <div className='text-center text-white mb-10'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-3'>Ready to Build the Future?</h1>
                <p className='font-normal text-base md:text-lg'>Join our community of innovators and be part of the next generation of digital products.</p>
                <button className="cursor-pointer mt-8 text-white px-6 py-3 rounded-md font-medium bg-gradient-to-r from-[#F97316] to-[#93440D] drop-shadow-2xl">
                    Explore our products
                </button>
            </div>

        </section>
    )
}

export default CTA