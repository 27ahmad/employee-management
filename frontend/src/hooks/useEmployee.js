import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/api';
import { showToast } from '../utils/toast';

export const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const { data } = await getEmployees();
      setEmployees(data);
    } catch (error) {
      showToast.error('Failed to fetch employees');
      console.error('Error fetching employees:', error);
    }
  };

  const handleEdit = (employee) => {
    navigate('/create', { state: { employee } });
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      await fetchEmployees();
      showToast.success('Employee deleted successfully');
    } catch (error) {
      showToast.error('Failed to delete employee');
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employees,
    handleEdit,
    handleDelete
  };
};