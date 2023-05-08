import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";
import {
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was send");
    } catch (error) {
      toast.error("Could not reset password");
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.istockphoto.com/id/1216554365/tr/foto%C4%9Fraf/tu%C5%9Flar%C4%B1-heyecanl%C4%B1-gen%C3%A7-ev-sahibi-taraf%C4%B1ndan-d%C3%BCzenlenen-odaklan%C4%B1n.jpg?s=612x612&w=0&k=20&c=Y-qCHUnl32E0Nq2zF8usNm_9V_73TSCseBODJrwZxVc="
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white
            border-gray-300 rounded transition ease-in-out"
            />

            <div
              className="flex justify-between whitespace-nowrap text-sm
            sm:text-lg"
            >
              <p className="mb-6">
                {" "}
                Have a account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700 transition duration-200
                ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200
                ease-in-out "
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700
          transition duration-150 ease-in-out hover:shadow-lg active: bg-blue-800"
              type="submit"
            >
              Send reset password
            </button>
            <div
              className="flex items-center my-4 
          before:border-t  before:flex-1
           before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
