import PropTypes from "prop-types";
import shortid from "shortid";

import { Form, Col, Button } from "react-bootstrap";

const UserForm = ({ current, addUser, saveUser }) => {
  const createUser = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.elements['name'].value,
      age: e.target.elements['age'].value * 1
    };
    (current.id) ? saveUser(current, { ...current, ...user }) : addUser({ ...user, id: shortid.generate() });
    e.target.reset();
    // validaciones
  };

  return (
    <Col md={6}>
      <h3>Alta y Modificaci&oacute;n de usuarios</h3>
      <Form onSubmit={createUser}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            placeholder="Nombre"
            name="name"
            defaultValue={current.name || ""}
            aria-label="Nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Edad"
            name="age"
            defaultValue={current.age || 0}
            aria-label="Edad"
          />
        </Form.Group>
        <Button type="submit" className="w-100">
          {(current.id) ? "Guardar" : "Agregar"}
        </Button>
      </Form>
    </Col>
  );
};

UserForm.propTypes = {
  current: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number
  }).isRequired,
  addUser: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired
};

export default UserForm;
