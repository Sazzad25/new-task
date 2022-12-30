import { useQuery } from "@tanstack/react-query";
import React from "react";
import Cart from "./Cart";

const Details = () => {
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
      <h2 className="text-3xl">Details {Text.length}</h2>
      <div>
        {
            Text.map(slot => (<Cart key={slot._id} slot={slot}></Cart>) )
        }
      </div>
      
    </div>
  );
};

export default Details;
