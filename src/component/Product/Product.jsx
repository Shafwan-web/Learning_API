import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Product() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let safwan =
      // "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=0e8124d64d2e49e398c7d6b80a5bb32e";
      "https://fakestoreapi.com/products?limit=12";
    axios
      .get(safwan)
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("this error is console", err);
        setError("Failed to fetch recipes 😢");
        setLoading(false);
      });
  }, []);
  if (loading)
    return <p className="text-center bg-amber-950 mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  return (
    <div className="mt-20 mx-auto mb-6">
      <div className="mt-6 mx-auto w-[90%] ">
        <h1 className="text-2xl font-bold mb-4 text-center">🍝 Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full">
          {recipes.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-3 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[350px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="mt-3 text-lg font-semibold text-center w-[100%] h-[25%]">
                {item.title}
              </h2>
              <div className="flex flex-row justify-between gap-4 ">
                <p className="text-[#4b54c9] font-bold">Rs: {item.price}</p>
                <p className="text-gray-800">{item.category}</p>
              </div>
              {/* <span>
                {item.description.length > 40
                  ? item.description.slice(0, 60) + ".."
                  : item.description}
              </span> */}
              <p className="text-gray-700 text-sm">
                {expandedId === item.id
                  ? item.description // show full if expanded
                  : item.description.slice(0, 60) + ""}
                <span
                  onClick={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  {expandedId === item.id ? "Show less" : "...Read more"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
