import Profile from "components/Profile/Profile";
import { useState } from "react";
import renderer from "react-test-renderer";
import Products from "./Products";

it("renders correctly", () => {
  const rendered = renderer.create(<Products />).toJSON();
  expect(rendered).toMatchSnapshot();
});
