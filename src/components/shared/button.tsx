import React from "react";
import { Interface } from "readline";
import styled from "styled-components";
import { number } from "yup";
interface Props{
  width?:string;
  height?:string;
}
//styled components
const MyButton = styled.button<Props>`
  background-color: #6b8c55;
  color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  position: relative;
  z-index: 9;
  :before {
    content: "";
    position: absolute;
    background-color: #ecf2e6;
    top: 100%;
    width: 100%;
    left: 0;
    height: 0;
    z-index: -1;
    opacity: 0.9;
    transition: all ease 0.5s;
  }
  :hover {
    color: #6b8c55;
  }
  :hover:before {
    top: 0;
    height: 100%;
  }
`;

interface Props{
  children?: React.ReactNode; 
  width?:string;
  height?:string;
  onClick?:()=>void;
  type?:string;
}

const Button:React.FC<Props> = ({ children, width, height }) => {
  return (
    <MyButton width={width} height={height} >
      {children}
    </MyButton>
  );
};

export default Button;
