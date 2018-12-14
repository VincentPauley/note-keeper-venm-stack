<template>
  <div class="container">
    <h1>{{ header }}</h1>
    <note-input></note-input>

    <single-note-display v-for="note in existing_notes" :note="note" :key="note.title"></single-note-display>
    <!-- <p>{{ existing_notes }}</p> -->
  </div>
</template>

<script>

    import axios from 'axios';

    import { EventBus } from './event-bus.js';

    // components
    import NoteInput from './components/NoteInput.vue';
    import SingleNoteDisplay from './components/SingleNoteDisplay.vue';

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

            },
            fetch_existing_notes: async function() {

                const all_notes = await axios.get( '/notes' );

                if( typeof all_notes === 'object' && all_notes.status === 200 ) {

                    this.existing_notes = all_notes.data.notes;
                }
            }
        },
        components: { NoteInput, SingleNoteDisplay },
        created() {

            let root = this;

            EventBus.$on( 'new-note', noteDetails => {

                root.add_new_note( noteDetails );
            });

            this.fetch_existing_notes();
        }
    }
</script>

