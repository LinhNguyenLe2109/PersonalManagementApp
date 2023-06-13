"use client";
import CustomInput from "@/components/CustomInput";
import PageContainer from "@/components/PageContainer";
import React from "react";

function Authentication() {
  const [haveAccount, setHaveAccount] = React.useState(true);
  return (
    <PageContainer>
      <h1 className="text-3xl font-medium">{haveAccount ? "Log in" : "Create user account"}</h1>
      <div id="logInForm" className="flex flex-col">
        <CustomInput type="text" placeHolder="Username" />
        <CustomInput type="password" placeHolder="Password" />
        {!haveAccount && (
          <CustomInput type="password" placeHolder="Confirm password" />
        )}
        <button className="px-4 py-2 bg-blue4 hover:bg-blue2">{haveAccount ? "Log in" : "Sign up"}</button>
      </div>

      <p
        onClick={() => setHaveAccount(!haveAccount)}
        className="text-blue4 hover:text-blue5 hover:underline cursor-pointer"
      >
        {haveAccount
          ? "Don't have your account? Click here to sign up"
          : "Already have your account? Click here to log in"}
      </p>
      <p>Forgot your password? Click here to reset</p>
    </PageContainer>
  );
}

export default Authentication;
