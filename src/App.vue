<template>
  <div class="container">
    <h1>{{ header }}</h1>

    <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <router-link to="/">
                <a class="navbar-brand" href="#">NoteKeeper</a>
            </router-link>
            
            <ul class="navbar-nav">

                <router-link tag="li" to="/notes"
                    class="nav-item"
                >
                    <a class="nav-link" href="#">Notes</a>
                </router-link>

                <router-link tag="li" to="/new-note"
                    class="nav-item"
                >
                    <a class="nav-link" href="#">New Note</a>
                </router-link>
            </ul>
        </div>
    </nav>

    <router-view></router-view>   
  </div>
</template>

<script>

    import axios from 'axios';

    import { EventBus } from './event-bus.js';

    // components
    import NoteInput from './components/NoteInput.vue';

    export default {
        data() {
            return {
                header: 'Note Keeper',
                existing_notes: null
            };
        },
        methods: {
            /**
             * @function add_new_note
             * 
             * Async method that posts contents of a "Note" to the
             * server for saving.
             * 
             * @param {object} note - contains title and body of note
             */
            add_new_note: async function( note ) {
            
                    let note_result = await axios.post( '/note', { title: note.title, body: note.body });


                    if( typeof note_result === 'object' && note_result.status === 200 ) {

                        console.log( note_result.data );

                    } else {

                        alert( 'POST failed to submit note' );
                    }

            }
        },
        components: { NoteInput },
        created() {

            let root = this;

            EventBus.$on( 'new-note', noteDetails => {

                root.add_new_note( noteDetails );
            });
        }
    }
</script>

