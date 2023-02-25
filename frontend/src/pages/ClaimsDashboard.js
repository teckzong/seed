import React, { useEffect, useState } from "react";
import axios from "axios";

const ClaimsDashboard = () => {
  const employeeClaims = [];
  const [pendingClaims, setPendingClaims] = useState([]);
  const [approvedClaims, setApprovedClaims] = useState([]);
  const [rejectedClaims, setRejectedClaims] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const EmployeeID = "58001001"; // To be obtained from cookie, maybe use an auth hash instead

  // TODO: Check cookie/authenticate to show
  // axios.get(${serverEmployeeClaim})
  // .then((response) => {
  //     setEmployeeClaims(response.body);
  // }).catch(() => setError(true));

  employeeClaims.push({
    ClaimID: 2010,
    InsuranceID: 1009,
    FirstName: "Martin",
    LastName: "Ong",
    ExpenseDate: "2022-07-14T08:00:00+08:00",
    Amount: 100.0,
    Purpose: "Dentist",
    FollowUp: 0,
    PreviousClaimID: null,
    Status: "Approved",
    LastEditedClaimDate: "2022-07-15T12:22:45+08:00",
  });

  employeeClaims.forEach((claim) => {
    if (claim.status == "Approved") {
      setApprovedClaims((approvedClaims) => [...approvedClaims, claim]);
    } else if (claim.status == "Pending") {
      setPendingClaims((pendingClaims) => [...pendingClaims, claim]);
    } else if (claim.status == "Rejected") {
      setRejectedClaims((rejectedClaims) => [...rejectedClaims, claim]);
    }
  });

  let ClaimNumber = 0;
  const dateFormat = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const deleteButton = (claimID) => {
    return (
    <><button type="button" class="btn btn-danger" data-target="#deleteModal" data-toggle="modal">Delete Item</button><div class="modal fade" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete your claim?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close-modal">No</button>
              <button type="button" class="btn btn-danger"  data-dismiss="modal" onClick={deleteRequest(claimID)}>Yes</button>
            </div>
          </div>
        </div>
      </div></>)
  }

  const deleteRequest = (claimID) => {
    
  }

  return (
    <table className="table table-striped table-bordered table-sm">
      <thead>
        <tr>
          <th></th>
          <th>Claim ID</th>
          <th>Insurance ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Expense Date</th>
          <th>Amount</th>
          <th>Purpose</th>
          <th>Follow Up</th>
          <th>Previous Claim ID</th>
          <th>Status</th>
          <th>Last Edited</th>
        </tr>
      </thead>
      <tbody>
        {employeeClaims.map((claim) => {
          console.log(claim);
          ClaimNumber++;
          return (
            <tr key={ClaimNumber}>
              <td>{ClaimNumber}</td>
              <td>{claim["ClaimID"]}</td>
              <td>{claim["InsuranceID"]}</td>
              <td>{claim["FirstName"]}</td>
              <td>{claim["LastName"]}</td>
              <td>{Date(Date.parse(claim["ExpenseDate"]))}</td>
              <td>{claim["Amount"]}</td>
              <td>{claim["Purpose"]}</td>
              <td>{claim["FollowUp"] ? "Yes" : "No"}</td>
              <td>{claim["PreviousClaimID"]}</td>
              <td>{claim["Status"]}</td>
              <td>{Date(Date.parse(claim["LastEditedClaimDate"]))}</td>
              <td>{deleteButton(claim["ClaimID"])}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // [ {
  //     "ClaimID": 2010,
  //     "InsuranceID": 1009,
  //     "FirstName": "Martin",
  //     "LastName": "Ong",
  //     "ExpenseDate": "2022-07-14T08:00:00+08:00",
  //     "Amount": 100.00,
  //     "Purpose": "Dentist",
  //     "FollowUp": 0,
  //     "PreviousClaimID": null,
  //     "Status": "Approved",
  //     "LastEditedClaimDate": "2022-07-15T12:22:45+08:00"
  //    }])
};

export default ClaimsDashboard;
