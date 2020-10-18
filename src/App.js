import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.netlify.app/api/react-tours-project";

export default function App() {
  const [tours, setTours] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    console.log(data);
  };
  React.useEffect(() => {
    fetchTours();

    setLoading(false);
  }, []);
  return (
    <section className="text-center ">
      <h1 className="text-purple-500 text-2xl font-mono border-b-2 border-indigo-400 inline-block">
        Unsere Tours
      </h1>
      {tours.length === 0 && (
        <button
          className="block mx-auto border-4 border-blue-400 px-2 py-1 rounded text-blue-600 hover:bg-blue-400 hover:text-white mt-3"
          onClick={fetchTours}
        >
          refresh
        </button>
      )}

      {loading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} />}
    </section>
  );
}
