import React from "react";
import CurvedLine from "../../components/ui/CurvedLine";
import people from "../../assets/images/newimg.png";
import NewsCardOne from "../../components/newscard/NewsCardOne";
import NewsCardTwo from "../../components/newscard/NewsCardTwo";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/news-image.png";
import unn from "../../assets/images/unn.png";
import Button from "../../components/ui/Button";
import { IoIosArrowForward } from "react-icons/io";

const About:React.FC = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
      <div className="relative ">
        <div className="flex bg-[#FFF8FA] px-20 py-14 relative">
          <div className="w-1/2">
            <h1 className="text-3xl text-[#8E1C38] font-bold ml-10">
              About Us
            </h1>
          </div>
          <div className="w-1/2">
            <img
              src={people}
              alt="people"
              className="object-contain rounded-lg"
            />
          </div>
          <div className="absolute bottom-25 lg:bottom-6 xl:bottom-25 z-50 lg:left-20 xl:left-50">
            <NewsCardOne />
          </div>
        </div>

        <div className="absolute w-full -bottom-[20px]">
          <CurvedLine />
        </div>
        
      </div>
      <div className="absolute -top-[10%] z-0">
        <img src={unn} alt="union" className="w-[150px] z-0"/>
      </div>
      </div>

      <div className="flex justify-center py-20">
        <div className="space-y-10">
        <section className="flex gap-10">
          <NewsCardTwo
            image={people4}
            title="Financial Investment and Capital Infusion"
            description="Innovate Africa Fund provides equity and debt financing to fuel business expansion, support working capital needs, and employ risk mitigation strategies, ensuring sustainable financial performance."
          />
          <NewsCardTwo
            image={people1}
            title="Strategic Guidance and Business Development"
            description="The power of Innovate Africa Fund is a network of seasoned advisors and industry veterans at your beck and call, They will walk you through strategic decisions, connect you with industry titans and potential customers, and help you craft a go-to-market strategy that'll have your target audience in awe."
          />
        </section>
        <section className="flex gap-10">
        <NewsCardTwo
            image={people2}
            title="Operatioinal Improvement"
            description="Innovate Africa Fund will help you find the perfect talent, implement efficient systems, and stay compliant with local regulations, reducing risks and paving the way for smooth scaling."
          />
          <NewsCardTwo
            image={people3}
            title="Exit Strategy and Value Creation"
            description="When it comes to exits, Innovate Africa Fund is your ultimate strategist. They'll guide you through mergers and acquisitions, ensuring maximum shareholder value and a smooth transition"
          />
        </section>
        </div>
      </div>

      <div className="flex justify-center">
        <Button name="Apply" icon={<IoIosArrowForward className="mt-1" />} className="w-50 flex justify-center py-1 rounded-md"/>
      </div>
    </div>
  );
};

export default About;
