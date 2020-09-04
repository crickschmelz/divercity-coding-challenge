import React from "react";
import PropTypes from "prop-types";
import { Nav, NavLinkContainer, NavLink, CreateButton } from "./style";

const NavBar = (props) => {
  NavBar.propTypes = {
    clickLink: PropTypes.func
  };

  const { clickLink } = props;

  return (
    <Nav>
      <a href="https://www.divercity.io/">
        <img
          src="https://www.divercity.io/static/media/complete-logo.f047ae08.svg"
          alt="divercity logo"
        ></img>
      </a>
      <NavLinkContainer>
        <li>
          <NavLink onClick={clickLink} value="login">
            Sign in
          </NavLink>
        </li>
        <li>
          <CreateButton onClick={clickLink} value="create-account">
            Create an account
          </CreateButton>
        </li>
      </NavLinkContainer>
    </Nav>
  );
};

export default NavBar;
