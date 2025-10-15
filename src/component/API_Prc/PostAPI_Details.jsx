import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function PostAPI_Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postdetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchpostdata = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPostDetails(res.data);
      } catch (err) {
        console.error("Error Fetching of Post_API", err);
        setError("Failed  to Fetch of Post_API");
      } finally {
        setLoading(false);
      }
    };
    fetchpostdata();
    console.log("This is Post ID Tracker");
  }, [id]);
  if (loading)
    return <p className="text-black font-bold text-lg">Loading...........</p>;
  if (error) return <p className="text-red-500 font-bold text-lg">{error}</p>;
  return (
    <div className="p-4 mt-20">
      <>
        <div className="border border-[#f2f2f2] shadow:md p-2 rounded-2xl">
          <h1 className="text-2xl">{postdetails.title}</h1>
          <p className="text-base">{postdetails.body}</p>
        </div>
        <button
          onClick={() => navigate(-1)} // 👈 go back to Product list
          className="bg-blue-600 text-white mb-6 px-2 rounded-sm hover:bg-[#4b54c9] cursor-pointer mt-6"
        >
          ← Back
        </button>
      </>
    </div>
  );
}
