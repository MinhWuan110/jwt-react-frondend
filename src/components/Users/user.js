import React, { useState, useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import useAuthCheck from "../useAuthCheck";
import ReactPaginate from "react-paginate";
import { fetchUsersapi, deleteUser } from "../../service/api";
import { toast } from "react-toastify";
import ModalDelete from "../ManagementUserModal/ModalDelete";
import ModalUser from "../ManagementUserModal/ModalUser";
import ModalEditUser from "../ManagementUserModal/ModalEditUser";

function User() {
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(2);
  const [totalPage, setTotalPage] = useState(0);
  const [isShowModalDelete, setShowModalDelete] = useState(false);
  const [isShowModalUser, setShowModalUser] = useState(false);
  const [isShowModalEdit, setShowModalEdit] = useState(false);
  const [dataModal, setDataModal] = useState({});

  // Kiểm tra phiên đăng nhập
  useAuthCheck();

  const fetchUser = async () => {
    let users = await fetchUsersapi(currentPage, currentLimit);
    if (users && users.data && users.data.EC === 0) {
      setTotalPage(users.data.DT.totalPage);
      setListUsers(users.data.DT.users);
    } else {
      toast.error("Failed to fetch users.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const handleDelete = (user) => {
    setShowModalDelete(true);
    setDataModal(user);
  };

  const handleCloseDelete = () => {
    setShowModalDelete(false);
    setDataModal({});
  };

  const handleConfirmDelete = async () => {
    let response = await deleteUser(dataModal.id);
    if (response && response.data.EC === 0) {
      toast.success("Delete User Success");
      setShowModalDelete(false);
      fetchUser();
    } else {
      toast.error("Delete failed");
    }
  };

  const handleCreateUser = () => {
    setShowModalUser(true);
  };

  const handleCloseUserModal = () => {
    setShowModalUser(false);
  };

  const handleEditUser = (user) => {
    setShowModalEdit(true);
    setDataModal(user);
  };

  const handlecloseEditUser = () => {
    setShowModalEdit(false);
  };

  return (
    <MainLayout>
      <div className="user-management container">
        <div className="users-header">
          <div className="label">
            <h1>User Management</h1>
          </div>
          <div>
            <button className="btn btn-success" onClick={fetchUser}>
              Refresh
            </button>
            <button className="btn btn-primary" onClick={handleCreateUser}>
              Create a new user
            </button>
          </div>
        </div>
        <div className="users-body">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">User Name</th>
                <th scope="col">Sex</th>
                <th scope="col">Phone</th>
                <th scope="col">Group</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listUsers.length > 0 ? (
                listUsers.map((item, index) => (
                  <tr key={`row-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.sex}</td>
                    <td>{item.phone}</td>
                    <td>{item.Groupid ? item.Group.name : "N/A"}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEditUser(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ms-1"
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {totalPage > 0 && (
          <div className="users-footer">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPage}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        )}
      </div>
      <ModalDelete
        show={isShowModalDelete}
        handleClose={handleCloseDelete}
        handleConfirmDelete={handleConfirmDelete}
        email={dataModal?.email}
        userId={dataModal?.id}
      />
      <ModalUser show={isShowModalUser} onHide={handleCloseUserModal} />
      <ModalEditUser
        show={isShowModalEdit}
        onHide={handlecloseEditUser}
        handleClose={handlecloseEditUser}
        userId={dataModal?.id}
      />
    </MainLayout>
  );
}

export default User;
