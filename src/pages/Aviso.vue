<template>
    <Layout page="info">
        <section class="info__blurb">
            <div>
                <div class="info__container">
                    <div class="info__container__cont">

                        <div class="info__container__heading">
                            AVISO LEGAL DE BULMA ENERGY
                        </div>
                        <p>
                            El titular de esta web es Pablo Fernández-Maquieira, con domicilio en la calle comunidad de andalucía número 24, las Rozas de Madrid titular del DNI 51089369-K. Puedes enviar un correo a pablofm@bulmaenergy.com si hay algún problema o quieres saludar.
                        </p>
                        <p>
                            El contenido de esta web se ha creado bajo licencia CC BY-SA 4.0, o sea que puedes compartirlos pero mencionando que son nuestros y además no los alteres, que no nos gusta. Tenemos los derechos sobre esos contenidos, así que no te pases un pelo.
                        </p>
                        <p>
                            Be Energy, my friend!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
    export default {
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

<style lang="scss" scoped>
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
        background: #d1c2af;
        padding: 1.5rem 1.25rem;
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
        background-color: rgba(255, 255, 255, 0.53);
        max-width: 680px;
        &__cont{
            padding: 40px;
        }
        &__heading{
            font-weight: 700;
            padding: 20px 0;
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
