import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "https://t-rivial-api.onrender.com";

createApp(App).use(router).use(store).use(VueAxios, axios).mount("#app");
