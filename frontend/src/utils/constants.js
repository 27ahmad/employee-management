// API endpoints
export const API_BASE_URL = 'http://localhost:5000/api';
export const EMPLOYEES_ENDPOINT = '/employees';

// Grid Column Definitions
export const EMPLOYEE_COLUMNS = [
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'mobile', headerName: 'Mobile', width: 130 },
  { field: 'position', headerName: 'Position', width: 150 }
];

// Form initial values
export const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  position: ''
};

// Grid configuration
export const GRID_CONFIG = {
  paginationPageSize: 10,
  rowHeight: 48,
  headerHeight: 56
};