import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { vfmPlugin } from "vue-final-modal";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  fas,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import Flicking from "../node_modules/@egjs/vue3-flicking/dist/flicking.esm.js";
import "@egjs/vue3-flicking/dist/flicking.css";

// import { fab } from "@fortawesome/free-brands-svg-icons";
// library.add(fab);
// import { far } from "@fortawesome/free-regular-svg-icons";
// library.add(far);
// import { dom } from "@fortawesome/fontawesome-svg-core";
// dom.watch();
library.add(fas, faCartShopping, faMagnifyingGlass, faUser, faQuestionCircle);
const app = createApp(App);
app.config.globalProperties.window = window;
app.config.globalProperties.document = document;
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);

app.component("FlickingComp", Flicking);
app.use(router);
app.use(vfmPlugin);
app.mount("#app");
