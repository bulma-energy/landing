<template>
    <div>
        <Newsletter></Newsletter>
    <footer class="site-footer text-light">
        <div class="container">
            <div class="site-footer-inner has-top-divider">
                <div class="brand footer-brand">
                    <a href="/">
                        <g-image height="30" width="110" src="~/assets/images/logo_letra.svg"></g-image>
                    </a>
                </div>
                <ul class="footer-links list-reset">
                    <li>
                        <g-link to="/contact">Contacto</g-link>
                    </li>
                    <li>
                        <g-link to="/aviso">Aviso legal</g-link>
                    </li>
      <!--              <li>
                        <g-link to="/">FAQ's</g-link>
                    </li>-->
                    <li>
                        <g-link to="/privacy">Políticas privacidad</g-link>
                    </li>
                </ul>
                <ul class="footer-social-links list-reset">
<!--                    <li>
                        <a href="#">
                            <span class="screen-reader-text">Facebook</span>
                            <g-image src="~/assets/images/facebook.svg"></g-image>
                        </a>
                    </li>-->
                    <li>
                        <g-link to="https://twitter.com/BulmaEnergy">
                            <span class="screen-reader-text">Twitter</span>
                            <g-image src="~/assets/images/twitter.svg"></g-image>
                        </g-link>
                    </li>
<!--                    <li>
                        <a href="#">
                            <span class="screen-reader-text">Google</span>

                            <g-image src="~/assets/images/google.svg"></g-image>
                        </a>
                    </li>-->
                </ul>
                <div class="footer-copyright">&copy; 2019 Bulma Energy, all rights reserved</div>
            </div>
        </div>
    </footer>

    </div>
</template>

<script>
    import Newsletter from "./Newsletter";
    import data from "../assets/content/data/home.json"
    export default {
        name: "Footer",
        components: {Newsletter}
    }
</script>

<style scoped>

</style>
