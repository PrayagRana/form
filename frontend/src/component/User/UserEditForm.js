import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { createUser, updateUser } from "../../actions/userActions";

const UserEditForm = (props) => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");
  const [number, setNumber] = useState();
  const [id, setID] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    var obj = JSON.parse(localStorage.getItem("user"));
    setName(obj.name);
    setEmail(obj.email);
    setCity(obj.city);
    setDesignation(obj.designation);
    setNumber(obj.number);
    setID(obj._id);
    console.log(name);
  }, [localStorage.getItem("user")]);

  return (
    <div>
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your Name"
      />
      <br />
      Email
      <input
        type="text"
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
        placeholder="Enter your City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          props.updateUser({ name, email, number, city, designation }, id);
          history.push("/");
        }}
      >
        Submit
      </button>
    </div>
  );
};

UserEditForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, {
  updateUser,
})(UserEditForm);
