import * as employeeRepository from "../repositories/employee.repository.js";

export const createEmployee = async (employeeData) => {
  const existingEmployee = await employeeRepository.findEmployeeByEmail(employeeData.email);
  if (existingEmployee) {
    throw new Error("Email already exists");
  }
  return await employeeRepository.createEmployee(employeeData);
};

export const getAllEmployees = async () => {
  return await employeeRepository.findAllEmployees();
};

export const updateEmployee = async (id, employeeData) => {
  const employee = await employeeRepository.findEmployeeById(id);
  if (!employee) {
    throw new Error(`No employee with id: ${id}`);
  }
  return await employeeRepository.updateEmployeeById(id, employeeData);
};

export const deleteEmployee = async (id) => {
  const employee = await employeeRepository.findEmployeeById(id);
  if (!employee) {
    throw new Error("Employee not found");
  }
  return await employeeRepository.deleteEmployeeById(id);
};