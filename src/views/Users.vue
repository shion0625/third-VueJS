<template>
  <div class="body">
    <h1>users page</h1>
    <router-link to="/users/1">ユーザ1</router-link>
    <router-link to="/users/2">ユーザ2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to=" '/users/' + (Number(id) + 1 )+ '/profile#next-user'">次のユーザ</router-link>
    <hr>
    <router-view/>
    <div style="height: 700px;"></div>
    <router-link id="next-user" :to="{ name: 'users-id-profile', params:{ id: Number(id) + 1}, query:{lang: 'ja'}}">次のユーザ</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props:["id"],
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('beforeRouteLeave');
    const isLeave = window.confirm("本当にこのページを離れますか？");
    if(isLeave) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style scoped>
.body{
  width: 700px;
  margin: auto;

}
</style>