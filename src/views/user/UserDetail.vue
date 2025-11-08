  <template>
  <button
    class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
    @click="handleBackToListUser"
  >
    Back to list user
  </button>
  <!-- <router-link to="/user-management" class="px-3 py-2 bg-sky-500 text-white">
    Back to list user
  </router-link> -->

  <h1>User detail</h1>
  <p>User name: {{ route.params.username }}</p>
  <!-- lấy được ID rồi thì truyền ID vào API để GET -->
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Username</label>
      <input type="text" class="border border-[#f5f5f5] px-2 py-1 rounded" :value="userStore.user?.data?.username"/>
    </div>
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Role</label>
      <input type="text" class="border border-[#f5f5f5] px-2 py-1 rounded" :value="userStore.user?.data?.role"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useUserStore } from "../../stores/userStore"
import { ref } from "vue"




const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const handleBackToListUser = () => {
  router.push("/user-management")
}

onMounted(() => {
  userStore.getUsername(route.params.username)
})
</script>
