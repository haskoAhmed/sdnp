import React from "react";

const Register = () => {
   
  return (
    <div>
      <form className="ui form">
        <label>full name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>phone number</label>
        <input type="number" required />
        <label>pass word</label>
        <input type="password" required />
      </form>
    </div>
  );
};

export default Register;
