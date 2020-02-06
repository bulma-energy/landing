<template>
    <Layout page="info" class="info">
        <section class="info__blurb">
            <div class="info__container">
                <div class="page-header">
                    <h1 class="page-header__text">Contacta con nosotros</h1>
                    <p class="page-header__date">
                        Si tienes cualquier pregunta o duda acerca de como empezar a incorporar en tu dia a dia metodos de ahorro energético, dejanos tu contacto o llámanos.
                    </p>
                </div>
                <mailchimp></mailchimp>
            </div>
        </section>
    </Layout>
</template>

<script>
    import Mailchimp from "../components/mailchimp";
    export default {
        components: {Mailchimp},
        metaInfo() {
            return {
                title: "Info",
            };
        },
        computed: {
            data: function() {
                return this.$page.metadata.infoData;
            }
        }
    };
</script>

<page-query>
    query getInfoPageData {
        metadata {
            infoData {
                description
                cta
                contact {
                    email
                    twitter_handle
                    github_handle
                }
                background_color
                text_color
            }
        }
    }
</page-query>

<style lang="scss">
    .info {

    }

    .page-header {
        text-align: left;
        padding: 1.5rem 1.25rem;
        width: 100%;
        max-width: 680px;
        margin: 0 auto;
        position: relative;
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
    .is-info {
        .theme--light.v-tabs > .v-tabs-bar {
            background-color: transparent;
            .v-tab {
                color: white !important;
            }
        }
        .v-icon.v-icon.v-icon--link {
            color: white !important;
        }
    }
    .info__blurb {
        &::before {
            content: "";
            height: 500px;
            position: absolute;
            left: 0;
            top: 420px;
            width: 100%;
            z-index: 0;
            background: linear-gradient(to bottom, #f4f4f5, #e5e5e6);
            clip-path: polygon(0% 0%, 100% 50px, 100% 100%, 0% calc(100% - 100px));
        }
        padding: 3rem 1.25rem 1.5rem 1.25rem;
        border: none;
        min-height: 100vh;
        p {
            font-size: 1rem;
        }
        a{
            text-decoration: none;
            &:hover{
                text-decoration: underline;

            }
        }
    }

    .info__container{
        margin: 100px auto 0 auto;
        max-width: 680px;
        z-index: 10;
        h4{
            padding: 20px;
        }
        &__cont{
            padding: 40px;
        }
        &__heading{
            font-weight: 700;
        }
    }

    @media (min-width: 768px) {
        .info__blurb {
            border: 1px solid white;
            /*margin: 100px auto 0 auto;*/
            padding: 2rem;
        }
    }

    @media (min-width: 1440px) {
        .info__blurb {
            padding: 3rem;
        }
    }
</style>
