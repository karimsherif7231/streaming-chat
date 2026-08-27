import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatMessage from "./ChatMessage";

describe("ChatMessage", () => {
  it("renders a user message", () => {
    render(
      <ChatMessage
        role="user"
        content="Hello, how are you?"
      />
    );

    expect(
      screen.getByText("Hello, how are you?")
    ).toBeInTheDocument();
  });

  it("renders an assistant message", () => {
    render(
      <ChatMessage
        role="assistant"
        content="I'm doing great!"
      />
    );

    expect(
      screen.getByText("I'm doing great!")
    ).toBeInTheDocument();
  });

  it("preserves multiline message content", () => {
    render(
      <ChatMessage
        role="assistant"
        content={"First line\nSecond line"}
      />
    );

    expect(screen.getByText(/First line/)).toBeInTheDocument();
    expect(screen.getByText(/Second line/)).toBeInTheDocument();
  });

  it("renders empty assistant content without crashing", () => {
    render(
      <ChatMessage
        role="assistant"
        content=""
      />
    );

    expect(document.body).toBeInTheDocument();
  });
});