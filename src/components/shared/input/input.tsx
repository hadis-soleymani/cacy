import React from "react";

//styles
import styles from "./input.module.scss";

//icons
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsSignpost } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";

//props interface
interface Props {
  name?: string;
  onChange?: any;
  value?: string;
  error?: string;
  placeholder?: string;
  textarea?: boolean;
}

const Input: React.FC<Props> = ({
  onChange,
  value,
  name,
  error,
  placeholder,
  textarea,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon_inside}>
        {textarea ? (
          <textarea
            className={styles.textarea}
            placeholder={placeholder}
            id={name}
            name={name}
            onChange={onChange}
            value={value}
          />
        ) : (
          <input
            className={styles.input}
            placeholder={placeholder}
            id={name}
            name={name}
            type={name}
            onChange={onChange}
            value={value}
          />
        )}

        {/* choos icon by name    */}

        {name === "phoneNumber" ? (
          <AiOutlinePhone size={20} />
        ) : name === "address" ? (
          <AiOutlineHome size={20} />
        ) : name === "detail" ? (
          <BiDetail size={20} />
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
