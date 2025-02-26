import React from "react";
import Button from "../../components/ui/Button";
import { IoIosArrowForward } from "react-icons/io";
import Float from "../../components/ui/Float";
import network from "../../assets/images/network.png";
import image1 from "../../assets/images/image1.jpg";
import sport from "../../assets/images/sport.png";
import comp1 from "../../assets/images/comp1.png";
import comp2 from "../../assets/images/comp2.png";
import comp3 from "../../assets/images/comp3.png";
import comp4 from "../../assets/images/comp4.png";
import comp5 from "../../assets/images/comp5.png";
import card1 from "../../assets/images/card1.jpg";

import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";
import card5 from "../../assets/images/card5.jpg";
import card6 from "../../assets/images/card6.jpg";
import card7 from "../../assets/images/card7.jpg";
import card21 from "../../assets/images/card21.jpg";
import card22 from "../../assets/images/card22.png";
import card23 from "../../assets/images/card23.png";
import card24 from "../../assets/images/card24.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import CardOne from "../../components/ImageCard/CardOne";
import CardTwo from "../../components/ImageCard/CardTwo";
import "./styles.css";

import CurvedLine from "../../components/ui/CurvedLine";
import unn from "../../assets/images/unn.png";

const companies = [comp1, comp2, comp3, comp4, comp5];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
       <div className="relative">
      <div className="flex bg-[#FFF8FA] px-14 py-14">
        <div className="w-1/2 pr-10 pl-3 flex flex-col justify-center">
          <p className="font-bold text-[20px] text-[#8E1C38]">
            Are you a visionary startup ready to revolutionize Africa through
            innovative technology solutions?
          </p>
          <p className="text-[#8E1C38]">
            Submit your pitch for potential support
          </p>
          <Button
            name="Apply"
            icon={<IoIosArrowForward className="mt-1" />}
            className="mt-5 w-26"
          />
        </div>
        <div className="w-1/2 relative">
  <img
    src={image1}
    className="w-[320px] h-[300px] object-cover rounded-md mx-auto"
    alt="image"
  />
  
 
  <div className="absolute z-50 top-7 left-24 lg:top-7 lg:left-8 xl:top-7 xl:left-24">
    <Float
      name="Network"
      icon={<img src={network} alt="network" className="w-4 h-4" />}
      className=""
    />
  </div>

  
  <div className="absolute z-50 bottom-14 right-16 lg:bottom-14 lg:right-5 xl:bottom-14 xl:right-16">
    <Float
      name="Sport Talents"
      icon={<img src={sport} alt="sport" className="w-4 h-4" />}
      className=""
    />
  </div>
</div>

       
      </div>
      <div className="absolute w-full -bottom-[20px]">
      <CurvedLine />
      </div>
      <div className="absolute -top-[10%]">
        <img src={unn} alt="union" className="w-[150px]"/>
      </div>
      </div> 
      
      


      <div className="text-center px-20 mt-10 py-8 w-full">
        <p className="text-[20px] font-semibold mb-14 ">
          Companies we've worked with
        </p>
        <div className="flex justify-between items-center ">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company}
              alt={`company-${index + 1}`}
              className="w-35 h-20 object-contain"
            />
          ))}
        </div>
      </div>
      <h3 className="text-center mb-10 text-[#8E1C38] text-[20px] font-semibold mt-8">
        What you stand to gain
      </h3>
      <div className="overflow-x-auto py-5 pl-14  scrollbar-hide">
        <div className="flex gap-7 w-max">
          <CardOne title="End-to-End Solution" image={card1} />
          <CardOne title="Network Collaboration" image={card2} />
          <CardOne title="Mentorship" image={card3} />
          <CardOne title="Funding Opportunities" image={card4} />
          <CardOne title="Speed to Market" image={card5} />
          <CardOne title="Cost Efficient and Scalable" image={card6} />
          <CardOne title="Fully Complaint" image={card7} />
        </div>
      </div>

      <div className="max-w-[90%] flex gap-6 px-14 mt-14">
        <div className="flex gap-5">
          <CardTwo image={img1} />
          <CardTwo image={img2} />
        </div>
        <div className="">
          <h2 className="text-[#8E1C38]">Supporting Changemakers in Africa</h2>
          <div className="space-y-5 gap-5 text-[13px]">
            <p>
              Innovate Africa is committed to creating meaningful change in the
              African business world. We believe that businesses have the power
              to drive progress, solve challenges, and uplift communities.
              Through strong partnerships and customized support, we help
              entrepreneurs, startups, and established companies grow and
              succeed
            </p>
            <p>
              Our goal is to provide the right tools, resources, and networks to
              tackle real-world problems and create latext-[#8E1C38]sting impact. Whether it's
              funding, mentorship, or business development support, we work hand
              in hand with changemakers to turn ideas into reality.
            </p>
            <p>
              Join us on this journey of innovation and transformation.
              Together, we can build a thriving and sustainable future for
              businesses across Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="px-14 bg-[#FFF8FA] py-10">
        <h3 className="text-center text-[#8E1C38] mb-10 font-semibold">
          Read Our Article
        </h3>
        <div className="grid grid-cols-4 gap-5">
          <CardOne
            title="Examine labour market trends in Northen and Sub-Saharan Africa"
            image={card21}
          />
          <CardOne
            title="Examine labour market trends in northen and Sub-Saharan Africa"
            image={card22}
          />
          <CardOne
            title="Examine labour market trends in northen and Sub-Saharan Africa"
            image={card23}
          />
          <CardOne
            title="Examine labour market trends in northen and Sub-Saharan Africa"
            image={card24}
          />
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <Button
          name="Apply"
          icon={<IoIosArrowForward className="mt-1" />}
          className="mt-5 w-48 flex justify-center font-semibold rounded-md"
        />
      </div>
    </div>
  );
};

export default Home;
