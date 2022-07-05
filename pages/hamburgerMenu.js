import React, { useState } from "react";
import styles from "../styles/navbar.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import Link from "next/link";

//styled components
const Div = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (!props.first ? "flex" : "none")};
    width: 0vw;
    height: 0vh;
    padding: 0;
    margin: 0;
    background-color: rgb(107, 140, 85);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    align-items: center;
    flex-direction: column;
    color: #fff;
    cursor: pointer;
    animation-timing-function: linear;
    animation-name: ${(props) => (!props.open ? "menu_close" : "menu_open")};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    @keyframes menu_open {
      0% {
        width: 0vw;
        height: 0;
        border-radius: 0 0 0 50%;
      }
      10% {
        width: 10vw;
        height: 10vw;
        border-radius: 0 0 0 10vw;
      }
      20% {
        width: 20vw;
        height: 20vw;
        border-radius: 0 0 0 20vw;
      }
      40% {
        width: 50vw;
        height: 50vw;
        border-radius: 0 0 0 50vw;
      }
      50% {
        width: 80vw;
        height: 80vw;
        border-radius: 0 0 0 80vw;
      }
      75% {
        width: 100vw;
        height: 100vh;
        border-radius: 0 0 0 100vw;
      }
      100% {
        width: 100vw;
        height: 100vh;
        border-radius: 0%;
      }
    }

    @keyframes menu_close {
      0% {
        width: 100vw;
        height: 100vh;
        border-radius: 0%;
      }
      10% {
        width: 100vw;
        height: 100vh;
        border-radius: 0 0 0 100vw;
      }
      20% {
        width: 80vw;
        height: 80vw;
        border-radius: 0 0 0 80vw;
      }
      40% {
        width: 50vw;
        height: 50vw;
        border-radius: 0 0 0 50vw;
      }
      50% {
        width: 20vw;
        height: 20vw;
        border-radius: 0 0 0 20vw;
      }
      75% {
        width: 10vw;
        height: 10vw;
        border-radius: 0 0 0 10vw;
      }
      100% {
        width: 0vw;
        height: 0;
        border-radius: 0 0 0 50%;
      }
    }
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState(true);

  const hamburger_open = () => {
    setOpen(!open);
    setFirst(false);
  };
  const hamburger_close = () => {
    setOpen(!open);
    setFirst(false);
  };

  return (
    <>
      <GiHamburgerMenu
        className={styles.hamburger_icon}
        onClick={hamburger_open}
        size={"1.5rem"}
      />
      <Div open={open} first={first}>
        <div className={styles.close_container}>
          <AiOutlineClose onClick={hamburger_close} size={"1.5rem"} />
        </div>
        <ul className={styles.hamburger_list} onClick={hamburger_close}>
          <Link href="#"> خانه</Link>
          <Link href="#"> حساب کاربری</Link>
          <Link href="#"> خروج</Link>
          <Link href="#"> فروشگاه </Link>
          <Link href="#"> درباره ی ما </Link>
          <Link href="#"> تماس با ما </Link>
        </ul>
      </Div>
    </>
  );
};

export default HamburgerMenu;
