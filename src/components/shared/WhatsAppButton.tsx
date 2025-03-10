"use client";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = "8801754408026"; // Replace with your client's phone number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-28 right-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <BsWhatsapp className="text-3xl" />
    </button>
  );
};

export default WhatsAppButton;
