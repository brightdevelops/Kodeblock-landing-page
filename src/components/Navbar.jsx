import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../public/favicone.jpeg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About Us" },
        { href: "#team", label: "Team" }
    ];

    return (
        <header className="fixed w-full bg-[#776C60]/50 py-3 z-50 backdrop-blur-3xl">
            {/* Inner container to center the content */}
            <div className="flex justify-between items-center relative px-5 max-w-7xl mx-auto">

                {/* Left - Logo */}
                <a href="#">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-md" />
                        <h1 className="font-bold text-white text-lg hidden sm:block">
                            <span className="text-[#FF8530]">K</span>OD
                            <span className="text-[#FF8530]">E</span>BLOCK
                        </h1>
                    </div>
                </a>

                {/* Center - Nav Items */}
                <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveNav(item.label)}
                            className={`cursor-pointer px-3 py-1 rounded-full text-[15px] font-medium whitespace-nowrap transition-all ${activeNav === item.label
                                ? "bg-[#fff] text-[#FF8530]"
                                : "text-white hover:text-[#FF8530]"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right - Gradient Button */}
                <a href="#projects">
                    <button className="cursor-pointer hidden md:block bg-gradient-to-r from-[#93440D] to-[#F97316] text-white px-4 py-2 rounded-full font-medium">
                        Explore our products
                    </button>
                </a>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer md:hidden text-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col items-center md:hidden mt-4 gap-3 px-5">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                                setActiveNav(item.label);
                                setIsOpen(false);
                            }}
                            className={`cursor-pointer w-full text-center py-2 rounded-md text-base transition ${activeNav === item.label
                                ? "bg-[#fff] text-[#FF8530]"
                                : "text-white hover:text-[#FF8530]"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button className="cursor-pointer bg-gradient-to-br from-[#93440D] to-[#F97316] text-white px-5 py-2 rounded-full font-medium mt-2">
                        Explore our products
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
