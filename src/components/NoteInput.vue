<template>
    <div>
        <label>Note Title</label>
        <input type="text" class="form-control" v-model="note_title">

        <label>Note Body</label>
        <textarea class="form-control" v-model="note_body"></textarea>

        <button type="button" class="btn btn-primary" v-on:click="handle_new_note_submit">Add Note</button>
    </div>    
</template>

<script>

    import { EventBus } from '../event-bus.js';

    export default {
        data() {
            return {
                note_title: '',
                note_body: ''
            };
        },
        methods: {
            /**
             * @function handle_new_note_submit
             * 
             * Emits content of note through the event bus and clears contents of the form
             * for the next update.
             */
            handle_new_note_submit() {

                // emit note details to root through the event bus
                EventBus.$emit( 'new-note', { title: this.note_title, body: this.note_body } );
            
                // clear note contents
                this.note_title = '';
                this.note_body = '';
            }
        }
    }
</script>