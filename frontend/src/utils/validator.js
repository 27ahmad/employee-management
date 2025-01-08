import * as Yup from 'yup';

export const employeeValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
    
  lastName: Yup.string()
    .required('Last name is required')
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
    
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .trim(),
    
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .trim(),
    
  position: Yup.string()
    .required('Position is required')
    .trim()
    .min(2, 'Position must be at least 2 characters')
    .max(50, 'Position must be less than 50 characters')
});