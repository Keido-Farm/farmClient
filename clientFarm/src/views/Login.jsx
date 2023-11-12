import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/actions/actionCreator";
import "../css/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (event) => {
    const { target } = event;
    const { value, name } = target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitLogin = async (event) => {
    try {
      event.preventDefault();
      await login(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged In",
        showConfirmButton: false,
        timer: 1500,
      });
      const role = localStorage.getItem("role");
      if (role == "admin") {
        navigate("/");
      } else if (role == "abk") {
        navigate("/daily-report");
      } else if (!role) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Role Error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card" style={{ maxWidth: "600px" }}>
            <div className="card-body">
              <div className="text-center mb-3">
                <img
                  src="https://ik.imagekit.io/dug63etx5/keido.png?updatedAt=1699380709557"
                  alt="Keido Logo"
                  style={{ maxWidth: "200px", marginBottom: "20px" }}
                />
                <h2 className="card-title">Login</h2>
              </div>
              <form onSubmit={onSubmitLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success btn-block">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-right mt-3">
                <Link to="/register-abk">Register ABK</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
