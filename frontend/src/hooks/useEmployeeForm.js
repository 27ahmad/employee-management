import { useNavigate } from 'react-router-dom';
import { createEmployee, updateEmployee } from '../services/api';
import { showToast } from '../utils/toast';

export const useEmployeeForm = () => {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      const { data } = await createEmployee(formData);
      showToast.success(`Employee ${data.firstName} ${data.lastName} created successfully`);
      navigate('/');
      return true;
    } catch (error) {
      showToast.error(error.response?.data?.message || 'Failed to create employee');
      return false;
    }
  };

  const handleUpdate = async (id, formData) => {
    try {
      const { data } = await updateEmployee(id, formData);
      showToast.success(`Employee ${data.firstName} ${data.lastName} updated successfully`);
      navigate('/');
      return true;
    } catch (error) {
      showToast.error(error.response?.data?.message || 'Failed to update employee');
      return false;
    }
  };

  return { handleCreate, handleUpdate };
};