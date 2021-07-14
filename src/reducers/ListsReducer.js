import {
  ADDTODO,
  DELETETODO,
  COMPLETETODO,
  EDITTODO,
  FILTERTODO,
} from "../actions/types";

const initialState = {
  todo: [],
  filter: "All"
};

const ListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return { ...state,todo: state.todo.concat(action.payload) };

    case DELETETODO:
      return { ...state,todo: state.todo.filter((el) => el.id !== action.payload) };

    case COMPLETETODO:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload ? { ...el, class: !el.class } : el
        ),
      };

    case EDITTODO:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };

    case FILTERTODO:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
export default ListsReducer;
