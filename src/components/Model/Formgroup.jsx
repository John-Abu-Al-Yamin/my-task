import React, { useState } from 'react'; 
import { Form, Button, Row, Col, Modal } from 'react-bootstrap'; 
import './Model.css'; 
import ModelButton from"./ModelButton"
 
const FormGroup = () => { 
  const [showModal, setShowModal] = useState(false); 
  const [selectedStatus, setSelectedStatus] = useState(''); 
  const [cashInputs, setCashInputs] = useState({ treasury: '', paymentNumber: '' }); 
  const [bankInputs, setBankInputs] = useState({ bankName: '', transferName: '' }); 
  const [networkInputs, setNetworkInputs] = useState({ cardNumber: '', networkName: '', type: '' }); 
  const [pledgeInputs, setPledgeInputs] = useState({ pledgeOwner: '', pledgePerson: '' }); 
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false); 
 
  const handleClose = () => setShowModal(false); 
  const handleShow = () => setShowModal(true); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    handleClose(); // Close modal after submission 
  }; 
 
  const handleToggleAdditionalInputs = () => { 
    setShowAdditionalInputs(!showAdditionalInputs); 
  }; 
 
  const handleStatusChange = (e) => { 
    const selectedValue = e.target.value; 
    setSelectedStatus(selectedValue); 
 
    // Reset all inputs first 
    setCashInputs({ treasury: '', paymentNumber: '' }); 
    setBankInputs({ bankName: '', transferName: '' }); 
    setNetworkInputs({ cardNumber: '', networkName: '', type: '' }); 
    setPledgeInputs({ pledgeOwner: '', pledgePerson: '' }); 
  }; 
 
  return ( 
    <Form onSubmit={handleSubmit}> 
      <Row className="mb-3"> 
        <Form.Group as={Col} xl={4} md={12} controlId="issueDate"> 
          <Form.Label>تاريخ الإصدار:</Form.Label> 
          <Form.Control type="date" name="issueDate" required /> 
        </Form.Group> 
 
        <Form.Group as={Col} xl={4} md={12} controlId="supplierName"> 
          <Form.Label>اسم المورد:</Form.Label> 
          <div className="custom-select"> 
            <select 
              onChange={handleShow} // Directly call handleShow 
              className="form-select" 
              aria-label="Default select example" 
            > 
              <option value="">اختر...</option> 
              <option value="button1" className="custom-option custom-button"> 
                اضافه 
              </option> 
            </select> 
          </div> 
        </Form.Group> 
 
        <Form.Group as={Col} xl={4} md={12} controlId="phoneNumber"> 
          <Form.Label>رقم الهاتف:</Form.Label> 
          <Form.Control type="number" name="phoneNumber" required /> 
        </Form.Group> 
      </Row> 
 
      <Row className="mb-3"> 
        <Form.Group as={Col} xl={4} md={12} controlId="branch"> 
          <Form.Label>الفرع:</Form.Label> 
          <Form.Control as="select" name="branch" required> 
            <option value="">الفرع 1</option> 
          </Form.Control> 
        </Form.Group> 
        <Form.Group as={Col} xl={4} md={12} controlId="warehouse"> 
          <Form.Label>المخزن:</Form.Label> 
          <Form.Control as="select" name="warehouse" required> 
            <option value="">المخزن 1</option> 
          </Form.Control> 
        </Form.Group> 
      </Row> 
 
      <Row className="mb-3"> 
        <Form.Group as={Col} xl={4} md={12} controlId="paymentMethod"> 
          <Form.Label>طريقة الدفع</Form.Label> 
          <Form.Control as="select" name="paymentMethod" value={selectedStatus} onChange={handleStatusChange} required> 
          <option value="button1" className="custom-option custom-button"> 
                اضافه 
              </option> 
            <option value="">اختر الحالة</option> 
            <option value="مدفوع">نقدي</option> 
            <option value="غير مدفوع">بنك</option> 
            <option value="معلق">شبكه</option> 
            <option value="مؤجل">العهد</option> 
            <option value="ملغى">اجل</option> 
          </Form.Control> 
        </Form.Group> 
 
        {/* Conditional rendering of inputs based on selectedStatus */} 
        {selectedStatus === 'مدفوع' && ( 
          <> 
            <Form.Group as={Col} as={Col} xl={4} md={12} controlId="treasury"> 
              <Form.Label>الخزينة</Form.Label> 
              <Form.Control type="text" value={cashInputs.treasury} onChange={(e) => setCashInputs({ ...cashInputs, treasury: e.target.value })} /> 
            </Form.Group> 
            <Form.Group as={Col} xl={4} md={12} controlId="paymentNumber"> 
              <Form.Label>رقم الدفع</Form.Label> 
              <Form.Control type="text" value={cashInputs.paymentNumber} onChange={(e) => setCashInputs({ ...cashInputs, paymentNumber: e.target.value })} /> 
            </Form.Group> 
          </> 
        )} 
 
        {selectedStatus === 'غير مدفوع' && ( 
          <> 
            <Form.Group as={Col} xl={4} md={12} controlId="bankName"> 
              <Form.Label>البنك</Form.Label> 
              <Form.Control type="text" value={bankInputs.bankName} onChange={(e) => setBankInputs({ ...bankInputs, bankName: e.target.value })} /> 
            </Form.Group> 
            <Form.Group as={Col} xl={4} md={12} controlId="transferName"> 
              <Form.Label>اسم المحول</Form.Label> 
              <Form.Control type="text" value={bankInputs.transferName} onChange={(e) => setBankInputs({ ...bankInputs, transferName: e.target.value })} /> 
            </Form.Group> 
          </> 
        )} 
 
        {selectedStatus === 'معلق' && ( 
          <> 
            <Form.Group as={Col} xl={4} md={12} controlId="cardNumber"> 
              <Form.Label>رقم الكارت</Form.Label> 
              <Form.Control type="text" value={networkInputs.cardNumber} onChange={(e) => setNetworkInputs({ ...networkInputs, cardNumber: e.target.value })} /> 
            </Form.Group> 
            <Form.Group as={Col} xl={4} md={12} controlId="networkName"> 
              <Form.Label>اسم حسب الشبكه</Form.Label> 
              <Form.Control type="text" value={networkInputs.networkName} onChange={(e) => setNetworkInputs({ ...networkInputs, networkName: e.target.value })} /> 
            </Form.Group> 
            <Form.Group as={Col} xl={4} md={12} controlId="type"> 
              <Form.Label>النوع</Form.Label> 
              <Form.Control type="text" value={networkInputs.type} onChange={(e) => setNetworkInputs({ ...networkInputs, type: e.target.value })} /> 
            </Form.Group> 
          </> 
        )} 
 
        {selectedStatus === 'مؤجل' && ( 
          <> 
            <Form.Group as={Col} xl={4} md={12} controlId="pledgeOwner"> 
              <Form.Label>إسم صاحب العهد</Form.Label> 
              <Form.Control type="text" value={pledgeInputs.pledgeOwner} onChange={(e) => setPledgeInputs({ ...pledgeInputs, pledgeOwner: e.target.value })} /> 
            </Form.Group> 
            <Form.Group as={Col} xl={4} md={12} controlId="pledgePerson"> 
              <Form.Label>إسم صاحب العهد</Form.Label> 
              <Form.Control type="text" value={pledgeInputs.pledgePerson} onChange={(e) => setPledgeInputs({ ...pledgeInputs, pledgePerson: e.target.value })} /> 
            </Form.Group> 
          </> 
        )} 
      </Row> 
 
      {/* Modal for additional information */} 
      <Modal show={showModal} onHide={handleClose}> 
        <Modal.Header closeButton> 
          <Modal.Title>اضافة جديدة</Modal.Title> 
        </Modal.Header> 
        <Modal.Body> 
          <Form> 
            <Form.Group className="mb-3" controlId="arabicName"> 
              <Form.Label>الاسم بالعربية</Form.Label> 
              <Form.Control type="text" placeholder="ادخل الاسم بالعربية" autoFocus /> 
            </Form.Group> 
            <Form.Group className="mb-3" controlId="phone"> 
              <Form.Label>رقم الهاتف</Form.Label> 
              <Form.Control type="number" placeholder="ادخل رقم الهاتف" /> 
            </Form.Group> 
            <Button variant="outline-primary" onClick={handleToggleAdditionalInputs}> 
              {showAdditionalInputs ? 'إخفاء المعلومات الإضافية' : 'إضافة معلومات إضافية'} 
            </Button> 
 
            {/* Additional inputs */} 
            {showAdditionalInputs && ( 
              <> 
                <Form.Group className="mb-3"controlId="nationalId"> 
                  <Form.Label>رقم الهوية</Form.Label> 
                  <Form.Control type="text" placeholder="ادخل رقم الهوية" /> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="address"> 
                  <Form.Label>العنوان</Form.Label> 
                  <Form.Control type="text" placeholder="ادخل العنوان" /> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="commercialRegistration"> 
                  <Form.Label>السجل التجاري</Form.Label> 
                  <Form.Control type="text" placeholder="ادخل السجل التجاري" /> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="taxRegistration"> 
                  <Form.Label>السجل الضريبي</Form.Label> 
                  <Form.Control type="text" placeholder="ادخل السجل الضريبي" /> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="country"> 
                  <Form.Label>الدولة</Form.Label> 
                  <Form.Control type="text" placeholder="ادخل اسم الدولة" /> 
                </Form.Group> 
              </> 
            )} 
          </Form> 
        </Modal.Body> 
        <Modal.Footer> 
          <Button variant="secondary" onClick={handleClose}> 
            إلغاء 
          </Button> 
          <Button variant="primary" onClick={handleSubmit}> 
            حفظ 
          </Button> 
        </Modal.Footer> 
      </Modal> 
 
      {/* Submit button for the main form */} 
      {/* <Button type="submit">إضافة فاتورة</Button> */} 
      <ModelButton/> 
    </Form> 
  ); 
}; 
 
export default FormGroup;