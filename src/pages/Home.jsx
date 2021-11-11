import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <h1 className="md:text-[80px] lg:text-[120px] leading-[140.63px] font-black">
          Start Chating.
        </h1>
        <p className="md:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
          text your colleagues with advance <br /> blockchain level secrutiy &
          privacy.
        </p>
        <Link to="/chat">
          <button className="text-white font-bold md:text-[30px] text-[45px] bg-lbBg rounded-[20px] px-6 py-4 md:mt-10 lg:mt-16">
            Let's Chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
