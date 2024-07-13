import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import Model from "../Model/Model";
import data from "../data/data";
import "./Table.css";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Number of items per page
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(data); // State to manage items

  // Function to delete an item
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    // After deletion, adjust currentPage if necessary
    if (
      (currentPage - 1) * itemsPerPage >= updatedItems.length &&
      currentPage > 1
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtered items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div>
      <Model />
      <div className="search mb-3" style={{ width: "300px" }}>
        <InputGroup>
          <FormControl
            placeholder="ابحث بالاسم"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </div>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>تاريخ الإصدار</th>
              <th>تاريخ التوريد</th>
              <th>المبلغ المدفوع</th>
              <th> المتبقي</th>
              <th>الحالة</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item, index) => (
              <tr key={item.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.name}</td>
                <td>{item.issueDate}</td>
                <td>{item.supplyDate}</td>
                <td>{item.paidAmount}</td>
                <td>{item.remainingAmount}</td>
                <td>{item.status}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteItem(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="pagination d-flex justify-content-center gap-2 w-100 align-items-center mb-5">
        <Pagination>
          <Pagination.Prev
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
          />
          {Array.from(
            { length: Math.ceil(filteredItems.length / itemsPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() =>
              setCurrentPage(
                currentPage < Math.ceil(filteredItems.length / itemsPerPage)
                  ? currentPage + 1
                  : Math.ceil(filteredItems.length / itemsPerPage)
              )
            }
          />
        </Pagination>
      </div>
    </div>
  );
};

export default DataTable;
