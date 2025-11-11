import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed w-full bg-[#776C60]/50 py-3 z-50 backdrop-blur-3xl"
        >
            {/* Inner container to center the content */}
            <div className="flex justify-between items-center relative px-5 max-w-7xl mx-auto">

                {/* Left - Logo */}
                <motion.a 
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex items-center gap-2">
                        <motion.img 
                            initial={{ rotate: -180 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            src={Logo} 
                            alt="Logo" 
                            className="w-10 h-10 rounded-md" 
                        />
                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-white text-lg hidden sm:block"
                        >
                            <motion.span 
                                className="text-[#FF8530]"
                                whileHover={{ scale: 1.2 }}
                            >K</motion.span>OD
                            <motion.span 
                                className="text-[#FF8530]"
                                whileHover={{ scale: 1.2 }}
                            >E</motion.span>BLOCK
                        </motion.h1>
                    </div>
                </motion.a>

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
        </motion.header>
    );
};

export default Navbar;
