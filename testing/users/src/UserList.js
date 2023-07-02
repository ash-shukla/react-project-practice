import React from "react";

const UserList = ({ users }) => {
  console.log(users);
  const renderedUser = users?.map((x) => {
    return (
      <tr key={x.name}>
        <td>{x.name}</td>
        <td>{x.email}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUser}</tbody>
    </table>
  );
};

export default UserList;
