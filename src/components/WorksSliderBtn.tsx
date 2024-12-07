"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface WorksSliderBtnProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

const WorksSliderBtn: React.FC<WorksSliderBtnProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
}) => {
  const swiper = useSwiper();

  return (
    <div className={`flex gap-2 z-20 ${containerStyles}`}>
      <button
        className={`bg-primary-accent hover:bg-accent-hover text-primary text-[22px] w-11 h-11 flex justify-center items-center transition-all ${btnStyles}`}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={`bg-primary-accent hover:bg-accent-hover text-primary text-[22px] w-11 h-11 flex justify-center items-center transition-all ${btnStyles}`}
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorksSliderBtn;
