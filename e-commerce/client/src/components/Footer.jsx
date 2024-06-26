import "../style/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compares</span>
          <span>Coookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem
            Magna laboriosam doloremque distinctio autem necessitatibus
            veritatis ullam alias, commodi laborum eum amet laudantium qui
            minima! Perferendis, ratione aliquam voluptas nihil tempore atque ex
            dolor saepe, quaerat velit, numquam minus asperiores modi!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem
            Magnam laboriosam doloremque distinctio autem necessitatibus
            veritatis ullam alias, commodi laborum eum amet laudantium qui
            minima! Perferendis, ratione aliquam voluptas nihil tempore atque ex
            dolor saepe, quaerat velit, numquam minus asperiores modi!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">K❤️Way</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
