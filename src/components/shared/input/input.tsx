import React from "react";
import styles from "./input.module.scss";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsSignpost } from "react-icons/bs";

interface Props {
  name?: string;
  onChange?: any;
  value?: string;
  error?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  onChange,
  value,
  name,
  error,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon_inside}>
        <input
          className={styles.input}
          placeholder={placeholder}
          id={name}
          name={name}
          type={name}
          onChange={onChange}
          value={value}
        />

        {name === "phoneNumber" ? (
          <AiOutlinePhone size={20} />
        ) : name === "postal_code" ? (
          <BsSignpost size={20} />
        ) : name === "email" ? (
          <HiOutlineMailOpen size={20} />
        ) : name === "firstName" || "lastName" ? (
          <FiUser size={20} />
        ) : null}
      </div>
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};

export default Input;
