import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../store/actions/actionCreator"; 
import "../css/register.css"; 

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
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

  const onSubmitRegister = async (event) => {
    try {
      event.preventDefault();
      await register(user); 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "ABK Registered",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login"); 
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
                <h2 className="card-title">Register ABK</h2>
              </div>
              <form onSubmit={onSubmitRegister}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={onChangeInput}
                  />
                </div>
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
                    Register
                  </button>
                </div>
              </form>
              <div className="text-right mt-3">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

