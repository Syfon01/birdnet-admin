import React from 'react'
import {Link} from "react-router-dom"
const Error = () => {
  return (
    <div className="container">
      <div className="flex min-h-screen justify-center items-center">
        <div>
          <h1 className="text-2xl">Hey! Seem you are lost</h1>
          Kindly click on the link below to go back to Home page
          <div className="mt-6">
            <Link
              to="/"
              className="btn bg-green-600 hover:bg-green-700 text-white"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error