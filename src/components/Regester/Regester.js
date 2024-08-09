import React from "react";
import "./Regester.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Regester(props) {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [passwoord, setPassWoord] = useState("");
  const [confirmpassWoord, setConfirmPassWoord] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login");
  };
  // sử dụng useEffect để kết nôi với backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
      console.log(data);
    });
  }, []);

  const isvalidinput = () => {
    let userdata = [email, username, phone, passwoord, confirmpassWoord];
    if (!email) {
      toast.error("you forget insert email !");
    }
    if (!username) {
      toast.error("you forget username !");
    }
    if (!phone) {
      toast.error("you forget insert phone !");
    }
    if (!passwoord) {
      toast.error("you forget insert password ! ");
    }
    if (passwoord != confirmpassWoord) {
      toast.error("confirm passwoord wrong ! ");
    }
    var re = /\S+@\S+\.\S+/;
    if( ! re.test(email)){
      toast.error("you need to insert right email address ! ");
    }
    return true;
  };
  // xur lý validex
  const handleRegester = () => {
    let check = isvalidinput();
    if(check === true ){
     axios.post("http://localhost:8080/api/v1/regester", {
      email, username, phone, passwoord
    })
    }
  };

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
              value={email}
              onChange={(email) => setEmail(email.target.value)}
            ></input>
          </div>
          <div>
            <label>Your Name</label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Your name "
              value={username}
              onChange={(username) => setUserName(username.target.value)}
            ></input>
          </div>
          <div>
            <label>Phone Number </label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Phone Number "
              value={phone}
              onChange={(phone) => setPhone(phone.target.value)}
            ></input>
          </div>
          <div>
            <label>passwoord</label>
            <input
              type="Passwoord"
              className="form-control mt-3"
              placeholder="Password "
              value={passwoord}
              onChange={(passwoord) => setPassWoord(passwoord.target.value)}
            ></input>
          </div>
          <div>
            <label>Re Enter passwoord</label>
            <input
              type="Passwoord"
              className="form-control mt-3"
              placeholder="Re enter password "
              value={confirmpassWoord}
              onChange={(confirmpassWoord) =>
                setConfirmPassWoord(confirmpassWoord.target.value)
              }
            ></input>
          </div>
          <a className="inline text-center mt-3"> Foget passwoord </a> <hr />
          <button
            className="btn btn-primary mb-3 "
            onClick={() => handleRegester()}
          >
            {" "}
            Regester{" "}
          </button>{" "}
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
