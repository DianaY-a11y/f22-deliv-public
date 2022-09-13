import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StorageIcon from "@mui/icons-material/Storage";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import React from "react";

// Handles list of pages on sidebar. Edit if you want to add more pages

export default function MainListItems() {
  return (
    <>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to="/database" style={{ color: "black", textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Database" />
        </ListItemButton>
      </Link>
    </>
  );
}
