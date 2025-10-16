import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Farfalle from "../ownAPI/img/Farfalle.jpg";
import Beef from "../ownAPI/img/Beef Lo Mein Noodles.jpg";
import Bruschetta from "../ownAPI/img/Bruschetta.jpg";
import Lemon from "../ownAPI/img/Lemon White Wine Chicken over Linguini.jpg";
import Linguine from "../ownAPI/img/Linguine.jpg";
import pistachio from "../ownAPI/img/pistachio pasta.jpg";
import Tagliatelle from "../ownAPI/img/Tagliatelle Con Vongole - Pasta With Little Clams.jpg";
import Alfredopasta from "../ownAPI/img/alfredopasta5.webp";
import SpicyPasta from "../ownAPI/img/spicy pasta.jpg";

export default function APIUsers_details() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userdetails, setUsersDetails] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let user_Data = `http://localhost:5000/api/APIUsers/${id}`;

    axios
      .get(user_Data)
      .then((res) => {
        setUsersDetails(res.data);
      })
      .catch((err) => {
        console.error("There is an error fetching Users Details", err);
        setError("Failed to fetch Users Details 😢");
      });
    setLoading(false);
    console.log("This is Users data Track to see is working");
  }, [id]);

  if (loading)
    return <p className="text-black font-bold text-lg">Loading...........</p>;
  if (error) return <p className="text-red-500 font-bold text-lg">{error}</p>;
  if (!userdetails)
    return <p className="text-black font-bold">No user found 😢</p>;
  const images = {
    "Farfalle.jpg": Farfalle,
    "Beef-Lo-Mein-Noodles.jpg": Beef,
    "Bruschetta.jpg": Bruschetta,
    "Lemon-White-Wine-Chicken.jpg": Lemon,
    "Linguine.jpg": Linguine,
    "pistachio-pasta.jpg": pistachio,
    "Tagliatelle-Con-Vongole.jpg": Tagliatelle,
    "alfredopasta5.webp": Alfredopasta,
    "spicy-pasta.jpg": SpicyPasta,
  };
  return (
    <div>
      <div className="p-4 mt-20">
        <div className="border border-[#f2f2f2] rounded-2xl p-4">
          <img
            src={images[userdetails.image]}
            alt={userdetails.name}
            className="w-auto h-auto rounded-2xl"
          />
          <h1 className="text-2xl">{userdetails.name}</h1>
          <p className="text-base">{userdetails.description}</p>
        </div>
        <button
          onClick={() => navigate(-1)} // 👈 go back to Product list
          className="bg-blue-600 text-white mb-6 px-2 rounded-sm hover:bg-[#4b54c9] cursor-pointer mt-6"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
