<template>
  <Layout>

      <main>
        <section class="hero">
          <g-image src="~/assets/images/top-image-house-solar.jpg"></g-image>
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title h2-mobile mt-0 is-revealing">{{data.headline}}</h1>
                <p class="hero-paragraph is-revealing">{{data.subHeadline}}</p>
                <p class="hero-cta is-revealing"><a class="button button-primary button-shadow" href="#">{{data.cta}}</a></p>
              </div>

            </div>
          </div>
        </section>

        <section class="features section text-center">
          <div class="section-square"></div>
          <div class="container">
            <div class="features-inner section-inner">
              <div class="features-wrap">
                <div class="feature is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-1-a">
                            <stop stop-color="#007CFE" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#007DFF" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="feature-1-b">
                            <stop stop-color="#FF4F7A" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#FF4F7A" offset="100%"/>
                          </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                          <path d="M8 0h24v24a8 8 0 0 1-8 8H0V8a8 8 0 0 1 8-8z" fill="url(#feature-1-a)"/>
                          <path d="M48 16v24a8 8 0 0 1-8 8H16c0-17.673 14.327-32 32-32z" fill="url(#feature-1-b)"/>
                        </g>
                      </svg>
                    </div>
                    <h4 class="feature-title h3-mobile">Feature</h4>
                    <p class="text-sm">A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
                  </div>
                </div>
                <div class="feature is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-2-a">
                            <stop stop-color="#007CFE" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#007DFF" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="feature-2-b">
                            <stop stop-color="#FF4F7A" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#FF4F7A" offset="100%"/>
                          </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h32v7c0 13.807-11.193 25-25 25H0V0z" fill="url(#feature-2-a)"/>
                          <path d="M48 16v7c0 13.807-11.193 25-25 25h-7c0-17.673 14.327-32 32-32z" fill="url(#feature-2-b)" transform="matrix(1 0 0 -1 0 64)"/>
                        </g>
                      </svg>

                    </div>
                    <h4 class="feature-title h3-mobile">Feature</h4>
                    <p class="text-sm">A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
                  </div>
                </div>
                <div class="feature is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-3-a">
                            <stop stop-color="#007CFE" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#007DFF" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="feature-3-b">
                            <stop stop-color="#FF4F7A" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#FF4F7A" offset="100%"/>
                          </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                          <circle fill="url(#feature-3-a)" cx="16" cy="16" r="16"/>
                          <path d="M16 16c17.673 0 32 14.327 32 32H16V16z" fill="url(#feature-3-b)"/>
                        </g>
                      </svg>

                    </div>
                    <h4 class="feature-title h3-mobile">Feature</h4>
                    <p class="text-sm">A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
                  </div>
                </div>
                <div class="feature is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="feature-4-a">
                            <stop stop-color="#FF4F7A" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#FF4F7A" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-4-b">
                            <stop stop-color="#007CFE" stop-opacity="0" offset="0%"/>
                            <stop stop-color="#007DFF" offset="100%"/>
                          </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                          <path d="M32 16h16v16c0 8.837-7.163 16-16 16H16V32c0-8.837 7.163-16 16-16z" fill="url(#feature-4-a)"/>
                          <path d="M16 0h16v16c0 8.837-7.163 16-16 16H0V16C0 7.163 7.163 0 16 0z" fill="url(#feature-4-b)"/>
                        </g>
                      </svg>

                    </div>
                    <h4 class="feature-title h3-mobile">Feature</h4>
                    <p class="text-sm">A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
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

export default {
  components: {
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
    }
}
}
</script>
