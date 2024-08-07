import React from "react";
import "./Regester.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Regester(props) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login");
  };
// sử dụng useEffect để kết nôi với backend 
  useEffect(() => {
    axios.get("http://localhost:8080/api/test-api").then(data => {
      console.log(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row px-3 px-sm-0">
        <div className="content-left col-7  mt-3 d-none d-sm-block text-primary">
          <div className="text-center">
            
            <h3 className="fw-bold"> Shop Minh Wuan </h3>{" "}
          </div>
          <div className="text-center">
            
            <h3> Here we have many item about smartphone and laptop </h3>{" "}
          </div>
        </div>
        <div className="content-right  col-12 col-sm-5 d-flex flex-column mt-3 shadow p-3 mb-5 bg-body rounded">
          <div className="text-center d-sm-none">
            
            <h3 className="fw-bold text-primary "> Shop Minh Wuan </h3>{" "}
          </div>
          <h2 className="text-center"> Sign in </h2>{" "}
          <div>
            <label>Email</label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Email address "
            ></input>
          </div>
          <div>
            <label>Your Name</label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Your name "
            ></input>
          </div>
          <div>
            <label>Phone Number </label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Phone Number "
            ></input>
          </div>
          <div>
            <label>passwoord</label>
            <input
              type="Passwoord"
              className="form-control mt-3"
              placeholder="Password "
            ></input>
          </div>
          <div>
            <label>Re Enter passwoord</label>
            <input
              type="Passwoord"
              className="form-control mt-3"
              placeholder="Re enter password "
            ></input>
          </div>
          <a className="inline text-center mt-3"> Foget passwoord </a> <hr />
          <button className="btn btn-primary mb-3 "> Sign in </button>{" "}
          <div className="text-center">
            <button
              className="btn btn-success mb-3 "
              onClick={() => handleLogin()}
            >
              
              Already've an account logn in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regester;
