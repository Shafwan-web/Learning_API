import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostAPI() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    let Post_Data = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(Post_Data)
      .then((res) => {
        setPost(res.data.slice(0, 12));
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch Posts 😢");
      });
  }, []);
  if (error) return <p className="text-base text-center mt-6">{error}</p>;
  return (
    <div className="mt-20 mx-auto p-2">
      <h1 className="font-bold text-2xl text-gray-700">Post</h1>
      <div className="grid grid-cols-3 gap-6 p-3 rounded-2xl">
        {post.map((item) => {
          return (
            <div
              className=""
              key={item.id}
              onClick={() => navigate(`/API_Prc/${item.id}`)}
            >
              <div
                className="border border-[#f2f2f2] rounded-lg p-2 flex flex-col h-full min-h-[100px] hover:scale-105 
              transition-transform duration-300"
              >
                <p className="font-semibold">{item.title}</p>
                <span className="mt-6 text-gray-600">{item.body}</span>
              </div>
            </div>
          );
        })}
      </div>
      <h1></h1>
    </div>
  );
}
