<template>
<div class="navabr">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link :to="{name :'Home'}" class="navbar-brand">AclApp</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name :'Login'}" class="nav-link" v-if="token==0">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name :'Register'}" class="nav-link" v-if="token==0">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name :'Dashboard'}" class="nav-link" v-if="token!=0">Dashboard</router-link>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</template>
<script>
  import { ref } from 'vue'
  import { UserStore } from '@/store/UserStore.js'
  import { mapState } from 'pinia'
 export default ({
  computed: {
    ...mapState(UserStore,['token'])
  }
 })
</script>