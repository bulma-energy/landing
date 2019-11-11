<template>
    <div>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
            <form action="https://bulmaenergy.us3.list-manage.com/subscribe/post?u=4a5bb87b3695858d6fa63065c&amp;id=7dbefd0ef8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group">
                        <label for="mce-FNAME">First Name  <span class="asterisk">*</span>
                        </label>
                        <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-EMAIL">Email  <span class="asterisk">*</span>
                        </label>
                        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                    </div>
                    <div class="mc-field-group size1of2">
                        <label for="mce-TEL">Phone Number  <span class="asterisk">*</span>
                        </label>
                        <input type="text" name="TEL" class="required" value="" id="mce-TEL">
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4a5bb87b3695858d6fa63065c_7dbefd0ef8" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button button-cta"></div>
                </div>
            </form>
        </div>
        <!--End mc_embed_signup-->
    </div>
</template>

<script>
    export default {
        name: "mailchimp",
        metaInfo: {
            meta: [
                {}
            ],
            link:[
                {
                rel: 'stylesheet',
                href: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css',
                    type: 'text/css'
                }
            ]
        },
        beforeMount(){
            let urlJquery = 'https://code.jquery.com/jquery-3.4.1.min.js';

            let jquery = document.createElement('script');
            jquery.setAttribute('src', urlJquery);
            if(document.body != null){
                document.body.appendChild(jquery);
            }

            let url = 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';

            let mailchimp = document.createElement('script');
            mailchimp.setAttribute('src', url);
            if(document.body != null){
                document.body.appendChild(mailchimp);
            }

            window.$ = require('jquery');
            window.JQuery = require('jquery');
        },
        mounted() {
            (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[4]='TEL';ftypes[4]='phone'; /*
 * Translated default messages for the $ validation plugin.
 * Locale: ES
 */
                $.extend($.validator.messages, {
                    required: "Este campo es obligatorio.",
                    remote: "Por favor, rellena este campo.",
                    email: "Por favor, escribe una dirección de correo válida",
                    url: "Por favor, escribe una URL válida.",
                    date: "Por favor, escribe una fecha válida.",
                    dateISO: "Por favor, escribe una fecha (ISO) válida.",
                    number: "Por favor, escribe un número entero válido.",
                    digits: "Por favor, escribe sólo dígitos.",
                    creditcard: "Por favor, escribe un número de tarjeta válido.",
                    equalTo: "Por favor, escribe el mismo valor de nuevo.",
                    accept: "Por favor, escribe un valor con una extensión aceptada.",
                    maxlength: $.validator.format("Por favor, no escribas más de {0} caracteres."),
                    minlength: $.validator.format("Por favor, no escribas menos de {0} caracteres."),
                    rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
                    range: $.validator.format("Por favor, escribe un valor entre {0} y {1}."),
                    max: $.validator.format("Por favor, escribe un valor menor o igual a {0}."),
                    min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
                });}(jQuery));var $mcj = jQuery.noConflict(true);
        }
    }
</script>

<style scoped>
    #mc_embed_signup{
        background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
    }
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
