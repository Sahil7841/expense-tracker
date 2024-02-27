import React from "react";

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <div className={"item" + (transaction.transType === "expense" ? " expense" : "")}>
      <span>{transaction.details}</span>
      <span>₹{transaction.amount}</span>
      <button className="remove-button" onClick={() => removeTransaction(transaction.id)}>
        Remove
      </button>
    </div>
  );
};

export default TransactionItem;
