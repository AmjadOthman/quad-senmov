import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (email && pass) {
      if (!emailRegex.test(email)) {
        setIsError(true);
        setError("Invalid Email");
      }
    }
  };
  return (
    <form className="flex flex-col items-center gap-5 mt-32 p-5 w-1/2  border rounded-md shadow-md bg-gradient-to-r from-gray-600/90 to-white">
      <h3 className="text-xl font-bold">Log in</h3>

      <div className="flex justify-around items-center gap-1  w-1/2 ">
        <label htmlFor="email" className="text-lg p-1 m-3 text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border w-3/4 rounded-md p-0.5"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
      </div>

      <div className="flex justify-around items-center gap-1  w-1/2 ">
        <label htmlFor="password" className="text-lg m-1 p-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border rounded-md p-0.5 w-3/4"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={pass}
          required
        />
      </div>
      <div className="flex justify-end items-center gap-1  w-1/2">
        <button
          onClick={handleSubmit}
          className="p-2 m-1 border rounded-md bg-gray-600/90 text-white hover:"
        >
          login
        </button>
      </div>
    </form>
  );
}

export default Form;
