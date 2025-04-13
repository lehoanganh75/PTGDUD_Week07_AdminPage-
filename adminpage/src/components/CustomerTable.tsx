import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomerTable = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5); // Số lượng hàng trên mỗi trang

  // Handle page change
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <div className="flex p-3">
          <img src="./image/Folder.png" className="mr-2" alt="Report Icon" />
          <h2 className="font-bold text-lg">Detailed report</h2>
        </div>
        <div className="flex">
          <img
            src="./image/Move up.png"
            alt=""
            className="h-[25px] absolute mt-4 ml-1"
          />
          <button className="p-2 border rounded-lg border-pink-400 text-pink-400 px-8 hover:bg-pink-50">
            Add User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CUSTOMER NAME
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                COMPANY
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ORDER VALUE
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ORDER DATE
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Đoạn này chỉ tạo ra các ô trống */}
            {[...Array(rowsPerPage)].map((_, index) => (
              <tr key={index}>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  <input type="checkbox" />
                </td>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  -
                </td>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  -
                </td>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  -
                </td>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  -
                </td>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  -
                </td>
                <td className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  <button className="px-3 py-1 hover:cursor-pointer">
                    <img src="./image/create.png" alt="Edit" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
