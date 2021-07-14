import {
  ADDTODO,
  DELETETODO,
  COMPLETETODO,
  EDITTODO,
  FILTERTODO,
} from "./types";

export const addLists = (newTodo) => {
  return {
    type: ADDTODO,
    payload: newTodo,
  };
};
export const deleteLists = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};

export const completeLists = (x) => {
  return {
    type: COMPLETETODO,
    payload: x,
  };
};

export const EditTodo = (updateTodo) => {
  return {
    type: EDITTODO,
    payload: updateTodo,
  };
};

export const filterTodo = (filter) => {
  return {
    type: FILTERTODO,
    payload: filter,
  };
};
