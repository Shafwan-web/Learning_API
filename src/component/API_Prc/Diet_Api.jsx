import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Diet_Api() {
  const [diet, setDiet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    let Diet_Data =
      "https://api.spoonacular.com/recipes/complexSearch?query=diet&apiKey=0e8124d64d2e49e398c7d6b80a5bb32e";

      axios
        .get(Diet_Data)
        .then((res) => {
          setDiet(res.data.results);
        })
        .catch((err) => {
          console.error(err);
          console.log("Diet Valo che");
          setError("Failed to fetch recipes 😢");
          setLoading(false);
        });
  }, []);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  return (
    <div>
      <div className="mt-6 mx-auto">
        <div className="mt-6 mx-auto w-[90%]">
          <h1 className="text-2xl font-bold mb-4 text-center">🍝 Diet List</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {diet.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-3 shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="mt-3 text-lg font-semibold text-center">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
