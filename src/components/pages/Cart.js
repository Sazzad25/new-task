import React from "react";

const Cart = ({ slot }) => {
  const { image, message } = slot;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 gap-y-7 gap-x-5">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{message}</h2>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Comment</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
