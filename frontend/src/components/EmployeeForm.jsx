/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box, TextField, Button, Stack, Alert } from "@mui/material";
import { INITIAL_FORM_STATE } from "../utils/constants";
import { employeeValidationSchema } from "../utils/validator";

const EmployeeForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      validateForm(initialData);
    }
  }, [initialData]);

  const validateForm = async (data) => {
    try {
      await employeeValidationSchema.validate(data, { abortEarly: false });
      setErrors({});
      setIsFormValid(true);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      setIsFormValid(false);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    await validateForm(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Stack spacing={2}>
        {!isFormValid && Object.keys(errors).length > 0 && (
          <Alert severity="error">
            Please fill all required fields correctly
          </Alert>
        )}
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          required
          fullWidth
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          required
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
          fullWidth
        />
        <TextField
          name="mobile"
          label="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={!!errors.mobile}
          helperText={errors.mobile}
          required
          fullWidth
        />
        <TextField
          name="position"
          label="Position"
          value={formData.position}
          onChange={handleChange}
          error={!!errors.position}
          helperText={errors.position}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isFormValid}
        >
          {initialData ? "Update" : "Create"} Employee
        </Button>
      </Stack>
    </Box>
  );
};

export default EmployeeForm;
