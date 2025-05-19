"use client";
import { useEmployee } from "../context/EmployeeContext";
import { useState, useEffect } from "react";

export default function EditForm() {
  const { editingEmployee, updateEmployee } = useEmployee();
  const [formData, setFormData] = useState({ name: "", role: "" });

  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        name: editingEmployee.name,
        role: editingEmployee.role,
      });
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(editingEmployee._id, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <h3 className="text-lg font-semibold">Update Employee</h3>
      <input
        className="border p-1 w-full"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="border p-1 w-full"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <button type="submit" className="bg-yellow-500 text-white px-3 py-1">
        Update
      </button>
    </form>
  );
}
