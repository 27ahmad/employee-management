export const theme = {
    palette: {
      primary: {
        main: '#4361ee',
        light: '#4895ef',
        dark: '#3f37c9',
      },
      secondary: {
        main: '#f72585',
        light: '#ff4d6d',
        dark: '#b5179e',
      },
      error: {
        main: '#e74c3c',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h4: {
        fontWeight: 600,
        color: '#2c3e50',
      },
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#3498db',
              },
            },
          },
        },
      },
    },
  };