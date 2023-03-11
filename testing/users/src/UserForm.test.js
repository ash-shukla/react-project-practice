import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two inputs and a button", async () => {
  // render the component
  render(<UserForm />);

  //manipulate the component or find an element in it
  const inputs = await screen.findAllByRole("textbox");
  const button = screen.getByRole("button");

  //Assertion-make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It calls onUserAdd when the form is submitted", async () => {
  const mock = jest.fn();
  //Render the component
  render(<UserForm onUserAdd={mock} />);
  //Find the two inputs
  const [nameInput, emailInput] = await screen.findAllByRole("textbox");
  //Simulate typing in a name
  user.click(nameInput);
  user.keyboard("ashish");
  // Simulate typing in a email
  user.click(emailInput);
  user.keyboard("ashish@gmail.com");
  // Find the button
  const button = screen.getByRole("button");
  //Simulate clicking the button
  user.click(button);
  // Assertion to make sure "onUserAdd" gets called with name/email
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "ashish",
    email: "ashish@gmail.com",
  });
});
