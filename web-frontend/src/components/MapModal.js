import React from "react";
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

const MapModal = ({
  setCheck,
  policeAvailablity,
  hospitalAvailablity,
  NGOAvailablity,
}) => {
  return (
    <div
      className="fixed inset-0 z-999 min:h-screen min:w-screen bg-black/75 flex justify-center items-center"
      onClick={() => {
        setCheck(false);
      }}
    >
      <div
        className="max-h-screen w-2/3 bg-white overflow-scroll"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-xl font-bold mx-2">Police</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Latitude</StyledTableCell>
                <StyledTableCell align="center">Longitude</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {policeAvailablity?.map((row) => (
                <StyledTableRow key={row.place_id}>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.name}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.geometry.location.lat}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.geometry.location.lng}</p>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="text-xl font-bold mx-2">Hospital</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Latitude</StyledTableCell>
                <StyledTableCell align="center">Longitude</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hospitalAvailablity?.map((row) => (
                <StyledTableRow key={row.place_id}>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.name}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.geometry.location.lat}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.geometry.location.lng}</p>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="text-xl font-bold mx-2">NGO</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Latitude</StyledTableCell>
                <StyledTableCell align="center">Longitude</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {NGOAvailablity?.map((row) => (
                <StyledTableRow key={row.place_id}>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.name}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.geometry.location.lat}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-bold">{row.geometry.location.lng}</p>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MapModal;
