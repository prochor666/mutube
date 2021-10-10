import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import dayjs from 'dayjs';
import Notifications from 'notiwind';
import App from './App.vue';
import Dashboard from './templates/Dashboard.vue';
import VideoDetail from './templates/VideoDetail.vue';
import YoutubeIframe from '@techassi/vue-youtube-iframe';
import './index.css';

const routes = [
    { path: '/', component: Dashboard, name: 'dashboard' },
    { path: '/:id', component: VideoDetail, name: 'video-detail' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const _href = window.location.href.split('/');
const appMode = _href[2].endsWith('.dev.com') || _href[2].endsWith('.test') || _href[2].endsWith('.dev.com:3000') || _href[2].endsWith('.test:3000') ? 'dev' : 'production';

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$appMode = appMode;

app.use(router);
app.use(Notifications);
app.use(YoutubeIframe);

app.mount('#app');
