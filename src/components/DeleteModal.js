import { Button, Modal } from "react-bootstrap"

const DeleteModal = ({ user, onConfirm, onCancel }) => {
    return (
        <Modal show={user}>
            <Modal.Header>
                <Modal.Title>Eliminar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Realmente desea borrar el usuario {user?.name}?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>No</Button>
                <Button variant="primary" onClick={onConfirm}>Si</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default DeleteModal;