import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it in the list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("ashish");
  user.click(emailInput);
  user.keyboard("ashish@ashish.com");
  user.click(button);

  const name = screen.getByRole("cell", { name: "ashish" });
  const email = screen.getByRole("cell", { name: "ashish@ashish.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
