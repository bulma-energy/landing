<template>
    <section class="newsletter section text-light">
        <div class="container-sm">
            <div class="newsletter-inner section-inner">
                <div class="newsletter-header text-center">
                    <h2 class="section-title mt-0">{{homeData.newsletter.title}}</h2>
                    <p class="section-paragraph">{{homeData.newsletter.description}}</p>
                </div>
                <div class="footer-form newsletter-form field field-grouped">
                    <div class="control control-expanded">
                    </div>
                    <div class="control">
                        <a href="http://eepurl.com/gvzmUP" target="_blank" class="button button-primary button-block button-shadow">{{homeData.newsletter.cta}}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Newsletter",
        computed: {
            homeData() {
                return this.$page.metaData.homeData;
            },
        }
    }
</script>

<style scoped>

</style>
