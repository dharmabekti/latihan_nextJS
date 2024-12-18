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

// export async function getStaticProps() {
//   //   fetch Data
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();
//   console.log(response);
//   return {
//     props: {
//       products: response.data,
//     },
//     // revalidate: 10,
//   };
// }
