import React from "react";
import Select, { StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";

interface Props {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (name: string, value: string) => void;
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

const Dropdown: React.FC<Props> = ({ options, onChange, name }) => {
  const handleChange = (value: string) => {
    // this is going to call setFieldValue and manually update values.topcis
    onChange(name, value);
  };

  const LoadOptions = (searchValue: string, callback: any) => {
    setTimeout(() => {
      const filterOptions = options.filter((options) =>
        options.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      callback(filterOptions);
    }, 2000);
  };

  return (
    <div style={{ width: "100%" }}>
      <AsyncSelect
        loadOptions={LoadOptions}
        placeholder="نام استان خود را وارد کنید"
        styles={colourStyles}
        defaultOptions //for show options without search
        onChange={handleChange}
      />
    </div>
  );
};

export default Dropdown;