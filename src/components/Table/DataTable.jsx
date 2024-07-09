import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Model from '../Model/Model';

const DataTable = () => {
  const [customerData, setCustomerData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      setCustomerData(JSON.parse(storedData));
    }
  }, []);

  // Calculate total pages based on itemsPerPage and customerData length
  const totalPages = Math.ceil(customerData.length / itemsPerPage);

  // Function to handle pagination click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Calculate which items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = customerData.filter((customer) =>
    customer.name.includes(searchTerm)
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle delete function
  const handleDelete = (index) => {
    const updatedData = [...customerData];
    updatedData.splice(indexOfFirstItem + index, 1); // Remove the item at index

    setCustomerData(updatedData); // Update state
    localStorage.setItem('customerData', JSON.stringify(updatedData)); // Update localStorage
  };

  return (
    <div>
      <Model />
      <div className="serch mb-3"style={{ width: '300px' }}>
            <InputGroup>
              <FormControl
                placeholder="ابحث بالاسم"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                
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
              <th>المبلغ المتبقي</th>
              <th>الحالة</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((customer, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.issueDate}</td>
                <td>{customer.supplyDate}</td>
                <td>{customer.paidAmount}</td>
                <td>{customer.remainingAmount}</td>
                <td>{customer.status}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(index)}>Deleted</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="pagination d-flex justify-content-center w-100 align-items-center ">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default DataTable;
