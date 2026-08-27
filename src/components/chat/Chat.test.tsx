import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Chat from "./Chat";

vi.mock("@ai-sdk/react", () => ({
  useChat: vi.fn(),
}));

import { useChat } from "@ai-sdk/react";

const mockedUseChat = vi.mocked(useChat);

describe("Chat states", () => {
  it("renders the initial pending conversation state", () => {
    mockedUseChat.mockReturnValue({
      messages: [],
      sendMessage: vi.fn(),
      status: "submitted",
      stop: vi.fn(),
      error: undefined,
    } as never);

    render(<Chat />);

    expect(
      screen.getByRole("heading", { name: "No conversation yet" })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Start a conversation or try one of the examples below."
      )
    ).toBeInTheDocument();
  });

  it("renders the streaming state with a stop button", () => {
    mockedUseChat.mockReturnValue({
      messages: [
        {
          id: "1",
          role: "user",
          parts: [{ type: "text", text: "Hello" }],
        },
      ],
      sendMessage: vi.fn(),
      status: "streaming",
      stop: vi.fn(),
      error: undefined,
    } as never);

    render(<Chat />);

    expect(
      screen.getByRole("button", { name: "Stop generation" })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Ask anything...")
    ).toBeDisabled();
  });

  it("renders the error state with retry action", () => {
    mockedUseChat.mockReturnValue({
      messages: [],
      sendMessage: vi.fn(),
      status: "error",
      stop: vi.fn(),
      error: new Error("AI request failed"),
    } as never);

    render(<Chat />);

    expect(
      screen.getByRole("heading", { name: "Something went wrong" })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Failed to generate a response. Please try again."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Retry" })
    ).toBeInTheDocument();
  });
});