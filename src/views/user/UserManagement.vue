<template>

  <div v-if="loading">
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      <div v-for="i in 10" :key="i" class="bg-gray-300 rounded-2xl p-3 animate-pulse h-20"></div>
    </div>
  </div>
  <div v-else class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
    <div
      v-for="user in userStore.users.data"
      :key="user.username"
      class="border border-gray-300 rounded-2xl p-3 shadow hover:scale-[1.05] duration-200 cursor-pointer hover:border-blue-500"
      @click="handleToUserDetail(user.username)"
    >
      <p>{{ user.username }}</p>
      <p>{{ user.role }}</p>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "../../stores/userStore"

const router = useRouter()
const userStore = useUserStore()


const handleToUserDetail = (username) => {
  router.push(`/user-management/detail/${username}`)
}

// onMounted -> được gọi khi component được mount.
onMounted( () => {

     userStore.getUsers()



})
</script>
