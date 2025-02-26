import React from 'react';


interface IButtonProps {
    name: string;
    className?: string;
    icon: React.ReactNode;
    
}

const Button: React.FC<IButtonProps> = ({name, className, icon, }) => {
  return (
    <button className={`bg-[#800020] text-white px-5 py-1 h-9 flex gap-2 items-center ${className}`}>{name}{icon}</button>
  )
}

export default Button