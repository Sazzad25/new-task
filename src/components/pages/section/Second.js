import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";

const Second = () => {
  const { data: Text } = useQuery({
    queryKey: ["Text"],
    queryFn: async () => {
      try {
        const res = await fetch("https://end-first-server.vercel.app/postSubmit", {
          headers: {
           
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  return (
    <div>
      <h2 className="text-3xl text-center">This is Second Section</h2>
      <h2 className="text-3xl text-center">Top 3 Posts</h2>
      <div className="text-center mt-3 mb-3">
      <Link  className="btn btn-secondary" to='/details'>Details</Link>
      </div>
    </div>
  );
};

export default Second;
