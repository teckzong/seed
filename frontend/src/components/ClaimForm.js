import React, { useState } from "react";
import { Form } from "react-router-dom";

const ClaimForm = () => {
  let [showInput, setShowInput] = useState(false);
  const changeHandler = () => {
    setShowInput((prevState) => !prevState);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Form method="post" action="/createClaim">
            <div className="form-group">
              <label htmlFor="insuranceID">Insurance ID:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Insurance ID"
                id="insuranceID"
                name="insuranceID"
                maxLength="50"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                id="firstName"
                name="firstName"
                maxLength="50"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                id="lastName"
                name="lastName"
                maxLength="50"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Expense Date:</label>
              <input
                type="date"
                className="form-control"
                id="expenseDate"
                name="expenseDate"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Amount"
                id="amount"
                name="amount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="purpose">Purpose:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Purpose"
                id="purpose"
                name="purpose"
                required
              />
            </div>
            <div className="form-group form-check">
              <label htmlFor="followup" className="form-check-label">
                <input
                  id="followUp"
                  name="followup"
                  className="form-check-input"
                  type="checkbox"
                  onChange={changeHandler}
                  value={showInput}
                />
                Follow Up
              </label>
            </div>
            {showInput && (
              <div className="form-group">
                <label htmlFor="previousClaimID">Previous Claim ID:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Previous Claim ID"
                  id="previousClaimID"
                  name="previousClaimID"
                  required
                />
              </div>
            )}

            {/* <div className="form-group">
              <label htmlFor="lastEditedClaimDate">
                Last Edited Claim Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="lastEditedClaimDate"
              />
            </div> */}
            <button type="submit" className="btn btn-primary">
              Create Claim
            </button>
          </Form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default ClaimForm;
