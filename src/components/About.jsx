import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import developmentImg from "../assets/images/development.png";
import creativityImg from "../assets/images/creativity.png";
import communityImg from "../assets/images/community.png";
import aboutImg from "../assets/images/about-image.png";

const About = () => {

    const features = [
        {
            img: developmentImg,
            description: "Development"
        },
        {
            img: creativityImg,
            description: "Creativity"
        },
        {
            img: communityImg,
            description: "Community"
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-b from-[#DDC9B3] to-[#776C60] w-full py-20 px-5 md:px-10" 
            id="about"
        >
            <motion.div 
                variants={staggerContainer(0.1, 0.2)}
                className='max-w-7xl text-white mx-auto'
            >
                <motion.div 
                    variants={fadeIn('up', 0.3)}
                    className='flex flex-col md:flex-row justify-between items-center gap-10'>

                    {/* Left side - Text Content */}
                    <div className='flex flex-col gap-6 md:w-1/2'>
                        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
                            About{" "}
                            <span className="text-[#FF8530]">K</span>OD
                            <span className="text-[#FF8530]">E</span>BLOCK
                        </h1>

                        <p className="leading-relaxed text-base md:text-lg">
                            We're building a revolutionary platform that connects developers and creatives to solve real-world problems through innovative digital products.
                        </p>
                        
                        <p className="leading-relaxed text-base md:text-lg">
                            Our mission extends beyond traditional collaboration - we're pioneering blockchain-based payment solutions that bridge Web2 convenience with Web3 power, making digital transactions seamless and accessible.
                        </p>

                        <div className='grid grid-cols-3 mt-3'>
                            {features.map((feature, index) => (
                                <div key={index} className='flex flex-col items-center text-center'>
                                    <div>
                                        <img
                                            src={feature.img}
                                            alt={feature.description}
                                            className='w-12 h-12'
                                        />
                                    </div>
                                    <p className='font-medium'>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Right side - Image */}
                    <div className='md:w-1/2'>
                        <div className='relative'>
                            <img
                                src={aboutImg}
                                alt="About Kodeblock"
                                className='w-full h-auto rounded-xl shadow-lg'
                                loading='lazy'
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#FF8530]/20 to-transparent rounded-xl'></div>
                        </div>
                    </div>

                </motion.div>

            </motion.div>
        </motion.section>
    )
}

export default About