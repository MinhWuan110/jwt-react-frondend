import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { fetchGroupapi } from "../../service/api";
import _ from "lodash";

function ModalUser(props) {
  const defaultUserData = {
    email: "",
    phone: "",
    username: "",
    password: "",
    sex: "",
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
  const [validInput, setValidInput] = useState(defaultValidInput)

  // const checkValidInput = () => {
  //   setValidInput(defaultUserData)
  //   let arr = ['email', 'phone', 'pass']
  // }

  const [listGroup, setListGroup] = useState([]);
  useEffect(() => {
    fetchGroup();
  }, []);

  const fetchGroup = async () => {
    let respone = await fetchGroupapi();
    if (respone && respone.data && respone.data.EC === 0) {
      setListGroup(respone.data.DT);
    }
  };

  const handleOnChangeInput = (value, name) => {
    let _userData = _.cloneDeep(userData);
    _userData[name] = value;
    setUserData(_userData);
  };

  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title id="title create new user">
            Create A New User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>
              email <span>*</span>
            </label>
            <input
              type="text"
              className={validInput.email ? "form-control mt-3" : "form-control mt-3 is-invalid"}
              placeholder="Your name "
              value={userData.email}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "email")
              }
            ></input>
          </div>
          <div>
            <label>Your Name </label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="your name "
              value={userData.username}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "username")
              }
            ></input>
          </div>
          <div>
            <label>Phone Number </label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Phone Number "
              value={userData.phone}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "phone")
              }
            ></input>
          </div>
          <div>
            <label>password</label>
            <input
              type="Password"
              className="form-control mt-3"
              placeholder="Password "
              value={userData.password}
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "password")
              }
            ></input>
          </div>
          <div>
            <label>Gender</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "sex")
              }
              // value={userData.sex}
            >
              <option defaultValue>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label>Group</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) =>
                handleOnChangeInput(event.target.value, "group")
              }
              // value={userData.group}
            >
              {listGroup.length > 0 &&
                listGroup.map((item, index) => {
                  return (
                    <option key={`group-${index}`} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalUser;
