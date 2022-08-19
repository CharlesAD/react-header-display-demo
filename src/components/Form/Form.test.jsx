import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Form from "./Form";

/**
 * TODO:
 * 1. Write a snapshot test for Form component.
 * 2. Write a test for the Form component's handleSubmit function. Use a mock fxn. and confirm that the setName function is called whenever the form is submitted.
 * HINT: `userEvent.click` to trigger a form submission.
 * HINT: You will only submit the form once, so only check that the mock function is called once.
 */

it("renders without crashing", () => {
  const rendered = renderer.create(<Form />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("Confirms that setName function is called whenever the form is submitted", () => {
  const setName = jest.fn();

  render(<Form userEvent.click(screen.getByRole('button')));
});
