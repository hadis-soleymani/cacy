import React from "react";
import Button from "../shared/button";
import styles from "../../styles/button_card.module.scss";
import { BsTrash } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";

const Button_card = () => {
  return (
    <div className={styles.container}>
      <Button width="32px" height="32px">
        <BiMinus />
      </Button>
      <p>1</p>
      <Button width="32px" height="32px">
        <BsTrash />
      </Button>
      {/* <Button width="fit-content" height="fit-content">افزودن به سبد خرید</Button>  */}
    </div>
  );
};

export default Button_card;
