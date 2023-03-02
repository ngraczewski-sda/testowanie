import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Section } from "./Section";

describe("Section", () => {
  it("should show content when expanded", () => {
    const children = "Hello world!";

    // wyswietlenie
    render(<Section initialOpen={false}>{children}</Section>);

    // sprawdzenie czy content jest schowany
    let content = screen.queryByText("Hello world!");
    expect(content).not.toBeInTheDocument();

    // klikniecie przycisku Expand
    const button = screen.getByText("Expand");
    userEvent.click(button);

    // sprawdzenie czy content jest widoczny
    content = screen.queryByText("Hello world!");
    expect(content).toBeVisible();
  });
});
