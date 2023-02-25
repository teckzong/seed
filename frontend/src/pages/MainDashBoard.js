import React from "react";
import { Link } from "react-router-dom";
const MainDashBoard = () => {
  return (
    <div>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui.""
      </p>
      <div style={{ margin: "auto" }}>
        <button type="button" className="btn btn-secondary">
          <Link to="createClaim">Create Claim</Link>
        </button>
        <button type="button" className="btn btn-secondary">
          <Link to="editClaim">Edit Claim</Link>
        </button>
        <button type="button" className="btn btn-secondary">
          <Link to="removeClaim">Remove Claim</Link>
        </button>
      </div>
    </div>
  );
};

export default MainDashBoard;
