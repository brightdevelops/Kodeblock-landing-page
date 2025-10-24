import React from 'react'
import HeroImage from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#DDC9B3] to-[#776C60]">
      <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 pt-20 lg:px-24 sm:pt-32'>

        {/* Left Side */}
        <div>
          <h1 className='text-white font-bold text-6xl leading-16 whitespace-nowrap'>Building The
            <span className='text-[#FF8530]'> Future </span> <br />Together</h1>

          <p className='text-[#D1D5DB] text-lg font-normal mt-8 leading-8'>
            Kodeblock is where developers and creatives unite to craft <br /> products that solve real problems. Join our community- driven <br /> platform bridging Web2 convenience with Web3 innovation.
          </p>

          <a href="#projects">
            <button className='my-9 text-white rounded-md border-[#4B5563] border px-6 py-3 hover:bg-gradient-to-br hover:from-[#F97316] hover:to-[#93440D] hover:border-transparent transition-all duration-300 cursor-pointer'>
              Explore Projects
            </button>
          </a>
        </div>

        {/* Right Side */}
        <div>
          <img src={HeroImage} alt="Header_Image" className='rounded-2xl ml-14' loading='lazy' />
        </div>

      </div>
    </section>
  )
}

export default Hero