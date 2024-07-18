import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import routers from "./router/index.js";
import './assets/css/main.css'
import {registerGlobalComponent} from "@/globalComponent.js";

const app = createApp(App);
registerGlobalComponent(app);
app.use(routers);
await routers.isReady();
app.use(Antd).mount('#app');
