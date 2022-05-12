import { Link } from "react-router-dom";

const CardGaming = ({ imgGame, nameGame, slugGame, promotionGame }) => {
  return (
    <div className="shadow-lg relative">
      <Link to={`/order/` + slugGame}>
        <img
          alt="Placeholder"
          className="h-auto w-full rounded-lg"
          src={imgGame}
        />

        <div className="absolute items-center pl-5 md:pl-10 lg:px-10 w-full bottom-5 md:bottom-9 lg:bottom-9">
          <p className="font-bold text-sm md:text-xl lg:text-xl text-white">
            {nameGame}
          </p>
          <p className="text-xs md:text-lg lg:text:lg text-white">
            {promotionGame}
          </p>
        </div>

        {/* <div className="flex items-center justify-center p-2 md:p-4">
        <Link
          to={`/order/` + slugGame}
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-base lg:text-base font-bold py-2 w-full rounded-xl text-center"
          href="/"
        >
          Top Up
        </Link>
      </div> */}
      </Link>
    </div>
  );
};

export default CardGaming;
