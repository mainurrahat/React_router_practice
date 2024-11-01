// import React from 'react'

import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>oooopssssssssssss!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>page not found</h3>
          <p>Go back where u from</p>
          <Link to="/">
            <button>HOme</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
