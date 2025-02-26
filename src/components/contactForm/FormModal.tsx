import React from 'react'

const FormModal = () => {
  return (
    <form className="w-[30rem] bg-white p-10 space-y-5 rounded-[5px] shadow-md">
        <div className="relative">
            <label className="text-left text-[10px] text-gray-400 px-1 -top-2 left-3 bg-white absolute">First Name</label>
            <input type="text" className="bg-transparent border-gray-400 border rounded-[5px] pl-4 w-full h-14 text-gray-600 text-[10px]" placeholder="Input first name"/>
        </div>
        <div className="relative">
            <label className="text-left text-[10px] text-gray-400 px-1 -top-2 left-3 bg-white absolute">Last Name</label>
            <input type="text" className="bg-transparent border-gray-400 border rounded-[5px] pl-4 w-full h-14 text-gray-600 text-[10px]" placeholder="Input last name"/>
        </div>
        <div>
            <input type="email" className="border-gray-400 border rounded-[5px] pl-4 w-full h-14 text-gray-600 text-[10px] bg-transparent" placeholder="Email Address"/>
        </div>
        <textarea className="border-gray-400 border rounded-[5px] w-full h-40 text-gray-600 pl-4 pt-5 text-[10px] bg-transparent" placeholder="Your message"></textarea>
        <button type="submit" className="bg-[#8E1C38] text-white font-semibold w-full py-1 rounded-[5px]">Send</button>

    </form>
  )
}

export default FormModal