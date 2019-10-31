<template>
    <Layout class="blog-layout">
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
            title: 'Blog'
        }
    }
</script>

<style lang="scss">

    .blog-page{
        max-width: 600px;
        margin: 0 auto;
        padding-top: 80px;
    }
    .blog-layout{
        background: #d8ff55;
        background: linear-gradient(65deg, #EFFF00 0, #C0FFAA 100%);

    }

</style>
