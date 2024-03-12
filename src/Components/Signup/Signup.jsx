import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../lib/appwrite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupfun = (e) => {
    //appwrite configuration
    e.preventDefault();
    console.log(userData);
    const signupPromise = account.create(
      userData.name,
      userData.email,
      userData.password,
      userData.name
    );
    signupPromise.then(
      (res) => {
        toast.success("Sign up successfull");
        console.log(res);
        setTimeout(() => {
          navigate("/Login");
        }, 2200);
      },
      (err) => {
        toast.error("User already exits");
        console.log(err);
      }
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div className="custom-form-box">
        <ToastContainer />
        <form className="custom-form">
          <span className="custom-title">Sign up</span>
          <span className="custom-subtitle">
            Create a free account with your email.
          </span>
          <div className="custom-form-container">
            <input
              type="text"
              className="custom-input"
              placeholder="Full Name"
              value={userData.name}
              onChange={(e) =>
                setuserData({ ...userData, name: e.target.value })
              }
            />
            <input
              type="email"
              className="custom-input"
              placeholder="Email"
              value={userData.email}
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="custom-input"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setuserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button className="custom-button" onClick={signupfun}>
            Sign up
          </button>
        </form>
        <div className="custom-form-section">
          <p>
            Have an account? <Link to="login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
