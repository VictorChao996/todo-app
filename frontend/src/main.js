import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import App from "./App.vue";
import AboutView from "./view/AboutView.vue";
import HomeView from "./view/HomeView.vue";

const app = createApp(App);
const routes = [
	{ path: "/", component: HomeView },
	{ path: "/about", component: AboutView },
];
const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

app.use(router);
app.mount("#app");

export const backendApiEndpoint = "http://localhost:3000/api";
