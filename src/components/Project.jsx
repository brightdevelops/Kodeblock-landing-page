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
        description: "A platform connecting designers to developers to produce something revolutionizing.",
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
    return (
        <section className="bg-[#2B2B2B] text-white py-20 px-5 md:px-10" id="projects">
            
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Our Projects</h2>
                <p className="text-gray-300 text-base font-normal md:text-xl">
                    Discover innovative solutions built by our community
                </p>
            </div>

            {/* Background Section */}
            <div
                className="relative rounded-3xl bg-cover bg-center px-5 md:px-10 py-14 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 overflow-hidden max-w-7xl mx-auto"
                style={{
                    backgroundImage: `url(${BackgroundImg})`,
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 z-10">
                    {projects.map((project) => (
                        <div key={project.id} className="relative text-center max-w-sm">
                            <span
                                className={`absolute -top-6 left-14 -translate-x-1/2 px-5 py-1.5 rounded-full text-xl font-medium shadow-md ${project.status === "Building"
                                        ? "bg-[#fff3eb] text-[#FF8530]"
                                        : "bg-[#FF8530] text-white"
                                    }`}
                            >
                                {project.status}
                            </span>

                            <div className="w-56 h-56 mx-auto overflow-hidden rounded-full border-[3px] border-[#2B2B2B]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <h3 className="mt-5 text-xl md:text-2xl font-bold">{project.title}</h3>
                            <p className="text-gray-100 text-sm md:text-base mt-2 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;