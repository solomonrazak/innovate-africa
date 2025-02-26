import React from "react";
import CurvedLine from "../../components/ui/CurvedLine";
import speech from "../../assets/images/speech.png";
import EventForm from "../../components/eventForm/EventForm";
import cover from "../../assets/images/cover.jpg";
import EventPost from "../../components/eventForm/EventPost";
import unn from "../../assets/images/unn.png";

const Events = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="bg-[#FFF8FA] relative z-20">
        <h1 className="text-3xl font-bold text-center text-[#8E1C38] pb-16 pt-10">
          Events
        </h1>

        <div className="w-full px-20 relative z-30">
          <img
            src={speech}
            alt="speech"
            className="w-full h-[550px] object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-[#d31443] opacity-70 mix-blend-multiply rounded-t-lg mx-20"></div>
          <div className="bg-white p-7 rounded-lg text-gray-500 absolute shadow-md -top-10 left-1/2 transform -translate-x-1/2">
            <p>Premium events for founders</p>
          </div>
          <div className="absolute z-30 -bottom-13 left-1/2 transform -translate-x-1/2">
            <EventForm />
          </div>
        </div>

        <div className="absolute bottom-0 w-full z-0">
          <CurvedLine />
        </div>
        <div className="absolute -top-[10%] z-0">
        <img src={unn} alt="union" className="w-[150px]"/>
      </div>
      </div>

      <div className="px-20 mt-30 mb-10 w-full">
        <h1 className="text-[#8E1C38] text-2xl font-bold mb-5">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
           <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
           <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
          <EventPost
            title="The Future of digital Advertising in a world of Generative AI"
            desc="A master class where the future of advertising will be discussed"
            image={cover}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
