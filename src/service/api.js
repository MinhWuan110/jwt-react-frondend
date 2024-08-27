import axios from "axios"

const userapi = ( email, username, phone, password) => {
     return axios.post("http://localhost:8080/api/v1/regester", {
      email, username, phone, password
    })
}

const loginapi = (valueLogin, password) =>{
    return axios.post("http://localhost:8080/api/v1/login", {
      valueLogin, password
    })
}

const fetchUsersapi = (page , limit ) => {
  return axios.get(`http://localhost:8080/api/v1/user/read?page=${page}&limit=${limit}`)
}


const deleteUser = (user) => {
  return axios.delete("http://localhost:8080/api/v1/user/delete",{data: {id: user.id}})
}

const fetchGroupapi = () => {
   return axios.get("http://localhost:8080/api/v1/group/read")
}
export { userapi , loginapi, fetchUsersapi, deleteUser, fetchGroupapi}