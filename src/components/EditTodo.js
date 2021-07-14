import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [todoUpdate, setTodoUpdate] = useState();
  const dispatch = useDispatch();

  const handleEditTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "EDITTODO", payload: todoUpdate });
    handleClose();
  };

  return (
    <>
      <button type="button" class="btn btn-primary" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title> Edit Todo </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditTodo}>
            <input
              type="text"
              class="form-control"
              name="titre"
              defaultValue={todo.name}
              onChange={(e) =>
                setTodoUpdate({
                  name: e.target.value,
                  class: todo.class,
                  id: todo.id,
                })
              }
            />
            <br></br>

            <Button variant="primary" type="Submit" onClick={handleEditTodo}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
