const CardGame = ({ imgGame, nameGame }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img alt="Placeholder" className="block h-auto w-full" src={imgGame} />

      <div className="text-center py-4 md:py-8">
        <small className="text-xs md:text-base lg:text-base text-white">
          {nameGame}
        </small>
      </div>

      <div className="flex items-center justify-center leading-none p-2 md:p-4 my-auto">
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-base lg:text-base font-bold py-2 w-full rounded-xl text-center"
          href="/"
        >
          Top Up
        </a>
      </div>
    </div>
  );
};

export default CardGame;
