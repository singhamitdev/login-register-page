import React from "react";
import Input from "./Input";

var isRegistered = false;
function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {!isRegistered && (
        <Input type="Confirm password" placeholder="Confirm Password" />
      )}
      <button type="submit">{isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}
export default Login;
