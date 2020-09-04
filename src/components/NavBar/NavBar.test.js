import React from "react";
import NavBar from "./";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
