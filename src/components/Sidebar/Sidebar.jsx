// Sidebar.js

import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      className="sidebar text-white border-right d-flex flex-column  align-items-center"
      style={{ height: "100vh", padding: "20px" }}
    >
      <div className="sidebar-heading text-center mb-4 fs-3">نمار</div>
      <hr className="bg-white" />
      <Nav className="flex-column">
        <Nav.Link  className="mb-3 text-white fs-4  side-link">
          مشتريات
        </Nav.Link>
        <Nav.Link  className="mb-3 text-white side-link">
          طلبات الشراء
        </Nav.Link>
        <Nav.Link  className="mb-3 text-white side-link">
          فواتير الشراء
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
