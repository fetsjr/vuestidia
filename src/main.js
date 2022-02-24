import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-social/bootstrap-social.css"
import "./scss/style.scss";
import "./scss/components.scss"



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
     