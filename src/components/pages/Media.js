import { useQuery } from "@tanstack/react-query";
import React from "react";

const Media = () => {
//   const [post, setPost] = useState({});

//   const url = 'http://localhost:5000/postSubmit';

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setPost(data));
//   }, []);

const { data: Text } = useQuery({
    queryKey: ["Text"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/postSubmit", {
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
            </tr>
          </thead>
          <tbody>
            {Text.map((post, i) => (
              <tr key={post._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={post.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{post.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Media;
