import React from "react";
import { SignUpForm } from "../../components";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Join Branding Hopes today! Sign up to access our digital marketing services and resources, and start your journey towards elevating your brand."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/signup" />
      </Helmet>

      <div className="landingContainer h-screen flex justify-center items-center min-h-dvh">
        <SignUpForm />
      </div>
    </>
  );
};

export default Signup;
