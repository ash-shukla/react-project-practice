import "../../style/Cart.scss";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80",
      img2: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
      title: "Graphic White T-Shirt",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, vitae",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      title: "Lorem ipsum",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, repellat",
      oldPrice: 25,
      price: 16,
    },
  ];
  return (
    <div className="cart">
      <h1>Product in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlined className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹400</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">RESET CART</span>
    </div>
  );
};

export default Cart;
