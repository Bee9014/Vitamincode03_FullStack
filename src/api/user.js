import axios from "axios"
const apiURL = axios.create({
    baseURL: "http://localhost:1234/api/v1",
  timeout: 10000,
  headers: {
      'Content-Type': 'application/json'
  }



})

export const getAllUsers = async () => {
  const response = await apiURL.get("/users/get-all-user")
  return response
}
export const getByUsername = async(username) => {

  const response = await apiURL.get(`users/get-by-username?username=${username}`)
  return response
}

// export const getUserById = async (id) => {
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   return response
// }
