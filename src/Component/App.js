import React from "react";
import Login from "./Login";
import Register from "./Register";
import Route from "./Route";
import Header from "./Header";

// const showLogin = () => {
//   if (window.location.pathname === "/") {
//     return <Login />;
//   }
// };

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
};

export default App;
