import { createApp } from "vue";
import App from "./App.vue";
import NavigationItemBase from "./components/UI/NavigationItemBase.vue";
import IconContainer from "./components/UI/IconContainer.vue";
import VueWriter from "vue-writer";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

import "./assets/main.css";
import "./index.css";

const app = createApp(App);

app.component("NavigationItemBase", NavigationItemBase);
app.component("IconContainer", IconContainer);
app.use(VueWriter);
app.use(PerfectScrollbar);
app.mount("#app");
