import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="h-screen -m-[2rem] w-[full] flex items-center justify-center">
      <div className="h-96 w-88 rounded-xl bg-slate-200">
        <div className="p-5 text-center text-3xl font-bold">Login</div>
        <form className="text-start px-5 text-xl" onSubmit={()=>{navigate("/")}}>
          <div className="flex">
            <div className="my-5 flex flex-col">
              <label htmlFor="name" className="my-5">
                Name
              </label>
              <label htmlFor="email" className="my-5">
                Email
              </label>
              <label htmlFor="password" className="my-5">
                Password
              </label>
            </div>
            <div className="my-5 flex flex-col">
              <input
                type="text"
                required
                id="name"
                className="ml-4 rounded-md my-4 p-1"
              ></input>
              <input
                type="email"
                required
                id="email"
                className="ml-4 rounded-md my-4 p-1"
              ></input>
              <input
                type="password"
                required
                id="password"
                className="ml-4 rounded-md my-4 p-1"
              ></input>
            </div>
          </div>
          <div className="w-full text-center">
              <button type="submit" className="p-2 rounded-md bg-red-400">
                Submit
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login