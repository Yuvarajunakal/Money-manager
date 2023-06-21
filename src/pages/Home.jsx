import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { GlobalContext } from "../context/Context";
import Total from "./Total";
import ExpenseList from "../components/ExpenseList";

export default function Home() {
  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);

  const [division, setDivision] = useState("Division");
  const [amount, setAmount] = useState(0);
  const [categories, setCategories] = useState("Categories");
  const [income, setIncome] = useState(false);
  // const[date,setDate]=useState('')
  const handleClose = () =>{
    setShow(false);
    setAmount(0);
    setCategories("Categories")
    setDivision("Division")
  } 

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      categories,
      division,
      date: new Date().toJSON().slice(0, 10),

      amount: income ? +amount : -amount,
    };

    addTransaction(newTransaction);

  };
  return (
    <div>
      <Total />
      <div className="button" style={{ marginTop: "100px" }}>
        <Button variant="primary" onClick={handleShow}>
          New Transactions
        </Button>

        <Modal show={show} onHide={handleClose} animation={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>New expenses and income</Modal.Title>
          </Modal.Header>
          <Button
            variant="primary"
            style={{ width: "25%", alignSelf: "center", marginTop: "5px" }}
            onClick={() => setIncome(true)}
          >
            income
          </Button>
          <Button
            variant="danger"
            style={{ width: "25%", alignSelf: "center", marginTop: "5px" }}
            onClick={() => setIncome(false)}
          >
            expence
          </Button>

          <Modal.Body>
            <div
              className="newtranscation"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {income ? (
                <div className="incomesoursce">
                  <Form.Label style={{ color: "green", fontSize: "30px" }}>
                    Income
                  </Form.Label>
                  <Form.Control
                    type="Number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    style={{ flex: "1" }}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <Form.Select
                    aria-label="Default select example"
                    style={{ marginTop: "10px" }}
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                  >
                    <option>Division</option>
                    <option>office</option>

                    <option>Personal</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ marginTop: "10px" }}
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <option>Categories</option>

                    <option>Salary</option>
                    <option>Others</option>
                  </Form.Select>
                </div>
              ) : (
                <div className="expensesources">
                  <Form.Label
                    htmlFor="inputPassword5"
                    style={{ color: "red", fontSize: "30px" }}
                  >
                    expenses
                  </Form.Label>
                  <Form.Control
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    style={{ flex: "1" }}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    
                  />

                  <Form.Select
                    aria-label="Default select example"
                    style={{ marginTop: "10px" }}
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                  >
                    <option>Division</option>
                    <option>office</option>

                    <option>Personal</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ marginTop: "10px" }}
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}

                  >
                      <option>Categories</option>
                    <option>Fuel</option>

                    <option>Entertainement</option>
                    <option>Medicle</option>
                    <option>Food</option>
                    <option>Loan</option>
                  </Form.Select>
                </div>
              )}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              add
            </Button>
          </Modal.Footer>
        </Modal>
        <ExpenseList style={{marginTop:"20px"}} />
      </div>
    </div>
  );
}
