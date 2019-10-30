<template>
  <div class="is-boxed has-animations">
    <div class="body-wrap boxed-container">
      <Header/>
      <slot />
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

<style scoped></style>
