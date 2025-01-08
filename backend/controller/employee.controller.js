import * as employeeService from "../services/employee.service.js";

export const createEmployee = async (req, res) => {
  const employee = req.body;

  if (!employee.firstName || !employee.lastName || !employee.email || !employee.mobile || !employee.position) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newEmployee = await employeeService.createEmployee(employee);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No employee with id: ${id}` });

  try {
    const updatedEmployee = await employeeService.updateEmployee(id, employee);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Employee with id: ${id}`);

  try {
    await employeeService.deleteEmployee(id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};