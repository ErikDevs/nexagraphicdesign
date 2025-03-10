import IntroImg from "/intro.png";
import { easeIn, easeInOut, motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="md:flex-row overflow-hidden relative h-[50vh] flex items-center flex-col justify-center bg-gray-800 rounded-3xl mt-32">
      <motion.div
        initial={{ opacity: 0, y: 200, z: 200 }}
        animate={{ opacity: 1, y: 0, z: 0 }}
        transition={{ duration: 1, delay: 1, ease: easeInOut }}
        viewport={{ once: true }}
      >
        <img
          src={IntroImg}
          className="h-full z-10 absolute inset-0 object-cover"
          alt="model image"
        />
        <img
          src="/pngegg.png"
          className="w-full absolute top-0"
          alt="pattern"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="flex absolute z-20 max-w-md justify-center items-center">
          <p className="text-xl md:text-3xl text-center md:text-start font-semibold">
            Commited to delivering exceptional
            <span className="text-accent"> online </span> experiences
            <span className="text-accent">.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;
