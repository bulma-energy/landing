<template>
  <div class="post">
    <g-link :to="post.path">
      <img
        v-if="post.featuredMedia"
        :src="post.featuredMedia.sourceUrl"
        :width="post.featuredMedia.mediaDetails.width"
        :alt="post.featuredMedia.altText"
      />
    </g-link>
    <div class="post-content">

      <g-link :to="post.path">
      <h2 v-html="post.title" />
      <div class="post-content__text" v-html="post.excerpt" />
        Leer mas
      </g-link>
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
  .post{
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 6px;
    &:hover{
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
    h2{
      margin: 0;
      padding-bottom: 20px;
      font-size: 1.6em;
      line-height: 1.4em;
    }
    .post-content{
      padding: 20px;
      &__text{
      font-size: 1em;
      }
      a{
        font-size: 0.8em;
        text-decoration: none;
        &:hover{
        }
      }
    }
  }
</style>
