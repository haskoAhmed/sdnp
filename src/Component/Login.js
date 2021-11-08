import React, { useState } from "react";
import { onTermSubmit } from "../Api/confirm";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log({ mail, pass });
    await onTermSubmit({ mail, pass })
      .then((status) => {
        if (status > 300 || status >= 200) alert("success");
        else alert("fail");
      })
      .catch((err) => alert("error"));
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="ui form"
        style={{ width: "30%", justifyContent: "center" }}
      >
        <label className="la">E-mail</label>
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          type="email"
          required
        />
        <label>Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
