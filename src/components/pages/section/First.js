import React from "react";
import { useNavigate } from "react-router-dom";

const First = () => {
    const navigate = useNavigate();
    const handlePostSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.files[0];
        const message = form.message.value;
        // console.log(photo, message);

        const formData = new FormData()
        formData.append('image', image)
       

        const url =
        'https://api.imgbb.com/1/upload?key=4ef4e9a4d1ad25dafd03f0291ba5a8ac'

        fetch(url, {
            method: 'POST',
            body: formData,
          })
          .then(res => res.json())
          .then(imgData => {
           if(imgData.success){
            console.log(imgData.data.url);
            const Text = {
              message,
              image: imgData.data.url
            }
            
            fetch('http://localhost:5000/postSubmit', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(Text)
          })
          .then(res => res.json())
          .then(result =>{
            console.log(result);
            if(result.acknowledged){
              alert('post is added successfully');
              form.reset();
              navigate('/media');
            }
          })
          .catch(er => console.error(er));
           }
          })
    }
  return (
   <div>
    <form onSubmit={handlePostSubmit}>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Text</span>
              </label>
            <textarea name="message" className="textarea input input-bordered" placeholder="Write your post"></textarea>
            </div>
            <div className="form-control mt-2">
            <input name="image" type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </form>
   </div>
  );
};

export default First;
