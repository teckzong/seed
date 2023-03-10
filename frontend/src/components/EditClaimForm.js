import React, { useState } from "react";
import { Form } from "react-router-dom";

const EditClaimForm = ({ data }) => {
  let [showInput, setShowInput] = useState(false);
  let changeHandler = () => {
    setShowInput((prevState) => {
      return !prevState;
    });
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
                value={data.InsuranceID}
                maxLength="50"
                required
                readOnly
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
                value={data.FirstName}
                required
                readOnly
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
                readOnly
                value={data.LastName}
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
                value={data.ExpenseDate}
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
                value={data.Amount}
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
                value={data.Purpose}
              />
            </div>
            {/* <div className="form-group form-check">
              <label htmlFor="followup" className="form-check-label">
                <input
                  id="followUp"
                  name="followup"
                  className="form-check-input"
                  type="checkbox"
                  onChange={changeHandler}
                  value={}
                />
                Follow Up
              </label>
            </div> */}
            {/* {showInput && (
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
            )} */}
            <div className="form-group">
              <select
                className="form-control"
                id="status"
                name="status"
                required
              >
                <option value="approved">approved</option>
                <option value="pending">pending</option>
                <option value="rejected">rejected</option>
              </select>
            </div>

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
              Edit Claim
            </button>
          </Form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default EditClaimForm;
