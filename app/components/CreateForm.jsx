"use client";
import { useState } from "react";
import { useEmployee } from "../context/EmployeeContext";

export default function CreateForm() {
  const [form, setForm] = useState({ name: "", role: "" });
  const { addEmployee } = useEmployee();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(form);
    setForm({ name: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-x-2">
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
        className="border p-1"
      />
      <input
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        placeholder="Role"
        className="border p-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1">Add</button>
    </form>
  );
}
