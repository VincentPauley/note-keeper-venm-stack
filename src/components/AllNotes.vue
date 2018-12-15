<template>
    <div>
        <h2>{{ title }}</h2>
        <single-note-display v-for="note in existing_notes" :note="note" :key="note.title"></single-note-display>
    </div>
</template>

<script>

    import axios from 'axios';

    import SingleNoteDisplay from './SingleNoteDisplay.vue';

    export default {
        data() {
            return {
                title: 'All Stored Notes',
                existing_notes: null
            };
        },
        components: { SingleNoteDisplay },
        methods: {

            get_all_notes: async function() {

                const all_notes = await axios.get( '/notes' );

                if( typeof all_notes === 'object' && all_notes.status === 200 ) {

                    this.existing_notes = all_notes.data.notes;
                } else {

                    alert( 'Notes did not come back' );
                }
            }
        },
        created() {

            this.get_all_notes();
        }
    }
</script>