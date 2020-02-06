<template>
    <Layout page="info">
        <section class="info__blurb">
            <div>
                <div class="info__container">
                    <div class="info__container__cont">

                        <div class="info__container__heading">
                            POLIZA DE PRIVACIDAD DE BULMA ENERGY
                        </div>
                        <p>
                            Aquí te explicamos la recopilación, tratamiento y uso de tu información personal y no personal como usuario de la web, a partir de la fecha de entrada en vigor que aparece en el encabezado.
                        </p>
                        <p>

                            En la web hay un formulario a través del cual puedes remitirnos propuestas, preguntas o lo que sea. Guardamos tu información personal pero no la cedemos ni vendemos a terceros, de hecho siempre pedimos consentimiento para el uso distinto a los datos que el descrito a continuación:
                        </p>
                        <p>
                            Responsable del tratamiento de datos es Pablo Fernández - Maquieira. (domicilio, dni, correo)
                        </p>
                        <p>
                            Finalidad de esos datos: contestar a las preguntas o cuestiones que remitas a través del formulario de contacto.
                        </p>
                        <p>

                            Se conservan mientras dure la finalidad del tratamiento para la que fueron facilitados. Terminada dicha finalidad, los cancelamos.
                        </p>
                        <p>

                            La legitimación es tu consentimiento, porque cuando nos los mandas nos dejas que los guardemos hasta que damos trámite o respuesta a tu pregunta.
                        </p>
                        <p>
                            No se los comunicamos a terceros.
                        </p>
                        <p>
                            Tienes derecho a solicitar el acceso a sus datos personales, derecho de rectificación o supresión, derecho a solicitar la limitación de su tratamiento, derecho a oponerte al tratamiento y derecho a la portabilidad de los datos. Dicho ejercicio puede llevarse a cabo enviando un mail a pablofm@bulmaenergy.com. En el caso de que no se resuelva de manera satisfactoria el ejercicio de tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos.
                        </p>

                        <div class="info__container__heading">
                            Seguridad
                        </div>
                        <p>
                            Bulma Energy adopta las medidas técnicas y organizativas, de conformidad con la normativa sobre protección de datos, para evitar la pérdida de datos de carácter personal o el mal uso de los mismos.
                        </p>
                        <div class="info__container__heading">
                            Terceros prestadores de servicios
                        </div>
                        <p>
                            Con la finalidad de garantizar las adecuadas medidas de seguridad técnica, contratamos a proveedores para albergar nuestro sitio web. Nos aseguramos siempre de que cumplan estándares de seguridad y que estén dentro del territorio europeo o adheridos al acuerdo de privacy shield. En el momento de la redacción de la presente política dicho proveedor es godaddy y sus servidores están ubicados en europa
                        </p>

                        <div class="info__container__heading">
                            Las cookies de Bulma Energy
                        </div>
                        <p>
                            Última revisión: 30 de octubre de 2019
                        </p>
                        <p>

                            Estamos comprometidos con la mínima intromisión en la actividad de los usuarios de nuestra web, por lo que solo usamos cookies técnicas que permiten el funcionamiento del servicio. Por eso no te molestamos con el aviso de las cookies en la web.
                        </p>
                        <p>
                            Estos son nuestros principios a la hora de diseñar la plataforma web:
                            Transparencia: queremos que sepas para qué hacemos esto, y aunque no sean necesaria más información sobre cookies técnicas te la damos.
                        </p>
                        <p>
                            Minimización de datos: solo pedimos lo estrictamente necesario para que la web funcione para ti
                            Únicamente identificamos tu IP, el navegador, sistema operativo y duración de tu navegación o visita, a través de cookies técnicas.
                        </p>
                        <p>
                            Las cookies son trozos de información que se envían por un sitio web y quedan almacenadas en el navegador del usuario, de manera que cuando vuelvan a entrar en la web se reciba esa información automáticamente. No usamos ni publicitarias, ni comerciales, y además en el espacio privado de los usuarios ni nos metemos.
                        </p>
                        <p>
                            Usamos alguna analítica que el propio servicio de Google nos pide, pero únicamente en la parte pública de la web, donde se accede por la navegación habitual y sin registro. Te dejamos información por si quieres desinstalarlas, dependiendo del navegador que uses:
                        </p>
                        <p>
                            <li>

                        <a href="https://support.microsoft.com/en-gb/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">
                            Edge
                        </a>
                    </li>
                    <li>
                        <a href="https://support.google.com/chrome/answer/95647?hl=es">
                            Google Chrome
                        </a>
                    </li>
                    <li>
                        <a href="https://support.google.com/chrome/answer/114662?hl=es&visit_id=1-636664625754483085-1648636281&rd=1&co=GENIE.Platform%3DAndroid&oco=1">
                            Google Android
                        </a>
                    </li>
                    <li>
                        <a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                            Internet Explorer
                        </a>
                    </li>
                    <li>
                        <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we">
                            Mozilla Firefox
                        </a>
                    </li>
                    <li>
                        <a href="https://support.google.com/chrome/answer/95647?hl=es">
                            Opera
                        </a>
                    </li>
                    <li>
                        <a href="https://support.apple.com/kb/ph21411?locale=es_ES">
                            Safari
                        </a>
                    </li>
                    <li>
                        <a href="https://support.apple.com/es-es/HT201265">
                            Safari Mobile
                        </a>
                    </li>
                        <p>
                            Puedes comprobar en cada momento las cookies que usamos con esta herramienta
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
