import React from "react";

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const balance = income - expense;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-overview">
      <h2 className="balance">
        Balance <span>₹{balance}</span>
      </h2>
      <button className="add-btn" onClick={handleToggle}>
        {toggle ? "Cancel" : "Add"}
      </button>
    </div>
  );
};

export default OverviewComponent;
