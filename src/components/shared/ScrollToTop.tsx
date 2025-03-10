// components/ScrollToTop.tsx
"use client";
import { ChevronUp } from "lucide-react"; // Optional: Install lucide-react for icons
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2  bg-green-500 text-white shadow-md hover:bg-green-700 transition-all"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
