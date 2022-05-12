import { Link } from "react-router-dom";

const CardGame = ({ imgGame, nameGame, slugGame, promotionGame, typeCard }) => {
  return (
    <div>
      {typeCard === "populer" ? (
        <div className="shadow-lg relative transition ease-in-out hover: hover:scale-90 duration-300">
          <Link to={`/order/` + slugGame}>
            <img
              alt="Placeholder"
              className="h-auto w-full rounded-lg"
              src={imgGame}
            />

            <div className="absolute items-center pl-5 md:pl-10 lg:px-10 w-full bottom-4 md:bottom-9 lg:bottom-9">
              <p className="font-bold text-sm md:text-xl lg:text-xl text-white">
                {nameGame}
              </p>
              <p className="text-xs hidden md:contents lg:contents md:text-lg lg:text:lg text-white">
                {promotionGame}
              </p>
            </div>
          </Link>
        </div>
      ) : typeCard === "games" ? (
        <div className="overflow-hidden shadow-lg rounded-lg transition ease-in-out hover:-translate-y-3 duration-300">
          <img alt="Placeholder" className="h-auto w-full" src={imgGame} />

          <div className="text-center py-4 md:py-8">
            <small className="text-xs md:text-base lg:text-base text-white">
              {nameGame}
            </small>
          </div>

          <div className="flex items-center justify-center p-2 md:p-4">
            <Link
              to={`/order/` + slugGame}
              className="bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-base lg:text-base font-bold py-2 w-full rounded-xl text-center"
              href="/"
            >
              Top Up
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardGame;
