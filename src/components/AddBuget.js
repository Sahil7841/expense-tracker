import React, { useState } from "react";

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAmountChange = (e) => {
    const enteredValue = e.target.value;

    const regex = /^[0-9]*$/;

    if (regex.test(enteredValue) || enteredValue === "") {
      setAmount(enteredValue);
    }
  };

  const handleAddTransaction = () => {
    if (amount.trim() === "" || details.trim() === "") {
      setErrorMessage("Please enter both amount and details.");
      return;
    }

    AddTransactions({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });

    setErrorMessage("");

    setToggle();
  };

  return (
    <div className="container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <input
        className="input"
        placeholder="Enter Amount"
        value={amount}
        onChange={handleAmountChange}
      />

      <input
        className="input"
        type={"text"}
        placeholder="Enter Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <div className="radio-container">
        <div className="radio-btn">
          <input
            type="radio"
            id="expense"
            name="type"
            value={"expense"}
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
            value={"income"}
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
