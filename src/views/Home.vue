<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">usersのページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers(){
      console.log(this);
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1}
      });
    }
  }
};
</script>
