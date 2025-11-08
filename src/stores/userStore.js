import { defineStore } from "pinia"
import { ref } from "vue"
import { getAllUsers, getByUsername } from "../api/user"

export const useUserStore = defineStore("user", () => {

  const users = ref([])
  const user = ref(null)


  const getUsers = async () => {
    const response = await getAllUsers()
    users.value = response.data
    console.log(users)
  }
  const getUsername = async (username) => {
    const response = await getByUsername(username)
    user.value = response.data
    console.log(user)
  }



  return { users, user, getUsers, getUsername }
})
