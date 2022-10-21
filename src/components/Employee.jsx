import React from "react";
import "./Employee.css";

const Employee = ({ name, image, age, email }) => {
  return (
    <div className="myCard">
      <div
        className="card d-flex align-items-center bg-info "
        style={{ width: "20rem", height: "25rem" }}
      >
        <img
          style={{ width: "80%", height: "90%" }}
          src={image}
          className="card-img-top rounded-circle"
          alt="img"
        />
          <h5 className="card-title">{name}</h5>

        <ul className="list-group list-group-flush w-100">
          <li className="list-group-item bg-info ">Email: {email}</li>
          <li className="list-group-item bg-info">Age: {age}</li>
        </ul>
      </div>
    </div>
  );
};

export default Employee;
