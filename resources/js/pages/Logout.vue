<template>
    <div>
        <h5 class="is-size-4 is-family-monospace">I you wand to logout, Please
        <button type="button" class="btn btn-dark mt-2" @click="logout">Click here</button></h5>
    </div>
</template>
<script>
import { useRouter } from "vue-router";
import { UserStore } from "@/store/UserStore.js";
export default {
    setup() {
        const router = useRouter()
        const userStore = UserStore()
        function logout() {
            //localStorage.removeItem('token');
            userStore.removeToken('token')
            router.push({ name: 'Home' })
        }
        return {
            logout
        }
    }
}
</script>