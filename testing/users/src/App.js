import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUser] = useState([]);
  const onUserAdd = (user) => {
    setUser([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
