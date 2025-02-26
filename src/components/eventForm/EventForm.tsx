import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const EventForm:React.FC = () => {
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  return (
    <form className="bg-[#8E1C38] py-7 px-10 rounded-[15px] text-white grid grid-cols-1 lg:grid-cols-3 gap-7">
      <div className="flex flex-col gap-3 relative">
        <label className="font-bold">Search Event</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter event..."
            className="bg-transparent border-b pb-1 border-white text-white placeholder-white font-bold focus:outline-none w-full pr-10"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-2 bg-white text-[#8E1C38] p-[0.5px] rounded-full mb-1"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full md:w-auto">
        <label className="font-bold">Place</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter place..."
          className="bg-transparent border-b pb-1 border-white text-white placeholder-white font-bold focus:outline-none w-full"
        />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <label className="font-bold">Month</label>
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-transparent placeholder-white font-bold border-b border-white w-full focus:outline-none pb-1 appearance-none"
          >
            <option value="" className="text-black">
              January
            </option>
            {months.map(({ value, label }) => (
              <option key={value} value={value} className="text-black">
                {label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />
        </div>
      </div>
    </form>
  );
};

export default EventForm;
