import { createApp } from "vue";
import { createVuetify } from "vuetify/lib/framework.mjs";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
  },
});

const app = createApp(App);
const vuetify = createVuetify({ components, directives });

app.use(store).use(router).use(vuetify).mount("#app");
