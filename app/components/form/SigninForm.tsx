"use client";

import { useState } from "react";

const SigninForm = () => {
  const [signinForm, setSigninForm] = useState({
    username: "",
    password: "",
  });

  const handleInputOnChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setSigninForm({ ...signinForm, [name]: value });
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Username:", signinForm.username);
    console.log("Password:", signinForm.password);
  };

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleSignIn}>
        <div>
          <label htmlFor="username" className="cursor-pointer text-sm pb-2">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Enter username"
            className="input w-full max-w-xs"
            value={signinForm.username}
            onChange={handleInputOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="cursor-pointer text-sm pb-2">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            className="input w-full max-w-xs"
            value={signinForm.password}
            onChange={handleInputOnChange}
            required
          />
        </div>

        <div>
          <button className="btn btn-neutral">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
