"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import {BsArrowUpRight, BsGithub} from "react-icons/bs"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorksSliderBtn from "@/components/WorksSliderBtn";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import Image from "next/image"
const Work = () => {
  const projects = [
    {
      num: "01",
      catagory: "fontend",
      title: "project 1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga sapiente laudantium optio aspernatur nesciunt voluptatem laborum. ",
      stack: [
        { name: "html 5" },
        { name: "css 3" },
        { name: "javascript" },
        { name: "react" },
      ],
      image: "/assets/work/thumb1.png",
      live: "",
      github: "",
    },
    {
      num: "02",
      catagory: "Full Stack",
      title: "Donation Website",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga sapiente laudantium optio aspernatur nesciunt voluptatem laborum. ",
      stack: [
        { name: "html 5" },
        { name: "css 3" },
        { name: "javascript" },
        { name: "react" },
        { name: "nodejs" },
      ],
      image: "/assets/work/thumb2.png",
      live: "",
      github: "",
    },
    {
      num: "03",
      catagory: "fontend",
      title: "project 3",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga sapiente laudantium optio aspernatur nesciunt voluptatem laborum. ",
      stack: [
        { name: "html 5" },
        { name: "css 3" },
        { name: "javascript" },
        { name: "react" },
      ],
      image: "/assets/work/thumb3.png",
      live: "",
      github: "",
    },
  ];
  const projectData = projects.map((item) => ({
    ...item,
  }));
  console.log(projectData);

  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className=" min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between">
            <div className="flex flex-col gap-[30px] h-[50%] order-2  xl:order-none">
              <div className="text-8xl leading-none font-extralight text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] leading-none font-bold text-white group-hover:text-primary-accent transition-all duration-500 capitalize">
                {project.catagory}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-primary-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* project live link */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-primary-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github Repository link */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-primary-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full xl:w-[50%]">
                    <div className="h-[460px] relative group flex justify-center items-center top-1">
                      {/* <div className="abosolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="image"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorksSliderBtn
                containerStyles="absolute top-1/2 xl:top-[475px] xl:top xl:flex xl:gap-2 xl:absolute xl:right-0 xl:bottom-[calc(50%_ - _22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-primary-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
