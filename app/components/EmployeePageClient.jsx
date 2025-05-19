"use client";
import { useEmployee } from "../context/EmployeeContext";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import { signOut } from "next-auth/react";

export default function EmployeesPageClient() {
  const { employees, deleteEmployee, setEditingEmployee, editingEmployee } = useEmployee();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employees</h2>
      <button onClick={() => signOut()} className="mb-4 bg-red-500 px-3 py-1 text-white">Logout</button>
      {editingEmployee ? <EditForm /> : <CreateForm />}
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} className="flex justify-between p-2 border">
            <span>{emp.name} – {emp.role}</span>
            <div className="space-x-2">
              <button onClick={() => setEditingEmployee(emp)} className="text-blue-500">Edit</button>
              <button onClick={() => deleteEmployee(emp._id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
