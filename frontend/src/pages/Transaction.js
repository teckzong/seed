import React from "react";

const Transaction = () => {

  return (<>
           <div class="position-relative overflow-hidden text-center bg-light">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-heavy">What would you like to do today?</h1>
            </div>
            </div>
  <p>
      <div className="h-100 d-flex align-items-center justify-content-center">
      <div class="row h-100 d-flex align-items-center justify-content-center">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <div class="row h-5 w-5"><img src="view_claim.jpg" class="img-fluid"></img></div>
              <h5 class="card-title">Create new claim</h5>
              <p class="card-text">Create new claims to better protect you and your dependents.</p>

              <a href="/createclaim" class="btn btn-primary">New claim</a>

            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <div class="row h-5 w-5"><img src="waiting.jpg" class="img-fluid"></img></div>
              <h5 class="card-title">Edit pending/ rejected claims</h5>
              <p class="card-text">Made a mistake with your claims? No worries!</p>

              <a href="/dashboard" class="btn btn-primary">Edit claim</a>

            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <div class="row h-5 w-5"><img src="view_claim.jpg" class="img-fluid"></img></div>
              <h5 class="card-title">Remove pending/ rejected claims</h5>
              <p class="card-text">Changed your mind about a claim? You can still reverse your decision here.</p>

              <a href="/dashboard" class="btn btn-primary">Delete claim</a>

            </div>
          </div>
        </div>
    </div>
    </div>
  </p></>)

};

export default Transaction;
