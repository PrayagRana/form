import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteUser, getUsers } from "../../actions/userActions";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

const Users = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.getUsers();
  });
  return (
    <div>
      <h1>User List</h1>
      <Link to="/createUser">Add User</Link>
      <br />
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Number</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {props.users.length == 0 ? (
          <h1>No Users</h1>
        ) : (
          props.users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.number}</td>
                <td>{user.city}</td>
                <td>
                  <button
                    onClick={() => {
                      localStorage.setItem("user", JSON.stringify(user));
                      history.push("/editUser");
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.deleteUser(user._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </table>
    </div>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, {
  getUsers,
  deleteUser,
})(Users);
