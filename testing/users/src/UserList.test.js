import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    { name: "Ashish", email: "ashish@ashish.com" },
    { name: "Rashmi", email: "rashmi@rashmi.com" },
  ];
  //Render the component
  const { container } = render(<UserList users={users} />);

  return { users };
};

test("render one row per user", async () => {
  renderComponent();
  //   screen.logTestingPlaygroundURL();
  //Find all rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row"); // => using "data-testid" method,it is used to assign a "testid to particular html element"
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");  // used to get a particular html element as react testing library assign default container when we run the test

  //Assertion to get the correct number of rows in a table
  expect(rows).toHaveLength(2);
});

test("render email and name of each user", async () => {
  const { users } = renderComponent();
  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
