import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginAsync } from "../../../api/loginAPI.ts";

export default function LoginForm() {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    loginAsync(formData.email, formData.password).then((res) => {
      if (res.success) {
        toast.success("Login successful");
        navigate("/");
      }
    });
  };

  return (
    <div class="contain py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
        <p class="text-gray-600 mb-6 text-sm">welcome back customer</p>
        <form action="#" method="post" autocomplete="off">
          <div class="space-y-2">
            <div>
              <label for="email" class="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="password" class="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                class="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label for="remember" class="text-gray-600 ml-3 cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="#" class="text-primary">
              Forgot password
            </a>
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              onClick={submit}
            >
              Login
            </button>
          </div>
        </form>
        <div class="mt-6 flex justify-center relative">
          <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div class="mt-4 flex gap-4">
          <a
            href="#"
            class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            facebook
          </a>
          <a
            href="#"
            class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            google
          </a>
        </div>

        <p class="mt-4 text-center text-gray-600">
          Don't have account?
          <a
            href="#"
            class="text-primary"
            onClick={() => navigate("/register")}
          >
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}
