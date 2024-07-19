import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  });

  useEffect(() => {
    fetch("/api/product").then((res) => {
      res.json().then((response) => {
        console.log(response);
        setProduct(response.data);
      });
    });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {product.map((product: productType) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
};

export default ProductPage;
