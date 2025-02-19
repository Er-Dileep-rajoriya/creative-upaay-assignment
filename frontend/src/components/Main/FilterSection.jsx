import { CiFilter, CiCalendarDate } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiLineVerticalLight } from "react-icons/pi";
import { IoIosPause } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilteredTextInTodo } from "../../redux/Reducers/TodoReducer";
import { setFilteredTextInDone } from "../../redux/Reducers/doneTaskReducer";
import { setFilteredTextInProgress } from "../../redux/Reducers/progressReducer";

function FilterSection() {
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredTextInTodo(filterText));
    dispatch(setFilteredTextInDone(filterText));
    dispatch(setFilteredTextInProgress(filterText));
  }, [filterText]);

  return (
    <div className="mt-4 flex w-full h-14 px-4 rounded-lg">
      {/* Left Section */}
      <div className="flex w-1/2 items-center gap-4">
        {/* Filter Dropdown */}
        <div className="flex h-10 px-3 items-center gap-2 border border-gray-300 rounded-md bg-white shadow-sm hover:shadow-md transition">
          <CiFilter className="text-xl text-gray-600" />
          <select
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="bg-transparent border-none outline-none text-gray-700 text-sm"
          >
            <option>Filter</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Date Selector */}
        <div className="flex h-10 px-3 items-center gap-2 border border-gray-300 rounded-md bg-white shadow-sm hover:shadow-md transition">
          <CiCalendarDate className="text-xl text-gray-600" />
          <select className="bg-transparent border-none outline-none text-gray-700 text-sm">
            <option>Today</option>
            <option>value 1</option>
            <option>Value 2</option>
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-1/2 justify-end items-center gap-3">
        {/* Share Button */}
        <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white shadow-sm hover:bg-gray-200 transition">
          <GoPeople className="text-lg text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">Share</span>
        </div>

        {/* Divider */}
        <div className="w-5">
          <PiLineVerticalLight className="text-gray-400 text-lg" />
        </div>

        {/* Pause Button */}
        <div className="w-10 h-10 flex justify-center items-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          <IoIosPause className="text-xl transform rotate-90" />
        </div>

        {/* Menu Dots */}
        <div className="w-10 h-10 flex justify-center items-center text-gray-600 hover:bg-gray-200 rounded-full transition">
          <TbGridDots className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
