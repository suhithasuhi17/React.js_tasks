import React, { useState } from "react";
import sidebar2 from "../assets/sidebar2.svg";
import teacher2 from "../assets/teacher2.svg";
import student2 from "../assets/student2.svg";
import attend from "../assets/attend.svg";
import setting from "../assets/setting.svg";
import logout from "../assets/logout.svg";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-72 bg-blue-800 ">
      <div
        className="flex items-center px-6 py-4 border-b border-blue-700 cursor-pointer hover:bg-blue-700 transition-all duration-300"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={sidebar2} alt="dashboard" className="w-8 h-8 mr-4" /> 
      </div>

      
      {showMenu && (
        <div className="h-screen w-72 bg-gradient-to-b from-blue-800 to-blue-900 text-white shadow-lg">
        <ul className="mt-6 space-y-6">
          <li className="flex items-center px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src={teacher2} alt="teacher" className="w-8 h-8 mr-4" />
            <span className="text-lg  font-serif font-medium ">Teacher Management</span>
          </li>
          <li className="flex items-center px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src={student2} alt="student" className="w-8 h-8 mr-4" />
            <span className="text-lg font-serif font-medium">Student Management</span>
          </li>
          <li className="flex items-center px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src={attend} alt="attendance" className="w-8 h-8 mr-4" />
            <span className="text-lg  font-serif font-medium">Attendance Management</span>
          </li>
          <li className="flex items-center px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src={setting} alt="settings" className="w-8 h-8 mr-4" />
            <span className="text-lg  font-serif font-medium">Settings</span>
          </li>
          <li className="flex items-center px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src={logout} alt="logout" className="w-8 h-8 mr-4" />
            <span className="text-lg  font-serif font-medium">Logout</span>
          </li>
      </ul>
      </div>
      )}
    </div>
  );
};

export default Sidebar;
