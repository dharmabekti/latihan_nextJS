import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";
const Navbar = () => {
  const { data }: any = useSession();
  // console.log(data);

  return (
    <div className={styles.navbar}>
      <div id="title"></div>
      <Script id="script-title">
        {`document.getElementById('title').innerHTML = 'Navbar'`}
      </Script>
      <div className={styles.profile}>
        {data?.user?.image && (
          <Image
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.fullname}
            width={50}
            height={50}
          />
        )}
        {data && data.user.fullname ? data.user.fullname : ""}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
