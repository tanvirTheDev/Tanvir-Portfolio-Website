"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      tite: "Phone",
      description: "01754408026",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "ahamedtanvir374@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Dhaka, Bangladesh",
    },
  ];

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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-primary-accent">
                Let&apos;s work together
              </h3>
              <p className="text-white/60 mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, modi? Ad explicabo molestias nobis vitae.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
                <Input
                  className="firstname"
                  type="text"
                  placeholder="Firstname"
                />
                <Input
                  className="lastname"
                  type="text"
                  placeholder="Lastname"
                />
                <Input
                  className="email"
                  type="email"
                  placeholder="Email Address"
                />
                <Input
                  className="phone"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-ful">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px] mt-5"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="sm" className="max-w-40 mt-5">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-primary-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.tite}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
