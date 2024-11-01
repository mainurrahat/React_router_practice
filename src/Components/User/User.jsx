// import React from "react";

import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email, phone } = user;
  return (
    <div className="userStyle">
      <h2>user id :-{id} </h2>
      <p>user name :-{name} </p>
      <p>user username :- {username} </p>
      <p>user email :-{email} </p>
      <p>user phone :- {phone} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
