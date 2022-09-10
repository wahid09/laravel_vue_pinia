<template>
    <div class="login is-max-desktop px-2">
        <div class="card has-shadow">
            <header class="card-header">
                <p class="card-header-title is-size-4 is-family-monospace is-centered">
                    Sign in to start your sessions!!
                </p>
                <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            <div class="card-content">
                <!-- <p class="has-text-danger" v-if="error">{{ error }}</p> -->
                <div class="notification is-danger" v-if="error">
                    <button class="delete"></button>
                    {{ error }}
                </div>
                <div class="content">
                    <form @submit.prevent="login">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="email" v-model="form.email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="password" v-model="form.password">
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-right">
                            <div class="control">
                                <button type="submit" class="button is-link has-background-success">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from "vue-router"
import { UserStore } from '@/store/UserStore.js'
export default {
    setup() {
        const router = useRouter()
        const userStore = UserStore()
        let form = reactive({
            email: '',
            password: ''
        });

        let error = ref('')

        const login = async () => {
            await axios.post('/api/login', form).then(res => {
                if (res.data.success) {
                    //localStorage.setItem('token',res.data.token)
                    userStore.setToken(res.data.token)
                    router.push({ name: 'Dashboard' })
                } else {
                    error.value = res.data.message
                }
            })
        }

        return {
            form,
            login,
            error,
        }
    }
}
</script>