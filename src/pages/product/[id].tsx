import { fetcher } from "@/lib/swr/fetcher";
import { productType } from "@/types/product.type";
import DetailProduct from "@/views/Product/detail";
import { useRouter } from "next/router";
import useSWR from "swr";

// Client-Side
// const DetailProductPage = () => {
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR(
//     `/api/product/${query.id}`,
//     fetcher
//   );

//   return (
//     <div>
//       <DetailProduct product={isLoading ? [] : data.data} />
//     </div>
//   );
// };

// Server-Side
const DetailProductPage = ({ product }: { product: productType }) => {
  const { query } = useRouter();
  return (
    <div>
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// export async function getServerSideProps({
//   params,
// }: {
//   params: { id: string };
// }) {
//   console.log(params);

//   //   fetch Data
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const response = await res.json();
//   console.log(response);
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  const paths = response.data.map((product: productType) => ({
    params: {
      id: product.id,
    },
  }));
  // console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log(params);
  //   fetch Data
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
  const response = await res.json();
  console.log(response);
  return {
    props: {
      product: response.data,
    },
  };
}
