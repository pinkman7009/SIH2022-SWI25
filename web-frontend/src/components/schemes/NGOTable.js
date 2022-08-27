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

export default function NGOTable() {
  const NGOs = [
    {
      name: "Child Rights and You (CRY)",
      website: "https://www.cry.org/",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
    {
      name: "Bachpan Bachao Andolan (BBA)",
      website: "https://bba.org.in/",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
    {
      name: "Smile Foundation",
      website: "https://www.smilefoundationindia.org/",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
    {
      name: "Bhumi",
      website: "https://bhumi.ngo/",
      eligibleChildren: 5,
      registeredChildren: 10,
      discontinuedChildren: 3,
      continuingChildren: 2,
    },
  ];
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl my-3">Associated NGOs</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Website</StyledTableCell>
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
            {NGOs.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <a href={`${row.website}`}>{row.website}</a>
                </StyledTableCell>
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
