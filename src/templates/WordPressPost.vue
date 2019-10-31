<template>
  <Layout>
    <article class="blog">
      <figure v-if="$page.wordPressPost.featuredMedia" class="blog__hero">
        <g-image class="blog-image" :src="$page.wordPressPost.featuredMedia.sourceUrl" :alt="$page.wordPressPost.featuredMedia.altText" :immediate="false"></g-image>
      </figure>
      <div class="blog__info" >
        <h1 v-html="$page.wordPressPost.title"></h1>
<!--        <h3>{{ $page.post.date }}</h3>-->
      </div>
      <div class="blog__body" v-html="$page.wordPressPost.content"></div>
      <div class="blog__footer">
<!--        <h2>Written By: {{ $page.post.author }}</h2>-->
        <g-link :to="nextBlogPath">
          <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >
            <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
          </svg>
        </g-link>
        <div>

      <template v-if="$page.wordPressPost.categories.length">
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
      </template>
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
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title
    }
  }
}
</script>

<style>
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
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }

  // BLOG

 .blog {
   h1 {
     margin-bottom: 0.7rem;
   }
 }

  .blog__hero {
    overflow: hidden;
    min-height: 300px;
    height: 60vh;
    width: 100%;
    margin: 0;
    .blog-image {
      min-width: 100%;
      min-height: 100%;
      margin-bottom: 0;
      object-fit: cover;
      width: 100% !important;
    }
  }

  .blog__info {
    text-align: center;
    padding: 1.5rem 1.25rem;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    h1 {
      margin-bottom: 0.66rem;
    }
    h3 {
      margin-bottom: 0;
    }
  }

  .blog__body {
    width: 100%;
    padding: 0 1.25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      padding-bottom: 1.45rem;
    }
    :last-child {
      margin-bottom: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      font-weight: normal;
      padding: 1.5rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
    p {
      color: #464646;
      font-weight: normal;
      img {
        margin: 1rem 0;
      }
    }
    ul {
      list-style: initial;
    }
    ul, ol {
      margin-left: 1.25rem;
      margin-bottom: 1.25rem;
      padding-left: 1.45rem;
    }
  }

  .blog__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.25rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    h2 {
      margin-bottom: 0;
    }
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
        width: 100% !important;
      }
    }
    .blog__body {
      max-width: 800px;
      padding: 0 2rem;
      span {
        width: 100%;
        margin: 1.5rem auto;
      }
      ul, ol {
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }
    .blog__hero {
      min-height: 600px;
      height: 75vh;
      img {
        min-width: 100%;
      }
    }
    .blog__info {
      text-align: center;
      padding: 2rem 0;
      h1 {
        max-width: 500px;
        margin: 0 auto 0.66rem auto;
      }
    }
    .blog__footer {
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
        width: 100% !important;
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
