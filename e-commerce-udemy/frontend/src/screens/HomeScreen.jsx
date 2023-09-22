import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Products from "../components/Products.jsx";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product?.name}</h3> */}
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
