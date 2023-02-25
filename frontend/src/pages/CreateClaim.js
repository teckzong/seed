import React from "react";
import { redirect, json } from "react-router-dom";
import ClaimForm from "../components/ClaimForm";

const CreateClaim = () => {
  return <ClaimForm></ClaimForm>;
};

export default CreateClaim;
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
  window.alert("Successfully created claim");
  return redirect("/claimdashboard");
};
