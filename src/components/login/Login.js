import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginapi } from "../../service/api";
import "./Login.css";

const Login = () => {
  const defaultColor = {
    checkColorValueLogin: true,
    checkColorPassword: true,
  };

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCheckColorInput, setCheckColorInput] = useState(defaultColor);
  
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setCheckColorInput(defaultColor);
    
    if (!inputUsername) {
      setCheckColorInput({ ...defaultColor, checkColorValueLogin: false });
      toast.error("Please enter your username or email.");
      setLoading(false);
      return;
    }
    
    if (!inputPassword) {
      setCheckColorInput({ ...defaultColor, checkColorPassword: false });
      toast.error("Please enter your password.");
      setLoading(false);
      return;
    }

    let login = await loginapi(inputUsername, inputPassword);
    if (login && login.data && +login.data.EC === 0) {
      let data = {
        isAuthenticated: true,
        token: 'fake token'
      };
      sessionStorage.setItem('account', JSON.stringify(data));
      navigate("/User");
    } else {
      setShow(true);
      toast.error(login.data.EM);
    }
    
    setLoading(false);
  };

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background/BackGroundLogin.avif)` }}
    >
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleLogin}>
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Sign In</div>
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Gmail User</Form.Label>
          <Form.Control
            type="text"
            className={
              isCheckColorInput.checkColorValueLogin
                ? "form-control"
                : "is-invalid form-control"
            }
            value={inputUsername}
            placeholder="Username or email"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className={
              isCheckColorInput.checkColorPassword
                ? "form-control"
                : "is-invalid form-control"
            }
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button
            className="text-muted px-0"
            variant="link"
            onClick={() => navigate("/ForgotPassword")}
          >
            Forgot password?
          </Button>
        </div>
      </Form>
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Hendrik C | &copy;2022
      </div>
    </div>
  );
};

export default Login;