import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FormGroup = () => {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    issueDate: '',
    supplyDate: '',
    paidAmount: '',
    remainingAmount: '',
    status: ''
  });

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem('customerData'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime(); // Generate a unique timestamp-based ID (better for real applications)
    const newCustomer = { ...formData, id };

    // Update the data state with the new customer added to the existing data
    const updatedData = [...data, newCustomer];
    setData(updatedData);

    // Update localStorage with the updated data
    localStorage.setItem('customerData', JSON.stringify(updatedData));

    // Clear the form after submission
    setFormData({
      name: '',
      issueDate: '',
      supplyDate: '',
      paidAmount: '',
      remainingAmount: '',
      status: ''
    });

    alert('تم إضافة العميل بنجاح!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} xl={4} md={12} controlId="name">
          <Form.Label>الاسم:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xl={4} md={12} controlId="issueDate">
          <Form.Label>تاريخ الإصدار:</Form.Label>
          <Form.Control
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xl={4} md={12} controlId="supplyDate">
          <Form.Label>تاريخ التوريد:</Form.Label>
          <Form.Control
            type="date"
            name="supplyDate"
            value={formData.supplyDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} xl={4} md={12} controlId="paidAmount">
          <Form.Label>المبلغ المدفوع:</Form.Label>
          <Form.Control
            type="number"
            name="paidAmount"
            value={formData.paidAmount}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xl={4} md={12} controlId="remainingAmount">
          <Form.Label>المبلغ المتبقي:</Form.Label>
          <Form.Control
            type="number"
            name="remainingAmount"
            value={formData.remainingAmount}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xl={4} md={12} controlId="status">
          <Form.Label>الحالة:</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">اختر الحالة</option>
            <option value="مدفوع">مدفوع</option>
            <option value="غير مدفوع">غير مدفوع</option>
            <option value="معلق">معلق</option>
            <option value="مؤجل">مؤجل</option>
            <option value="ملغى">ملغى</option>
          </Form.Control>
        </Form.Group>
      </Row>

      <Button type="submit">إضافة فاتوره</Button>
    </Form>
  );
};

export default FormGroup;
