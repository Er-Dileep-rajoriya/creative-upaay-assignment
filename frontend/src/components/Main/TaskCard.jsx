import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import messageIcons_png from "../../assets/message.png";
import fileIcon_png from "../../assets/file-icon.png";
import { useDispatch } from "react-redux";
import {
  deleteProgressTaskByName,
  sendToProgress,
} from "../../redux/Reducers/progressReducer";
import { addTodo, deleteTaskByName } from "../../redux/Reducers/TodoReducer";
import {
  deleteFromDoneTask,
  setDoneTask,
} from "../../redux/Reducers/doneTaskReducer";

const avatarImages = [
  {
    src: "https://s3-alpha-sig.figma.com/img/c063/e946/484b5b758f13eb04105a298ceb968092?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pGz6kcJnprnm0WCvrxQKseXCJtqH19C7VdV0bXf6iJamyj1uGX4bZblaZiDNd1~CrUI9QPfP8eyvqyZ7Z7utVkR3ynkonLL3l5ATobgVdWOcyjjB0uVL4bly~7UE3-TKBqQJziABQFm8tXB71WuCw6b-g1~Wcv6U~SjhY9mjekPoGpzB8K9OV8W7NaOdlLv0H3D0YErMDX91f2T4TunMVLjDXw-ZTZuO5q-TDO~wI-giOE6U3iGbDw~16QlrBM7KvNdarLNKF4qDqiflL1f-MXv62kI8i1azrpOoYVpfJqyTn9Vsg5AfRxyKEo4RfZ1tt5pzpy2QXzg~WTVbbQXO1w__",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/0430/4e97/1f429cc0f3282d0310257ed61402bc86?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HQGZvNx0VrMezGLAnhLChMyClRypZH142m2IHwPx525BMomhWx6rbAxODmu~wMVJjnHEEIjWI0EFG9NXE4T443s3JVqqgnZuwiIS705OGuEeRlBrewtLzOj52j9YB6bW5AkF-R7MRajep-ijBq8z8GYKUpJ7mKV938KI3~v2uiFf7C9OnJadl8LB1DG4iJF2Z0w3X01-7aivYeOGxECsmb5a8Sdq2~F9Eo2~47Re7dNe6aLTKfAK8xKh9WaqXPCDpAlHTF4fBLCdBBWoW3ykta7HPCUqjraUJJ1mR4FtT5hsKTo62hzuNoZ8T3NJDJdnxTdjmoa8CGhdZP2DtDxSYg__",
  },
];

function TaskCard({ todo, onAction }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleSendToOnProgress(task) {
    if (onAction === "Done") {
      dispatch(sendToProgress(task));
      dispatch(deleteFromDoneTask(task));
    } else {
      dispatch(sendToProgress(task));
      dispatch(deleteTaskByName(task));
    }
  }

  function handleDeleteTask(task) {
    if (window.confirm("Are you sure you want to delete this?")) {
      if (onAction === "Todo") {
        dispatch(deleteTaskByName(task));
      } else {
        dispatch(deleteFromDoneTask(task));
      }
    }
  }

  function sendToDoneTask(task) {
    dispatch(setDoneTask(task));
    dispatch(deleteProgressTaskByName(task));
  }

  function sendToTodo(task) {
    dispatch(addTodo(task));
    dispatch(deleteProgressTaskByName(task));
  }

  return (
    <div className="z-0 w-full flex flex-col gap-3 bg-white rounded-xl p-4 shadow-lg cursor-pointer relative">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <span
          className={`${
            todo.priority === "High"
              ? "text-red-800 bg-red-300"
              : "text-orange-600 bg-orange-100"
          } px-3 py-1 text-xs font-semibold rounded-md`}
        >
          {todo.priority}
        </span>

        {/* More Button (Click to Toggle Dropdown) */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoIosMore className="text-gray-600 text-xl cursor-pointer" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-4 w-36 text-orange-500 bg-white border border-gray-200 shadow-lg rounded-lg p-2 z-10">
          {onAction !== "Progress" && (
            <button
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-sm"
              onClick={() => handleSendToOnProgress(todo)}
            >
              Mark as Progress
            </button>
          )}
          {onAction === "Progress" && (
            <button
              className="w-full text-left px-3 py-2 text-purple-600 hover:bg-gray-100 rounded-md text-sm"
              onClick={() => sendToTodo(todo)}
            >
              Mark as Todo
            </button>
          )}
          {onAction !== "Done" && onAction !== "Todo" && (
            <button
              onClick={() => sendToDoneTask(todo)}
              className="w-full text-left px-3 py-2 text-green-600 hover:bg-gray-100 rounded-md text-sm"
            >
              Mark as Done
            </button>
          )}
          {(onAction === "Todo" || onAction === "Done") && (
            <button
              className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-100 rounded-md text-sm"
              onClick={() => handleDeleteTask(todo)}
            >
              Delete Task
            </button>
          )}
        </div>
      )}

      {/* Title */}
      <div className="text-lg font-bold text-gray-800">{todo.name}</div>

      {/* Description */}
      <p className="text-gray-500 text-sm">{todo.description}</p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-2">
        {/* Avatars */}
        <div className="flex items-center -space-x-2">
          {avatarImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt="user"
              className="h-7 w-7 rounded-full border-2 border-white"
            />
          ))}
        </div>

        {/* Comments */}
        <div className="flex items-center gap-1 text-gray-600 text-xs">
          <img src={messageIcons_png} alt="comments" className="h-4 w-4" />
          <span>12 Comments</span>
        </div>

        {/* Files */}
        <div className="flex items-center gap-1 text-gray-600 text-xs">
          <img src={fileIcon_png} alt="files" className="h-4 w-4" />
          <span>0 Files</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
