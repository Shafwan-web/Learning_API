import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Farfalle from "../ownAPI/img/Farfalle.jpg";
import Beef from "../ownAPI/img/Beef Lo Mein Noodles.jpg";
import Bruschetta from "../ownAPI/img/Bruschetta.jpg";
import Lemon from "../ownAPI/img/Lemon White Wine Chicken over Linguini.jpg";
import Linguine from "../ownAPI/img/Linguine.jpg";
import pistachio from "../ownAPI/img/pistachio pasta.jpg";
import Tagliatelle from "../ownAPI/img/Tagliatelle Con Vongole - Pasta With Little Clams.jpg";
import Alfredopasta from "../ownAPI/img/alfredopasta5.webp";
import SpicyPasta from "../ownAPI/img/spicy pasta.jpg";
// import Creamy from "../ownAPI/img/creamy pasta.jpg";

export default function APIUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/APIUsers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  // const images = {
  //   Farfalle: Farfalle,
  //   Beef: Beef,
  //   Bruschetta: Bruschetta,
  //   Lemon: Lemon,
  //   Linguine: Linguine,
  //   Pistachio: pistachio,
  //   Tagliatelle: Tagliatelle,
  // };
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
    // <div className="mt-16">
    //   <div>
    //     <h1>User List</h1>
    //     {users.map((u) => (
    //       <p key={u.id}>{u.name}</p>
    //     ))}
    //   </div>
    // </div>
    <div className="mt-16 grid grid-cols-3 gap-8 p-6">
      {users.map((u) => (
        <div
          key={u.id}
          className="border rounded-lg p-4 shadow-md text-center hover:scale-105 transition-transform duration-500"
        >
          {/* <img
            src={images[u.imageKey]}
            alt={u.name}
            className="w-full h-48 object-cover rounded-md mb-3"
          /> */}
          {/* {console.log("Hello this is Pasta ", users[0])}
          {console.log("Hello this is Pasta ", users[1])} */}

          <img
            src={images[u.image]} // use u.image, not u.imageKey
            alt={u.name}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
          <h2 className="font-semibold text-lg">{u.name}</h2>
        </div>
      ))}
    </div>
  );
}
