const CardTwo = ({ image }: { image: string }) => {
  return (
    <div className="w-[250px] h-[400px]">
      <img src={image} className=" rounded-lg object-contain" />
    </div>
  );
};

export default CardTwo;
