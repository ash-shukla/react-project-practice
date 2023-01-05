import "../style/FeaturedProducts.scss";
import Card from "./common/Card";

const FeaturedProducts = ({ type }) => {
  let data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1255",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1255",
      title: "Graphic White T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1255",
      title: "Lorem ipsum",
      isNew: true,
      oldPrice: 25,
      price: 16,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1255",
      title: "Lorem ipsum dolor sit",
      isNew: true,
      oldPrice: 32,
      price: 27,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem
          necessitatibus deleniti natus. Dolore sed recusandae labore. Assumenda
          qui commodi cum facere possimus voluptatem repellendus numquam soluta
          ipsum fuga quae necessitatibus voluptatibus magnam dolorum repellat et
          omnis minus quis beatae, repudiandae nemo!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
