// PermissionTable.js
import React from "react";

const PermissionTable = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Permissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b">User Name</th>
              <th className="px-6 py-3 border-b">Dashboard</th>
              <th className="px-6 py-3 border-b">Invoices</th>
              <th className="px-6 py-3 border-b">Inventory</th>
              <th className="px-6 py-3 border-b">Customers</th>
              <th className="px-6 py-3 border-b">Settings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b">John</td>
              <td className="px-6 py-4 border-b text-center">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4 border-b text-center">
                <input type="checkbox" defaultChecked />
              </td>
              <td className="px-6 py-4 border-b text-center">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4 border-b text-center">
                <input type="checkbox" defaultChecked />
              </td>
              <td className="px-6 py-4 border-b text-center">
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionTable;
