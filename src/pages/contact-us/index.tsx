import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import CurvedLine from "../../components/ui/CurvedLine";
import FormModal from "../../components/contactForm/FormModal";
import unn from "../../assets/images/unn.png";

const Contact: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="bg-[#FFF8FA] relative pt-20 pb-40">
        <div className="px-22">
          <div className="space-y-5">
            <p className="text-[#8E1C38] underline text-[30px] font-semibold">
              Contact Us
            </p>
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#8E1C38] text-[20px]" />
              <p className="text-gray-500">Innovate@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#8E1C38] text-[20px]" />
              <p className="text-gray-500">+234 80 1234 9898</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-[#8E1C38] text-[20px]" />
              <FaSquareXTwitter className="text-[#8E1C38] text-[20px]" />
              <FaSquareInstagram className="text-[#8E1C38] text-[20px]" />
              <FaFacebookSquare className="text-[#8E1C38] text-[20px]" />
            </div>
          </div>
        </div>
        <div className="absolute z-30 right-30 top-10">
          <FormModal />
        </div>
        <div className="absolute bottom-0 w-full z-0">
          <CurvedLine />
        </div>
        <div className="absolute -top-[10%] z-0">
          <img src={unn} alt="union" className="w-[150px]" />
        </div>
      </div>

      <div className="py-35"></div>
    </div>
  );
};

export default Contact;
