import { createWebHistory, createRouter } from "vue-router";
import home from './pages/Home.vue';
import login from './pages/Login.vue';
import register from './pages/Register.vue';
import dashboard from './pages/Dashboard.vue';
import logout from './pages/Logout.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: { requiresAuth: false }
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
        meta: { requiresAuth: false }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: logout,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
        return {name:'Login'}
    }
    if (to.meta.requiresAuth==false && localStorage.getItem('token')) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
          return {name:'Dashboard'}
      }
  })

export default router;