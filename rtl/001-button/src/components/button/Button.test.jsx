import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
  it("should execute action on click", () => {
    // given
    const onClick = jest.fn();

    // when
    // wyswietla przycisk
    render(<Button onClick={onClick}>Click me!</Button>);

    // znajduje przycisk
    const button = screen.getByText("Click me!");

    // klika przycisk
    userEvent.click(button);

    //then
    expect(onClick).toHaveBeenCalled();
  });
});
