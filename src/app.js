import Vue from 'vue';
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App.vue';

import NoteInput from './components/NoteInput.vue';

// test
Vue.use( VueRouter );


import routes from './routes.js';

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'note', 
//             component: NoteInput
//         }
//     ]
// });

// 
new Vue({
    el: '#app',
    router: routes,
    render: h => h(App)
});

