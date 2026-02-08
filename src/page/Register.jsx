import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(data.password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain uppercase, lowercase & minimum 6 characters",
      });
      return;
    }

    registerUser(data.email, data.password)
      .then((result) => {
        updateUserProfile({
          displayName: data.name,
          photoURL: data.photoURL,
        });

        // Save user info to MongoDB or backend
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.role,
          photoURL: data.photoURL,
          specialization: data.specialization || "",
          fee: data.fee || "",
        };

        console.log("User Data:", userInfo);

        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary">
            🏥 Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <input
              className="input input-bordered w-full"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />

            <input
              className="input input-bordered w-full"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            {/* Photo Upload */}
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              {...register("photo", { required: true })}
            />

            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            {/* Role Selection */}
            <select
              className="select select-bordered w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              {...register("role")}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>

            {/* Doctor Extra Fields */}
            {role === "doctor" && (
              <>
                <input
                  className="input input-bordered w-full"
                  placeholder="Specialization"
                  {...register("specialization", { required: true })}
                />

                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Consultation Fee"
                  {...register("fee", { required: true })}
                />
              </>
            )}

            {/* Admin Extra Note */}
            {role === "admin" && (
              <p className="text-sm text-warning">
                ⚠ Admin accounts require special approval after registration.
              </p>
            )}

            <button className="btn btn-primary w-full">Register</button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
