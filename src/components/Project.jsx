import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import KoldImg from "../assets/images/KOLD.png";
import CollabHubImg from "../assets/images/Collab Hub.png";
import DeMarketImg from "../assets/images/De Market.png";
import BackgroundImg from "../assets/images/project-bg.jpg";

const projects = [
    {
        id: 1,
        title: "KOLD",
        status: "Building",
        description: "A web3 payment gateway that guarantees seamless blockchain technology and crypto adoption into daily affairs.",
        image: KoldImg,
    },
    {
        id: 2,
        title: "Collab Hub",
        status: "Building",
        description: "A platform connecting designers to developers to create something revolutionizing.",
        image: CollabHubImg,
    },
    {
        id: 3,
        title: "De-Market",
        status: "Building",
        description: "De-Market is a revolutionary marketplace that is powered by blockchain technologies.",
        image: DeMarketImg,
    },
];

const Projects = () => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };
    return (
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#2B2B2B] text-white py-20 px-5 md:px-10" 
            id="projects"
        >
            {/* Heading */}
            <motion.div 
                variants={fadeIn('down', 0.3)}
                className="text-center mb-10"
            >
                <motion.h2 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
                >
                    Our Projects
                </motion.h2>
                <motion.p 
                    className="text-gray-300 text-base font-normal md:text-xl"
                >
                    Discover innovative solutions built by our community
                </motion.p>
            </motion.div>

            {/* Background Section */}
            <motion.div
                variants={fadeIn('up', 0.4)}
                className="relative rounded-3xl bg-cover bg-center px-5 md:px-10 py-14 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 overflow-hidden max-w-7xl mx-auto"
                style={{
                    backgroundImage: `url(${BackgroundImg})`,
                    backgroundRepeat: "no-repeat",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 z-10">
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id} 
                            variants={fadeIn('up', project.id * 0.2)}
                            className="relative text-center max-w-sm"
                        >
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: project.id * 0.2 + 0.3 }}
                                className={`absolute -top-6 left-14 -translate-x-1/2 px-5 py-1.5 rounded-full text-xl font-medium shadow-md ${
                                    project.status === "Building"
                                    ? "bg-[#fff3eb] text-[#FF8530]"
                                    : "bg-[#FF8530] text-white"
                                }`}
                            >
                                {project.status}
                            </motion.span>

                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-56 h-56 mx-auto overflow-hidden rounded-full border-[3px] border-[#2B2B2B]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </motion.div>

                            <motion.h3 
                                variants={fadeIn('up', project.id * 0.2 + 0.3)}
                                className="mt-5 text-xl md:text-2xl font-bold"
                            >
                                {project.title}
                            </motion.h3>
                            <motion.p 
                                variants={fadeIn('up', project.id * 0.2 + 0.4)}
                                className="text-gray-100 text-sm md:text-base mt-2 leading-relaxed"
                            >
                                {project.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </motion.section>
    );
};

export default Projects;