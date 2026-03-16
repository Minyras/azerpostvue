// import { createReduxStore } from "@reduxjs/vue-redux";
import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./redux/store/store";
import router from "./routes";

const app = createApp(App);

// app.use(createReduxStore(store));
app.use(router);
app.mount("#app");
