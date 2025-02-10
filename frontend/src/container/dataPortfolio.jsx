import { useState, useEffect } from "react";
import { client } from "../client";
import { AnimatePresence, easeIn, motion } from "framer-motion";

const Portfolioa = () => {
  const [images, setImages] = useState([]);
  const [isSlug, setIsSlug] = useState(null);
  const [isActive, setIsActive] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch images from Sanity
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = `*[_type == "imageAsset"]{
          title,
          slug,
          "imageUrl": image.asset->url,
          category
        }`;
        const data = await client.fetch(query);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, ease: easeIn }}
      exit={{ opacity: 0 }}
      id="portfolio"
      className="mt-32"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-center text-3xl flex flex-col">
          <span className="text-accent text-base font-bold">Portfolio</span>
          Our Recent Projects
        </h2>
      </div>

      {/* Filter Buttons */}
      <ul className="flex w-full flex-wrap  justify-center gap-2 mt-8 md:gap-8">
        {["All", "Flyer", "Branding", "Layout", "Website"].map(
          (item, index) => (
            <li
              key={index}
              className={`cursor-pointer   px-5 py-2 rounded-[3rem] ${
                isActive === index ? "bg-accent" : " ring-1  ring-primary"
              }`}
              onClick={() => {
                setIsActive(index);
                setIsSlug(item === "All" ? null : item.toLowerCase());
              }}
            >
              {item}
            </li>
          )
        )}
      </ul>

      {/* Image Gallery */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {images
          .filter((image) => (isSlug ? image.category === isSlug : true))
          .map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={image.title}
              className={`w-[24rem] h-full object-contain`}
              onClick={() => setSelectedImage(image.imageUrl)}
            />
          ))}
        {/* Full-Screen Modal with Framer Motion */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Full Screen"
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Portfolioa;
