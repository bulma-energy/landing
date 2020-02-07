<template>
    <section class="features section">
        <div class="container">
            <div class="features-inner section-inner">
                <div class="features-header text-center">
                    <div class="container-sm feature-heading">
                        <h2 class="section-title mt-0">{{homeData.featuresSection.title}}</h2>
                        <p class="section-paragraph">{{homeData.featuresSection.description}}</p>
                    </div>
                </div>
                <div class="features-wrap">
                    <div v-for="feature in features" class="feature text-center is-revealing">
                        <div class="feature-inner">
                            <div class="feature-icon">
                                <img height="30" :src="'images/' + feature.img">
                            </div>
                            <h4 class="feature-title h3-mobile">{{feature.title}}</h4>
                            <p class="text-sm">{{feature.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Features",
        props: ['features', 'homeData']
    }
</script>

<style scoped lang="scss">
.feature-heading{
    h2 {
        font-weight: bold;
    }
    p{
        color: #394d5d !important;
    }
}
</style>
