import express from 'express';
import { createEmployee, getEmployee, updateEmployee, deleteEmployee } from '../controller/employee.controller.js';

const router = express.Router();

export default router;

router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);
router.get('/', getEmployee);
router.put("/:id", updateEmployee);