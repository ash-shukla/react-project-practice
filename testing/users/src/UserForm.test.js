import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", async () => {
  // Render the component
  render(<UserForm />);

  //Manipulate the component or find an element in it
  const inputs = await screen.findAllByRole("textbox");
  const button = await screen.findByRole("button");

  // Assertion to make sure the component is doing what we expect it to do //
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It calls onUserAdd when the form is submitted", async () => {
  //Callback
  // const argList = [];    => Not the best way to implement
  // const callBack = (...arg) => {
  //   argList.push(arg);
  // };

  const mock = jest.fn();
  // Render the component
  render(<UserForm onUserAdd={mock} />);

  //Find the two inputs
  // const [nameInput, emailInput] = await screen.findAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  //Simulate typing in a name
  user.click(nameInput);
  user.keyboard("Ashish");
  // Simulate type in an email
  user.click(emailInput);
  user.keyboard("ashish@ashish.com");
  //Find the button
  const button = screen.getByRole("button");
  //Simulate clicking the button
  user.click(button);
  //Assertion to make sure onUserAdd gets called when with name/email
  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: "Ashish", email: "ashish@ashish.com" });
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Ashish",
    email: "ashish@ashish.com",
  });
});

// test("resets the two inputs when the form is submitted", () => {
//   render(<UserForm onUserAdd={() => {}} />);

//   const nameInput = screen.getByRole("textbox", { name: /name/i });
//   const emailInput = screen.getByRole("textbox", { name: /email/i });
//   const button = screen.getByRole("button");

//   user.click(nameInput);
//   user.keyboard("Ashish");
//   user.click(emailInput);
//   user.keyboard("ashish@ashish.com");
//   user.click(button);

//   expect(nameInput).toHaveValue("");
//   expect(emailInput).toHaveValue("");
// });
