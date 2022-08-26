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
import { PrimaryButton } from "../Buttons";
import { useNavigate } from "react-router-dom";

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

export default function CustomizedTables({ isChild, tableName, rows }) {
  const [firstEmptyField, setFirstEmptyField] = useState({});
  const [editForm, setEditForm] = useState(null);

  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const findFirstUnfilledRow = () => {
      const emptyFields = rows.filter((item) => item.remarks === "");

      setFirstEmptyField(emptyFields[0]);
    };

    if (tableName === "Pre Rescue") findFirstUnfilledRow();
  }, []);

  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl my-3">{tableName}</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Objectives</StyledTableCell>
              <StyledTableCell align="center">Approver</StyledTableCell>
              <StyledTableCell align="center">Updated On</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              {isChild === false && (
                <StyledTableCell align="center">Action</StyledTableCell>
              )}
              <StyledTableCell align="center">Remarks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row.key}>
                <StyledTableCell align="center">
                  <p className="font-bold">{row.state}</p>
                </StyledTableCell>
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
                <StyledTableCell align="center">
                  <p className="font-bold">{row.processedOn}</p>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.remarks !== "" ? (
                    <p className="font-bold">Completed</p>
                  ) : (
                    <p className="font-bold">Pending</p>
                  )}
                </StyledTableCell>
                {isChild === false && (
                  <StyledTableCell align="center">
                    {row.key === 1 && tableName === "Post Rescue" ? (
                      <div className="flex justify-center items-center">
                        <PrimaryButton
                          text="Add Data"
                          handleClick={() =>
                            navigate("/childmonitoring/addchild")
                          }
                        />
                      </div>
                    ) : row.remarks !== "" ? (
                      <div className="flex justify-center items-center">
                        <PrimaryButton text="Download" />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center">
                        <PrimaryButton text="Request for Approval" />
                      </div>
                    )}
                  </StyledTableCell>
                )}
                <StyledTableCell align="center">
                  {(tableName === "Pre Rescue" &&
                    row.key === firstEmptyField?.key) ||
                  (tableName === "Post Rescue" && row.remarks === "") ? (
                    editForm === row.key ? (
                      <form>
                        <input
                          type="text"
                          className="border-2 border-black p-1 px-3 rounded"
                        ></input>
                        <button
                          class="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-3"
                          onClick={onSave}
                        >
                          Update
                        </button>
                      </form>
                    ) : (
                      <p> --- </p>
                    )
                  ) : row.remarks === "" ? (
                    <p className="font-bold">Complete previous task</p>
                  ) : (
                    <p className="font-bold"> {row.remarks}</p>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
