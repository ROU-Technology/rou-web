import React from "react";
import { Link } from "react-router-dom";
import "./construction.css";

function Construction(props) {
  return (
    <div className="container-fluid">
      <div className="row const-body">
        <img src={props.Img} alt="404" className="const-img col-md-6" />
        <div className="const-word col-md-6">
          <h1 className="const-h1">{props.Head}</h1>
          <p>{props.Word}</p>
          <button className="btn btn-outline-success">
            <Link className="btn-const" to={props.Link}>
              {props.Location}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Construction;
