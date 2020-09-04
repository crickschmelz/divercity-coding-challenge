import styled from "styled-components";

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
  margin: 0 3% 0 3%;
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
  font-weight: 800;
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

export const CreateButton = styled.button`
  width: 200px;
  cursor: pointer;
  align-self: center;
  font-weight: 800;
  font-size: 16px;
  color: rgb(37, 55, 85);
  padding: 10px;
  background-color: transparent;
  border: 1px solid rgb(104, 114, 132);
  margin: 5px 10px;
  border-radius: 4px;
`;
