import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

import Gospel from "../assets/images/gospel.jpg";
import Tosin from "../assets/images/tosin.png";
import Hosea from "../assets/images/hosea.jpeg";
import Dennis from "../assets/images/dennis.jpeg";
import Alex from "../assets/images/alex.jpeg";
import Lawal from "../assets/images/lawal.jpeg";
import Bright from "../assets/images/bright.jpg";
import Isokpehi from "../assets/images/Isokpehi.jpg";

// Animations removed: component now renders statically without Framer Motion

const teamMembers = [
    {
        name: "Joepaul Gospel",
        role: "Founder & CEO",
        img: Gospel,
        socials: {
            twitter: "https://x.com/_GospelTheGreat",
        },
    },
    {
        name: "Bello Oluwatosin",
        role: "Co-Founder & Lead Developer",
        img: Tosin,
        socials: {
            github: "https://x.com/Tosin_Builds",
            twitter: "https://x.com/Tosin_Builds",
        },
    },
    {
        name: "Adetunji Hosea",
        role: "Co-Founder & SPM",
        img: Hosea,
        socials: {
            twitter: "https://x.com/Beardlesshosea",
        },
    },
    {
        name: "Emeka Bright",
        role: "Co-Founder & Frontend Dev.",
        img: Bright,
        socials: {
            github: "https://github.com/brightdevelops",
            twitter: "https://x.com/itsbrightnow",
        },
    },
    {
        name: "Daniel Lawal",
        role: "Co-Founder & Digital Artist",
        img: Lawal,
        socials: {
            instagram: "https://www.instagram.com/o_daniel__/"
        },
    },
    {
        name: "Olaiya Alexander",
        role: "Chief Technical Officer",
        img: Alex,
        socials: {
            github: "https://github.com/PrognosticAlex",
            twitter: "https://x.com/Forgingalex",
        },
    },
    {
        name: "Ikechukwu Dennis",
        role: "Frontend Developer",
        img: Dennis,
        socials: {
            github: "https://github.com/dennisikechukwu",
            twitter: "https://x.com/Denn1sIkechukwu?t=HTWsGari2GYW7jnSDAtMlA&s=09",
        },
    },
    {
        name: "Daniel Isokpehi",
        role: "Mobile Developer",
        img: Isokpehi,
        socials: {
            github: "https://github.com/Danyyel06",
            linkedin: "https://www.linkedin.com/in/isokpehi-daniel-03305824a",
        },
    },
];

const TeamCarousel = () => {
    return (
        <section id="team" className="py-20 bg-[#333333]">
            <div className="max-w-7xl mx-auto px-7 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-white mb-3">Meet Our Team</h2>
                <p className="text-[#9CA3AF] text-lg mb-12">
                    The visionaries behind <span className="font-semibold text-[#FF8530]">KODEBLOCK</span>
                </p>

                {/* Carousel */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-10"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="rounded-2xl p-6 text-center"
                            >
                                <div>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 object-cover mx-auto rounded-full transition-transform duration-300 hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mt-4 text-white">{member.name}</h3>
                                <p className="text-[#FF8530] font-medium mb-4 whitespace-nowrap">{member.role}</p>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-4 mt-3">
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#FF8530]"
                                        >
                                            <FaLinkedin size={18} />
                                        </a>
                                    )}
                                    {member.socials.github && (
                                        <a
                                            href={member.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#FF8530]"
                                        >
                                            <FaGithub size={18} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a
                                            href={member.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#FF8530]"
                                        >
                                            <FaTwitter size={18} />
                                        </a>
                                    )}
                                    {member.socials.instagram && (
                                        <a
                                            href={member.socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#FF8530]"
                                        >
                                            <FaInstagram size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamCarousel;