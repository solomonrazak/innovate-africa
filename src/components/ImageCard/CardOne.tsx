const CardOne = ({
  title,
  image,
  className,
}: {
  title: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={`relative w-full h-[240px] rounded-b-lg ${className}`}>
      <img src={image} alt={title} className="w-full h-full rounded-lg" />

      <div className="absolute bottom-0 bg-white/10 backdrop-blur-md w-full h-14 rounded-b-lg">
        <h3 className="text-center bg-transparent mt-4 text-[13px] px-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CardOne;
