import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";
import CallToAction from "../components/callToAction";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContextProvider";
import "../index.css";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`justify-center relative  bg flex md:flex-row`}>
      <div className="flex max-w-7xl px-6 mx-auto gap-4 flex-col-reverse md:flex-row z-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl max-w-xl leading-slug  uppercase">
            Transforming your vision into
            <span className="bg-gradient-to-l from-purple-600 via-green-500 to-red-400 text-transparent font-extrabold bg-clip-text">
              {" "}
              stunning Websites
            </span>
          </h1>
          <p className="text-base font-light max-w-lg mt-8 leading-relaxed">
            Our award-winning design agency blends creativity with cutting-edge
            technology to deliver unique and engaging digital experiences. Let’s
            create something extraordinary together.
          </p>
          <div className="flex-col gap-4 mt-16 flex md:flex-row">
            <CallToAction
              href="#contact"
              name="Get Started"
              className="bg-gradient-to-tr hover:from-purple-600 hover:to-blue-600 transition-color text-primary duration-300 ease-linear from-blue-600 to-purple-600 "
            />
            <CallToAction
              href="#portfolio"
              name="See our work"
              className={`${
                theme === "dark" ? "ring-white " : "ring-slate-800"
              } transition-color bg-transparent ring-1 hover:ring-0  duration-300 ease-linear  border-none hover:bg-gradient-to-tr from-blue-600 to-purple-600`}
            />
          </div>
        </div>

        {/* hero image */}
        <div className="h-full mt-20 md:mt-0  flex justify-center items-center">
          <div className="overflow-hidden drop-shadow-md">
            <img
              className="object-cover w-full h-full"
              src="/Hero-image.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>

      <SocialMedia />
    </section>
  );
};

export default Hero;
