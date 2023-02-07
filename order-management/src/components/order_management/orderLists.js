import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SimpleDialog from "./viewOrder";
import { Button, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ord_num, c_name, phn_num, total_items, total_amount) {
  return { ord_num, c_name, phn_num, total_items, total_amount };
}

const rows = [
  createData(111, "Meet", 1234567890, 5, 50),
  createData(222, "Meet", 1234567890, 5, 50),
  createData(333, "Meet", 1234567890, 5, 50),
  createData(444, "Meet", 1234567890, 5, 50),
  createData(555, "Meet", 1234567890, 5, 50),
];

export default function OrdersTable() {
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState(null);
  const openDialog = (odr) => {
    setOpen(true);
    setOrder(odr);
  };
  return (
    <div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Order Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="status"
          >
            <MenuItem value={10}>Current</MenuItem>
            <MenuItem value={20}>Previous</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Order Number</StyledTableCell>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Total Items</StyledTableCell>
              <StyledTableCell>Total Amount</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.ord_num}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.ord_num}</StyledTableCell>
                <StyledTableCell>{row.c_name}</StyledTableCell>
                <StyledTableCell>{row.phn_num}</StyledTableCell>
                <StyledTableCell>{row.total_items}</StyledTableCell>
                <StyledTableCell>{row.total_amount}</StyledTableCell>
                <StyledTableCell>
                  <EditIcon sx={{ marginRight: 1 }} />
                  <a onClick={() => openDialog(row)}>
                    <VisibilityIcon />
                  </a>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <SimpleDialog
          open={open}
          order={order}
          onClose={() => setOpen(false)}
        />
      </TableContainer>
    </div>
  );
}
