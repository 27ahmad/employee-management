import Employee from "../models/employee.model.js";

export const createEmployee = async (employeeData) => {
  const newEmployee = new Employee(employeeData);
  return await newEmployee.save();
};

export const findEmployeeByEmail = async (email) => {
  return await Employee.findOne({ email });
};

export const findAllEmployees = async () => {
  return await Employee.find();
};

export const findEmployeeById = async (id) => {
  return await Employee.findById(id);
};

export const updateEmployeeById = async (id, employeeData) => {
  return await Employee.findByIdAndUpdate(id, employeeData, { new: true });
};

export const deleteEmployeeById = async (id) => {
  return await Employee.findByIdAndDelete(id);
};