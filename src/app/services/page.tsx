"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const Services = () => {
  const services = [
    {
      num: "01",
      title: "Web Development",
      description:
        "Building visually stunning, highly responsive, and scalable websites tailored to meet your unique business needs, ensuring seamless performance and user engagement.",
      href: "",
    },
    {
      num: "02",
      title: "UI/UX Design",
      description:
        "Crafting intuitive and aesthetically pleasing user experiences, turning your ideas into beautiful, user-centric interfaces that drive engagement and retention.",
      href: "",
    },
    {
      num: "03",
      title: "Logo Design",
      description:
        "Designing iconic and memorable logos that capture your brand's essence, ensuring it stands out in the competitive market with a lasting impression.",
      href: "",
    },
    {
      num: "04",
      title: "SEO",
      description:
        "Optimizing your digital presence to improve search engine rankings, drive organic traffic, and boost your visibility to achieve unparalleled online success.",
      href: "",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-baseline">
                  <div className="text-5xl font-extralight text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="size-[70px] rounded-full bg-white group-hover:bg-primary-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-primary-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-x-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
