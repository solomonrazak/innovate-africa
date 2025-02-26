const CardTwo = ({ image }: { image: string }) => {
  return (
    <div className="w-full h-[400px]">
      <img src={image} className="w-full rounded-lg object-contain " />
    </div>
  );
};

export default CardTwo;
