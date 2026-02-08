import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log("Login success:", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log("Google login success:", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary">
            🏥 HospitalCare Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <input
              className="input input-bordered w-full"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            <button className="btn btn-primary w-full">Login</button>
          </form>

         <button
  onClick={handleGoogleLogin}
  className="btn bg-white text-black border w-full mt-3 flex items-center justify-center gap-2"
>
  <FaGoogle className="text-red-500 text-lg" />
  Login with Google
</button>

          <p className="text-center mt-4">
            New here? <Link to="/register" className="text-primary">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
