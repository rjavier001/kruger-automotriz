import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import EditUser from "./EditUser";
import { useEffect } from "react";
import userApi from "../../../api/modules/users.api";
import Swal from "sweetalert2";

export default function UserDashboard() {
  const [usersList, setUsersList] = useState([]);
  const [usersDelete, setUsersDelete] = useState([]);

  //---------------------------------------------------------------------------------
  useEffect(() => {
    //----------------------------------
    const getListUsers = async () => {
      const { response, err } = await userApi.listUsers();
      if (response) setUsersList(response);
    };
    getListUsers();
  }, [usersList]);

  console.log(usersList);

  // ** States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((users, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell>{users.name}</TableCell>
                      <TableCell>{users.lastName}</TableCell>
                      <TableCell>{users.age} years</TableCell>
                      <TableCell>{users.phone}</TableCell>
                      <TableCell justifyContent="center" alignItems="center">
                        <Grid
                          container
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <EditUser id={users.id} />
                        </Grid>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={usersList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
