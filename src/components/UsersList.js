import PropTypes from "prop-types";
import { Col, Table } from "react-bootstrap";


const UsersList = ({ users, editUser, deleteUser }) => {
  const handleEditLocal = (e, key) => {
    e.preventDefault();
    editUser(users.find(u => u.id === key));
  }
  const handleDeleteLocal = (e, key) => {
    e.preventDefault();
    deleteUser(users.find(u => u.id === key));
  }
  return (
    <Col md={6} className="table-data">
      <Table bordered hover>
        <thead>
          <tr>
            <th># </th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users?.length > 0 &&
            users.map(({ id, name, age }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td><a href="App" variant="light" onClick={(e) => handleEditLocal(e, id)}>✏️</a></td>
                <td><a href="App" variant="light" onClick={(e) => handleDeleteLocal(e, id)}>❌</a></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Col>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      age: PropTypes.number,
    }).isRequired
  ),
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired
};

export default UsersList;
