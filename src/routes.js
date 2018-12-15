import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require( './components/Home.vue' ).default
    },
    {
        path: '/new-note',
        component: require( './components/NoteInput.vue' ).default
    },
    {
        path: '/notes',
        component: require( './components/AllNotes.vue' ).default
    }
];

export default new VueRouter({routes});