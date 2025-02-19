import { FiPlus } from "react-icons/fi";
import AddTodoForm from "./Add-To-Do";
import TaskCard from "./TaskCard";
import { useState } from "react";

function TodoTask({ title, color, todos }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  // function to toggle the form
  function handleOpenTodoForm() {
    setIsOpenForm(true);
  }

  function handleCloseForm() {
    setIsOpenForm(false);
  }

  return (
    <>
      <div className="w-full sm:w-[48%] lg:w-[32%] bg-gray-100 shadow-lg rounded-lg flex flex-col items-center p-2 relative">
        <div className="w-[96%] mt-2 flex flex-col items-center gap-6">
          <div className="w-full h-8 flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className={`w-2 h-2 ${color} rounded-full`}></div>
              <span className="text-lg font-bold">{title}</span>
              <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center">
                {todos.length}
              </div>
            </div>

            <div
              onClick={handleOpenTodoForm}
              className="text-purple-600 bg-purple-200 p-1 rounded-md cursor-pointer hover:bg-purple-300 transition"
            >
              <FiPlus className="text-xl" />
            </div>
          </div>
          <div className="w-full h-1 bg-purple-600"></div>
        </div>
        <div className="w-full flex flex-col gap-3 mt-2 px-2">
          {todos?.map((todo, index) => (
            // drag this card
            <TaskCard
              key={index}
              todo={todo}
              onAction={"Todo"}
              className="w-full"
            />
          ))}
        </div>
      </div>

      {/* Modal for Add To-Do Form */}
      {isOpenForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center backdrop-blur-sm z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] sm:w-[50%] lg:w-[40%]">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Add New Task</h2>
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-800 text-lg"
              >
                ✖
              </button>
            </div>
            <AddTodoForm />
          </div>
        </div>
      )}
    </>
  );
}

export default TodoTask;
