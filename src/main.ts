import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n";
import router from "./router";

import App from './App.vue';

//private libraries
import PortfolioWebapp from "./index.ts";

// styles
import "./assets/styles/main.scss";

// app init
const app = createApp(App);

app.use(createPinia());

//mount app utils - needs to be after store init and before routing
const portfolioWebapp = new PortfolioWebapp();
await portfolioWebapp.start();

app.use(router);

portfolioWebapp.afterRouterLoad(router);
app.provide("nfApp", portfolioWebapp);

app.use(i18n);
app.config.globalProperties.productionTip = false;

app.mount("#app");
