import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DataTable from "./components/Table/DataTable";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />

      <Row>
        <Col md={2}  id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col md={10} sm={12} id="page-content-wrapper">
          <DataTable />
        </Col>
      </Row>
    </div>
  );
}

export default App;
