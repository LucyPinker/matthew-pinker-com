import Home from '../components/home';

const Heading = ({ text }) => {
  return (
    <div className="relative h-48">
      <div className="absolute top-10 left-10">
        <Home />
      </div>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-3xl font-bold">{text}</h1>
      </div>
    </div>
  );
};

export default Heading;
