import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/Logo.svg";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setUser({ email, password });
    navigate("/dashboard");
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  return (
    <div className="flex min-h-full">
      <div className="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-20">
        <div className="mx-auto w-full max-w-[24rem] 2xl:max-w-[28rem] lg:w-[30rem] xl:w-[28rem]">
          <div className="flex justify-center pt-20 min-h-[90vh] md:items-center md:pt-0">
            <div className="w-full">
              <div>
                <img className="w-auto h-12" src={logo} alt="logo" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  {/* form section  */}
                  <form onSubmit={handleSubmit} method="" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={onChangeEmail}
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={onChangePassword}
                          autoComplete="current-password"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary500 accent-primary"
                        />
                        <label
                          htmlFor="remember-me"
                          className="block ml-2 text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      {/* <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-primary hover:text-green-700"
                        >
                          Forgot your password?
                        </a>
                      </div> */}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green500"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <img
          className="absolute inset-0 h-[90vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
