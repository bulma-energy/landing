<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header-inner">
        <div class="brand header-brand">
          <h1 class="m-0">
            <g-link to="/">
              <g-image
                height="25"
                width="150"
                src="~/assets/images/logo-letra-black.svg"
              ></g-image>
            </g-link>
          </h1>
        </div>
        <nav class="nav">
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/info">Contacta</g-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.nav {
  &__link {
    background-color: rgba(255, 255, 255, 0.34);
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 0.8em;
    font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
    &:hover {
      background-color: rgba(255, 255, 255, 0.64);
      color: #c2d800;
    }
    &:first-child {
      margin-left: 0px;
    }
  }
}
</style>
