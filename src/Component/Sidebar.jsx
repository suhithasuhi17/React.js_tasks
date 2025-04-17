// Sidebar.js
import React from "react";
import { Home, FileText, Users, Box, Settings, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen shadow-lg">
      <div className="p-6 text-xl font-bold text-orange-600">
        SOFTYE INVOICE
      </div>
      <ul className="space-y-4 mt-6">
        <li className="flex items-center px-6 py-2 hover:bg-gray-200 cursor-pointer">
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-gray-200 cursor-pointer">
          <FileText className="w-5 h-5 mr-3" />
          Invoices
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-gray-200 cursor-pointer">
          <Users className="w-5 h-5 mr-3" />
          Customers
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-gray-200 cursor-pointer">
          <Box className="w-5 h-5 mr-3" />
          Inventory
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-gray-200 cursor-pointer">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-gray-200 cursor-pointer">
          <User className="w-5 h-5 mr-3" />
          User Management
        </li>
      </ul>
      <div className="absolute bottom-6 left-6 text-gray-500 cursor-pointer hover:text-gray-700">
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;
