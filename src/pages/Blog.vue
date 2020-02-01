<template>
  <Layout class="blog-layout">
    <div class="blog-layout__container">
      <div class="page-header">
        <h1 class="page-header__text">Mantente informado</h1>
        <p class="page-header__date">
          Hablamos sobre energía, sostenibilidad y otras formas de consumo desde
          nuestra experiencia implementando metodologías.
        </p>
      </div>
      <div class="blog-page">
        <ul class="features-wrap">
          <div v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
            <Post :post="node" />
          </div>
        </ul>
        <Pager :info="$page.allWordPressPost.pageInfo" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
    query Home ($page: Int) {
        allWordPressPost (page: $page, perPage: 10) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    title
                    path
                    excerpt
                    featuredMedia {
                        sourceUrl
                        altText
                        mediaDetails {
                            width
                        }
                    }
                }
            }
        }
    }
</page-query>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";
import Features from "../components/Features";

export default {
  components: {
    Features,
    Pager,
    Post
  },
  metaInfo: {
    title: "Blog | Bulma Energy"
  }
};
</script>

<style lang="scss">
.blog-page {
  margin: 0 auto;
}

.blog-layout {
  margin-top: 80px;
  background: white;
  &__container {
    max-width: 1000px;
      margin: 0 auto;
  }
  &::before {
    content: "";
    height: 1000px;
    position: absolute;
    left: 0;
    top: 400px;
    width: 100%;
    background: linear-gradient(to bottom, #eeeeef, #e5e5e6);
    clip-path: polygon(0% 0%, 100% 50px, 100% 100%, 0% calc(100% - 200px));
  }
}

.page-header {
  text-align: left;
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  &__text {
    color: #525558;
    font-weight: 700;
    margin-bottom: 0.66rem;
    line-height: 1.3em;
    font-family: "Roboto Mono", sans-serif !important;
  }
  &__date {
    color: #9da4aa;
    font-weight: 300;
    margin-bottom: 0.66rem;
    line-height: 1.2em;
    font-family: "Work Sans", sans-serif !important;
  }
  &__autor {
    color: #9da4aa;
    font-weight: 300;
    margin-bottom: 0.66rem;
    line-height: 1em;
    font-family: "Work Sans", sans-serif !important;
  }

  h3 {
    margin-bottom: 0;
  }
}
</style>
