/**
 * @file entry
 * @author wangfengzhu(wangfengzhu@meituan.com)
 */

import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        ...App
    });
    return {app, router};
}
