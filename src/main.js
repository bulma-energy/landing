import DefaultLayout from '~/layouts/Default.vue'

// import "~/assets/scss/reset.scss";
import "~/assets/styles/scss/style.scss";
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
  
  // Add a meta tag
  /*  head.meta.push({
      name: 'keywords',
      content: 'HTML,CSS,XML,JavaScript'
    });*/
  
  Vue.component('Layout', DefaultLayout)
}

