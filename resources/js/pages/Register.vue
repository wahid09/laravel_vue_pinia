<template>
    <div class="register is-max-dasktop">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title is-size-4 is-family-monospace">
                    Register!
                </p>
                <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            <div class="card-content">
                <p class="has-text-danger" v-for="error in errors" :key="error">
                    <li v-for="err in error" :key="err">{{ err }}</li>
                </p>
                <div class="content">
                    <form @submit.prevent="register">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="email" v-model="form.name">
                            </div>
                        </div>
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

                        <div class="field">
                            <label class="label">Confirm Password</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="confirm password"
                                    v-model="form.c_password">
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-right">
                            <div class="control">
                                <button type="submit" class="button is-link has-background-success">
                                    Register
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
export default {
    setup() {
        const router = useRouter();
        let form = reactive({
            name: '',
            email: '',
            password: '',
            c_password: ''
        });

        let errors = ref([])

        const register = async () => {
            await axios.post('/api/register', form).then(res => {
                if (res.data.success) {
                    localStorage.setItem('token', res.data.token)
                    router.push({ name: 'Dashboard' })
                }
            }).catch(e => {
                errors.value = e.response.data.errors
            })
        }

        return {
            form,
            register,
            errors
        }
    }
}
</script>