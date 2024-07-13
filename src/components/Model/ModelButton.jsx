import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import { FaPlus } from "react-icons/fa";
import { Form, Button, Row, Col } from "react-bootstrap";
import Buttons from "./Buttons";

const ModelButton = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "",
      unit1: "",
      unit2: "",
      quantity: "",
      price: "",
      discountType: "",
      discountValue: "",
      inclusive: false,
      taxPercentage: "",
      taxAmount: "",
      total: "",
    },
  ]);

  const handleCopyRow = () => {
    const newItem = { ...items[0], id: items.length + 1 };
    setItems([...items, newItem]);
  };

  const handleDeleteRow = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div
      className="my-4 table-wrapper"
      style={{ maxHeight: "600px", overflowX: "hidden", overflowY: "auto" }}
    >
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>الصنف</th>
            <th>الوحده</th>
            <th>الكميه</th>
            <th>السعر</th>
            <th>الخصم</th>
            <th>قيمه الخصم</th>
            <th>شامل</th>
            <th>نسبه الضريبه</th>
            <th>الضريبه</th>
            <th>الاجمالي</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <FormControl
                  placeholder="اسم الصنف"
                  value={item.itemName}
                  onChange={(e) => {
                    const updatedItem = { ...item, itemName: e.target.value };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <Form.Select
                  aria-label="وحده 1"
                  value={item.unit1}
                  onChange={(e) => {
                    const updatedItem = { ...item, unit1: e.target.value };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                >
                  <option>وحده 1</option>
                  <option>وحده 2</option>
                  <option>وحده 3</option>
                </Form.Select>
                <Form.Select
                  aria-label="وحده 2"
                  value={item.unit2}
                  onChange={(e) => {
                    const updatedItem = { ...item, unit2: e.target.value };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                >
                  <option>وحده 1</option>
                  <option>وحده 2</option>
                  <option>وحده 3</option>
                </Form.Select>
              </td>
              <td>
                <FormControl
                  placeholder="الكميه"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedItem = { ...item, quantity: e.target.value };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <FormControl
                  placeholder="السعر"
                  value={item.price}
                  onChange={(e) => {
                    const updatedItem = { ...item, price: e.target.value };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <Form.Select
                  aria-label="نوع الخصم"
                  value={item.discountType}
                  onChange={(e) => {
                    const updatedItem = {
                      ...item,
                      discountType: e.target.value,
                    };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                >
                  <option>نوع الخصم</option>
                  <option>نوع 1</option>
                  <option>نوع 2</option>
                </Form.Select>
              </td>
              <td>
                <FormControl
                  placeholder="قيمه الخصم"
                  value={item.discountValue}
                  onChange={(e) => {
                    const updatedItem = {
                      ...item,
                      discountValue: e.target.value,
                    };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  checked={item.inclusive}
                  onChange={(e) => {
                    const updatedItem = {
                      ...item,
                      inclusive: e.target.checked,
                    };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <Form.Select
                  aria-label="نسبه الضريبه"
                  value={item.taxPercentage}
                  onChange={(e) => {
                    const updatedItem = {
                      ...item,
                      taxPercentage: e.target.value,
                    };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                >
                  <option>نسبه الضريبه</option>
                  <option>نسبه 1</option>
                  <option>نسبه 2</option>
                </Form.Select>
              </td>
              <td>
                <FormControl
                  placeholder="الضريبه"
                  value={item.taxAmount}
                  onChange={(e) => {
                    const updatedItem = {
                      ...item,
                      taxAmount: e.target.value,
                    };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <FormControl
                  placeholder="الاجمالي"
                  value={item.total}
                  onChange={(e) => {
                    const updatedItem = { ...item, total: e.target.value };
                    const updatedItems = [...items];
                    updatedItems[index] = updatedItem;
                    setItems(updatedItems);
                  }}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteRow(index)}>
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-start mt-3">
        <Button className="my-3" variant="success" onClick={handleCopyRow}>
          <FaPlus className="me-1" />
        </Button>
      </div>
      <div className="forms-group">
        <Form.Group controlId="issueDate">
          <Form.Label> الخصم علي اجمالي الفاتوره</Form.Label>
          <Form.Control
            style={{ width: "300px" }}
            type="text"
            name="issueDate"
            required
          />
        </Form.Group>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} xl={4} md={12} controlId="issueDate">
              <Form.Label> الاجمالي قبل الخصم</Form.Label>
              <Form.Control type="text" name="issueDate" required />
            </Form.Group>

            <Form.Group as={Col} xl={4} md={12} controlId="phoneNumber">
              <Form.Label> مبلغ الضريبه</Form.Label>
              <Form.Control type="text" name="phoneNumber" required />
            </Form.Group>

            <Form.Group as={Col} xl={4} md={12} controlId="phoneNumber">
              <Form.Label>الاجمالي بعد الضريبه</Form.Label>
              <Form.Control type="text" name="phoneNumber" required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xl={4} md={12} controlId="issueDate">
              <Form.Label> الخصم علي الاصناف</Form.Label>
              <Form.Control type="number" name="issueDate" required />
            </Form.Group>

            <Form.Group as={Col} xl={4} md={12} controlId="phoneNumber">
              <Form.Label> المبلغ المسدد</Form.Label>
              <Form.Control type="number" name="phoneNumber" required />
            </Form.Group>

            <Form.Group as={Col} xl={4} md={12} controlId="phoneNumber">
              <Form.Label> المبلغ المتبقي</Form.Label>
              <Form.Control type="number" name="phoneNumber" required />
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div className="butto">
        <Buttons />
      </div>
    </div>
  );
};

export default ModelButton;
