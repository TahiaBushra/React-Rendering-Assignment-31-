import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <div className="container mx-a py-20">
      <h1 className="text-s font-semibold tracking-wider mb-5">
        Movie List: <span>({movies.length})</span>
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
