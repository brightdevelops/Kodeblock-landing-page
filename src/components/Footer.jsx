import React from 'react'
import Logo from "../../public/favicone.jpeg";
import Twitter from '../assets/images/twitter.png'
import Linkedin from '../assets/images/linkedin.png'

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
        <section className="bg-gradient-to-b from-[#DDC9B3] to-[#776C60] w-full py-20 px-5 md:px-10">
            <div className="max-w-7xl mx-auto text-white">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 border-b border-[#1F2937] pb-10">

                    {/* Left Side */}
                    <div className="flex flex-col max-w-md">
                        <a href="#">
                            <div className="flex items-center gap-2 mb-5">
                                <img src={Logo} alt="Logo" className="w-10 h-10 rounded-md" />
                                <h1 className="font-bold text-white text-lg hidden sm:block">
                                    <span className="text-[#FF8530]">K</span>OD
                                    <span className="text-[#FF8530]">E</span>BLOCK
                                </h1>
                            </div>
                        </a>

                        <p className="text-base md:text-lg mb-5">
                            Building the future of collaborative development <br /> and blockchain innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="mb-2 font-semibold">Quick Links</p>
                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        className="block text-md text-[#E5E7EB] py-1 transition-colors hover:text-white"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="mb-3 font-semibold">Connect With Us</p>
                        <div className="flex items-center gap-4 mb-6">
                            {socials.map(({ imgSrc, href, alt }, key) => (
                                <a
                                    key={key}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-110"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={alt}
                                        className="w-10 h-10 rounded-md bg-black p-3"
                                    />
                                </a>
                            ))}
                        </div>

                        <button className="cursor-pointer text-white px-4 py-2 rounded-md font-medium bg-gradient-to-r from-[#FF8530] to-[#99501D]">
                            Explore our products
                        </button>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="text-center mt-8">
                    <p className="text-sm md:text-base">
                        © 2024 KODEBLOCK. All rights reserved.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Footer