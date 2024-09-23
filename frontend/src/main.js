//npm packages
import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-lime/theme.css";

//vue components
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
app.use(PrimeVue);
app.mount("#app");
