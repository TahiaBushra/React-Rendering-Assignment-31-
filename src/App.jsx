import Movies from "./components/Movies";

const movies = [
  {
    id: 1,
    title: "Don't Breathe",
    year: 2016,
  },
  {
    id: 2,
    title: "Evil Dead",
    year: 2013,
  },
  {
    id: 3,
    title: "The Collector",
    year: 2009,
  },
];
const App = () => {
  return <Movies movies={movies} />;
};
export default App;
