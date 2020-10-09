import React from "react";
import Listings from "./";
import { renderer } from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Listings />).toJSON();
  expect(tree).toMatchSnapshot();
});
