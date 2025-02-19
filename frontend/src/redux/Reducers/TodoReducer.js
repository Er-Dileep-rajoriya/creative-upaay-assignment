import { createSlice } from "@reduxjs/toolkit";

const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];

const initialState = {
  todos: storageTodos,
  filteredText: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
      // updating localStorage when a new todo is added
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTaskByName: (state, action) => {
      // we have todo in action.payload

      const filteredTodo = state.todos.filter(
        (todo) => todo.name.toLowerCase() != action.payload.name.toLowerCase()
      );

      state.todos = [...filteredTodo];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setFilteredTextInTodo: (state, action) => {
      state.filteredText = action.payload;
    },

    moveTask: (state, action) => {
      const { source, destination } = action.payload;
      if (!destination) return;

      // Get source and destination lists
      const sourceList = [...state[source.droppableId]];
      const destinationList = [...state[destination.droppableId]];

      // Remove item from source list
      const [movedItem] = sourceList.splice(source.index, 1);

      // Add item to destination list
      destinationList.splice(destination.index, 0, movedItem);

      // Update state with new lists
      state[source.droppableId] = sourceList;
      state[destination.droppableId] = destinationList;
    },
  },
});

export const { addTodo, deleteTaskByName, setFilteredTextInTodo, moveTask } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
