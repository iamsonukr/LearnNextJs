"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export const useEmployee = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null); // NEW


  const fetchEmployees = async () => {
    try {
      const res = await axios.get("/api/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addEmployee = async (data) => {
    try {
      const res = await axios.post("/api/employees", data);
      setEmployees(prev => [
        ...prev, 
        res.data,
      ]);
    } catch (err) {
      console.error(err);
    }
  };

   const updateEmployee = async (id, updatedData) => {
    try {
      const res = await axios.put(`/api/employees/${id}`, updatedData);
      setEmployees((prev) =>
        prev.map((emp) => (emp._id === id ? res.data.data : emp))
      );
      setEditingEmployee(null);
    } catch (err) {
      console.error("Update Error", err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`/api/employees/${id}`);
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const contextValues = {
    employees,
    setEmployees,
    deleteEmployee,
    addEmployee,
    updateEmployee,
    editingEmployee,
    setEditingEmployee, 
  }

  return (
    <EmployeeContext.Provider
      value={contextValues}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
