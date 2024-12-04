import styles from "@/styles/404.module.scss";
import Image from "next/image";
const Custom404 = () => {
  return (
    <div className={styles.error}>
      {/* <img src="/not_found.png" alt="" className={styles.error__image} /> */}
      <Image
        src={"/not_found.png"}
        alt=""
        className={styles.error__image}
        width={500}
        height={500}
      />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default Custom404;
