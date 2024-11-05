import axios from "axios";

const userapi = (email, username, phone, password) => {
  return axios.post("http://localhost:8080/api/v1/regester", {
    email,
    username,
    phone,
    password,
  });
};

const loginapi = (valueLogin, password) => {
  return axios.post("http://localhost:8080/api/v1/login", {
    valueLogin,
    password,
  });
};

// phân trang 
const fetchUsersapi = (page, limit) => {
  return axios.get(`http://localhost:8080/api/v1/user/read?page=${page}&limit=${limit}`)
  // return fetchGetApi(
  //   `http://localhost:8080/api/v1/user/read?page=${page}&limit=${limit}`
  // );
};


// get lấy danh sách nhóm 
const fetchGroupapi = () => {
  return axios.get("http://localhost:8080/api/v1/group/read");
};


// them xoa sua user 
const deleteUser = (user) => {
  return axios.delete(`http://localhost:8080/api/v1/user/delete/${user}`, {
    data: { id: user.id },
  });
};


const fechEditUser = (id) => {
  return axios.get(`http://localhost:8080/api/v1/user/edit/${id}`);
  
}


const editUser = (id, userData) => {
  return axios.put(`http://localhost:8080/api/v1/user/edit/${id}`, userData, {
    headers: {
      "Content-Type": "application/json", // Thiết lập header cho yêu cầu
    },
  });
};

const readProduts = () =>{
  return axios.get(`http://localhost:8080/api/v1/products`)
}
// const fetchGetApi = (url, headers) =>
//   axios.get(url, {
//     headers: headers ?? {},
//   });

export {
  userapi,
  loginapi,
  fetchUsersapi,
  deleteUser,
  fetchGroupapi,
  editUser,
  fechEditUser,
  readProduts,
  // fetchGetApi,
};
