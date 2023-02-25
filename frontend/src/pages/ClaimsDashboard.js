import React, { useEffect, useState } from "react";
import axios from 'axios';

const ClaimsDashboard = () => {
    const employeeClaims = []
    const [pendingClaims, setPendingClaims] = useState([]);
    const [approvedClaims, setApprovedClaims] = useState([]);
    const [rejectedClaims, setRejectedClaims] = useState([]);
    const [loaded, setLoaded] =useState(false);
    const [error, setError] =useState(false);
    const EmployeeID = '58001001'; // To be obtained from cookie, maybe use an auth hash instead

    // TODO: Check cookie/authenticate to show
    // axios.get(${serverEmployeeClaim})
    // .then((response) => {
    //     setEmployeeClaims(response.body);
    // }).catch(() => setError(true));

    employeeClaims.push({
        "ClaimID": 2010,
        "InsuranceID": 1009,
        "FirstName": "Martin",
        "LastName": "Ong",
        "ExpenseDate": "2022-07-14T08:00:00+08:00",
        "Amount": 100.00,
        "Purpose": "Dentist",
        "FollowUp": 0,
        "PreviousClaimID": null,
        "Status": "Approved",
        "LastEditedClaimDate": "2022-07-15T12:22:45+08:00"
       })



    employeeClaims.forEach((claim) => {
        if (claim.status == 'Approved') {
            setApprovedClaims(approvedClaims => [...approvedClaims,claim]);
        } else if (claim.status == 'Pending') {
            setPendingClaims(pendingClaims => [...pendingClaims,claim]);
        } else if (claim.status == 'Rejected') {
            setRejectedClaims(rejectedClaims => [...rejectedClaims,claim]);
        }
    });

    let i = 0;
    return (
        <table class="table">
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
            i++;
            return (<tr key={i}>
                <td>{i}</td>
                <td>{claim["ClaimID"]}</td>
                <td>{claim["InsuranceID"]}</td>
                <td>{claim["FirstName"]}</td>
                <td>{claim["LastName"]}</td>
                <td>{claim["ExpenseDate"]}</td>
                <td>{claim["Amount"]}</td>
                <td>{claim["Purpose"]}</td>
                <td>{claim["FollowUp"]}</td>
                <td>{claim["PreviousClaimID"]}</td>
                <td>{claim["Status"]}</td>
                <td>{claim["LastEditedClaimDate"]}</td>
            </tr>)
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
}

export default ClaimsDashboard;