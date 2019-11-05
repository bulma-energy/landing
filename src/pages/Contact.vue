<template>
  <Layout page="info">
    <section class="info__blurb">

      <div class="info__container">
        <div class="info__container__cont">

        <div class="info__container__heading" v-html="data.description"></div>


        <div v-html="data.cta"></div>
          <p>
            <a>
              Telefono: +34 660 97 80 59
            </a>
          </p>
          <p>
            <a :href="`mailto:${data.contact.email}`">
              Email: {{ data.contact.email }}
            </a>
          </p>
          <p>
            <a :href="`https://twitter.com/${data.contact.twitter_handle}`">
              Twitter: @{{ data.contact.twitter_handle }}
            </a>
          </p>
<!--          <p>
            <a :href="`https://github.com/${data.contact.github_handle}`">
              Github: {{ data.contact.github_handle }}
            </a>
          </p>-->
      </div>
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
        return this.$page.metaData.infoData;
      }
    }
  };
</script>

<page-query>
  query getInfoPageData {
    metaData {
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
