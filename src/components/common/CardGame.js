const CardGame = ({ imgGame, nameGame }) => {
  return (
    <div className="my-4 px-3 w-1/3 md:w-1/4 md:px-3 lg:my-4 lg:px-4 lg:w-1/5">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img alt="Placeholder" className="block h-auto w-full" src={imgGame} />

        <div className="flex-auto leading-tight text-center p-6 md:p-8">
          <small className="text-sm text-white">{nameGame}</small>
        </div>

        <div className="flex items-center justify-center leading-none p-2 md:p-4 my-auto">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-xl text-center"
            href="/"
          >
            Top Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
