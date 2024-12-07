"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Resume = () => {
  const about = {
    title: "About me",
    description:
      "I am a passionate and dedicated developer with over 2 years of experience in crafting dynamic, responsive, and user-focused web solutions. With a strong foundation in web technologies and a commitment to excellence, I strive to bring creativity and innovation to every project I undertake.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Tanvir Ahamed",
      },
      {
        fieldName: "Phone",
        fieldValue: "01754408026",
      },
      {
        fieldName: "Experience",
        fieldValue: "2+ Years",
      },
      {
        fieldName: "Skype",
        fieldValue: "tanvirme01",
      },

      {
        fieldName: "Nationality",
        fieldValue: "Bangladeshi",
      },
      {
        fieldName: "email",
        fieldValue: "ahamedtanvir374@gmail.com",
      },
      {
        fieldName: "Frelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Bangla, English",
      },
    ],
  };
  // Experience data
  const experience = {
    icon: "",
    title: "My Experience",
    description:
      "Throughout my journey in the tech industry, I have honed my skills by collaborating with innovative teams and contributing to impactful projects. My experience reflects a strong commitment to delivering high-quality solutions and growing as a professional.",
    items: [
      {
        company: "CopEarn Private Limited",
        position: "Frontend Developer - Intern",
        duration: "2022 - 1 month",
        description:
          "During my internship at CopEarn Private Limited, I worked closely with the development team to create dynamic and user-friendly interfaces. This experience allowed me to strengthen my proficiency in modern web technologies like React.js and provided valuable insights into industry best practices.",
      },
    ],
  };

  const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "My educational journey is a blend of academic excellence and practical learning experiences, focused on engineering, web development, and innovative problem-solving techniques.",
    items: [
      {
        institution: "Programming Hero",
        degree: "Web Development",
        duration: "2021 - 2022",
        description:
          "Completed an in-depth web development program, mastering technologies such as HTML, CSS, JavaScript, and React to build dynamic and responsive websites.",
      },
      {
        institution: "Programming Hero",
        degree: "Next Level Web Development - Frontend Track",
        duration: "2023 - 2024",
        description:
          "Advanced my skills in frontend development, focusing on modern tools and frameworks like Next.js, TypeScript, and Redux to create cutting-edge user interfaces.",
      },
      {
        institution: "Rangpur Polytechnic Institute",
        degree: "Diploma in Electrical Engineering",
        duration: "2018 - 2022",
        description:
          "Earned a diploma in Electrical Engineering, gaining a strong foundation in electrical systems, circuit design, and practical applications in engineering.",
      },
      {
        institution: "Institute of Engineers - IEB",
        degree: "BSc in Electrical and Electronics Engineering",
        duration: "2023 - 2027",
        description:
          "Currently pursuing a Bachelor of Science in Electrical and Electronics Engineering, focusing on advanced topics like power systems, electronics, and sustainable technologies.",
      },
    ],
  };

  const skills = {
    title: "My skills",
    description:
      "Over the years, I have developed a versatile skill set in web development and design, empowering me to create dynamic, user-friendly, and aesthetically pleasing applications.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.css",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70ch] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1  gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232339]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-primary-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="size-[6px] rounded-full bg-primary-accent"></span>
                            <span className="text-white/60">
                              {item.company}
                            </span>
                          </div>
                          {/* Item description */}
                          <p className="text-white/60 text-sm text-center lg:text-left mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1  gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232339] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-primary-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-[18px] max-w-[260px] min-h-[60px] leading-normal text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="size-[6px] rounded-full bg-primary-accent"></span>
                            <span className="text-white/60 leading-normal">
                              {item.institution}
                            </span>
                          </div>
                          {/* Item Description */}
                          <p className="text-white/60 text-sm text-center lg:text-left mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329]  rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-primary-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
