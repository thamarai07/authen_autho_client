import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getInputValue } from '../redux/slice';
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(getInputValue({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://authen-autho-server.onrender.com/api/auth/register', { name, email, password });
      alert(res.data.message || 'User registered successfully');
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || 'Registration failed');
    }
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Create an account
              </button>
              <button
                type="button"
                onClick={handleGoToLogin}
                className="w-full text-blue-600 border border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 dark:text-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
