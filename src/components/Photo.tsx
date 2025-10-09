"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../public/profile.jpg";

const Photo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Circle SVG in background */}

      {/* Box-framed image (not circular) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.6, ease: "easeInOut" },
        }}
        className="relative w-[280px] h-[280px] xl:w-[440px] xl:h-[440px] border-[6px] border-[#00ff99] z-10"
      >
        <Image
          src={myImage}
          alt="Profile"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default Photo;
