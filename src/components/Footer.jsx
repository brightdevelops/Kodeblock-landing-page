import React from 'react'
import { motion } from 'framer-motion'
import Logo from "../../public/favicone.jpeg";
import Twitter from '../assets/images/twitter.png'
import Linkedin from '../assets/images/linkedin.png'

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    }
}

const Footer = () => {

    const sitemap = [
        { label: 'Home', href: '#' },
        { label: 'Projects', href: '#projects' },
        { label: 'About Us', href: '#about' },
        { label: 'Team', href: '#team' }
    ];

    const socials = [
        { imgSrc: Twitter, href: 'https://x.com/kodeblock', alt: 'Twitter' },
        { imgSrc: Linkedin, alt: 'LinkedIn' }
    ];

    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
            className="bg-gradient-to-b from-[#DDC9B3] to-[#776C60] w-full py-20 px-5 md:px-10"
        >
            <motion.div 
                variants={footerVariants}
                className="max-w-7xl mx-auto text-white"
            >
                {/* Top Section */}
                <motion.div 
                    variants={footerVariants}
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 border-b border-[#1F2937] pb-10"
                >
                    {/* Left Side */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col max-w-md"
                    >
                        <motion.a 
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div 
                                className="flex items-center gap-2 mb-5"
                            >
                                <motion.img 
                                    initial={{ rotate: -180 }}
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                    src={Logo} 
                                    alt="Logo" 
                                    className="w-10 h-10 rounded-md" 
                                />
                                <motion.h1 
                                    className="font-bold text-white text-lg hidden sm:block"
                                >
                                    <motion.span 
                                        whileHover={{ scale: 1.2 }}
                                        className="text-[#FF8530]"
                                    >K</motion.span>
                                    OD
                                    <motion.span 
                                        whileHover={{ scale: 1.2 }}
                                        className="text-[#FF8530]"
                                    >E</motion.span>
                                    BLOCK
                                </motion.h1>
                            </motion.div>
                        </motion.a>

                        <motion.p 
                            variants={itemVariants}
                            className="text-base md:text-lg mb-5"
                        >
                            Building the future of collaborative development <br /> and blockchain innovation.
                        </motion.p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={itemVariants}
                    >
                        <motion.p 
                            variants={itemVariants}
                            className="mb-2 font-semibold"
                        >
                            Quick Links
                        </motion.p>
                        <motion.ul variants={itemVariants}>
                            {sitemap.map(({ label, href }, key) => (
                                <motion.li 
                                    key={key}
                                    variants={itemVariants}
                                >
                                    <motion.a
                                        href={href}
                                        className="block text-md text-[#E5E7EB] py-1"
                                        whileHover={{ x: 5, color: "#FF8530" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {label}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Socials */}
                    <motion.div variants={itemVariants}>
                        <motion.p 
                            variants={itemVariants}
                            className="mb-3 font-semibold"
                        >
                            Connect With Us
                        </motion.p>
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center gap-4 mb-6"
                        >
                            {socials.map(({ imgSrc, href, alt }, key) => (
                                <motion.a
                                    key={key}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.img
                                        src={imgSrc}
                                        alt={alt}
                                        className="w-10 h-10 rounded-md bg-black p-3"
                                        whileHover={{ filter: "brightness(1.2)" }}
                                    />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.button 
                                className="cursor-pointer text-white px-4 py-2 rounded-md font-medium bg-gradient-to-r from-[#FF8530] to-[#99501D]"
                                whileHover={{ 
                                    boxShadow: "0px 5px 15px rgba(255, 133, 48, 0.4)",
                                    scale: 1.02
                                }}
                            >
                                Explore our products
                            </motion.button>
                        </motion.a>
                    </motion.div>

                </motion.div>

                {/* Bottom Section */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mt-8"
                >
                    <motion.p 
                        variants={itemVariants}
                        className="text-sm md:text-base"
                    >
                        © 2024 KODEBLOCK. All rights reserved.
                    </motion.p>
                </motion.div>

            </motion.div>
        </motion.section>
    )
}

export default Footer