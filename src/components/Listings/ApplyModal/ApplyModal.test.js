import React from "react";
import ApplyModal from "./ApplyModal";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<ApplyModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
