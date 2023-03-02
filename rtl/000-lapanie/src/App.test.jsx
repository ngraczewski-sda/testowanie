import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should have elements", () => {
    render(<App />);

    const div = screen.queryByText("Hello world");
    expect(div).toBeInTheDocument();

    const inputWithPlaceholder =
      screen.queryByPlaceholderText("some placeholder");
    expect(inputWithPlaceholder).toBeInTheDocument();

    const inputWithLabel = screen.getByLabelText("Some label");
    expect(inputWithLabel).toBeInTheDocument();

    const inputWithDisplayValue =
      screen.getByDisplayValue("some display value");
    expect(inputWithDisplayValue).toBeInTheDocument();

    const button = screen.queryByRole("button", {
      name: "Some button",
    });
    expect(button).toBeInTheDocument();

    const p = screen.queryByTestId("some-test-id");
    expect(p).toBeInTheDocument();
  });
});
