import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { App } from "../App";

const renderComponent = () => {
  render(<App />);
};

describe("App", () => {
  test("text", async () => {
    renderComponent();
    const bun = await screen.findByTestId("bun");
    expect(bun).toBeDefined();
  });
});
