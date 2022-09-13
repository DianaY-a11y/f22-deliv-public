import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EntryModal from "./EntryModal";
import { getCategory } from "../utils/categories";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import "../App.css";
import { useState } from "react";

// Table component that displays entries on home screen

export default function EntryTable({ entries }) {
  const EntryGrid = () => {
    return (
      <>
        <h2>Check out your saved organizations</h2>
        <div className="GridMain">
          {entries.map((entry) => (
            <div className="grid" key={entry.id}>
              <div key={entry.id}>
                <h3>{entry.name}</h3>
                <a className="category">{getCategory(entry.category).name}</a>
                <p>{entry.description}</p>
                <hr></hr>
                <div>
                  <a href={entry.link}>
                    <OpenInBrowserIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <EntryGrid />
      <h2>Edit your existing entries here.</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Open</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow
                key={entry.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {entry.name}
                </TableCell>
                <TableCell align="right">
                  <Link href={entry.link}>{entry.link}</Link>
                </TableCell>
                <TableCell align="right">{entry.user}</TableCell>
                <TableCell align="right">
                  {getCategory(entry.category).name}
                </TableCell>
                <TableCell
                  sx={{ "padding-top": 0, "padding-bottom": 0 }}
                  align="right"
                >
                  <EntryModal entry={entry} type="edit" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
