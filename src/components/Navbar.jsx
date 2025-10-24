import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../public/favicone.jpeg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const handleClick = (link) => {
        setActiveLink(link);
        setIsOpen(false); // closes mobile menu after clicking
    };

    return (
        <header className="sticky top-0 bg-[#c7b6a3]/95 backdrop-blur-md mx-auto px-24 py-5 shadow-xl">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="#">
                        <img
                        src={Logo}
                        width={40}
                        height={40}
                        className="cursor-pointer rounded-md"
                        alt="Logo"
                        loading="lazy"
                    />
                    </a>
                    <h1 className="text-white font-bold text-[20px] sm:text-base">
                        <span className="text-[#FF8530]">K</span>OD
                        <span className="text-[#FF8530]">E</span>BLOCK
                    </h1>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-4">
                    {["Home", "Projects", "About Us", "Team"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                            onClick={() => handleClick(link)}
                            className={`font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${activeLink === link
                                ? "bg-white text-[#ff6600] shadow-md"
                                : "text-white hover:text-[#ff6600]"
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Explore Button */}
                <div className="hidden md:block">
                    <button className="bg-gradient-to-br from-[#93440D] to-[#F97316] text-white font-medium px-5 py-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105">
                        Explore our products
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <nav className="md:hidden mt-4 flex flex-col items-center gap-4 rounded-xl py-4 bg-[#b8a28e] transition-all duration-300">
                    {["Home", "Projects", "About Us", "Team"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                            onClick={() => handleClick(link)}
                            className={`font-medium px-5 py-1.5 rounded-full ${activeLink === link
                                ? "bg-white text-[#ff6600]"
                                : "text-white hover:text-[#ff6600]"
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                    <button className="bg-gradient-to-r from-[#93440D] to-[#F97316] text-white font-medium px-5 py-2 rounded-full cursor-pointer">
                        Explore our products
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
