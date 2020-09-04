import React from "react";
import NavBar from "./components/NavBar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
