import React from "react";
import { TbCategory2, TbMessageDots } from "react-icons/tb";
import { GrTask } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdLightbulb } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="h-full w-64 md:w-52 lg:w-56 border-r border-gray-300 shadow-md p-4 bg-white flex flex-col">
      {/* Sidebar Top */}
      <section className="flex flex-col space-y-4">
        {[
          { icon: <TbCategory2 />, label: "Home" },
          { icon: <TbMessageDots />, label: "Messages" },
          { icon: <GrTask />, label: "Tasks" },
          { icon: <LuUsers />, label: "Members" },
          { icon: <CiSettings />, label: "Settings" },
        ].map((item, index) => (
          <p
            key={index}
            className="flex items-center space-x-3 text-gray-600 text-lg hover:text-green-600 transition-transform transform hover:scale-105 cursor-pointer"
          >
            {item.icon} <span>{item.label}</span>
          </p>
        ))}
      </section>

      <hr className="my-4" />

      {/* Projects Section */}
      <section className="flex flex-col space-y-3">
        <h3 className="flex justify-between items-center text-lg font-semibold">
          <span>My Projects</span>{" "}
          <BiMessageSquareAdd className="cursor-pointer hover:text-green-600" />
        </h3>
        <div className="space-y-3">
          {[
            { color: "bg-green-500", label: "Mobile Apps" },
            { color: "bg-orange-500", label: "Website Redesign" },
            { color: "bg-purple-300", label: "Design System" },
            { color: "bg-blue-400", label: "Wireframes" },
          ].map((project, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            >
              <div className={`h-3 w-3 rounded-full ${project.color}`}></div>
              <span className="text-gray-600">{project.label}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-4" />

      {/* Thoughts Time Section */}
      <section className="flex flex-col items-center bg-gray-100 p-4 rounded-lg text-center">
        <div className="bg-gray-200 p-3 rounded-full text-yellow-500 text-2xl">
          <MdLightbulb />
        </div>
        <h4 className="text-lg font-semibold">Thoughts Time</h4>
        <small className="text-gray-500">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </small>
        <button className="mt-3 px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-200 transition">
          Write a message
        </button>
      </section>
    </aside>
  );
}

export default Sidebar;
