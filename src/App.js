import "./App.css";
import { Container, Row } from "react-bootstrap";

import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState({});

  const addUser = (user) => {
    console.log("Adding user ", user)
    setUsers([user, ...users]);
    setCurrent({})
  };

  const deleteUser = (user) => {
    console.log("Deleting user ", user)
    const deleted = users.pop(users.indexOf(user));
    if (current.id === deleted.id) {
      setCurrent({});
    }
    setUsers([...users]);
  }

  const editUser = (user) => {
    console.log("Editing user ", user)
    setCurrent(user);
  }
  const saveUser = (previous, updated) => {
    console.log("Saving user ", previous, updated)
    users[users.indexOf(previous)] = updated;
    setUsers([...users]);
    setCurrent({})
  }

  return (
    <Container className="base-elements">
      <Header />
      <Row>
        <UserForm current={current} addUser={addUser} saveUser={saveUser} />
        <UsersList users={users} deleteUser={deleteUser} editUser={editUser} />
      </Row>
    </Container>
  );
};

export default App;
