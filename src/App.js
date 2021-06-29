import "./App.css";
import { Container, Row } from "react-bootstrap";

import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import { useState } from "react";
import DeleteModal from "./components/DeleteModal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState({});
  const [toDelete, setToDelete] = useState();
  const addUser = (user) => {
    setUsers([user, ...users]);
    setCurrent({})
  };
  const deleteUser = () => {
    const deleted = users.splice(users.indexOf(toDelete), 1)[0];
    if (current.id === deleted.id) {
      setCurrent({});
    }
    setUsers([...users]);
    setToDelete();
  }
  const editUser = (user) => {
    setCurrent(user);
  }
  const saveUser = (previous, updated) => {
    users[users.indexOf(previous)] = updated;
    setUsers([...users]);
    setCurrent({})
  }
  const preDeleteUser = (user) => {
    setToDelete(user);
  }
  return (
    <Container className="base-elements">
      <Header />
      <Row>
        <UserForm current={current} addUser={addUser} saveUser={saveUser} />
        <UsersList users={users} deleteUser={preDeleteUser} editUser={editUser} />
      </Row>
      <DeleteModal user={toDelete} onConfirm={deleteUser} />
    </Container>
  );
};

export default App;
