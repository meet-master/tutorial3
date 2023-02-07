import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "orderItem", headerName: "Order Item", width: 130 },
  {
    field: "qunatity",
    headerName: "Quantity",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, orderItem: "Pavbhaji", qunatity: 2 },
  { id: 2, orderItem: "Extra Pav", qunatity: 5 },
  { id: 3, orderItem: "Masala Dhosa", qunatity: 2 },
  { id: 4, orderItem: "Veg Pizza", qunatity: 2 },
];

const SimpleDialog = (props) => {
  const { open, order, onClose } = props;
  const closeDialog = () => {
    onClose(true);
  };

  return (
    <Dialog onClose={closeDialog} open={open}>
      <DialogTitle>View Order #{order?.ord_num}</DialogTitle>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            value={order?.c_name}
            label="Customer Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            disabled
          />
          <TextField
            value={order?.phn_num}
            label="Customer's Phone Number"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            disabled
          />
          <TextField
            value={order?.total_items}
            label="Total Order Items"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            disabled
          />
          <TextField
            value={order?.total_amout}
            label="Total Order Amount"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            disabled
          />
          <div style={{ marginTop:50, height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;
