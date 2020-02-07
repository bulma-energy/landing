<template>
  <Layout>
    <transition name="fade">
      <main>
        <section class="hero">
          <div class="img-container">
            <g-image class="img-container__img" fit="contain" width="" src="@/assets/images/top-image-house-solar.jpg"></g-image>
          </div>
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title h2-mobile mt-0 is-revealing">{{data.headline}}</h1>
                <p class="hero-paragraph is-revealing">{{data.subHeadline}}</p>
                <p class="hero-cta is-revealing">
                  <a class="button button-primary button-shadow" href="/info">{{data.cta}}</a></p>
              </div>
            </div>
          </div>
        </section>

      <Features :features="features"></Features>

      </main>
    </transition>
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
      }
    }
  }
  metaData {
    homeData {
        headline
        subHeadline
        cta
    }
    configData {
      base
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import Home from '~/layouts/Home.vue'
import ImageContainer from "../components/imageContainer";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import data from "../assets/content/data/home.json"

export default {
  components: {
      Newsletter,
      Features,
    ImageContainer,
    Pager,
    Home,
    Post
  },
  metaInfo: {
    title: 'Welcome'
  },
computed: {
    data() {
        return this.$page.metaData.homeData;
    },
  metaInfo() {
    return {
      title: data.headline,
      meta: [
        { hid: "title", name: "title", content: data.headline },
        {
          hid: "description",
          name: "description",
          content: data.subHeadline
        },

        // google
        { itemprop: "name", content: data.headline },
        { itemprop: "image", content: "~/assets/images/top-image-house-solar.jpg" },
        {
          itemprop: "description",
          content: data.subHeadline
        },

        // twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: data.headline },
        {
          name: "twitter:description",
          content: data.subHeadline
        },
        { name: "twitter:image:src", content: "~/assets/images/top-image-house-solar.jpg" },

        // graph data
        { property: "og:title", content: data.headline },
        { property: "og:type", content: "website" },
        { property: "og:url", content: this.$page.metaData.configData.base },
        { property: "og:image", content: "~/assets/images/top-image-house-solar.jpg" },
        {
          property: "og:description",
          content: data.subHeadline
        }
      ]
    }
  },
  features () {
    return data.features;
  }
}
}
</script>

<style lang="scss" scoped>
  .index-header{
    background-color: rgba(250, 250, 250, 0.36);
  }
</style>
