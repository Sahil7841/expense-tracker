import { useState } from "react";

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");

  const handleAddTransaction = () => {
    AddTransactions({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });
    setToggle();
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
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
