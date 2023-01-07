import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/common/List";
import "../../style/Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  console.log(sort);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={1}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              iad="asc"
              value={sort}
              name="asc"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lower first)</label>
          </div>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            iad="desc"
            value={sort}
            name="desc"
            onChange={() => setSort("desc")}
          />
          <label htmlFor="desc">Price (Highest first)</label>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
