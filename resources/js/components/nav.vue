
<template>
	<div>
		<nav
		  class="navbar is-warning has-shadow"
		  aria-label="main navigation"
		  role="navigation"
		>
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
        <RouterLink to="/" class="has-text-black">
          Noteballs
          </RouterLink>
        </div>

        <a
        @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          :class="{'is-active': showMobileNav}"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{'is-active': showMobileNav}"
      >

        <div class="navbar-end">
          <RouterLink
                class="navbar-item"
                active-class="is-active"
                to="/login"
                v-if="token==0"
              >Login
              </RouterLink>
              <RouterLink
                class="navbar-item"
                active-class="is-active"
                to="/register"
                v-if="token==0"
              >Register
              </RouterLink>

              <RouterLink
                class="navbar-item"
                active-class="is-active"
                to="/dashboard"
                v-if="token!=0"
              >Dashboard
              </RouterLink>

              <RouterLink
                class="navbar-item"
                active-class="is-active"
                to="/logout"
                v-if="token!=0"
              >Logout
              </RouterLink>
        </div>
      </div>
    </div>
      
    </nav>
	</div>
</template> 
<script>
  import { UserStore } from '@/store/UserStore.js'
  import { mapState } from 'pinia'
 export default ({
  data(){
    return{
      showMobileNav: false
    }
  },
  computed: {
    ...mapState(UserStore,['token'])
  }
 })
</script>
<style>
  @media (max-width: 1023px){
    .navbar-menu{
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
</style>