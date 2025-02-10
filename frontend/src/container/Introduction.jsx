import { useEffect, useState } from "react";
import IntroImg from "/intro.png";
import { motion } from "framer-motion";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && !isVisible) {
        setIsVisible(true);
      } else if (scrollY <= 50 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <section className="w-full md:flex-row flex items-center flex-col justify-center ring-1 ring-slate-500 hover:ring-accent  bg-slate-900 rounded-3xl mt-32">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={IntroImg}
          className="w-[750px] h-full object-cover"
          alt="model image"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 800 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center max-w-md items-center">
          <p className="text-xl md:text-3xl text-center md:text-start font-semibold">
            Commitment to delivering exceptional{" "}
            <span className="text-accent">web</span> experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;
