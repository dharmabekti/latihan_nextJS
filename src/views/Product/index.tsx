import { productType } from "@/types/product.type";
import styles from "./Product.module.scss";
import Link from "next/link";

const ProductView = ({ products }: { products: productType[] }) => {
  console.log(products);

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className={styles.product__list}>
        {products.length > 0 ? (
          <>
            {products.map((product: productType) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className={styles.product__list__item}
              >
                <div className={styles.product__list__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__list__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__list__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__list__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.product__list__skeleton}>
            <div className={styles.product__list__skeleton__image} />
            <div className={styles.product__list__skeleton__name} />
            <div className={styles.product__list__skeleton__category} />
            <div className={styles.product__list__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
