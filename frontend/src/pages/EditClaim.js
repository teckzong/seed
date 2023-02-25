import React from "react";
import { json, redirect, useLoaderData } from "react-router-dom";
import EditClaimForm from "../components/EditClaimForm";

const EditClaimPage = () => {
  const claimData = useLoaderData();
  return <EditClaimForm data={claimData}></EditClaimForm>;
};

export default EditClaimPage;

export const loader = async ({ params, request }) => {
  console.log("retrieving suppose data");
  return {
    ClaimID: 2010,
    InsuranceID: 1009,
    FirstName: "Martin",
    LastName: "Ong",
    ExpenseDate: "2022-07-14",
    Amount: 100.0,
    Purpose: "Dentist",
    FollowUp: 0,
    PreviousClaimID: null,
    Status: "Approved",
    LastEditedClaimDate: "2022-07-15T12:22:45+08:00",
  };
  // let response = await fetch("http:localhost:8080", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // if (!response.ok) {
  //   throw json({ code: 404, message: "unable to edit data" });
  // }
  // let data = await (await response).json();
  // return data;
};

export const action = async ({ params, request }) => {
  console.log("here");
  let data = await request.formData();
  let claim = {
    insuranceID: data.get("insuranceID"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    expenseDate: data.get("expenseDate"),
    amount: data.get("amount"),
    purpose: data.get("purpose"),
    followUp: data.get("followUp"),
    previousClaimID: data.get("previousClaimID"),
    status: data.get("status"),
  };
  console.log(claim);
  //   let response = await fetch("http://localhost:8080/backend", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(claim),
  //   });
  //   if (!response.ok) {
  //     throw json({ error: 404, message: "error creating claim" });
  //   }
  window.alert("Edited claim");
  return redirect("/dashboard");
};
