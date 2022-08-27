import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit } from "react-icons/fa";

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

export default function SchemesTable() {
  const schemes = [
    {
      name: "Integrated Child Development Scheme",
      details: "Work on the all over well being of a child",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
    {
      name: "Apki Beti Hamari Beti",
      details: "Life Insurance Corporation plans for children",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
    {
      name: "Integrated Child Protection Scheme",
      details: "Protection of child against exploitation",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
    {
      name: "Sukanya Samriddhi Yojna",
      details: "Securing financial feature for children",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
  ];
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl my-3">Schemes</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Details</StyledTableCell>
              <StyledTableCell align="center">
                No. of Eligible Children
              </StyledTableCell>
              <StyledTableCell align="center">
                No. of Registered Children
              </StyledTableCell>
              <StyledTableCell align="center">
                No. of of Discontinued Children
              </StyledTableCell>
              <StyledTableCell align="center">
                No. of of Continuing Children
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schemes.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.details}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.eligibleChildren}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.registeredChildren}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.discontinuedChildren}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.continuingChildren}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
