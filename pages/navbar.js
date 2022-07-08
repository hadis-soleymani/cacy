// note: this file is header component

import React from "react";
import Image from "next/image";
import Link from "next/link";

//style
import styles from "../styles/navbar.module.scss";

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

//components
import HamburgerMenu from "./hamburgerMenu";

const Navbar = () => {
  return (
    <header className={styles.header}>
      {/* card container */}
      <div className={styles.card_container}>
        <div>
          <FiShoppingBag size={26} color="#fff" />
        </div>
      </div>

      {/* search and profile container */}
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

      {/* right navbar container */}
      <nav className={styles.nav_right}>
        <Link href="/authentication/sign_in"> خانه</Link>
        <Link href="#"> فروشگاه </Link>
        <Link href="#"> درباره ی ما </Link>
        <Link href="#"> تماس با ما </Link>
      </nav>

      {/* logo container */}
      <div className={styles.logo_container}>
        {/* show logo in desktop & tablet */}
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>

        {/* hamburgger menu just in mobile size */}
        <HamburgerMenu />
      </div>
    </header>
  );
};
export default Navbar;
