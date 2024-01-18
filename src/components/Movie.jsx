const Movie = ({ movie }) => {
  return (
    <div
      style={{ backgroundColor: movie.id === 1 && "pink" }}
      className={`${
        movie.id === 2 ? "bg-rose-300" : "bg-sky-200"
      } p-5 rounded-lg cursor-pointer ${
        movie.id === 3 ? "hover:bg-red-400" : "hover:bg-sky-300"
      } transition duration-300 ease-in-out`}
    >
      <p className="text-s font-semibold bg-slate-400 text-white w-5 h-5 flex items-center justify-center rounded-full">
        {movie.id}
      </p>
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="text-gray-500">{movie.year}</p>
    </div>
  );
};

export default Movie;
