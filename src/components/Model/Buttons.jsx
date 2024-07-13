import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const Buttons = () => {
  const [activeButton, setActiveButton] = useState(null); // State to track active button

  const [showNotesInput, setShowNotesInput] = useState(false);
  const [showAttachmentsInput, setShowAttachmentsInput] = useState(false);
  const [showAdditionalInfoInput, setShowAdditionalInfoInput] = useState(false);
  const [showOtherExpensesInput, setShowOtherExpensesInput] = useState(false);

  // State for form inputs based on payment method
  const [selectedStatus, setSelectedStatus] = useState("");
  const [cashInputs, setCashInputs] = useState({
    treasury: "",
    paymentNumber: "",
  });
  const [bankInputs, setBankInputs] = useState({
    bankName: "",
    transferName: "",
  });
  const [networkInputs, setNetworkInputs] = useState({
    cardNumber: "",
    networkName: "",
    type: "",
  });
  const [pledgeInputs, setPledgeInputs] = useState({
    pledgeOwner: "",
    pledgePerson: "",
  });

  // State for other expenses
  const [otherExpenses, setOtherExpenses] = useState({
    description: "",
    amount: "",
    date: "",
  });

  const handleButtonClick = (buttonName) => {
    // Reset all input states except the one corresponding to the clicked button
    setShowNotesInput(buttonName === "notes");
    setShowAttachmentsInput(buttonName === "attachments");
    setShowAdditionalInfoInput(buttonName === "additional");
    setShowOtherExpensesInput(buttonName === "expenses");
    setActiveButton(buttonName);

    // Reset form inputs based on button click
    setSelectedStatus("");
    setCashInputs({ treasury: "", paymentNumber: "" });
    setBankInputs({ bankName: "", transferName: "" });
    setNetworkInputs({ cardNumber: "", networkName: "", type: "" });
    setPledgeInputs({ pledgeOwner: "", pledgePerson: "" });

    // Reset other expenses input
    setOtherExpenses({ description: "", amount: "", date: "" });
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleOtherExpensesChange = (e) => {
    const { name, value } = e.target;
    setOtherExpenses({ ...otherExpenses, [name]: value });
  };

  return (
    <div className="container">
      <div className="buttons d-flex gap-3">
        <Button
          variant={activeButton === "notes" ? "success" : "secondary"}
          onClick={() => handleButtonClick("notes")}
          className={`btn ${activeButton === "notes" ? "text-white" : ""}`}
        >
          ملاحظات
        </Button>
        <Button
          variant={activeButton === "attachments" ? "success" : "secondary"}
          onClick={() => handleButtonClick("attachments")}
          className={`btn ${
            activeButton === "attachments" ? "text-white" : ""
          }`}
        >
          المرفقات
        </Button>
        <Button
          variant={activeButton === "expenses" ? "success" : "secondary"}
          onClick={() => handleButtonClick("expenses")}
          className={`btn ${activeButton === "expenses" ? "text-white" : ""}`}
        >
          معلومات اضافيه
        </Button>
        <Button
          variant={activeButton === "additional" ? "success" : "secondary"}
          onClick={() => handleButtonClick("additional")}
          className={`btn ${activeButton === "additional" ? "text-white" : ""}`}
        >
          مصاريف اخري
        </Button>
      </div>
      <div className="form-group-bttom my-3">
        {showNotesInput && (
          <Form.Control
            as="textarea"
            placeholder="Enter notes..."
            style={{ width: "550px" }}
          />
        )}
        {showAttachmentsInput && (
          <Form.Control type="file" style={{ width: "350px" }} />
        )}

        {showOtherExpensesInput && (
          <Row className="mb-3">
            <Form.Group as={Col} xl={4} md={12} controlId="otherExpensesDate">
              <Form.Label htmlFor="date">التاريخ</Form.Label>
              <Form.Control
                type="date"
                id="date"
                value={otherExpenses.date}
                onChange={handleOtherExpensesChange}
                name="date"
              />
            </Form.Group>
          </Row>
        )}

        {showAdditionalInfoInput && (
          <Row className="mb-3">
            <Form.Group as={Col} xl={4} md={12} controlId="paymentMethod">
              <Form.Label>طريقة الدفع</Form.Label>
              <Form.Control
                as="select"
                name="paymentMethod"
                value={selectedStatus}
                onChange={handleStatusChange}
                required
              >
                <option value="">اختر الحالة</option>
                <option value="مدفوع">نقدي</option>
                <option value="غير مدفوع">بنك</option>
                <option value="معلق">شبكه</option>
                <option value="مؤجل">العهد</option>
              </Form.Control>
            </Form.Group>

            {/* Conditional rendering of inputs based on selectedStatus */}
            {selectedStatus === "مدفوع" && (
              <>
                <Form.Group as={Col} xl={4} md={12} controlId="treasury">
                  <Form.Label>الخزينة</Form.Label>
                  <Form.Control
                    type="text"
                    value={cashInputs.treasury}
                    onChange={(e) =>
                      setCashInputs({ ...cashInputs, treasury: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} xl={4} md={12} controlId="paymentNumber">
                  <Form.Label>رقم الدفع</Form.Label>
                  <Form.Control
                    type="text"
                    value={cashInputs.paymentNumber}
                    onChange={(e) =>
                      setCashInputs({
                        ...cashInputs,
                        paymentNumber: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </>
            )}

            {selectedStatus === "غير مدفوع" && (
              <>
                <Form.Group as={Col} xl={4} md={12} controlId="bankName">
                  <Form.Label>البنك</Form.Label>
                  <Form.Control
                    type="text"
                    value={bankInputs.bankName}
                    onChange={(e) =>
                      setBankInputs({ ...bankInputs, bankName: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} xl={4} md={12} controlId="transferName">
                  <Form.Label>اسم المحول</Form.Label>
                  <Form.Control
                    type="text"
                    value={bankInputs.transferName}
                    onChange={(e) =>
                      setBankInputs({
                        ...bankInputs,
                        transferName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </>
            )}

            {selectedStatus === "معلق" && (
              <>
                <Form.Group as={Col} xl={4} md={12} controlId="cardNumber">
                  <Form.Label>رقم الكارت</Form.Label>
                  <Form.Control
                    type="text"
                    value={networkInputs.cardNumber}
                    onChange={(e) =>
                      setNetworkInputs({
                        ...networkInputs,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} xl={4} md={12} controlId="networkName">
                  <Form.Label>اسم حسب الشبكه</Form.Label>
                  <Form.Control
                    type="text"
                    value={networkInputs.networkName}
                    onChange={(e) =>
                      setNetworkInputs({
                        ...networkInputs,
                        networkName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} xl={4} md={12} controlId="type">
                  <Form.Label>النوع</Form.Label>
                  <Form.Control
                    type="text"
                    value={networkInputs.type}
                    onChange={(e) =>
                      setNetworkInputs({
                        ...networkInputs,
                        type: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </>
            )}

            {selectedStatus === "مؤجل" && (
              <>
                <Form.Group as={Col} xl={4} md={12} controlId="pledgeOwner">
                  <Form.Label>إسم صاحب العهد</Form.Label>
                  <Form.Control
                    type="text"
                    value={pledgeInputs.pledgeOwner}
                    onChange={(e) =>
                      setPledgeInputs({
                        ...pledgeInputs,
                        pledgeOwner: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} xl={4} md={12} controlId="pledgePerson">
                  <Form.Label>إسم صاحب العهد</Form.Label>
                  <Form.Control
                    type="text"
                    value={pledgeInputs.pledgePerson}
                    onChange={(e) =>
                      setPledgeInputs({
                        ...pledgeInputs,
                        pledgePerson: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </>
            )}
          </Row>
        )}
      </div>
    </div>
  );
};

export default Buttons;
