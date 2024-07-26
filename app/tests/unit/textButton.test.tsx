import { expect, it, describe, beforeAll } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";
import TextButton, { TextButtonProps } from "@/components/TextButton";

const BUTTON_PROPS: TextButtonProps = {
  text: "textbutton",
};

describe("TextButton", () => {
  let button: RenderResult;
  beforeAll(() => {
    button = render(<TextButton {...BUTTON_PROPS} />);
  });

  it("matches snapshot", () => {
    expect(button).toMatchSnapshot();
  });

  it("renders text", () => {
    expect(screen.getByRole("paragraph").innerHTML).toContain(
      BUTTON_PROPS.text,
    );
  });
});
