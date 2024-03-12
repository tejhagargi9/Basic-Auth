import React, { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Printinfo = () => {
  const [userInfo, setuserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userinfopromise = account.get();
    userinfopromise.then(
      (res) => {
        setuserInfo(res);
      },
      () => {
        console.log("error");
      }
    );
  });

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setTimeout(() => {
        navigate("/Login");
      }, 2300);
      toast("Logged out");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <ToastContainer />
      <h1 className="print">User Info:</h1>
      <h3 className="print">name: {userInfo.name}</h3>
      <h3 className="print">email: {userInfo.email}</h3>
      <button className="logout-btn" onClick={logout}>
        Log out
      </button>
      {/* <h3>{userInfo.}</h3> */}
    </div>
  );
};

export default Printinfo;
