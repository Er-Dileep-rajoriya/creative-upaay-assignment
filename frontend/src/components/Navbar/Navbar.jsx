import React from "react";
import group_7_png from "../../assets/Group 7.png";
import group_639_png from "../../assets/Group 639.png";
import calender_png from "../../assets/calendar-2.png";
import notification_png from "../../assets/notification.png";
import message_que_png from "../../assets/message-question.png";
import avatar_png from "../../assets/avatar.png";
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const { user } = useSelector((store) => store.userReducer);
  const navigate = useNavigate();

  async function handleLogoutUser() {
    try {
      const res = await axios.get("https://creative-upaay-assignment-t0d5.onrender.com/api/user/logout");

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  }

  return (
    <div className="h-[70px] w-full shadow-md flex items-center px-4 md:px-6 lg:px-8 bg-white">
      {/* Left Section */}
      <section className="w-65 min-w-[150px] flex items-center justify-between border-r border-gray-300 pr-4">
        <a href="#" className="flex items-center gap-2">
          <img src={group_7_png} alt="Project M." className="h-8" />
          <span className="font-bold text-gray-900 text-lg hidden sm:inline">
            Project M.
          </span>
        </a>
        <div className="flex justify-center items-center w-8 h-8">
          <img src={group_639_png} alt="Menu" className="h-6" />
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-grow flex items-center justify-between pl-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2 max-w-md bg-gray-200 rounded-lg overflow-hidden">
          <span className="p-2">
            <CiSearch className="text-gray-600 w-6 h-6" />
          </span>
          <input
            type="search"
            placeholder="Search for anything..."
            className="w-full p-2 bg-gray-200 outline-none text-gray-800"
          />
        </div>

        {/* Icons & User Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src={calender_png}
              alt="Calendar"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />
            <img
              src={message_que_png}
              alt="Messages"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />
            <img
              src={notification_png}
              alt="Notifications"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              {/* Profile Details */}
              <div className="flex items-center gap-2">
                <div className="text-right hidden md:block">
                  <p className="font-semibold text-gray-900">{user?.name}</p>
                  <span className="text-sm text-gray-500">Madhya Pradesh</span>
                </div>
                <img
                  src={avatar_png}
                  alt="User Avatar"
                  className="h-10 rounded-full"
                />
                <RiArrowDownSLine className="text-gray-600 w-6 h-6" />
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogoutUser}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            // If user is not logged in, show Sign Up & Login buttons
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
