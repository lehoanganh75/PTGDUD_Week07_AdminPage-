import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import customerData from "../data/data.json";

const CustomerTable = ({ page, setPage, rowsPerPage }) => {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [customers, setCustomers] = useState(customerData.customers);
  const [editFormData, setEditFormData] = useState({
    customer: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    customer: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });
  const [showEditModal, setShowEditModal] = useState(false); // State for edit modal

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setEditingId(null);
  };

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomers((prev) =>
      prev.includes(customerId)
        ? prev.filter((id) => id !== customerId)
        : [...prev, customerId]
    );
  };

  const handleEdit = (customer, index) => {
    setEditingId(index);
    setEditFormData({
      customer: customer.customer,
      company: customer.company,
      orderValue: customer.orderValue,
      orderDate: customer.orderDate,
      status: customer.status,
    });
    setShowEditModal(true); // Open modal
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleNewCustomerChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedCustomers = [...customers];
    updatedCustomers[editingId] = {
      ...updatedCustomers[editingId],
      customer: editFormData.customer,
      company: editFormData.company,
      orderValue: editFormData.orderValue,
      orderDate: editFormData.orderDate,
      status: editFormData.status,
    };
    setCustomers(updatedCustomers);
    setShowEditModal(false); // Close modal after saving
    setEditingId(null);
  };

  const handleAddCustomer = () => {
    const updatedCustomers = [
      ...customers,
      {
        ...newCustomer,
        id: customers.length + 1,
      },
    ];
    setCustomers(updatedCustomers);
    setNewCustomer({
      customer: "",
      company: "",
      orderValue: "",
      orderDate: "",
      status: "New",
    });
    setShowAddForm(false);
  };

  const paginatedCustomers = customers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

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
          <button
            onClick={() => setShowAddForm(true)}
            className="p-2 border rounded-lg border-pink-400 text-pink-400 px-8 hover:bg-pink-50"
          >
            Add User
          </button>
        </div>
      </div>

      {showAddForm && (
  <div className="fixed inset-0 bg-gray-70 bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <h3 className="text-xl font-bold mb-4">Add New Customer</h3>
      <div className="space-y-4">
        {Object.entries(newCustomer).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key === "orderDate" ? "date" : "text"}
              name={key}
              value={value}
              onChange={handleNewCustomerChange}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={() => setShowAddForm(false)}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleAddCustomer}
          className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
        >
          Add Customer
        </button>
      </div>
    </div>
  </div>
)}


      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-70 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit Customer</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customer"
                  value={editFormData.customer}
                  onChange={handleEditFormChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={editFormData.company}
                  onChange={handleEditFormChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Order Value
                </label>
                <input
                  type="text"
                  name="orderValue"
                  value={editFormData.orderValue}
                  onChange={handleEditFormChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Order Date
                </label>
                <input
                  type="date"
                  name="orderDate"
                  value={editFormData.orderDate}
                  onChange={handleEditFormChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={editFormData.status}
                  onChange={handleEditFormChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Select
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Customer
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Company
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Order Value
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Order Date
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Status
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedCustomers.map((customer, index) => {
              const absoluteIndex = (page - 1) * rowsPerPage + index;
              return (
                <tr
                  key={absoluteIndex}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={selectedCustomers.includes(absoluteIndex)}
                      onChange={() => handleSelectCustomer(absoluteIndex)}
                    />
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    {customer.customer}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {customer.company}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 font-medium">
                    {customer.orderValue}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {customer.orderDate}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.status === "New"
                          ? "bg-blue-100 text-blue-800"
                          : customer.status === "In-progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleEdit(customer, absoluteIndex)}
                      className="px-3 py-1 hover:cursor-pointer"
                    >
                      <img src="./image/create.png" alt="Edit" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Stack spacing={2} className="mt-8 ml-230 justify-end">
        <Pagination
          count={Math.ceil(customers.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default CustomerTable;
