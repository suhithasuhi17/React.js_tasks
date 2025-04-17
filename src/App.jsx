// App.js
import React from "react";
import Sidebar from "./Sidebar";
import PermissionTable from "./PermissionTable";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-white">
        <PermissionTable />
      </div>
    </div>
  );
};

export default App;
