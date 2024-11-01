// import React from "react";

import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {
  const user = useLoaderData();
  const { name, email } = user;
  return (
    <div>
      <h2>Details About USer :{name} </h2>
      <p>name:{name}</p>
      <p>email :{email} </p>
    </div>
  );
};

export default UsersDetails;
