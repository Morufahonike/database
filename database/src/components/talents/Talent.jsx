

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useGetAllticketQuery, useDeleteTicketMutation, useUpdateTicketMutation } from "../../feature/eventslice/eventApiSlice";


import '../talents/Talent.css'

import React from 'react'

export default function Talent  ()  {

    const{ data: ticket = [], refetch } = useGetAllticketQuery();
  const[deleteTicket] = useDeleteTicketMutation();
  const[updateTicket] = useUpdateTicketMutation();
const [open, setOpen] = React.useState(false);
const [currentTicket, setCurrentTicket] = React.useState({
    id: "",
    name: "",
    email: "",
    ticket_type: "",
    ticket_number: "",
});

const handleEdit = (ticket) => {
    setCurrentTicket(ticket);
    setOpen(true);
};


const handleDelete = async (id) => {
    try {
      await deleteTicket(id);
      refetch();
    } catch (error) {
      console.error("Failed to delete ticket", error);
    }
};

const handleUpdate = async () => {
    try {
      await updateTicket(currentTicket);
      refetch();
      setOpen(false);
    } catch (error) {
      console.error("Failed to update ticket", error);
    }
};

const handleClose = () => {
    setOpen(false);
    setCurrentTicket({
      id: "",
      name: "",
      email: "",
      ticket_type: "",
      ticket_number: "",
    });
};


const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 120,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 120,
      editable: true,
    },
    {
      field: "ticket_type",
      headerName: "Ticket Type",
      width: 110,
      editable: true,
    },
    {
      field: "ticket_number",
      headerName: "Ticket Number",
      width: 160,
      editable: true,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon color="error" />
        </IconButton>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleEdit(params.row)}
          color="primary"
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
      ),
    },
];

const rows = ticket.map((ticket) => ({
    id: ticket.id,
    name: ticket.name,
    email: ticket.email,
    ticket_type: ticket.ticket_type,
    ticket_number: ticket.ticket_number,
}));


  return (
    <div>
        <div className="box">
    <Box sx={{ height: 400, width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

      {/* Edit Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <h3>Edit Ticket</h3>
          <TextField
            fullWidth
            label="Name"
            value={currentTicket.name}
            onChange={(e) =>
              setCurrentTicket({ ...currentTicket, name: e.target.value })
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            value={currentTicket.email}
            onChange={(e) =>
              setCurrentTicket({ ...currentTicket, email: e.target.value })
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Ticket Type"
            value={currentTicket.ticket_type}
            onChange={(e) =>
              setCurrentTicket({ ...currentTicket, ticket_type: e.target.value })
            }
            margin="normal"
          />
          <TextField
            fullWidth
            label="Ticket Number"
            value={currentTicket.ticket_number}
            onChange={(e) =>
              setCurrentTicket({ ...currentTicket, ticket_number: e.target.value })
            }
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ mt: 2, ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
    </div>
    </div>
  )
}
