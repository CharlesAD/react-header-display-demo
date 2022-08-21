import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from


it("calls the change handler whenever the button is clicked", () => {
  const mockChangeHandler = jest.fn();

  render(<Button changeHandler={mockchangehandler} />);
});
