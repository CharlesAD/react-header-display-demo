import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";
import Form from "./components/Form/Form";

/**
 * TODO:
 * 1. Write a snapshot test and visually inspect it to insure that it is rendering correctly
 * 2. Get by label text and submit the form.
 * 3. Expect the name that you typed in the form `toBeInTheDocument()`.
 */

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("Get by label text and submits the form", () => {
  render(<App />);
  const rendered = renderer.create(<App />).toJSON();

  const input = screen.getByLabelText("submit");
  userEvent.type(input, "Charles");
});
