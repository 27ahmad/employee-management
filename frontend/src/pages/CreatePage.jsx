import { Container, Typography } from '@mui/material';
import EmployeeForm from '../components/EmployeeForm';
import { useLocation } from 'react-router-dom';
import { useEmployeeForm } from '../hooks/useEmployeeForm';

const CreatePage = () => {
  const { state } = useLocation();
  const { handleCreate, handleUpdate } = useEmployeeForm();
  const initialData = state?.employee;

  const handleSubmit = async (formData) => {
    if (initialData) {
      await handleUpdate(initialData._id, formData);
    } else {
      await handleCreate(formData);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {initialData ? 'Edit' : 'Create'} Employee
      </Typography>
      <EmployeeForm 
        initialData={initialData} 
        onSubmit={handleSubmit} 
      />
    </Container>
  );
};

export default CreatePage;