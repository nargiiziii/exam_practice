import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Wrapper = () => {
  return (
    <div>
      <p>
        <Link to={"/basket"}>
          <FaCartShopping size={25}/>
        </Link>
      </p>
    </div>
  );
};

export default Wrapper;
