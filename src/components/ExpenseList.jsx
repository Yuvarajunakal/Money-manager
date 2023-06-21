import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import Table from "react-bootstrap/Table";

export default function ExpenseList() {
  const { transactions } = useContext(GlobalContext);
  let i = 1;

  return (
    <div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>s.no</th>
            <th>Income/Expenses</th>
            <th>date</th>
            <th>Division</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr>
              <td>{i++}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.division}</td>
              <td>{transaction.categories}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
