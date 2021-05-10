<template>
  <nav style="width:700px; margin: auto; padding-top: 50px;">
    <h2>Home</h2>
    <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
    <router-link to="/about" active-class="link--active" exact class="link">about</router-link>
    <router-link to="/users/1/#next-user" active-class="link--active" exact class="link">users</router-link>
  </nav>
</template>

<style scoped>
  .link{
    margin-right: 10px;
  }
  .link--active{
    font-size: 40px;
  }
</style>