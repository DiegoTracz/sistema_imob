import { createApp, h } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import VueTheMask from 'vue-the-mask';
/*
TIP: To get started with clean router change path to @metronic/router/clean.ts.
 */
// import router from "./router";
import ElementPlus from "element-plus";
import i18n from "@metronic/core/plugins/i18n";

//imports for app initialization
import ApiService from "@metronic/core/services/ApiService";
import { initApexCharts } from "@metronic/core/plugins/apexcharts";
import { initInlineSvg } from "@metronic/core/plugins/inline-svg";
import { initVeeValidate } from "@metronic/core/plugins/vee-validate";
import { initKtIcon } from "@metronic/core/plugins/keenthemes";

import "@metronic/core/plugins/prismjs";
import { InertiaApp, InertiaAppProps } from "@inertiajs/vue3/types/app";
import path from "path";

const createVueApp = (app: InertiaApp, props: InertiaAppProps) => {
  const instance = createApp({ render: () => h(app, props) });
  instance.use(createPinia());
  // app.use(router);
  instance.use(ElementPlus);
  instance.use(VueTheMask);

  ApiService.init(instance);
  initApexCharts(instance);
  initInlineSvg(instance);
  initKtIcon(instance);
  initVeeValidate();

  instance.use(i18n);

  instance.directive("tooltip", (el) => {
    new Tooltip(el);
  });

  return instance;
}


export default createVueApp;
