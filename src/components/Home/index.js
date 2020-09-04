import React from "react";
import NavBar from "../NavBar";
import { Welcome } from "./style";

const Home = (props) => {
  const goToPage = (link) => {
    props.history.push(`/${link}`);
  };

  const clickLink = (e) => {
    e.preventDefault();
    const link = e.target.value;
    goToPage(link);
  };

  return (
    <div>
      <NavBar clickLink={clickLink} />
      <Welcome>
        Welcome to the Divercity jobs page! Please sign in to see our current
        job openings.
      </Welcome>
    </div>
  );
};

export default Home;
