import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

// import { fetchGetApi } from "../../service/api";

function ModalDelete(props) {
  const { userId, onDeleteSuccess, handleClose } = props;
  const handleConfirmDelete = async () => {
    try {
      const response = await axios(
        `http://localhost:8080/api/v1/user/delete/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Thêm token nếu cần
            // 'Authorization': `Bearer ${yourToken}`
          },
        }
      );

      // const response = await fetchGetApi(`http://localhost:8080/api/v1/user/delete/${userId}`, {
      //     method: "DELETE",
      //     headers: {
      //       "Content-Type": "application/json",

      //       // Thêm token nếu cần
      //       // 'Authorization': `Bearer ${yourToken}`
      //     },
      //   } )
      // console.log(response);
      // const data = await response.json();

      const data = response?.data;

      if (data?.EC === 0) {
        // Xử lý thành công, có thể gọi lại hàm để cập nhật danh sách người dùng
        // props?.onDeleteSuccess?.(); // Gọi hàm được truyền vào để cập nhật UI
        // props?.handleClose?.(); // Đóng modal

        onDeleteSuccess && onDeleteSuccess();
        handleClose && handleClose();

        alert(data?.EM);
        window.location.reload(); // Load lại trang
      } else {
        // Xử lý lỗi
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you really want to delete this user {props.email}!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;
