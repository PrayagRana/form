import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { createUser } from "../../actions/userActions";

const UserForm = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");
  const [number, setNumber] = useState();
  return (
    <div>
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        id=""
        placeholder="Enter your Name"
      />
      <br />
      Email
      <input
        type="text"
        id=""
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      Number
      <input
        type="number"
        id=""
        placeholder="Enter your Number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      Designation
      <input
        type="text"
        id=""
        placeholder="Enter your Designation"
        value={designation}
        onChange={(e) => {
          setDesignation(e.target.value);
        }}
      />
      <br />
      City
      <input
        type="text"
        id=""
        placeholder="Enter your City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          props.createUser({ name, email, number, city, designation });
          history.push("/");
        }}
      >
        Submit
      </button>
    </div>
  );
};

UserForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default connect(null, {
  createUser,
})(UserForm);
