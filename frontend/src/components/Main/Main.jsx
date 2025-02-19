import Header from "./Header";
import FilterSection from "./FilterSection";
import { useSelector } from "react-redux";
import Progress from "./Progress";
import DoneTask from "./DoneTask";
import TodoTask from "./TodoTask";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const { todos, filteredText } = useSelector((store) => store.todoReducer);
  const { progressTask } = useSelector((store) => store.progressReducer);
  const { doneTasks } = useSelector((store) => store.doneTaskReducer);
  const { user } = useSelector((store) => store.userReducer);

  const [todosLocal, setTodosLocal] = useState(todos);
  const [progressLocal, setProgressLocal] = useState(progressTask);
  const [doneTasksLocal, setDoneTasksLocal] = useState(doneTasks);
  const navigate = useNavigate();

  // if user not authenticated then send back them to the login page
  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, []);

  useEffect(() => {
    console.log("filtered Text : ", filteredText);
    if (filteredText === "" || filteredText === "Filter") {
      setTodosLocal(todos);
      setProgressLocal(progressTask);
      setDoneTasksLocal(doneTasks);
      return;
    }

    const filteredTodos = todos.filter(
      (todo) => todo.priority.toLowerCase() === filteredText.toLowerCase()
    );

    const filteredProgress = progressTask.filter(
      (todo) => todo.priority.toLowerCase() === filteredText.toLowerCase()
    );

    const filteredDone = doneTasks.filter(
      (todo) => todo.priority.toLowerCase() === filteredText.toLowerCase()
    );

    setTodosLocal(filteredTodos);
    setProgressLocal(filteredProgress);
    setDoneTasksLocal(filteredDone);
  }, [filteredText, todos, progressTask, doneTasks]); // ✅ Fix: Removed todosLocal, progressLocal, doneTasksLocal

  return (
    <main className="w-full flex flex-col h-full p-5 gap-4 overflow-auto">
      <Header />
      <FilterSection />
      <section className="flex justify-between mt-5">
        <TodoTask title="To Do" color="bg-purple-600" todos={todosLocal} />
        <Progress
          title="On Progress"
          color="bg-orange-500"
          progressTask={progressLocal}
        />
        <DoneTask
          title="Done"
          count={2}
          doneTasks={doneTasksLocal}
          color="bg-blue-500"
        />
      </section>
    </main>
  );
}

export default Main;
