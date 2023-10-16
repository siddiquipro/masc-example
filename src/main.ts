import { createApp } from "vue";
import masc from "masc-vue";
import "./style.css";
import App from "./App.vue";
import "masc-vue/dist/style.css";

const app = createApp(App);
app.use(masc);
app.mount("#app");
