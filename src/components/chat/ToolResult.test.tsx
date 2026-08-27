import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ToolResult from "./ToolResult";

describe("ToolResult", () => {
  it("renders the tool name", () => {
    render(
      <ToolResult
        toolName="Weather"
        result="25°C"
      />
    );

    expect(
      screen.getByText("Weather")
    ).toBeInTheDocument();
  });

  it("renders the tool result", () => {
    render(
      <ToolResult
        toolName="Weather"
        result="25°C and sunny"
      />
    );

    expect(
      screen.getByText("25°C and sunny")
    ).toBeInTheDocument();
  });

  it("exposes the result using an accessible region", () => {
    render(
      <ToolResult
        toolName="Search"
        result="Search completed"
      />
    );

    expect(
      screen.getByRole("region", {
        name: "Search tool result",
      })
    ).toBeInTheDocument();
  });
});