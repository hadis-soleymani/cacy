import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
      <nav className={styles.nav_right}>
        <Link href="#"> خانه</Link>
        <Link href="#"> فروشگاه </Link>
        <Link href="#"> درباره ی ما </Link>
        <Link href="#"> تماس با ما </Link>
      </nav>

      <nav className={styles.nav_left}>
        <div className={styles.icon_inside}>
          <input type="text" className={styles.input} />
          <AiOutlineSearch size={25} />
        </div>
        <select>
          <option>حساب کاربری</option>
          <option>ورود</option>
        </select>
      </nav>
      <div className={styles.card_container}>
        <FiShoppingBag size={22} color="#fff" />
      </div>
    </header>
  );
};
export default Navbar