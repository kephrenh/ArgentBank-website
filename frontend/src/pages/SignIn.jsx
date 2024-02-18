import React from "react";
import LoginForm from "../components/LoginForm";

const SignIn = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm buttonText="Sign In" />
      </section>
    </main>
  );
};

export default SignIn;
