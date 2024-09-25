import React from "react";
import { LoginForm } from "../../components";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome back to Branding Hopes! Log in to access your account and continue your journey with our digital marketing services and resources."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/login" />
      </Helmet>

      <div className="landingContainer  h-screen flex justify-center items-center min-h-dvh">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
