import { Container } from '@mui/material';
import EmployeeGrid from '../components/EmployeeGrid';
import { useEmployees } from '../hooks/useEmployee';

const HomePage = () => {
  const { employees, handleEdit, handleDelete } = useEmployees();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <EmployeeGrid 
        employees={employees} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </Container>
  );
};

export default HomePage;