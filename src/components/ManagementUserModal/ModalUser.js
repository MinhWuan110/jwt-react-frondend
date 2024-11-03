import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { fetchGroupapi } from "../../service/api";
import _ from "lodash";
import { toast } from "react-toastify";
import axios from "axios";
import { redirect } from "react-router-dom";

function ModalUser(props) {
  const defaultUserData = {
    email: "",
    phone: "",
    username: "",
    password: "",
    sex: "Male", // Mặc định là Male
    group: "",
  };

  const defaultValidInput = {
    email: true,
    phone: true,
    username: true,
    password: true,
    sex: true,
    group: true,
  };

  const [userData, setUserData] = useState(defaultUserData);
  const [validInput, setValidInput] = useState(defaultValidInput);
  const [listGroup, setListGroup] = useState([]);

  useEffect(() => {
    fetchGroup();
  }, []);

  const fetchGroup = async () => {
    let response = await fetchGroupapi();
    if (response && response.data && response.data.EC === 0) {
      setListGroup(response.data.DT);
    }
  };

  const checkValidInput = () => {
    setValidInput(defaultValidInput);
    let arr = ["email", "phone", "password", "group"];
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (!userData[arr[i]]) {
        toast.error(`Input is empty: ${arr[i]}`);
        let _validInputs = _.cloneDeep(defaultValidInput);
        _validInputs[arr[i]] = false;
       
       
        check = false;
        break;
      }
    }
    return check;
  };

  const handleOnChangeInput = (value, name) => {
    let _userData = _.cloneDeep(userData);
    _userData[name] = value;
    setUserData(_userData);
  };

  const handleConfirmUser = async () => {
    if (checkValidInput()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/users/create",
          userData
        ); // Thay đổi URL cho phù hợp với API của bạn
        if (response.data.EC === 0) {
          toast.success("User saved successfully!");
          setUserData(defaultUserData); // Reset userData
          props.onHide(); // Đóng modal sau khi lưu
          window.location.reload(); // Load lại trang
        } else {
          toast.error("Failed to save user.");
        }
      } catch (error) {
        toast.error("Error saving user: " + error.message);
        console.log(error);
      }
    }
  };
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="title-create-new-user">Create A New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>
            Email <span>*</span>
          </label>
          <input
            type="text"
            className={
              validInput.email
                ? "form-control mt-3"
                : "form-control mt-3 is-invalid"
            }
            placeholder="Your email"
            value={userData.email}
            onChange={(event) =>
              handleOnChangeInput(event.target.value, "email")
            }
          />
        </div>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            className={
              validInput.username
                ? "form-control mt-3"
                : "form-control mt-3 is-invalid"
            }
            placeholder="Your name"
            value={userData.username}
            onChange={(event) =>
              handleOnChangeInput(event.target.value, "username")
            }
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            className={
              validInput.phone
                ? "form-control mt-3"
                : "form-control mt-3 is-invalid"
            }
            placeholder="Phone Number"
            value={userData.phone}
            onChange={(event) =>
              handleOnChangeInput(event.target.value, "phone")
            }
            autoComplete="off"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className={
              validInput.password
                ? "form-control mt-3"
                : "form-control mt-3 is-invalid"
            }
            placeholder="Password"
            value={userData.password}
            onChange={(event) =>
              handleOnChangeInput(event.target.value, "password")
            }
            autoComplete="off"
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            className={
              validInput.sex
                ? "form-select mt-3"
                : "form-select mt-3 is-invalid"
            }
            aria-label="Default select example"
            onChange={(event) => handleOnChangeInput(event.target.value, "sex")}
            value={userData.sex}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Group</label>
          <select
            className={
              validInput.group
                ? "form-select mt-3"
                : "form-select mt-3 is-invalid"
            }
            aria-label="Default select example"
            onChange={(event) =>
              handleOnChangeInput(event.target.value, "group")
            }
            value={userData.group}
          >
            <option value="">Select group</option>
            {listGroup.length > 0 &&
              listGroup.map((item, index) => (
                <option key={`group-${index}`} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={props.onHide} class="btn btn-success">
          Close
        </button>
        <button variant="primary" onClick={handleConfirmUser} class="btn btn-success">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUser;
