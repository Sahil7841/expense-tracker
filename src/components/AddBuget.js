import React, { useState } from "react";

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");
  const [amountError, setAmountError] = useState("");
  const [detailsError, setDetailsError] = useState("");

  const handleAmountChange = (e) => {
    const enteredValue = e.target.value;

    const regex = /^[0-9]*$/;

    if (regex.test(enteredValue) || enteredValue === "") {
      setAmount(enteredValue);
      setAmountError("");
    } else {
      setAmountError("Please enter only numeric values for amount.");
    }
  };

  const handleDetailsChange = (e) => {
    const enteredValue = e.target.value;

    const regex = /^[A-Za-z ]*$/;

    if (regex.test(enteredValue) || enteredValue === "") {
      setDetails(enteredValue);
      setDetailsError("");
    } else {
      setDetailsError("Please enter only alphabets for details.");
    }
  };

  const handleAddTransaction = () => {
    if (amount.trim() === "") {
      setAmountError("Please enter the amount.");
      return;
    }

    if (details.trim() === "") {
      setDetailsError("Please enter the details.");
      return;
    }

    AddTransactions({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });

    setAmountError("");
    setDetailsError("");

    setToggle();
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      {amountError && (
        <div className="error-message" style={{ color: "red" }}>
          {amountError}
        </div>
      )}

      <input
        className="input"
        type="text"
        placeholder="Enter Details"
        value={details}
        onChange={handleDetailsChange}
      />
      {detailsError && (
        <div className="error-message" style={{ color: "red" }}>
          {detailsError}
        </div>
      )}

      <div className="radio-container">
        <div className="radio-btn">
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <label className="label" htmlFor="expense">
            Expense
          </label>
        </div>

        <div className="radio-btn">
          <input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <label className="label" htmlFor="income">
            Budget
          </label>
        </div>
      </div>

      <button className="submit-btn" onClick={handleAddTransaction}>
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
