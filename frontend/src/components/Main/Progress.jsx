import TaskCard from "./TaskCard";

function Progress({ title, color, progressTask }) {
  return (
    <>
      <div className="w-full sm:w-[48%] lg:w-[32%] bg-gray-100 shadow-lg rounded-lg flex flex-col items-center p-2 relative">
        <div className="w-[96%] mt-2 flex flex-col items-center gap-6">
          <div className="w-full h-8 flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className={`w-2 h-2 ${color} rounded-full`}></div>
              <span className="text-lg font-bold">{title}</span>
              <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center">
                {progressTask?.length}
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-purple-600"></div>
        </div>
        <div className="w-full flex flex-col gap-3 mt-2 px-2">
          {progressTask?.map((todo, index) => (
            <TaskCard
              key={index}
              todo={todo}
              className="w-full"
              onAction="Progress"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Progress;
