import { useState } from "react";
import "../../style/Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
