import React from "react";
import { json, redirect, useLoaderData } from "react-router-dom";

const EditClaimPage = () => {
  const claimData = useLoaderData();
  return <div></div>;
};

export default EditClaimPage;

export const loader = async ({ params, request }) => {
  console.log("retrieving suppose data");
  return {};
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
  window.alert("Successfully created claim");
  return redirect("/claimdashboard");
};
