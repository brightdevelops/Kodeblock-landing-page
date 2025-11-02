import HeroImage from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#DDC9B3] to-[#776C60] w-full min-h-screen" id="home">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-10 md:px-10 py-44 gap-12">

        {/* Left Text Section */}
        <div className="flex flex-col items-center md:items-start justify-center md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Building The{" "}
            <span className="text-[#FF8530]">Future</span> Together
          </h1>

          <p className="text-gray-200 leading-relaxed text-base md:text-lg max-w-md">
            Kodeblock is where developers and creatives unite to craft
            products that solve real problems. Join our community-driven
            platform bridging Web2 convenience with Web3 innovation.
          </p>

          <a href="#projects">
            <button className="cursor-pointer mt-4 border border-[#4B5563] text-white px-6 py-3 rounded-md font-medium hover:bg-gradient-to-br from-[#93440D] to-[#F97316] hover:text-white hover:border-transparent transition-all duration-300">
              Explore Projects
            </button>
          </a>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end md:w-1/2">
          <img
            src={HeroImage}
            alt="Kodeblock Team"
            loading="lazy"
            className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
