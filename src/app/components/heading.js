const Heading = ({ text, className = '' }) => {
  return (
    <div className="relative p-4">
      <div className="flex justify-center items-center h-full">
        <h1 className={`font-light text-3xl tracking-wider ${className}`}>{text}</h1>
      </div>
    </div>
  );
};

export default Heading;
