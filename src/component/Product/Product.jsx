import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();
  // const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=0e8124d64d2e49e398c7d6b80a5bb32e";
        let safwan = "https://fakestoreapi.com/products?limit=12";
        const response = await axios.get(safwan);
        console.log("Data of Product is Fetched :", response.data);
        setRecipes(response.data);
        // old che work
        // axios.get(safwan).then((response) => {
        //   setRecipes(response.data);
        // });
        //chat
      } catch (err) {
        console.error("fetch error", err);
        setError("Failed to fetch recipes 😢");
      } finally {
        setLoading(false); // 👈 Ensure this always runs
      }
    };
    fetchProduct();
  }, []);
  if (loading)
    return <p className="text-center text-lg text-black mt-20">Loading...</p>;
  // if (loading)
  //   return (
  //     <p className="text-center text-lg text-black mt-20 py-3">Loading...</p>
  //   );
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  return (
    <div className="mt-20 mx-auto mb-6">
      <div className="mt-6 mx-auto w-[90%] ">
        <h1 className="text-2xl font-bold mb-4 text-center">🍝 Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-full">
          {recipes.map((item, index) => (
            <div
              key={index}
              // onClick={() => setSelectedProduct(item)}
              onClick={() => navigate(`/Products/${item.id}`)}
              className="border rounded-2xl p-3 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[350px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="mt-3 xl:text-lg font-semibold text-center w-[100%] h-[25%]">
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
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   setExpandedId(expandedId === item.id ? null : item.id);
                  // }}
                  onClick={() => {
                    setExpandedId(expandedId === item.id ? null : item.id);
                  }}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  {expandedId === item.id ? "Show less" : "...Read more"}
                </span>
              </p>
            </div>
          ))}
        </div>
        {/* {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] shadow-lg relative">
              <button
                onClick={() => setSelectedProduct(null)} // 👈 close modal
                className="absolute top-3 right-3 text-black font-bold text-xl cursor-pointer"
              >
                ×
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-40 h-40 mx-auto object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-4 text-center">
                {selectedProduct.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {selectedProduct.description}
              </p>
              <div className="flex justify-between mt-4 font-semibold">
                <p>Rs: {selectedProduct.price}</p>
                <p>{selectedProduct.category}</p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
