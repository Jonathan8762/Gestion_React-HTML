import React, { useState, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ Nombre: "" });

  const handleSaveChanges = () => {
    console.log("Guardando:", newProduct);
    setShowModal(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div className="main-contenedor2">
      <Button className="btn-custom" onClick={() => setShowModal(true)}>
        Nuevo Producto
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="add-product-nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="Nombre"               
                onChange={handleInputChange}
              />
            </Form.Group>
            {/*jona aqui agrgue mas grupos dependiendo de su necesidad y los mapea*/}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
