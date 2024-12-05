import ProductView from "@/views/Product";
import { productType } from "@/types/product.type";

const ProductPage = (props: { products: productType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

// Dipanggil setiap melakukan request
export async function getServerSideProps() {
  //   fetch Data
  const res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/api/product");
  const response = await res.json();
  console.log(response);
  return {
    props: {
      products: response.data,
    },
  };
}
