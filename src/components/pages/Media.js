import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Media = () => {

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
      <h2 className="text-3xl">Total post: {Text?.length}</h2>
       <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Text</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {Text.map((post, i) => (
              <tr key={post._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={post?.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{post?.message}</td>
                <td>
                  <Link  className="btn" to='/details'>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div> 
    </div>
  );
};

export default Media;
