import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { fetchGroupapi } from "../../service/api";
import { ListGroup } from "react-bootstrap";

function ModalUser(props) {
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
              className="form-control mt-3"
              placeholder="Your name "
            ></input>
          </div>
          <div>
            <label>Your Name </label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Phone Number "
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
            <label>password</label>
            <input
              type="Password"
              className="form-control mt-3"
              placeholder="Password "
            ></input>
          </div>
          <div>
            <label>Gender</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label>Group</label>
            <select className="form-select" aria-label="Default select example">
                {listGroup.length > 0 && listGroup.map((item, index) =>{
                    return (
                        <option key={`group-${index}`} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalUser;
