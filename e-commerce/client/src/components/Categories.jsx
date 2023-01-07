import { Link } from "react-router-dom";
import "../style/Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1255"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1255"
            alt=""
          />
          <button>
            <Link className="link" to="/products/2">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1255"
            alt=""
          />
          <button>
            <Link className="link" to="/products/3">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1255"
                alt=""
              />
              <button>
                <Link className="link" to="/products/4">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1255"
                alt=""
              />
              <button>
                <Link className="link" to="/products/5">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1255"
            alt=""
          />
          <button>
            <Link className="link" to="/products/6">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
