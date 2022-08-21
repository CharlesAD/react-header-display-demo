import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

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

it("displays the name and profile whenever we submit the form", () => {
  const nameInput = "Charles AD";

  render(<App />);

  const h1 = screen.getByRole("heading", { level: 1 });
  const input = screen.getByLabelText(/name/i);
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  userEvent.type(input, nameInput);
  userEvent.click(submitBtn);

  const h2 = screen.getByRole("heading", { level: 1 });
  screen.getByAltText(nameInput);

  expect(h1.textContent).toContain(nameInput);
  expect(h2.textContent).toContain(nameInput);
});
