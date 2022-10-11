import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Vue3Mq } from "vue3-mq";
import "./main.scss";
import store from "./store";

const app = createApp(App).use(store).use(Vue3Mq);
app.use(router);

app.mount("#app");
