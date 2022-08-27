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

export default function InspectionTable() {
  const inspections = [
    {
      date: "22nd August, 2022",
      inspectedBy: "Rahul Kumar",
      details: "The inspection was made to see the health status of the child",
      remarks: "No remarks",
    },
    {
      date: "23rd August, 2022",
      inspectedBy: "Rohan Das",
      details:
        "The inspection was made to see the education status of the child",
      remarks: "No remarks",
    },
    {
      date: "24th August, 2022",
      inspectedBy: "Nishnata Debnath",
      details: "The inspection was made to see the health status of the child",
      remarks: "No remarks",
    },
    {
      date: "25th August",
      inspectedBy: "Vivek Matalia",
      details: "The inspection was made to see the family status of the child",
      remarks: "No remarks",
    },
  ];
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl my-3">Inspections</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                Last Inspection Date
              </StyledTableCell>
              <StyledTableCell align="center">
                Next Inspection Date
              </StyledTableCell>
              <StyledTableCell align="center">Inspector</StyledTableCell>
              <StyledTableCell align="center">Details</StyledTableCell>
              <StyledTableCell align="center">Remarks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inspections.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">
                  <select
                    id="family-type"
                    className="py-2 px-8 outline-primary"
                  >
                    <option value="volvo">NGO</option>

                    <option value="volvo">District Education Office</option>
                    <option value="saab">UIDI Regional Center</option>
                    <option value="opel">District Health Office</option>
                    <option value="audi">LIC Development Office</option>
                  </select>
                </StyledTableCell>
                <StyledTableCell align="center">{row.details}</StyledTableCell>
                <StyledTableCell align="center">{row.remarks}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2 className="text-lg font-bold m-3">
        The next inspection date is on 29th August.
      </h2>
    </div>
  );
}
