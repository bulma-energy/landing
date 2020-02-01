<template>
  <div class="feature text-center is-revealing post">
    <div class="post-container">
      <g-link :to="post.path">
        <div class="post-container__image-cont">
          <img
            v-if="post.featuredMedia"
            :src="post.featuredMedia.sourceUrl"
            :width="post.featuredMedia.mediaDetails.width"
            :alt="post.featuredMedia.altText"
          />
        </div>
      </g-link>
      <div class="feature-inner-post">
        <div class="post-content">
          <g-link :to="post.path">
            <h4 class="post-content__title" v-html="post.title" />
            <div class="post-content__text" v-html="post.excerpt" />

            <p class="post-content__more">Leer mas</p>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/scss/abstracts/variables",
  "../assets/styles/scss/abstracts/functions",
  "../assets/styles/scss/abstracts/mixins",
  "../assets/styles/scss/abstracts/include-media";

.post {
  border-radius: 6px;
  position: relative;
  padding: 16px;
  width: calc(100% - 30px);
  max-width: calc(100% - 30px);
  flex-grow: 1;
  &:hover {
    .post-content__more {
      color: #c2d800;
    }
  }
  h4 {
    margin: 0;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .post-content {
    font-family: "Work Sans", sans-serif !important;
    &__title {
      font-size: 1.4em;
      letter-spacing: 1px;

      p {
        color: #324c60 !important;
      }
    }
    &__text {
      font-size: 1em;
      p {
        color: #4d7493 !important;
      }
    }
    &__more {
      padding: 0px;
      margin: 0px;
    }
    a {
      font-size: 0.8em;
      text-decoration: none;
      color: #324c60 !important;
      &:hover {
      }
    }
  }
}
.post-container {
  background: color(bg, 1);
  border-radius: 10px;
  overflow: hidden;
  &__image-cont {

  }
  @include shadow-sm;
  &:hover {
    @include shadow;
  }
}
.feature-inner-post {
  position: relative;
  height: 100%;
  background: color(bg, 1);
  padding: 20px 24px 20px;
  text-align: left;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
}

@include media(">medium") {
  .post {
    width: 488px;
    max-width: 488px;
  }
}
@include media(">large") {
  .features {
    .section-inner {
      padding-bottom: 168px; /* 88+80px second column offset */
    }
  }

  .feature {
    &:nth-child(even) {
      top: 80px;
    }
  }
}
</style>
