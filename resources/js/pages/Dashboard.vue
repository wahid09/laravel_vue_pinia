<template>
    <div>
    <h5>Welcome to dashboard</h5>
    <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>
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
            router.push({name:'Home'})
        }
        return{ 
            logout
        }
    }
   }
</script>