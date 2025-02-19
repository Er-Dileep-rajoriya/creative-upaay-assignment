import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Reducers/TodoReducer";

const AddTodoForm = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: "Low",
  });
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim()) {
      setError("Task name is required!");
      return;
    }

    if (!task.description.trim()) {
      setError("Task description is required!");
      return;
    }

    dispatch(addTodo(task));
    console.log(task);

    setTask({ name: "", description: "", priority: "Low" });
    setError("");
  };

  // function set the input values
  function handleChangeValues(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4"
    >
      {/* Input Field */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Task Name</label>
        <input
          type="text"
          placeholder="Enter task name..."
          value={task?.name}
          name="name"
          onChange={handleChangeValues}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Task Description</label>
        <input
          type="text"
          placeholder="Enter task Description..."
          name="description"
          value={task?.description}
          onChange={handleChangeValues}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      {/* Priority Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Priority</label>
        <select
          value={task?.priority}
          onChange={handleChangeValues}
          name="priority"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-purple-700 transition-all duration-300"
      >
        <FiPlus className="text-xl" />
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
