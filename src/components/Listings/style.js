import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #bbb;
`;

export const Nav = styled.nav`
  background-color: white;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
export const NavLinkContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled.button`
  font-size: 16px;
  color: rgb(37, 55, 85);
  margin: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-weight: bold;
  background-color: transparent;

  &:after {
    content: "";
    width: 0px;
    height: 1.5px;
    display: block;
    background: hsl(346, 85%, 0%);
    transition: 300ms;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
`;
