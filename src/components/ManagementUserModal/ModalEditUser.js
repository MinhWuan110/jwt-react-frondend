import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { fetchGroupapi } from "../../service/api";

const ModalEditUser = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
    sex: "Male",
    groupid: "",
  });
  const [listGroup, setListGroup] = useState([]);

  useEffect(() => {
    if (props.userId) {
      fetchUserData(props.userId);
    }
    fetchGroup();
  }, [props.userId]);

  const fetchGroup = async () => {
    let response = await fetchGroupapi();
    if (response && response.data && response.data.EC === 0) {
      setListGroup(response.data.DT);
    }
  };

  const fetchUserData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/edit/${id}`
      );
      setUserData(response.data); // Lấy dữ liệu trực tiếp từ response.data
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Bạn có thể thêm thông báo cho người dùng tại đây
    }
  };

  const handleOnChangeInput = (value, field) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleConfirmUser = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/v1/user/edit/${props.userId}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      props.handleClose(); // Đóng modal sau khi cập nhật thành công
      window.location.reload(); // Load lại trang
    } catch (error) {
      console.error("Error updating user:", error);
      // Bạn có thể thêm thông báo cho người dùng tại đây
    }
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="title-edit-user">Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>
            Email <span>*</span>
          </label>
          <input
            type="email"
            className="form-control mt-3"
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
            className="form-control mt-3"
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
            className="form-control mt-3"
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
            className="form-control mt-3"
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
            className="form-select mt-3"
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
            className="form-select mt-3"
            onChange={(event) =>
              handleOnChangeInput(event.target.value, "group")
            }
            value={userData.group}
          >
            <option value="">Select group</option>
            {/* Thay thế bằng danh sách nhóm thực tế */}
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
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleConfirmUser}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditUser;
