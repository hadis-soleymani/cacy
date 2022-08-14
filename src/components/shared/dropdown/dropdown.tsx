import React from "react";
import Select, { StylesConfig } from "react-select";

interface Props {
  options: { value: string; label: string }[];
  value?: string;
  y?: any;
  name?: string;
}
//const options = [{ value: "Hormuzgan", label: "هرمزگان" }];
const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#f3f3f3",
    color: "#42474b",
    height: "45px",
    marginBottom: "1rem",
    border: "none",
    borderRadius: "8px",
    fontSize: ".8rem",
    direction: "rtl",
    paddingRight: "1.3rem",
  }),
  option: () => {
    return {
      outline: "none",
      direction: "rtl",
      backgroundColor: "white",
      color: "#42474b",
      cursor: "default",
      fontSize: ".8rem",
      padding: ".5rem .8rem .5rem .8rem",
    };
  },
};
const Dropdown: React.FC<Props> = ({ options, value, y, name }) => {
  return (
    <div style={{ width: "100%" }}>
      <Select
        options={options}
        placeholder="نام استان خود را وارد کنید"
        styles={colourStyles}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Dropdown;
