import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1A2E47",
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

function createData(name, calories, fat, carbs, protein, val) {
  return { name, calories, fat, carbs, protein, val };
}

const rows = [
  createData(2, "Report Accepted", "Pending", 9.0, 37, 4.3),
  createData(3, "Registered Child", "Pending", 16.0, 24, 6.0),
];

export default function CustomizedTables({ tableName }) {
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl my-3">{tableName} Time Table</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Objective Name</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Processed On</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
              <StyledTableCell align="center">Verification</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <StyledTableCell align="center">{row.val}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
