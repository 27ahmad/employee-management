import axios from 'axios';
import { API_BASE_URL, EMPLOYEES_ENDPOINT } from '../utils/constants';

const API = axios.create({ baseURL: API_BASE_URL });

export const getEmployees = () => API.get(EMPLOYEES_ENDPOINT);
export const createEmployee = (employee) => API.post(EMPLOYEES_ENDPOINT, employee);
export const updateEmployee = (id, employee) => API.put(`${EMPLOYEES_ENDPOINT}/${id}`, employee);
export const deleteEmployee = (id) => API.delete(`${EMPLOYEES_ENDPOINT}/${id}`);