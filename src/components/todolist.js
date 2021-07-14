import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";
import { filterTodo } from "../actions/ListsActions";

const Todolist = ({ todo }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADDTODO",
      payload: { name: newTodo, complete: false, class:false,id: uuidv4() },
    });
    setNewTodo("");
  };

  return (
    <div>
      <div className="todo">
        <h1 className="txt">To-Do App!</h1>
        <br />

        <div className="first">
          <input
            type="text"
            className="form-control"
            name="item"
            placeholder="Enter new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button className="btn btn-info ms-2" onClick={handleAddTodo}>
            {" "}
            Add{" "}
          </button>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => dispatch(filterTodo("All"))}
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => dispatch(filterTodo(true))}
            >
              Completed
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => dispatch(filterTodo(false))}
            >
              Undo
            </button>
          </div>
        </div>

        <div className="icon">
          {todo.map((el) => (
            <div className="item">
              <label className={el.class ? "Complete" : undefined}>
                {el.name}
              </label>
              <button
                class="btn btn-danger"
                onClick={() => dispatch({ type: "DELETETODO", payload: el.id })}
              >
                delete
              </button>

              <button
                class="btn btn-success ms-1"
                onClick={() =>
                  dispatch({ type: "COMPLETETODO", payload: el.id })
                }
              >
                {el.class ? "Undo" : "Complete"}
              </button>

              <EditTodo todo={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
