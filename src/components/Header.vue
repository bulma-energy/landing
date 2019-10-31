<template>
    <header class="site-header">
        <div class="container">
            <div class="site-header-inner">
                <div class="brand header-brand">
                    <h1 class="m-0">
                        <g-link to="/">
                            <g-image height="25" width="150" src="~/assets/images/logo_letra.svg"></g-image>
                        </g-link>
                    </h1>
                </div>
                <nav>
                    <g-link class="nav__link" to="/blog">Blog</g-link>
                    <g-link class="nav__link" to="/contact">Contact</g-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
