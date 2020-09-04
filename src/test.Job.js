import React from "react";
import Job from "./components/Listings/Job";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Job />).toJSON();
  expect(tree).toMatchSnapshot();
});
