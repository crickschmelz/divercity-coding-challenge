import React from "react";
import CreateAccount from "./components/CreateAccount";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<CreateAccount />).toJSON();
  expect(tree).toMatchSnapshot();
});
