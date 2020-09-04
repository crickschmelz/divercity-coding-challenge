import styled from "styled-components";

export const Div = styled.div`
  margin-left: 10px;
`;

export const ApplyButton = styled.button`
  color: #ffffff;
  background-color: #3197e4;
  border: none;
  font-weight: 800;
  font-size: 14px;
  width: 100px;
  padding: 10px;
  margin: 10px 0 20px 0;
  border-radius: 30px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: grid;
  justify-content: center;
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #f8e1e9;
  opacity: 0.95;
`;

export const Input = styled.input`
  display: block;
  padding: 2%;
  margin: 2%;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Header = styled.h3`
  color: #072559;
  border-top: 1px solid black;
  padding-top: 3%;
`;
