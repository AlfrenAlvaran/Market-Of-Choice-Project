import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AuthForm = ({ type }) => {
  const fields =
    type === "sign-in"
      ? [
          { label: "Email", id: "email", type: "email" },
          { label: "Password", id: "password", type: "password" },
        ]
      : [
          { label: "Full Name", id: "fullname", type: "text" },
          { label: "Email", id: "email", type: "email" },
          { label: "Phone Number", id: "phone", type: "tel" },
          { label: "Password", id: "password", type: "password" },
        ];

  return (
    <>
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">
          {type === "sign-in" ? "Welcome Back!" : "Create Account"}
        </span>
        <span className="font-light text-gray-400 mb-8">Market Of Choice</span>

        {fields.map((field) => (
          <div key={field.id} className="py-4">
            <span className="mb-2 text-md">{field.label}</span>
            <input
              type={field.type}
              id={field.id}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
        ))}

        {type === "sign-in" ? (
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" className="mr-2" />
              <span className="text-nd">Remember me</span>
            </div>
            <Link to="forgot-password" className="font-bold text-md">
              Forgot Password
            </Link>
          </div>
        ) : (
          <></>
        )}

        <Button>{type === "sign-in" ? "Sign In" : "Sign Up"}</Button>

        <div className="text-center text-gray-400 mt-4">
          {type === "sign-in" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link to="/sign-up" className="font-bold text-black">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/sign-in" className="font-bold text-black cursor-pointer">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="relative">
        <img
          src={type === "sign-in" ? "/sign-in.svg" : "/sign-up.svg"}
          alt="left"
          className="w-[400px] h-[500px] hidden rounded-r-2xl md:block object-cover"
        />
      </div>
    </>
  );
};

export default AuthForm;
