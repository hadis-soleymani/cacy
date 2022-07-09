import React from "react";
import styles from '../styles/popup.module.scss'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const My_popup = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

export default My_popup;
