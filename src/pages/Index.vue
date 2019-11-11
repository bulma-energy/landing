<template>
  <Layout>
    <transition name="fade">
      <main>
        <section class="hero">
          <div class="img-container">
            <g-image class="img-container__img" fit="contain" src="~/assets/images/top-image-house-solar.jpg"></g-image>
          </div>
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title h2-mobile mt-0 is-revealing">{{data.headline}}</h1>
                <p class="hero-paragraph is-revealing">{{data.subHeadline}}</p>
                <p class="hero-cta is-revealing">
                  <a class="button button-primary button-shadow" href="/info">{{data.cta}}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section class="features section text-center">
          <div class="section-square"></div>
          <div class="container">
            <div class="features-inner section-inner">
              <div class="features-wrap">
                <div v-for="feature in features" class="feature is-revealing">

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

<!--        <section class="pricing section">
          <div class="section-square"></div>
          <div class="container">
            <div class="pricing-inner section-inner has-top-divider">
              <h2 class="section-title mt-0 text-center">Pricing</h2>
              <div class="pricing-tables-wrap">
                <div class="pricing-table">
                  <div class="pricing-table-inner">
                    <div class="pricing-table-main">
                      <div class="pricing-table-header is-revealing">
                        <div class="pricing-table-title mt-12 mb-8">Starter</div>
                        <div class="pricing-table-price mb-32 pb-24"><span class="pricing-table-price-currency h4">$</span><span class="pricing-table-price-amount h2">27</span>/mo</div>
                      </div>
                      <ul class="pricing-table-features list-reset text-xs mt-24 mb-56">
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-table-cta is-revealing">
                      <a class="button button-primary button-shadow button-block" href="#">Get early access</a>
                    </div>
                  </div>
                </div>
                <div class="pricing-table">
                  <div class="pricing-table-inner">
                    <div class="pricing-table-main">
                      <div class="pricing-table-header is-revealing">
                        <div class="pricing-table-title mt-12 mb-8">Professional</div>
                        <div class="pricing-table-price mb-32 pb-24"><span class="pricing-table-price-currency h4">$</span><span class="pricing-table-price-amount h2">97</span>/mo</div>
                      </div>
                      <ul class="pricing-table-features list-reset text-xs mt-24 mb-56">
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-table-cta is-revealing">
                      <a class="button button-primary button-shadow button-block" href="#">Get early access</a>
                    </div>
                  </div>
                </div>
                <div class="pricing-table">
                  <div class="pricing-table-inner">
                    <div class="pricing-table-main">
                      <div class="pricing-table-header is-revealing">
                        <div class="pricing-table-title mt-12 mb-8">Business</div>
                        <div class="pricing-table-price mb-32 pb-24"><span class="pricing-table-price-currency h4">$</span><span class="pricing-table-price-amount h2">147</span>/mo</div>
                      </div>
                      <ul class="pricing-table-features list-reset text-xs mt-24 mb-56">
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                        <li class="is-revealing">
                                                <span class="list-icon">
                                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5FFAD0" fill-rule="nonzero" d="M5.6 8.4L1.6 6 0 7.6 5.6 14 16 3.6 14.4 2z"/>
                                                    </svg>
                                                </span>
                          <span>Lorem ipsum is common text </span>
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-table-cta is-revealing">
                      <a class="button button-primary button-shadow button-block" href="#">Get early access</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>-->


      </main>
    </transition>
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
      }
    }
  }
  metaData {
    homeData {
        headline
        subHeadline
        cta
    }
  }
}
</page-query>

<script>
/*
  const doc = document.documentElement;

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /!* global ScrollReveal *!/
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .hero-cta', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      interval: 150
    })

    sr.reveal('.hero-illustration', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
      interval: 150
    })

    sr.reveal('.feature', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      scale: 0.9,
      viewFactor: 0.5
    })

    const pricingTables = document.querySelectorAll('.pricing-table')

    pricingTables.forEach(pricingTable => {
      const pricingTableHeader = [].slice.call(pricingTable.querySelectorAll('.pricing-table-header'))
      const pricingTableList = [].slice.call(pricingTable.querySelectorAll('.pricing-table-features li'))
      const pricingTableCta = [].slice.call(pricingTable.querySelectorAll('.pricing-table-cta'))
      const elements = pricingTableHeader.concat(pricingTableList).concat(pricingTableCta)

      sr.reveal(elements, {
        duration: 600,
        distance: '20px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'bottom',
        viewFactor: 0.5
      })
    })
  }
*/

import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import Home from '~/layouts/Home.vue'
import ImageContainer from "../components/imageContainer";

export default {
  components: {
    ImageContainer,
    Pager,
    Home,
    Post
  },
  metaInfo: {
    title: 'Welcome'
  },
computed: {
    data: function() {
        return this.$page.metaData.homeData;
    },
  features: function() {
    return [
      {
        title: "Ahorra",
        description: "Ahorra hasta un 70% de la factura de la luz",
        img: "feature-save.svg"
      },
      {
        title: "Independencia",
        description: "Consigue una independencia completa de la red eléctrica",
        img: "feature-independent.svg"
      },
    ];
  }
}
}
</script>
