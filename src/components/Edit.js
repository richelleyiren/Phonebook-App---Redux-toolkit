import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllContacts from './AllContacts';

function Edit() {
  return (
    <div className="card-container">
      <div className="main-card">
        <h2> Edit Contact</h2>

        <form className=" form" onSubmit="">
          <div className="form form-one">
            <label> Contact Name</label>
            <input
              type="text"
              //   value={name}
              //   onChange={handleNameChange}
              name="Name"
              placeholder=" Enter Name"
            ></input>
          </div>

          <div className="form form-two">
            <label> Contact Number</label>
            <input
              type="text"
              //   value={number}
              //   onChange={handleNumberChange}
              name="Number"
              placeholder="Enter Number"
            ></input>
          </div>
          <div className="buttons">
            <button type="submit" onClick="" className="edit">
              {" "}
              Edit
            </button>
            <Link to="/contacts" className="cancel">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Edit;
