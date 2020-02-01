<template>
  <div class="is-boxed has-animations">
    <div class="body-wrap boxed-container">
      <transition name="fade">
      <Header/>
      <slot class="main"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from "~/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style scoped>
  .main {
    margin-top: 80px;
  }

</style>
