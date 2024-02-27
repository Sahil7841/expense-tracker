import React, { useEffect, useState } from "react";
import AddTransaction from "./AddBuget";
import OverviewComponent from "./Overview";
import TransactionsContainer from "./Transactions";

const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const AddTransactions = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.map((item) => {
      item.transType === "expense"
        ? (exp = exp + item.amount)
        : (inc = inc + item.amount);
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <div className="container-tracker">
      <h1 className="heading">Expense Tracker</h1>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <div className="transaction-details">
        <div className="expense-box">
          Expense <span>₹{expense}</span>
        </div>

        <div className="income-box">
          Budget <span>₹{income}</span>
        </div>
      </div>

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </div>
  );
};

export default Tracker;
