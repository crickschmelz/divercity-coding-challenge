import styled from "styled-components";

export const RegisterHeader = styled.h3`
  color: #333241;
  padding-top: 5%;
  text-align: center;
`;

export const SuccessModal = styled.div`
  position: absolute;
  z-index: 1;
  height: 25%;
  width: 100%;
  color: rgb(37, 55, 85);
  font-weight: 800;
  background-color: #ffffff;
  opacity: 0.95;
  text-align: center;
`;

export const ExitButton = styled.button`
  color: #ffffff;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 24px;
  padding: 1%;
  margin: 1% 3%;
  cursor: pointer;
  float: right;
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #3197e4;
  border: none;
  font-weight: 800;
  font-size: 14px;
  width: 100px;
  padding: 10px;
  margin: 20px 0 20px 100px;
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
  margin: 0;
  height: 350%;
  width: 100%;
  background-color: #d8d8d8;
  border: 1px solid #bbb;
  opacity: 0.95;
  border-radius: 4px;
`;

export const Input = styled.textarea`
  display: block;
  padding: 2%;
  margin-top: 5%;
  background-color: #ffffff;
  border: none;
  width: 300px;
  height: 100px;
  border-radius: 3px;
`;
