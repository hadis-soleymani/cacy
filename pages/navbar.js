import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <div>
        <div>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <nav className={styles.nav_right}>
          <a href="#"> خانه</a>
          <a href="#"> فروشگاه </a>
          <a href="#"> درباره ی ما </a>
          <a href="#"> تماس با ما </a>
        </nav>
        <nav className={styles.nav_left}>
          <AiOutlineSearch />
          <a href="#"> حساب کاربری</a>
        </nav>
        <div>
          <AiOutlineShoppingCart />
        </div>
      </div>
    </header>
  );
};
