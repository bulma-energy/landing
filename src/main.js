import DefaultLayout from '~/layouts/Default.vue'

// import "~/assets/scss/reset.scss";
import "~/assets/styles/scss/style.scss";
import "~/assets/styles/fonts.scss";
import "~/assets/styles/scss/_normalize.scss";
// import "~/assets/js/main.js";

export default function (Vue, { router, head, isClient, appOptions }) {
  
  // Add an external CSS file
  /*  head.link.push({
      rel: 'stylesheet',
      href: 'https://some-server.com/external-styleheet.css'
    });*/
  
  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: '/js/drift.js',
    body: true
  });
  head.script.push({
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    "data-ad-client": "ca-pub-9341059655674222"
  });
  
  head.script.push({
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    "data-ad-client": "ca-pub-9341059655674222"
  });
  
  head.bodyAttrs = { class: 'custom-body-class' },

// Add a meta tag
  /*  head.meta.push({
      name: 'keywords',
      content: 'HTML,CSS,XML,JavaScript'
    });*/
  
  Vue.component('Layout', DefaultLayout)
}