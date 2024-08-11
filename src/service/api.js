import axios from "axios"

const userapi = ( email, username, phone, password) => {
    return axios.post("http://localhost:8080/api/v1/regester", {
      email, username, phone, password
    })
}

export { userapi }