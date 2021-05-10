<template>
  <div>
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter(){
      this.$emit('trigagerScroll');
    }
  }
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leve-active {
  transition: opacity 0.5s;
}
/* 省略できる */
/* .fade-enter-to,
.fade-leave {
  opacity:1;
} */
</style>