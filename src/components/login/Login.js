import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {loginapi} from "../../service/api"

function Login(props) {

  const defaultcolor = {
    checkColorValueLogin: true ,
    checkColorPassword : true 
  }

  const [validValueLogin, setisvalidValueLogin] = useState("")
  const [validPassword, setisvalidPassword] = useState("")
  const [isCheckColorInput, setCheckColorInput] = useState(defaultcolor)


  const navigate = useNavigate()
  const handleNewAccount = () =>{
    navigate("/Regester")
  }

  const handleLogin = async () => {
    setCheckColorInput(defaultcolor)
    if(!validValueLogin)
    {
      setCheckColorInput({...defaultcolor,checkColorValueLogin:false})
      toast.error("Foget insert email or phone number ")
      return;
    }
    if(!validPassword)
    {
      toast.error("Foget insert Password ")
      setCheckColorInput({...defaultcolor,checkColorPassword:false})
      return;
    }

    await loginapi(validValueLogin,validPassword)
    navigate("/Home")

  }

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
          <input
            type="text"
            className={isCheckColorInput.checkColorValueLogin ? "form-control mt-3" : " is-invalid form-control mt-3"} 
            placeholder="sign in by number phone or email "
            value={validValueLogin}
            onChange={(event) => setisvalidValueLogin(event.target.value)}
          ></input>
          <input
            type="password"
            className={isCheckColorInput.checkColorPassword ? "form-control mt-3" : "is-invalid form-control mt-3" } 
            placeholder="import password "
            value={validPassword}
            onChange={(event) => setisvalidPassword(event.target.value)}
          ></input>
          <a className="inline text-center mt-3" > Foget your passwoord </a> <hr />
          <button className="btn btn-primary mb-3 " onClick={()=>handleLogin()}> Sign in </button>{" "}
          <div className="text-center">
            <button className="btn btn-success mb-3 " onClick={()=>handleNewAccount()}> Sign up </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Login;
