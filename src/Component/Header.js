import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Login
      </Link>
      <Link href="/register" className="item">
        Register
      </Link>
     
    </div>
  );
};

export default Header;
