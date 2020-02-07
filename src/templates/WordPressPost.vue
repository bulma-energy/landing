<template>
  <Layout>
    <article class="blog">
      <div class="blog__info">
        <h1 class="blog__info__text" v-html="$page.wordPressPost.title"></h1>
<!--        <p class="blog__info__date">{{ theTime }}</p>-->
        <p class="blog__info__autor">Autor: {{ $page.wordPressPost.author.name }}</p>
      </div>

      <figure v-if="$page.wordPressPost.featuredMedia" class="blog__hero">
        <div class="post-image-container">
          <g-image
            class="blog-image"
            :src="$page.wordPressPost.featuredMedia.sourceUrl"
            :alt="$page.wordPressPost.featuredMedia.altText"
            :immediate="false"
            fit="contain"
          ></g-image>
        </div>
      </figure>

      <div class="blog__body" v-html="$page.wordPressPost.content"></div>
      <div class="blog__footer">
        <g-link :to="$page.wordPressPost.author.url">
          <p>Autor: {{ $page.wordPressPost.author.name }}</p>
        </g-link>
        <!--        <g-link :to="nextBlogPath">-->
        <!--          <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >-->
        <!--            <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>-->
        <!--          </svg>-->
        <!--        </g-link>-->
        <div>
          <!--      <template v-if="$page.wordPressPost.categories.length">
        <h4>Posted in</h4>
        <ul class="list categories">
          <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
            <g-link :to="category.path">{{ category.title }}</g-link>
          </li>
        </ul>
      </template>
      <template v-if="$page.wordPressPost.tags.length">
        <h4>Tags</h4>
        <ul class="list tags">
          <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
            <g-link :to="tag.path">{{ tag.title }}</g-link>
          </li>
        </ul>
      </template>-->
        </div>
      </div>
      <!--    <h1 v-html="$page.wordPressPost.title"/>-->
      <!--    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.sourceUrl"
      :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPost.featuredMedia.altText"
    />-->
      <!--    <div v-html="$page.wordPressPost.content"/>-->
    </article>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    excerpt
    date
    author {
      id
      title
      name
      url
  }
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
  metaData {
    configData {
      base
    }
  }
}
</page-query>

<script>
import moment from "moment";
export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title,
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$page.wordPressPost.title
        },
        {
          hid: "description",
          name: "description",
          content: this.$page.wordPressPost.excerpt
        },

        // google
        { itemprop: "name", content: this.$page.wordPressPost.title },
        {
          itemprop: "image",
          content: this.$page.wordPressPost.featuredMedia.sourceUrl
        },
        {
          itemprop: "description",
          content: this.$page.wordPressPost.excerpt
        },

        // twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.wordPressPost.title },
        {
          name: "twitter:description",
          content: this.$page.wordPressPost.excerpt
        },
        {
          name: "twitter:image:src",
          content: this.$page.wordPressPost.featuredMedia.sourceUrl
        },

        // graph data
        { property: "og:title", content: this.$page.wordPressPost.title },
        { property: "og:type", content: "website" },
        { property: "og:url", content: this.$page.metaData.configData.base },
        {
          property: "og:image",
          content: this.$page.wordPressPost.featuredMedia.sourceUrl
        },
        {
          property: "og:description",
          content: this.$page.wordPressPost.excerpt
        }
      ]
    };
  },
  data: function() {
    return {
      theTime: 0
    };
  },
  mounted() {
    this.theTime = moment().format(
      "MMMM Do YYYY, h:mm:ss a",
      this.$page.wordPressPost.date
    );
  }
};
</script>

<style lang="scss">
ul.list {
  list-style: none;
  padding: 0;
}
ul.list li {
  display: inline-block;
}
ul.list.tags li a {
  padding-right: 0.5em;
}
ul.list.categories li:after {
  content: ",";
  display: inline-block;
}
ul.list li:last-child:after {
  content: "";
}

// BLOG

.blog {
  margin-top: 80px;
  h1 {
    margin-bottom: 0.7rem;
  }
}

.blog__hero {
  min-height: 300px;
  height: 60vh;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .post-image-container {
    width: 100%;
    height: 100%;
  }
  .blog-image {
    min-width: 100%;
    min-height: 100%;
    margin-bottom: 0;
    object-fit: cover;
    width: 100%;
  }
}

.blog__info {
  text-align: left;
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  &__text {
    color: #525558;
    font-weight: 700;
    margin-bottom: 0.66rem;
    line-height: 1.1em;
    font-family: "Roboto Mono", sans-serif !important;
  }
  &__date {
    color: #9da4aa;
    font-weight: 300;
    margin-bottom: 0.66rem;
    line-height: 0.6em;
    font-family: "Work Sans", sans-serif !important;
  }
  &__autor {
    color: #9da4aa;
    font-weight: 300;
    margin-bottom: 0.66rem;
    line-height: 0.7em;
    font-family: "Work Sans", sans-serif !important;
  }

  h3 {
    margin-bottom: 0;
  }
}

.blog__body {
  width: 100%;
  padding: 1.1em 1.25rem;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  line-height: 1.45rem;
  justify-content: center;
  font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
  a {
    padding-bottom: 1.45rem;
    font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
  }
  :last-child {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    padding: 1.3rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #525558;
    font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
  }
  p {
    color: #464646;
    font-weight: normal;
    font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
    img {
      margin: 1rem 0;
    }
  }
  ul {
    list-style: initial;
  }
  ul,
  ol {
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    padding-left: 1.45rem;
  }
}

.blog__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.7rem 1.25rem;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
  color: #9da4aa;
  h2,
  h4,
  h5,
  h3 {
    margin-bottom: 0;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    svg {
      width: 20px;
    }
  }
}

@media (min-width: 768px) {
  .blog {
    display: flex;
    flex-direction: column;
    .blog-image {
      min-width: 100%;
      min-height: 100%;
      margin-bottom: 0;
      object-fit: cover;
      width: 100%;
    }
  }
  .post-image-container {
    width: 80% !important;
    height: auto !important;
  }
  .blog__body {
    max-width: 680px;
    padding: 0 2rem;
    span {
      width: 100%;
      margin: 1.5rem auto;
    }
    ul,
    ol {
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  .blog__hero {
    min-height: 600px;
    height: 75vh;
    img {
      min-width: 100%;
      width: 100%;
    }
  }
  .blog__info {
    text-align: left;
    padding: 2rem 0;
    h1 {
      max-width: 500px;
    }
  }
  .blog__footer {
    text-align: center;
    padding: 2.25rem;
  }
}

@media (min-width: 1440px) {
  .blog__hero {
    height: 70vh;

    .blog-image {
      min-width: 100%;
      min-height: 100%;
      margin-bottom: 0;
      object-fit: cover;
    }
    img {
      width: 100%;
    }
  }
  .blog__info {
    padding: 3rem 0;
  }
  .blog__footer {
    padding: 2rem 2rem 3rem 2rem;
  }
}
</style>
