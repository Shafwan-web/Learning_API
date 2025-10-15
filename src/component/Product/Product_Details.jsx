import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Product_Details() {
  const { id } = useParams(); // 👈 get the product id from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const async fetchProduct
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details 😢");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    console.log("This is ID I want to See");
  }, [id]);

  if (loading)
    return <p className="text-center text-black mt-20 mb-6">Loading...</p>;

  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  if (!product)
    return <p className="text-center text-gray-500 mt-10">No product found.</p>;
  return (
    <div className="mt-20 mx-auto w-[90%] md:w-[60%] lg:w-[40%]">
      <h1 className="font-bold text-lg p-2">Product Details</h1>

      <div className="border rounded-2xl border-[#f2f2f2] shadow-lg p-6 flex flex-col items-center mb-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-56 h-56 rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-center">{product.title}</h1>
        <p className="text-gray-600 mt-2 text-center">{product.description}</p>
        <div className="flex justify-between w-full mt-4 font-semibold">
          <p className="text-[#4b54c9] font-bold">Rs: {product.price}</p>
          <p className="capitalize">{product.category}</p>
        </div>
        <div className="flex justify-between w-full mt-3 gap-6">
          <p className="text-yellow-500 ">Rating : {product.rating.rate}</p>
          <p className="">Reviews: {product.rating.count}</p>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)} // 👈 go back to Product list
        className="bg-blue-600 text-white mb-6 px-2 rounded-sm hover:bg-[#4b54c9] cursor-pointer"
      >
        ← Back
      </button>
    </div>
  );
}
