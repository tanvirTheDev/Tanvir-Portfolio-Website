"use client";
import CountUp from "react-countup";
const Stats = () => {
  const stats = [
    {
      num: 12,
      text: "Years of experience",
    },
    {
      num: 26,
      text: "Prpject completed",
    },
    {
      num: 8,
      text: "Technologies mastered",
    },
    {
      num: 500,
      text: "Code commits",
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
