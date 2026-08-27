import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ChatInput from "./ChatInput";

describe("ChatInput", () => {
  it("renders the message input", () => {
    render(
      <ChatInput
        sendMessage={vi.fn()}
        stop={vi.fn()}
        status="ready"
      />
    );

    expect(
      screen.getByPlaceholderText("Ask anything...")
    ).toBeInTheDocument();
  });

  it("disables send when the input is empty", () => {
    render(
      <ChatInput
        sendMessage={vi.fn()}
        stop={vi.fn()}
        status="ready"
      />
    );

    expect(
      screen.getByRole("button", { name: "Send message" })
    ).toBeDisabled();
  });

  it("sends a message when the user submits text", async () => {
    const user = userEvent.setup();
    const sendMessage = vi.fn();

    render(
      <ChatInput
        sendMessage={sendMessage}
        stop={vi.fn()}
        status="ready"
      />
    );

    const input = screen.getByPlaceholderText("Ask anything...");

    await user.type(input, "Hello AI");
    await user.click(
      screen.getByRole("button", { name: "Send message" })
    );

    expect(sendMessage).toHaveBeenCalledWith({
      text: "Hello AI",
    });
  });
});