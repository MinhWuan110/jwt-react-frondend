import React, { useState, useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import useAuthCheck from "../useAuthCheck";
import ReactPaginate from "react-paginate";
import { fetchUsersapi, deleteUser } from "../../service/api";
import { toast } from "react-toastify";
import ModalDelete from "../ModalDelete/ModalDelete"

function User() {
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(2);
  const [totalPage, setTotalPage] = useState(0);
  const [isShowModalDelete, setShowModalDelete] = useState(false)
  const [dataModal, setDataModal] = useState({})
  // gọi hàm kiểm tra phiên đăng nhập
  useAuthCheck();

    const fetchUser = async () => {
    let users = await fetchUsersapi(currentPage, currentLimit);
    // console.log(users)
    if (users && users.data && users.data.EC === 0) {
      console.log(users.data.DT)
      setTotalPage(users.data.DT.totalPage);
      setListUsers(users.data.DT.users);
    }
      // console.log(users.data.DT);
    
  };



  useEffect(() => {
    fetchUser();
  }, [currentPage]);


  const handlePageClick =async (event) => {
    console.log(">> check data click: ", event)
    setCurrentPage(event.selected+1)
    await fetchUser();


  };

  const handleDelete = async (user) => {
    setShowModalDelete(true)
    setDataModal(user)
    //  let respone = await deleteUser(user)
    //  if(respone && respone.data.EC === 0 ){
    //   toast.success("Detele User Success")
    //  }
    //  else{
    //   toast.error("Delete wrong ")
    //  }
    //  fetchUser()
    
  }

  const handleClose = () => {
    setShowModalDelete(false)
    setDataModal({})
  }

  const handleConfirmDelete = async () => {
     let respone = await deleteUser(dataModal)
     if(respone && respone.data.EC === 0 ){
      toast.success("Detele User Success")
      setShowModalDelete(false)
     }
     else{
      toast.error("Delete wrong ")
     }
     fetchUser()
  }

  

  return (
    <MainLayout>
      <div className="user-management container">
        <div className="users-header">
          <div className="label">
            <h1>Đây là trang user</h1>
          </div>
          <div>
            <button className="btn btn-success">Refresh</button>
            <button className="btn btn-primary">Create a new user</button>
          </div>
        </div>
        <div className="users-body">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Group</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 ? (
                listUsers.map((item, index) => {
                  return (
                    <tr key={`row-${index}`}>
                      <td>{index + 1}</td>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.Group ? item.Group.name : "N/A"}</td>
                      <td>
                        <button className="btn btn-warning ">Edit</button>
                        <button className="btn btn-danger ms-1" onClick= {() => handleDelete(item)}>Delete</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4">Not found users</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {totalPage > 0 && (
          <div className="users-footer ">
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
              renderOnZeroPageCount={null}
            />
          </div>
        )}
      </div>
      <ModalDelete
      show = {isShowModalDelete}
      handleClose = {handleClose}
      handleConfirmDelete = {handleConfirmDelete}
      email = {dataModal.email}
      />
    </MainLayout>
  );
}

export default User;
