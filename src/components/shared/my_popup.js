import { useEffect, useState } from "react";
import Image from "next/image";

//styles
import styles from "../../styles/my_popup.module.scss";
import "reactjs-popup/dist/index.css";

//libraries
import Popup from "reactjs-popup";

//icons
import { AiOutlineClose } from "react-icons/ai";

//style of popup container
const contentStyle = {
  maxWidth: "600px",
  width: "86%",
  borderRadius: "1rem",
};

const My_popup = ({ title, description, status, open }) => {
  //for resolve hydration error (state pre-render)
  const [isBrowser, setIsBrowser] = useState(false);

  //for resolve hydration error
  useEffect(() => setIsBrowser(true), []);

  return isBrowser ? (
    <Popup open={open} position="center" contentStyle={contentStyle}>
      {(close) => (
        <div className={styles.popup_container}>
          <AiOutlineClose
            size={"1.5rem"}
            className={styles.close_icon}
            onClick={() => {
              close();
            }}
          />
          <Image
            src={
              status === "success"
                ? "/tick.svg"
                : status === "failed"
                ? "/incorrect.svg"
                : status === "warning"
                ? "/alert.svg"
                : "/tick.svg"
            }
            alt="plant"
            layout="fixed"
            width={50}
            height={50}
          />
          <h2>{title}</h2>
          <p>{description}</p>
          <hr />
          <button
            onClick={() => {
              close();
            }}
          >
            باشه
          </button>
        </div>
      )}
    </Popup>
  ) : null;
};

export default My_popup;
