import { test, expect } from "@playwright/test";

test.describe("Streaming Chat primary flow", () => {
  test("user can send a message and receive an assistant response", async ({
    page,
  }) => {
    await page.route("**/api/chat", async (route) => {
      const stream = [
        "data: {\"type\":\"text-start\",\"id\":\"text-1\"}\n\n",
        "data: {\"type\":\"text-delta\",\"id\":\"text-1\",\"delta\":\"Hello! \"}\n\n",
        "data: {\"type\":\"text-delta\",\"id\":\"text-1\",\"delta\":\"This is a mocked AI response.\"}\n\n",
        "data: {\"type\":\"text-end\",\"id\":\"text-1\"}\n\n",
        "data: [DONE]\n\n",
      ].join("");

      await route.fulfill({
        status: 200,
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
        },
        body: stream,
      });
    });

    await page.goto("/");

    const input = page.getByPlaceholder("Ask anything...");

    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();

    await input.fill("Hello AI");

    await expect(input).toHaveValue("Hello AI");

    const sendButton = page.getByRole("button", {
      name: "Send message",
    });

    await expect(sendButton).toBeEnabled();

    await sendButton.click();

    await expect(
      page.getByText("Hello! This is a mocked AI response.")
    ).toBeVisible({
      timeout: 10000,
    });
  });
});