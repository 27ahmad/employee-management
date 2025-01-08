/* eslint-disable react/prop-types */
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
} from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";
import { EMPLOYEE_COLUMNS, GRID_CONFIG } from "../utils/constants";
import { useState } from "react";

const EmployeeGrid = ({ employees, onEdit, onDelete }) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (selectedEmployee) {
      onDelete(selectedEmployee._id);
    }
    setDeleteDialog(false);
    setSelectedEmployee(null);
  };

  const handleCloseDialog = () => {
    setDeleteDialog(false);
    setSelectedEmployee(null);
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
    cellStyle: {
      display: "flex",
      alignItems: "center", // Vertical alignment
      paddingLeft: "16px",
      fontSize: "14px",
      height: "100%",
    },
  };

  const columns = [
    ...EMPLOYEE_COLUMNS.map((col) => ({
      ...col,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "16px",
        fontSize: "14px",
        height: "100%",
      },
    })),
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      filter: false,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      },
      cellRenderer: (params) => (
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton
            onClick={() => onEdit(params.data)}
            color="primary"
            size="small"
            sx={{
              "&:hover": {
                backgroundColor: "primary.light",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <FaEdit size={16} />
          </IconButton>
          <IconButton
            onClick={() => handleDeleteClick(params.data)}
            color="error"
            size="small"
            sx={{
              "&:hover": {
                backgroundColor: "error.light",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <FaTrash size={16} />
          </IconButton>
        </div>
      ),
    },
  ];

  const gridStyle = {
    height: "600px",
    width: "100%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        "& .ag-header": {
          backgroundColor: "#f8f9fa",
        },
        "& .ag-header-cell": {
          fontSize: "14px",
          fontWeight: 600,
          color: "#2c3e50",
        },
        "& .ag-row": {
          borderBottom: "1px solid #eee",
          "&:hover": {
            backgroundColor: "#f8f9fa",
          },
        },
      }}
    >
      <div className="ag-theme-material" style={gridStyle}>
        <AgGridReact
          rowData={employees}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          pagination={true}
          {...GRID_CONFIG}
          animateRows={true}
          rowSelection="single"
          suppressCellFocus={true}
          suppressRowClickSelection={true}
          overlayNoRowsTemplate="No employees found"
          getRowStyle={() => ({
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          })}
        />
      </div>

      <Dialog
        open={deleteDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            width: "400px",
            borderRadius: 2,
            p: 1,
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "1.2rem", color: "error.main" }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent sx={{ py: 2 }}>
          Are you sure you want to delete {selectedEmployee?.firstName}{" "}
          {selectedEmployee?.lastName}?
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseDialog} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default EmployeeGrid;
