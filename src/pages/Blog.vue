<template>
    <Layout>
        <div class="blog-page">

        <ul class="post-list">
            <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">

                    <Post :post="node" />
            </li>
        </ul>
        <Pager :info="$page.allWordPressPost.pageInfo"/>
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
    import { Pager } from 'gridsome'
    import Post from '~/components/Post.vue'

    export default {
        components: {
            Pager,
            Post
        },
        metaInfo: {
            title: 'Welcome to my blog :)'
        }
    }
</script>

<style lang="scss">
    .blog-page{
        max-width: 600px;
        margin: 0 auto;
    }

</style>
