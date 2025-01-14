import React, { useState } from "react";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
const Login: React.FunctionComponent = () => {

  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
          email: '',
          password: '',
        });
      
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target; 
          setFormData({ ...formData, [name]: value });
        };
      
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const {data} = await login(formData)
          console.log('Form Data:', data);
          if (data?.access_token) {
            console.log("hh",data.userData);
            setUser(data.userData)
            localStorage.setItem('access_token',data.access_token);
            navigate('/home')
          } else {
            console.log('No access token received');
          }

        };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Login to access your account
        </p>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <InputField
              id="email"
              type="email"
              name="email"
              value={formData.email}

              height="h-10"
              width="w-full"
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <InputField
              id="password"
              type="password"
              name="password"
              value={formData.password}
              height="h-10"
              width="w-full"
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <Button
            color="bg-blue-500"
            label="Sign In"
            height="h-10"
            width="w-full"
          />
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
